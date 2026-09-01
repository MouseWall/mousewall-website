import type { Metadata } from "next";
import Link from "next/link";
import { pricing, shopProducts } from "@/content/product";
import { SectionHeading } from "@/components/ui";
import ShopifyBuyButton from "@/components/ShopifyBuyButton";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Suggested retail pricing for Mouse Wall — from the over-the-counter 3-pack to professional application, ozone treatment, and copper screening. Or buy Mouse Wall online, shipped to your door.",
  alternates: { canonical: "/pricing" },
};

export default function PricingPage() {
  return (
    <>
      <section className="page-head">
        <div className="container-page">
          <SectionHeading
            as="h1"
            eyebrow="Pricing"
            title="Suggested retail pricing"
            lead="Clear, honest pricing for drivers. Final prices are set by each shop and may vary by location and vehicle."
          />
        </div>
      </section>

      <section className="section">
        <div className="container-page">
          <div className="pricing-grid">
            {pricing.map((item) => (
              <article
                key={item.name}
                className="card pricing-card"
                data-featured={item.featured ? "true" : undefined}
              >
                {item.featured ? (
                  <span className="pricing-card__badge">Most popular</span>
                ) : null}
                <h2 className="pricing-card__name">{item.name}</h2>
                <p className="pricing-card__price">
                  <span className="pricing-card__amount">{item.price}</span>
                  <span className="pricing-card__cadence">{item.cadence}</span>
                </p>
                <p className="pricing-card__blurb">{item.blurb}</p>
                <p className="pricing-card__note">{item.note}</p>
              </article>
            ))}
          </div>

          <p className="pricing-disclaimer">
            Prices shown are <strong>suggested retail</strong> and may vary by
            shop. Drivers: ask your service advisor to apply Mouse Wall at your
            next visit — most shops can add it during a routine oil change.
          </p>
        </div>
      </section>

      {/* Buy online — direct sales via Shopify */}
      <section className="section surface" id="buy">
        <div className="container-page">
          <SectionHeading
            eyebrow="Buy online"
            title="Order direct from Mouse Wall"
            lead="Over-the-counter products shipped to your door. Checkout is handled securely by Shopify."
          />
          <div className="pricing-grid">
            {shopProducts.map((item) => (
              <article key={item.name} className="card pricing-card">
                <h2 className="pricing-card__name">{item.name}</h2>
                <p className="pricing-card__price">
                  <span className="pricing-card__amount">{item.price}</span>
                  <span className="pricing-card__cadence">shipped</span>
                </p>
                <p className="pricing-card__blurb">{item.blurb}</p>
                <p className="pricing-card__note">{item.note}</p>
                <div className="pricing-card__buy">
                  <ShopifyBuyButton productId={item.shopifyId} />
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Shop CTA — wholesale handled privately */}
      <section className="section surface" style={{ paddingBlock: "3rem" }}>
        <div className="container-page pricing-shop">
          <div>
            <p className="eyebrow">For shops &amp; dealerships</p>
            <h2 className="pricing-shop__title">
              Wholesale pricing is shared privately
            </h2>
            <p className="pricing-shop__body">
              We do not publish wholesale cost or margins. Interested shops
              contact us directly and we will share dealer terms.
            </p>
          </div>
          <Link href="/contact" className="btn btn-primary pricing-shop__cta">
            Become a Dealer — get in touch
          </Link>
        </div>
      </section>
    </>
  );
}
