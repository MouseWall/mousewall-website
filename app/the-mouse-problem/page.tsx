import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { site } from "@/content/site";
import { SectionHeading, Disclaimer } from "@/components/ui";

export const metadata: Metadata = {
  title: "The Mouse Problem",
  description:
    "Fifty years in the trade, plainly told: why mice get into vehicles, where they nest, why it gets expensive, and the signs to watch for. Factual, measured, no alarmism.",
  alternates: { canonical: "/the-mouse-problem" },
};

const signs = [
  "Acorn shells or seeds tucked under the hood",
  "Shredded nesting material in or around the cabin air filter",
  "Droppings or a musky odor near the headliner or under the hood",
  "Chewed insulation or wiring, or a fault that came out of nowhere",
];

export default function MouseProblemPage() {
  return (
    <>
      <section className="page-head">
        <div className="container-page">
          <SectionHeading
            as="h1"
            eyebrow="The mouse problem"
            title="Of mice and cars"
          />
        </div>
      </section>

      {/* 1. Founder essay */}
      <section className="section">
        <div className="container-page prose-measure">
          <p className="lead">
            After fifty years under the hood, you learn that a mouse wants the
            same things most of us do: a good meal, a warm place to sleep, and a
            little romance. A parked car offers all three.
          </p>
          <p style={{ marginTop: "1rem" }}>
            That is the whole problem in one sentence. Once a mouse decides your
            vehicle is home, it is hard to evict — and the scent it leaves
            behind quietly invites the next one. The honest truth is that
            prevention starts with you: keep food out of the car, vacuum the
            crumbs, and do not give them a reason to move in. Mouse Wall handles
            the rest of the turf war.
          </p>
        </div>
      </section>

      {/* 2. How they get in / where they nest */}
      <section className="section surface">
        <div className="container-page mp-split">
          <div className="mp-split__copy">
            <SectionHeading
              title="How they get in, and where they nest"
            />
            <p style={{ marginTop: "1rem" }}>
              Mice are smaller than they look. A young mouse can squeeze through
              an opening about the size of a <strong>nickel</strong>. They climb
              the tires and wheels to reach the openings up under the vehicle,
              then follow the warmth inward.
            </p>
            <p style={{ marginTop: "1rem" }}>
              Their favorite spot is the cabin air filter behind the glovebox.
              It sits right next to the heater core and blower motor — warm,
              soft, and hidden. To a mouse, it is a furnished apartment. They
              shred it for bedding and store food alongside it.
            </p>
          </div>
          <figure className="mp-figure">
            <Image
              src="/mouse-in-wheel-well.jpg"
              alt="A rodent perched on a tire inside a vehicle wheel well"
              width={640}
              height={427}
              className="mp-figure__img"
              sizes="(min-width: 768px) 480px, 100vw"
            />
            <figcaption>
              Rodents climb the tires and wheels to reach the openings up under
              the vehicle.
            </figcaption>
          </figure>
        </div>
      </section>

      {/* 2b. Before / after — the cabin filter */}
      <section className="section">
        <div className="container-page">
          <SectionHeading
            title="What we find in the cabin filter"
            lead="A cabin air filter should look clean and white. After a season of rodents, it tells a different story — shredded for bedding, fouled with droppings, and packed with stored seeds."
          />
          <div className="before-after" style={{ marginTop: "2rem" }}>
            <figure className="figure">
              <span className="ba-tag ba-tag--clean">How it should look</span>
              <Image
                src="/filter-clean.jpg"
                alt="A clean white cabin air filter being installed behind a glovebox"
                width={1316}
                height={768}
                className="media-img"
                sizes="(min-width: 700px) 540px, 100vw"
              />
            </figure>
            <figure className="figure">
              <span className="ba-tag ba-tag--dirty">What we actually find</span>
              <Image
                src="/filter-dirty.jpg"
                alt="A cabin air filter packed with nesting material, droppings, and stored seeds"
                width={1598}
                height={1600}
                className="media-img"
                sizes="(min-width: 700px) 540px, 100vw"
              />
            </figure>
          </div>
        </div>
      </section>

      {/* 3. Why it's costly and risky */}
      <section className="section">
        <div className="container-page">
          <SectionHeading
            title="Why it gets costly — and the health note"
          />
          <div className="grid-2" style={{ marginTop: "1.75rem" }}>
            <article className="card feature-card">
              <p className="feature-card__kicker">Cost</p>
              <h3>Chewed wiring</h3>
              <p>
                A lot of modern wiring uses soy-based insulation, and mice are
                happy to chew it. That leads to electrical gremlins and
                expensive computer repairs that rarely trace back to the real
                culprit until the damage is done.
              </p>
            </article>
            <article className="card feature-card">
              <p className="feature-card__kicker">Health</p>
              <h3>Droppings and urine</h3>
              <p>
                Rodent droppings and urine can carry hantavirus. We say that
                plainly and leave the medical guidance to the experts — the{" "}
                <a
                  href={site.external.cdcHantavirus}
                  className="link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  CDC hantavirus page
                </a>{" "}
                explains how to clean up safely. Mouse Wall does not prevent or
                treat any disease; it simply helps keep mice from settling in.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* 4. Signs to watch for */}
      <section className="section surface">
        <div className="container-page">
          <SectionHeading title="Signs to watch for" />
          <ul className="signs" style={{ marginTop: "1.5rem" }}>
            {signs.map((s) => (
              <li key={s} className="card signs__item">
                {s}
              </li>
            ))}
          </ul>
          <p className="signs__punch">
            If you see the signs, they are in — time to act.
          </p>
          <figure className="figure" style={{ marginTop: "2rem" }}>
            <Image
              src="/mouse-on-windshield.jpg"
              alt="A rodent on a vehicle's wiper cowl beside the windshield, near the cabin air intake"
              width={1024}
              height={768}
              className="media-img"
              sizes="(min-width: 768px) 720px, 100vw"
            />
            <figcaption>
              Rodents turn up right at the wiper cowl and air intake — a common
              way into the cabin filter.
            </figcaption>
          </figure>
        </div>
      </section>

      {/* 5. How fast it escalates */}
      <section className="section">
        <div className="container-page mp-stat">
          <div>
            <SectionHeading title="How fast it escalates" />
            <p style={{ marginTop: "1rem" }} className="prose-measure">
              Mice do not wait around. They breed quickly, and the numbers add
              up fast — a single pair can produce up to{" "}
              <strong>80 young in a year</strong> once you count the
              offspring&apos;s offspring. A small problem in the fall becomes a
              real one by spring.
            </p>
          </div>
          <div className="mp-stat__figure" aria-hidden="true">
            <span className="mp-stat__num">80</span>
            <span className="mp-stat__caption">young per year, per pair</span>
          </div>
        </div>
        <div className="container-page">
          <figure className="figure" style={{ marginTop: "2rem" }}>
            <Image
              src="/Mice_Running_From_Car.jpg"
              alt="Several rodents scurrying across pavement away from a parked car"
              width={959}
              height={559}
              className="media-img"
              sizes="(min-width: 768px) 720px, 100vw"
            />
            <figcaption>
              One pair becomes many fast — by the time rodents are out in the
              open like this, a vehicle has usually been home for a while.
            </figcaption>
          </figure>
        </div>
      </section>

      {/* 6. Closing disclaimer */}
      <section className="section" style={{ paddingBlock: "2.5rem" }}>
        <div className="container-page">
          <Disclaimer />
          <p style={{ marginTop: "1.5rem" }}>
            <Link href="/how-it-works" className="link">
              See how Mouse Wall works →
            </Link>{" "}
            or{" "}
            <Link href="/contact" className="link">
              get in touch
            </Link>
            .
          </p>
        </div>
      </section>
    </>
  );
}
