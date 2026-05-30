import type { Metadata } from "next";
import { site } from "@/content/site";
import { SectionHeading } from "@/components/ui";

export const metadata: Metadata = {
  title: "Terms of Use",
  description: "The terms that govern use of the Mouse Wall LLC website.",
  alternates: { canonical: "/terms" },
  robots: { index: true, follow: true },
};

export default function TermsPage() {
  const { contact } = site;
  return (
    <>
      <section className="page-head">
        <div className="container-page">
          <SectionHeading as="h1" eyebrow="Legal" title="Terms of Use" />
          <p className="legal-updated">Last updated: May 29, 2026</p>
        </div>
      </section>

      <section className="section">
        <div className="container-page legal">
          <p className="legal-template-note">
            <strong>Template notice.</strong> These are starter terms for a
            small Vermont business marketing website. They are provided for
            convenience only, are not legal advice, and should be reviewed and
            customized by a qualified attorney before launch.
          </p>

          <h2>Acceptance of terms</h2>
          <p>
            By accessing or using this website, you agree to these Terms of Use.
            If you do not agree, please do not use the site.
          </p>

          <h2>About our products</h2>
          <p>
            Mouse Wall is a rodent <strong>deterrent</strong>. It is designed to
            make a vehicle less attractive to mice. It is not a guarantee
            against rodent activity and does not prevent, treat, or cure any
            disease. Information on this site is provided for general purposes
            and is not a substitute for professional advice.
          </p>

          <h2>Pricing</h2>
          <p>
            Any prices shown are suggested retail figures and may vary by shop
            and location. Wholesale and dealer terms are provided privately and
            are not published on this site.
          </p>

          <h2>Use of the site</h2>
          <p>
            You agree not to misuse the site, including by attempting to disrupt
            it, submitting fraudulent inquiries, or using automated means to
            access it without permission.
          </p>

          <h2>Intellectual property</h2>
          <p>
            The Mouse Wall name, logo, and site content are the property of{" "}
            {site.legalName} and may not be used without permission.
          </p>

          <h2>Third-party links</h2>
          <p>
            The site may link to third-party resources (such as the CDC or
            Google Maps). We are not responsible for the content or practices of
            those sites.
          </p>

          <h2>Disclaimer of warranties</h2>
          <p>
            The site is provided &ldquo;as is&rdquo; without warranties of any
            kind, to the fullest extent permitted by law.
          </p>

          <h2>Limitation of liability</h2>
          <p>
            To the fullest extent permitted by law, {site.legalName} is not
            liable for any indirect or consequential damages arising from use of
            the site.
          </p>

          <h2>Governing law</h2>
          <p>
            These terms are governed by the laws of the State of Vermont,
            without regard to its conflict-of-laws rules.
          </p>

          <h2>Contact</h2>
          <p>
            Questions about these terms? Email{" "}
            <a href={`mailto:${contact.email}`} className="link">
              {contact.email}
            </a>
            .
          </p>
        </div>
      </section>
    </>
  );
}
