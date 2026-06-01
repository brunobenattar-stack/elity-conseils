"use client";

import { createContext, useCallback, useContext, useEffect, useMemo, useState, type ReactNode } from "react";
import { CONTENT_STORAGE_KEY, defaultContent, mergeContent, type ContentData } from "./content";

type Ctx = {
  content: ContentData;
  setContent: (next: ContentData) => void;
  resetContent: () => void;
  hydrated: boolean;
};

const ContentContext = createContext<Ctx | null>(null);

export function ContentProvider({ children }: { children: ReactNode }) {
  const [content, setContentState] = useState<ContentData>(defaultContent);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    try {
      const raw = typeof window !== "undefined" ? window.localStorage.getItem(CONTENT_STORAGE_KEY) : null;
      if (raw) {
        const parsed = JSON.parse(raw) as Partial<ContentData>;
        setContentState(mergeContent(defaultContent, parsed));
      }
    } catch {
      /* ignore */
    }
    setHydrated(true);

    const onStorage = (e: StorageEvent) => {
      if (e.key !== CONTENT_STORAGE_KEY) return;
      try {
        const parsed = e.newValue ? (JSON.parse(e.newValue) as Partial<ContentData>) : null;
        setContentState(mergeContent(defaultContent, parsed));
      } catch {
        /* ignore */
      }
    };
    window.addEventListener("storage", onStorage);
    return () => window.removeEventListener("storage", onStorage);
  }, []);

  const setContent = useCallback((next: ContentData) => {
    setContentState(next);
    try {
      window.localStorage.setItem(CONTENT_STORAGE_KEY, JSON.stringify(next));
    } catch {
      /* ignore */
    }
  }, []);

  const resetContent = useCallback(() => {
    setContentState(defaultContent);
    try {
      window.localStorage.removeItem(CONTENT_STORAGE_KEY);
    } catch {
      /* ignore */
    }
  }, []);

  const value = useMemo<Ctx>(() => ({ content, setContent, resetContent, hydrated }), [content, setContent, resetContent, hydrated]);

  return <ContentContext.Provider value={value}>{children}</ContentContext.Provider>;
}

export function useContent(): Ctx {
  const ctx = useContext(ContentContext);
  if (!ctx) {
    return {
      content: defaultContent,
      setContent: () => {},
      resetContent: () => {},
      hydrated: false,
    };
  }
  return ctx;
}
