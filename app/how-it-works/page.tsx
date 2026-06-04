import type { Metadata } from "next";
import Link from "next/link";
import { stages } from "@/content/product";
import { SectionHeading, Disclaimer, CtaBand } from "@/components/ui";

export const metadata: Metadata = {
  title: "How It Works — The Four Stages",
  description:
    "Mouse Wall is a layered rodent deterrent applied through auto service shops during routine work. See how the four stages — interior, exterior, ozone, and copper screening — fit together.",
  alternates: { canonical: "/how-it-works" },
};

export default function HowItWorksPage() {
  return (
    <>
      <section className="page-head">
        <div className="container-page">
          <SectionHeading
            as="h1"
            eyebrow="How it works"
            title="A layered defense, built up at the shop"
            lead="Mouse Wall is applied during routine service — especially oil changes. It works by removing the things mice want and adding scents and barriers they avoid. Each stage adds another layer of protection."
          />
        </div>
      </section>

      <section className="section">
        <div className="container-page">
          <ol className="stages">
            {stages.map((stage) => (
              <li key={stage.number} className="stages__item">
                <div className="stages__marker" aria-hidden="true">
                  <span className="stages__num">{stage.number}</span>
                </div>
                <article className="card stages__card">
                  <div className="stages__head">
                    <h2 className="stages__title">
                      <span className="stages__label">Stage {stage.number}</span>
                      {stage.name}
                    </h2>
                    <span className="stages__use">{stage.use}</span>
                  </div>
                  <p className="stages__summary">{stage.summary}</p>
                  <p className="stages__detail">{stage.detail}</p>
                  {stage.scents.length > 0 ? (
                    <ul className="stages__scents" aria-label="Key scents">
                      {stage.scents.map((s) => (
                        <li key={s}>{s}</li>
                      ))}
                    </ul>
                  ) : null}
                </article>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Signs callout */}
      <section className="section surface" style={{ paddingBlock: "3rem" }}>
        <div className="container-page">
          <aside className="callout">
            <h2 className="callout__title">Signs you may already have mice</h2>
            <p>
              Acorn shells tucked under the hood, or nesting material packed into
              the cabin air filter, are a strong tell. If you see the signs,
              they are already in — and it is time to act.
            </p>
            <p>
              <Link href="/the-mouse-problem" className="link">
                Learn what to look for →
              </Link>
            </p>
          </aside>
        </div>
      </section>

      <section className="section" style={{ paddingBlock: "2.5rem" }}>
        <div className="container-page">
          <Disclaimer />
        </div>
      </section>

      <CtaBand
        title="Ready to put Mouse Wall to work?"
        body="Shops can add it to routine service in minutes. Drivers can ask their service advisor at the next oil change."
        primary={{ label: "Become a Dealer", href: "/contact" }}
        secondary={{ label: "Contact Us", href: "/contact" }}
      />
    </>
  );
}
