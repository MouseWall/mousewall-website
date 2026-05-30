import type { Metadata } from "next";
import { site } from "@/content/site";
import { SectionHeading } from "@/components/ui";

export const metadata: Metadata = {
  title: "Contact / Become a Dealer",
  description:
    "Get in touch with Mouse Wall LLC in Grafton, VT. Auto shops can ask about dealer terms; drivers can ask how to get Mouse Wall applied. Email or call us directly.",
  alternates: { canonical: "/contact" },
};

const mapQuery = encodeURIComponent(
  `${site.contact.addressLine}, ${site.contact.city}, ${site.contact.state} ${site.contact.zip}`,
);

export default function ContactPage() {
  const { contact } = site;

  return (
    <>
      <section className="page-head">
        <div className="container-page">
          <SectionHeading
            as="h1"
            eyebrow="Contact"
            title="Become a dealer, or just say hello"
            lead="The fastest way to reach us is email or phone. Shops: ask about dealer terms and wholesale pricing. Drivers: ask how to get Mouse Wall applied at your next service."
          />
        </div>
      </section>

      {/* Primary contact path — large, tappable. */}
      <section className="section" style={{ paddingBottom: "2rem" }}>
        <div className="container-page">
          <div className="contact-primary">
            <a href={`mailto:${contact.email}`} className="card contact-primary__card">
              <span className="contact-primary__label">Email us</span>
              <span className="contact-primary__value">{contact.email}</span>
              <span className="contact-primary__hint">Tap to open your mail app</span>
            </a>
            <a
              href={`tel:${contact.phoneHref}`}
              className="card contact-primary__card"
            >
              <span className="contact-primary__label">Call us</span>
              <span className="contact-primary__value">{contact.phone}</span>
              <span className="contact-primary__hint">Tap to call on mobile</span>
            </a>
            <div className="card contact-primary__card contact-primary__card--static">
              <span className="contact-primary__label">Visit / mail</span>
              <address className="contact-primary__value contact-primary__value--addr">
                {contact.addressLine}
                <br />
                {contact.city}, {contact.state} {contact.zip}
              </address>
            </div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container-page">
          <div className="contact-map card">
            <iframe
              title={`Map of ${site.legalName} in ${contact.city}, ${contact.state}`}
              src={`https://www.google.com/maps?q=${mapQuery}&output=embed`}
              width="100%"
              height="360"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              style={{ border: 0, display: "block" }}
            />
          </div>
        </div>
      </section>
    </>
  );
}
