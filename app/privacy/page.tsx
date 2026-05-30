import type { Metadata } from "next";
import { site } from "@/content/site";
import { SectionHeading } from "@/components/ui";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How Mouse Wall LLC collects and uses information submitted through this website.",
  alternates: { canonical: "/privacy" },
  robots: { index: true, follow: true },
};

export default function PrivacyPage() {
  const { contact } = site;
  return (
    <>
      <section className="page-head">
        <div className="container-page">
          <SectionHeading as="h1" eyebrow="Legal" title="Privacy Policy" />
          <p className="legal-updated">Last updated: May 29, 2026</p>
        </div>
      </section>

      <section className="section">
        <div className="container-page legal">
          <p className="legal-template-note">
            <strong>Template notice.</strong> This is a starter privacy policy
            for a small Vermont business marketing website. It is provided for
            convenience only, is not legal advice, and should be reviewed and
            customized by a qualified attorney before launch.
          </p>

          <h2>Who we are</h2>
          <p>
            {site.legalName} (&ldquo;we,&rdquo; &ldquo;us,&rdquo; or
            &ldquo;our&rdquo;) operates this website to share information about
            our products and to connect with auto service shops and drivers. Our
            mailing address is {contact.addressLine}, {contact.city},{" "}
            {contact.state} {contact.zip}.
          </p>

          <h2>Information we collect</h2>
          <p>
            We collect the information you choose to submit through our contact
            and dealer-inquiry form — typically your name, business name, email
            address, phone number, location, inquiry type, and message. We do
            not sell this information.
          </p>
          <p>
            Our hosting and infrastructure providers may automatically log basic
            technical data (such as IP address and browser type) for security
            and reliability. Embedded maps are served by Google and are subject
            to Google&apos;s own privacy practices.
          </p>

          <h2>How we use your information</h2>
          <ul>
            <li>To respond to your inquiry and provide dealer or product information.</li>
            <li>To send pricing and follow-up communications you have requested.</li>
            <li>To protect the website against spam and abuse.</li>
          </ul>

          <h2>How we share information</h2>
          <p>
            If you use the optional contact form, your submission is delivered to
            our inbox through a third-party form-forwarding service (Web3Forms),
            solely so we can receive and respond to your message. We may disclose
            information if required by law.
          </p>

          <h2>Data retention</h2>
          <p>
            We keep inquiry information for as long as needed to respond and to
            maintain ordinary business records, then delete or anonymize it.
          </p>

          <h2>Your choices</h2>
          <p>
            You may ask us to access, correct, or delete the information you have
            submitted by contacting us at{" "}
            <a href={`mailto:${contact.email}`} className="link">
              {contact.email}
            </a>
            . You can opt out of follow-up communications at any time.
          </p>

          <h2>Children&apos;s privacy</h2>
          <p>
            This site is intended for a general business audience and is not
            directed to children under 13.
          </p>

          <h2>Changes to this policy</h2>
          <p>
            We may update this policy from time to time. Material changes will be
            reflected by the &ldquo;last updated&rdquo; date above.
          </p>

          <h2>Contact</h2>
          <p>
            Questions about this policy? Email{" "}
            <a href={`mailto:${contact.email}`} className="link">
              {contact.email}
            </a>{" "}
            or call{" "}
            <a href={`tel:${contact.phoneHref}`} className="link">
              {contact.phone}
            </a>
            .
          </p>
        </div>
      </section>
    </>
  );
}
