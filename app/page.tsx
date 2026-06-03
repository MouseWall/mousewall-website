import Image from "next/image";
import Link from "next/link";
import { site } from "@/content/site";
import { stages } from "@/content/product";
import { SectionHeading, Disclaimer } from "@/components/ui";

const wants = [
  {
    title: "Food",
    body: "Crumbs, pet kibble, and a forgotten snack are an open invitation. Mice will move in to be near them.",
  },
  {
    title: "Warmth & shelter",
    body: "A parked engine bay and a soft cabin filter are warm, dry, and hidden — exactly what a mouse wants for winter.",
  },
  {
    title: "Romance",
    body: "Where there is food and shelter, mice settle in to breed. Their scent then draws still more mice to the same vehicle.",
  },
];

export default function HomePage() {
  return (
    <>
      {/* 1. HERO */}
      <section className="hero">
        <div className="container-page hero__inner">
          <div className="hero__copy">
            <p className="hero__eyebrow">Backed by 50+ years in the trade</p>
            <h1 className="hero__title">
              Stop costly rodent damage before it starts.
            </h1>
            <p className="hero__sub">
              Mouse Wall is an organic, human-safe deterrent applied through
              auto service shops during routine work — so a mouse looks for
              somewhere else to nest, chew, and breed.
            </p>
            <div className="hero__actions">
              <Link href="/contact" className="btn btn-primary">
                Become a Dealer
              </Link>
              <Link href="/how-it-works" className="btn btn-ghost-light">
                How It Works
              </Link>
            </div>
            <p className="hero__footnote">
              A tool, not magic — it improves your odds.
            </p>
          </div>

          <div className="hero__media">
            <Image
              src="/hero.jpg"
              alt="A rodent peering over a vehicle tire"
              width={1024}
              height={768}
              priority
              className="hero__image"
              sizes="(min-width: 960px) 540px, 100vw"
            />
          </div>
        </div>
      </section>

      {/* 2. THE PROBLEM (brief) */}
      <section className="section">
        <div className="container-page">
          <SectionHeading
            eyebrow="The mouse problem"
            title="Mice want three things"
            lead="Understand what draws them in and the rest of the picture falls into place."
          />
          <div className="grid-3" style={{ marginTop: "2rem" }}>
            {wants.map((w) => (
              <article key={w.title} className="card feature-card">
                <h3>{w.title}</h3>
                <p>{w.body}</p>
              </article>
            ))}
          </div>
          <p style={{ marginTop: "1.5rem" }}>
            <Link href="/the-mouse-problem" className="link">
              Read more about the mouse problem →
            </Link>
          </p>
        </div>
      </section>

      {/* 3. WHY IT MATTERS */}
      <section className="section surface">
        <div className="container-page why">
          <SectionHeading
            eyebrow="Why it matters"
            title="A small visitor, an expensive guest"
          />
          <figure className="figure why__figure">
            <Image
              src="/rat-on-mirror.jpg"
              alt="A rodent clinging to a car's side mirror while someone sits in the driver's seat"
              width={1280}
              height={720}
              className="media-img"
              sizes="(min-width: 768px) 960px, 100vw"
            />
            <figcaption>
              Rodents will climb anywhere to reach a warm, sheltering vehicle.
            </figcaption>
          </figure>
          <div className="why__grid">
            <article className="card feature-card">
              <p className="feature-card__kicker">Nesting</p>
              <h3>The cabin air filter</h3>
              <p>
                Behind the glovebox, beside the warm blower motor, the cabin
                filter is a ready-made nest. Mice shred it, store food in it,
                and foul it.
              </p>
            </article>
            <article className="card feature-card">
              <p className="feature-card__kicker">Damage</p>
              <h3>Chewed wiring</h3>
              <p>
                Modern wiring often uses soy-based insulation that mice are glad
                to gnaw. Chewed harnesses cause electrical faults and costly
                computer repairs.
              </p>
            </article>
            <article className="card feature-card">
              <p className="feature-card__kicker">Health</p>
              <h3>Droppings & urine</h3>
              <p>
                Rodent droppings and urine can carry hantavirus. We keep this
                factual — see the{" "}
                <a
                  href={site.external.cdcHantavirus}
                  className="link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  CDC hantavirus page
                </a>{" "}
                for guidance on safe cleanup.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* 4. THE SOLUTION */}
      <section className="section">
        <div className="container-page">
          <SectionHeading
            eyebrow="The solution"
            title="A layered defense, applied during routine service"
            lead="Mouse Wall removes what mice want and adds scents and barriers they avoid. It is applied in minutes at the shop — most often during an oil change — and builds up across four stages."
          />
          <ol className="stage-teaser" style={{ marginTop: "2rem" }}>
            {stages.map((s) => (
              <li key={s.number} className="card stage-teaser__item">
                <span className="stage-teaser__num">{s.number}</span>
                <div>
                  <h3>{s.name}</h3>
                  <p>{s.summary}</p>
                </div>
              </li>
            ))}
          </ol>
          <p style={{ marginTop: "1.5rem" }}>
            <Link href="/how-it-works" className="link">
              See how each stage works →
            </Link>
          </p>
        </div>
      </section>

      {/* 5. CREDIBILITY */}
      <section className="section surface">
        <div className="container-page credibility">
          <div className="credibility__lead">
            <p className="eyebrow">Why trust Mouse Wall</p>
            <h2>Fifty years under the hood, in one bottle.</h2>
            <p className="lead">
              Mouse Wall comes out of real shop experience, not a lab brochure.
              It is built to be applied fast, by the people drivers already
              trust with their vehicles.
            </p>
          </div>
          <ul className="credibility__points">
            <li className="card feature-card">
              <h3>50+ years in the trade</h3>
              <p>Founded on decades of hands-on auto service experience.</p>
            </li>
            <li className="card feature-card">
              <h3>Human-safe, natural oils</h3>
              <p>Peppermint, eucalyptus, and camphor — scents mice avoid.</p>
            </li>
            <li className="card feature-card">
              <h3>Applied in minutes</h3>
              <p>5–10 minutes at the shop when the vehicle is on a lift.</p>
            </li>
          </ul>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="section" style={{ paddingBlock: "2.5rem" }}>
        <div className="container-page">
          <Disclaimer />
        </div>
      </section>

      {/* 6. DUAL CTA */}
      <section className="dual-cta">
        <div className="container-page grid-2">
          <article className="dual-cta__panel dual-cta__panel--shops">
            <p className="eyebrow" style={{ color: "#bcd0f0" }}>
              For shops
            </p>
            <h2>Carry Mouse Wall</h2>
            <p>
              Add an easy, quick-to-apply service your customers will thank you
              for — and a product line you can grow into. Wholesale pricing is
              shared privately.
            </p>
            <Link href="/contact" className="btn btn-primary">
              Become a Dealer
            </Link>
          </article>
          <article className="dual-cta__panel dual-cta__panel--drivers">
            <p className="eyebrow">For drivers</p>
            <h2>Ask your service advisor</h2>
            <p>
              Want Mouse Wall on your vehicle? Ask your shop to apply it at your
              next oil change, or reach out and we will point you to a dealer.
            </p>
            <Link href="/contact" className="btn btn-secondary">
              Contact Us
            </Link>
          </article>
        </div>
      </section>
    </>
  );
}
