import Link from "next/link";

/** Section heading block with optional eyebrow + lead paragraph. */
export function SectionHeading({
  eyebrow,
  title,
  lead,
  centered,
  as: As = "h2",
}: {
  eyebrow?: string;
  title: string;
  lead?: string;
  centered?: boolean;
  as?: "h1" | "h2";
}) {
  return (
    <div
      className="section-heading"
      data-centered={centered ? "true" : undefined}
    >
      {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
      <As className="section-heading__title">{title}</As>
      {lead ? <p className="section-heading__lead">{lead}</p> : null}
    </div>
  );
}

/** The founder's standing disclaimer. Kept prominent and consistent. */
export function Disclaimer() {
  return (
    <aside className="disclaimer" role="note" aria-label="How to think about Mouse Wall">
      <p className="disclaimer__title">A tool, not magic.</p>
      <p>
        Mouse Wall improves your odds in an age-old turf war between man and
        mouse. It is a deterrent — not a cure, not a guarantee, and not a
        substitute for keeping food out of the vehicle and cleaning up signs of
        rodents promptly.
      </p>
    </aside>
  );
}

/** Reusable call-to-action band. */
export function CtaBand({
  title,
  body,
  primary,
  secondary,
}: {
  title: string;
  body?: string;
  primary: { label: string; href: string };
  secondary?: { label: string; href: string };
}) {
  return (
    <section className="cta-band">
      <div className="container-page cta-band__inner">
        <div>
          <h2 className="cta-band__title">{title}</h2>
          {body ? <p className="cta-band__body">{body}</p> : null}
        </div>
        <div className="cta-band__actions">
          <Link href={primary.href} className="btn btn-primary">
            {primary.label}
          </Link>
          {secondary ? (
            <Link href={secondary.href} className="btn btn-ghost-light">
              {secondary.label}
            </Link>
          ) : null}
        </div>
      </div>
    </section>
  );
}
