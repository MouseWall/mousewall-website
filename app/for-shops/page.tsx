import type { Metadata } from "next";
import Image from "next/image";
import { SectionHeading, CtaBand } from "@/components/ui";

export const metadata: Metadata = {
  title: "For Shops",
  description:
    "Mouse Wall is an easy add-on revenue item for auto service shops and dealerships — quick to apply during routine service, with a layered product line for upsell and a customer brochure included.",
  alternates: { canonical: "/for-shops" },
};

const reasons = [
  {
    title: "Add-on revenue, no friction",
    body: "Mouse Wall slots into work you already do. It is applied during routine service — especially oil changes — so there is no new bay, no new appointment, and no wasted time.",
  },
  {
    title: "Five to ten minutes on a lift",
    body: "When the vehicle is already up, application is fast. Your techs add a service, your customer leaves protected, and the ticket grows without slowing the line.",
  },
  {
    title: "A product line, not a one-off",
    body: "Four stages — interior spray, exterior wheel treatment, ozone scent elimination, and copper screening — give your advisors a natural ladder of upsell for any level of problem.",
  },
  {
    title: "An easy story to tell",
    body: "We provide an educational brochure your service advisors can hand customers. The pitch writes itself: mice want food, warmth, and romance, and a parked car offers all three.",
  },
  {
    title: "Repeat business built in",
    body: "The exterior treatment washes off over time and is renewed roughly every six months — a recurring reason for customers to come back to your shop.",
  },
  {
    title: "Human-safe and simple to stock",
    body: "Natural oils — peppermint, eucalyptus, camphor — with no special handling drama. Easy to keep on the shelf and easy to recommend.",
  },
];

export default function ForShopsPage() {
  return (
    <>
      <section className="page-head">
        <div className="container-page">
          <SectionHeading
            as="h1"
            eyebrow="For shops &amp; dealerships"
            title="An easy add-on your customers will thank you for"
            lead="Mouse Wall was built by someone who spent fifty years in the trade. It is designed to fit the way a service shop actually runs — fast to apply, easy to explain, and built for repeat business."
          />
        </div>
      </section>

      <section className="section">
        <div className="container-page">
          <div className="grid-3">
            {reasons.map((r) => (
              <article key={r.title} className="card feature-card">
                <h2 style={{ fontSize: "var(--text-lg)" }}>{r.title}</h2>
                <p>{r.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container-page mp-split">
          <figure className="figure">
            <Image
              src="/mouse-wheel-hub.jpg"
              alt="A rodent peeking out from inside a wheel hub"
              width={450}
              height={338}
              className="media-img media-compact"
              sizes="360px"
            />
          </figure>
          <div className="mp-split__copy">
            <SectionHeading title="This is your customer's problem too" />
            <p style={{ marginTop: "1rem" }}>
              Rodents find their way into vehicles parked in driveways, lots,
              and barns all season long. Offering Mouse Wall gives your service
              advisors a straightforward answer when a customer asks what they
              can do about it — and a reason to come back.
            </p>
          </div>
        </div>
      </section>

      <section className="section surface" style={{ paddingBlock: "3rem" }}>
        <div className="container-page">
          <div className="callout">
            <h2 className="callout__title">Wholesale pricing, shared privately</h2>
            <p>
              We do not publish wholesale cost or dealer margins. Request dealer
              terms through the form and we will follow up directly with
              pricing and how to get started.
            </p>
          </div>
        </div>
      </section>

      <CtaBand
        title="Carry Mouse Wall at your shop"
        body="Tell us a little about your business and we will send dealer pricing and next steps."
        primary={{
          label: "Become a Dealer",
          href: "/contact",
        }}
        secondary={{ label: "Ask a question", href: "/contact" }}
      />
    </>
  );
}
