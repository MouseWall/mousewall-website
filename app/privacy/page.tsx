import type { Metadata } from "next";
import { site } from "@/content/site";
import { SectionHeading } from "@/components/ui";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Mouse Wall LLC's privacy policy. This marketing site has no contact form and collects no personal information submitted through it.",
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
            This website does not collect personal information through any form
            — there is no contact or inquiry form, and we do not run an
            email-sending service. The only way to reach us through this site is
            to use the email and phone links on the Contact page, which open your
            own mail or phone app. If you choose to email or call us, we will
            have whatever information you decide to share in that message or
            call.
          </p>
          <p>
            Our hosting and infrastructure providers may automatically log basic
            technical data (such as IP address and browser type) for security
            and reliability. Embedded maps are served by Google and are subject
            to Google&apos;s own privacy practices.
          </p>

          <h2>How we use your information</h2>
          <ul>
            <li>To respond to you if you email or call us directly.</li>
            <li>To provide dealer or product information you ask for.</li>
            <li>To operate, secure, and maintain the website.</li>
          </ul>

          <h2>How we share information</h2>
          <p>
            We do not sell your information. We rely on service providers to host
            the website and embed the map (Google), but we do not transmit any
            contact-form data to third parties, because the site collects none.
            We may disclose information if required by law.
          </p>

          <h2>Data retention</h2>
          <p>
            If you email or call us, we keep that correspondence for as long as
            needed to respond and to maintain ordinary business records.
          </p>

          <h2>Your choices</h2>
          <p>
            You may ask us to delete correspondence you have sent us by
            contacting us at{" "}
            <a href={`mailto:${contact.email}`} className="link">
              {contact.email}
            </a>
            .
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
