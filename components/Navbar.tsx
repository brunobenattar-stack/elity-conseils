"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState, useRef, Fragment } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Logo from "./Logo";

type NavLink = {
  href: string;
  label: string;
  submenu?: { href: string; label: string }[];
};

const DESKTOP_LINKS: NavLink[] = [
  { href: "/", label: "Accueil" },
  { href: "/approche", label: "Approche" },
  { href: "/offres", label: "Offres" },
  { href: "/methode-essor", label: "Méthode ESSOR" },
  {
    href: "/cas-clients",
    label: "Cas clients",
    submenu: [
      { href: "/cas-clients", label: "Cas clients" },
      { href: "/cas-clients#actualites", label: "Actualités" },
    ],
  },
  { href: "/faq", label: "FAQ" },
  { href: "/a-propos", label: "À Propos" },
  { href: "/contact", label: "Contact" },
];

const MOBILE_LINKS: NavLink[] = [
  { href: "/", label: "Accueil" },
  { href: "/approche", label: "Approche" },
  { href: "/offres", label: "Offres" },
  { href: "/methode-essor", label: "Méthode ESSOR" },
  { href: "/cas-clients", label: "Cas clients" },
  { href: "/cas-clients#actualites", label: "Actualités" },
  { href: "/faq", label: "FAQ" },
  { href: "/a-propos", label: "À Propos" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    let rafId = 0;
    const onScroll = () => {
      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(() => {
        setScrolled(window.scrollY > 80);
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(rafId);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!open) return;
    const handleClick = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [open]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  // Sous-menu desktop : reste ouvert 1 s après que la souris quitte la zone,
  // pour qu'on ait le temps de descendre dessus sans qu'il se ferme.
  const [hoveredMenu, setHoveredMenu] = useState<string | null>(null);
  const submenuTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const openSubmenu = (href: string) => {
    if (submenuTimer.current) clearTimeout(submenuTimer.current);
    setHoveredMenu(href);
  };
  const scheduleCloseSubmenu = () => {
    if (submenuTimer.current) clearTimeout(submenuTimer.current);
    submenuTimer.current = setTimeout(() => setHoveredMenu(null), 1000);
  };
  useEffect(() => {
    return () => {
      if (submenuTimer.current) clearTimeout(submenuTimer.current);
    };
  }, []);

  return (
    <nav ref={navRef} className={`navbar ${scrolled ? "scrolled" : ""} ${open ? "menu-open" : ""}`}>
      <div className="container nav-inner">
        <Logo />

        {/* Desktop nav links — ligne unique */}
        <ul className="nav-links">
          {DESKTOP_LINKS.map((l) => (
            <li
              key={l.href}
              className={
                l.submenu
                  ? `nav-has-submenu${hoveredMenu === l.href ? " submenu-open" : ""}`
                  : undefined
              }
              onMouseEnter={l.submenu ? () => openSubmenu(l.href) : undefined}
              onMouseLeave={l.submenu ? scheduleCloseSubmenu : undefined}
            >
              <Link href={l.href} className={isActive(l.href) ? "active" : ""}>
                {l.label}
                {l.submenu && (
                  <span className="nav-submenu-arrow" aria-hidden="true">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                      <path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                )}
              </Link>
              {l.submenu && (
                <ul className="nav-submenu">
                  {l.submenu.map((s) => (
                    <li key={s.href}>
                      <Link href={s.href}>{s.label}</Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <Link href="/contact" scroll={true} className="nav-cta">
          Entamer un échange
        </Link>

        {/* Mobile right actions : burger uniquement (CTA flottant en bas d'écran) */}
        <div className="mobile-nav-actions">
          <button
            className={`burger mobile-burger ${open ? "open" : ""}`}
            aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <span /><span /><span />
          </button>
        </div>
      </div>

      {/* Mobile dropdown — s'agrandit depuis la navbar */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="mobile-nav-dropdown"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <div className="mobile-nav-dropdown-inner">
              {MOBILE_LINKS.map((l, i) => (
                <motion.div
                  key={l.href}
                  initial={{ opacity: 0, x: -6 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.22, delay: 0.06 + i * 0.035 }}
                >
                  <Link
                    href={l.href}
                    className={`mobile-nav-link ${isActive(l.href) ? "active" : ""}`}
                    onClick={() => setOpen(false)}
                  >
                    <span className="mobile-nav-link-label">{l.label}</span>
                    <span className="mobile-nav-link-arrow" aria-hidden="true">→</span>
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
