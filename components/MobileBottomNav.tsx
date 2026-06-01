"use client";

import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState, type ReactNode } from "react";

type Item = {
  href: string;
  label: string;
  icon: ReactNode;
  contact?: boolean;
};

const NAV_ITEMS: Item[] = [
  {
    href: "/",
    label: "Accueil",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M3 11l9-8 9 8M5 10v10h14V10" />
      </svg>
    ),
  },
  {
    href: "/approche",
    label: "Approche",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <circle cx="12" cy="12" r="9" />
        <polygon points="12,7 14,12 12,17 10,12" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    href: "/offres",
    label: "Offres",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <rect x="3" y="6" width="18" height="13" rx="2" />
        <path d="M3 10h18M8 6V4M16 6V4" />
      </svg>
    ),
  },
  {
    href: "/contact",
    label: "Contact",
    contact: true,
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
      </svg>
    ),
  },
];

const DRAWER_ITEMS = [
  { href: "/", label: "Accueil" },
  { href: "/approche", label: "Approche" },
  { href: "/offres", label: "Offres" },
  { href: "/cas-clients", label: "Cas clients" },
  { href: "/faq", label: "FAQ" },
  { href: "/a-propos", label: "À Propos" },
  { href: "/contact", label: "Contact" },
  { href: "/offres#pilotage", label: "Pilotage mensuel" },
  { href: "/methode-essor", label: "Méthode ESSOR" },
  { href: "/nos-partenaires", label: "Nos Partenaires" },
];

export default function MobileBottomNav() {
  const pathname = usePathname();
  const [drawerOpen, setDrawerOpen] = useState(false);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  useEffect(() => {
    setDrawerOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = drawerOpen ? "hidden" : "";
  }, [drawerOpen]);

  return (
    <>
      <nav className="mobile-bottom-nav" aria-label="Navigation mobile">
        <div className="mobile-bottom-nav-inner">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`mobile-nav-item ${item.contact ? "contact" : ""} ${isActive(item.href) ? "active" : ""}`}
              aria-label={item.label}
            >
              {item.icon}
              <span>{item.label}</span>
            </Link>
          ))}

          <button
            type="button"
            className={`mobile-nav-item mobile-nav-burger ${drawerOpen ? "open" : ""}`}
            onClick={() => setDrawerOpen((v) => !v)}
            aria-label={drawerOpen ? "Fermer le menu" : "Ouvrir le menu"}
            aria-expanded={drawerOpen}
          >
            <span className="mobile-nav-burger-icon" aria-hidden="true">
              <span />
              <span />
              <span />
            </span>
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {drawerOpen && (
          <>
            <motion.div
              className="mobile-drawer-backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => setDrawerOpen(false)}
              aria-hidden="true"
            />
            <motion.div
              className="mobile-drawer"
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
              transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
              role="dialog"
              aria-modal="true"
              aria-label="Menu complet"
            >
              <div className="mobile-drawer-handle" aria-hidden="true" />
              <div className="mobile-drawer-header">
                <span className="mobile-drawer-eyebrow">Menu</span>
                <button
                  type="button"
                  className="mobile-drawer-close"
                  onClick={() => setDrawerOpen(false)}
                  aria-label="Fermer"
                >
                  <svg viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M6 6l12 12M6 18L18 6" />
                  </svg>
                </button>
              </div>

              <ul className="mobile-drawer-list">
                {DRAWER_ITEMS.map((item, i) => (
                  <motion.li
                    key={item.href + i}
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 + i * 0.05 }}
                  >
                    <Link href={item.href} className="mobile-drawer-link">
                      <span className="mobile-drawer-link-title">{item.label}</span>
                      <span className="mobile-drawer-link-arrow" aria-hidden="true">→</span>
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
