import Link from "next/link";
import Image from "next/image";
import { nav, site } from "@/content/site";

const legalLinks = [
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms", href: "/terms" },
];

export function Footer() {
  const { contact } = site;
  return (
    <footer className="site-footer">
      <div className="container-page site-footer__grid">
        <div className="site-footer__brand">
          <Link href="/" className="site-footer__brand-lockup" aria-label={`${site.name} — home`}>
            <Image
              src="/icon.png"
              alt=""
              width={1024}
              height={1024}
              className="site-footer__mark"
            />
            <span className="site-footer__wordmark">Mouse Wall</span>
          </Link>
          <p className="site-footer__tagline">{site.tagline}</p>
          <p className="site-footer__note">{site.founded}</p>
        </div>

        <nav aria-label="Footer" className="site-footer__nav">
          <h2 className="site-footer__heading">Explore</h2>
          <ul>
            {nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="site-footer__contact">
          <h2 className="site-footer__heading">Contact</h2>
          <address>
            {site.legalName}
            <br />
            {contact.addressLine}
            <br />
            {contact.city}, {contact.state} {contact.zip}
            <br />
            <a href={`tel:${contact.phoneHref}`}>{contact.phone}</a>
            <br />
            <a href={`mailto:${contact.email}`}>{contact.email}</a>
          </address>
        </div>
      </div>

      <div className="site-footer__bar">
        <div className="container-page site-footer__bar-inner">
          <p>
            © {new Date().getFullYear()} {site.legalName}. All rights reserved.
          </p>
          <ul className="site-footer__legal">
            {legalLinks.map((l) => (
              <li key={l.href}>
                <Link href={l.href}>{l.label}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
