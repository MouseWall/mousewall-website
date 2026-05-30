"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { nav, primaryCta } from "@/content/site";
import { Logo } from "./Logo";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  // Lock body scroll while the mobile menu is open (syncs an external system).
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className="site-header">
      <div className="container-page site-header__bar">
        <Logo className="site-header__logo" />

        <nav className="site-nav" aria-label="Primary">
          <ul className="site-nav__list">
            {nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="site-nav__link"
                  aria-current={isActive(item.href) ? "page" : undefined}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <Link href={primaryCta.href} className="btn btn-primary site-nav__cta">
            {primaryCta.label}
          </Link>
        </nav>

        <button
          type="button"
          className="site-header__toggle"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          <span data-open={open} className="site-header__toggle-icon" />
        </button>
      </div>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        className="mobile-menu"
        data-open={open}
        hidden={!open}
      >
        <nav className="container-page" aria-label="Mobile">
          <ul className="mobile-menu__list">
            {nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="mobile-menu__link"
                  aria-current={isActive(item.href) ? "page" : undefined}
                  onClick={close}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <Link
            href={primaryCta.href}
            className="btn btn-primary mobile-menu__cta"
            onClick={close}
          >
            {primaryCta.label}
          </Link>
        </nav>
      </div>
    </header>
  );
}
