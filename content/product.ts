/**
 * Product line ("the stages") and public-facing suggested retail pricing.
 *
 * IMPORTANT: Pricing here is SUGGESTED RETAIL only. Never add wholesale cost
 * or dealer margins to this file — it is rendered on public pages.
 */

export const stages = [
  {
    number: 1,
    name: "Interior protection",
    summary:
      "A spray applied to the cabin air filter and the area around it — right where mice like to nest.",
    detail:
      "Peppermint and eucalyptus oils plus proprietary natural ingredients. Human-safe and used inside the vehicle. Mice find the scent unwelcome and look for somewhere else to settle.",
    use: "Inside the vehicle",
    scents: ["Peppermint", "Eucalyptus", "Proprietary natural blend"],
  },
  {
    number: 2,
    name: "Exterior / wheels",
    summary:
      "A spray applied to the inside of the wheels at every oil change — the road mice take to climb in.",
    detail:
      "Peppermint, eucalyptus, and camphor, plus a proprietary real-predator scent. It is suspended in a water-soluble oil that clings to metal, so weather eventually washes it off. Plan to renew it roughly every six months. External use only.",
    use: "Outside the vehicle only",
    scents: ["Peppermint", "Eucalyptus", "Camphor", "Real-predator scent"],
  },
  {
    number: 3,
    name: "Ozone scent elimination",
    summary:
      "A deeper treatment that neutralizes the rodent scent already left behind.",
    detail:
      "Mice are drawn to the smell of other mice. Ozone treatment breaks that trail, and it requires an overnight stay at the shop while the treatment runs and clears. While the vehicle is on the lift, we also work a mink-essence-infused petroleum jelly into the inside lip of each wheel. The petroleum jelly makes it waterproof and long-lasting — it holds up through rain and snow for roughly six months, conveniently the same interval as a routine oil change, so it renews on the next visit.",
    use: "In-shop, overnight",
    scents: [],
  },
  {
    number: 4,
    name: "Copper screening",
    summary:
      "Physical screening of entry points such as cabin vents and the air intake.",
    detail:
      "For tough or recurring problems, we screen the openings mice use to get in. It is heavier service — roughly four hours of labor — and it closes the door behind everything the sprays discourage.",
    use: "Heavier in-shop service",
    scents: [],
  },
] as const;

/**
 * Suggested retail pricing — public. Wholesale numbers are shared privately
 * with dealers and never appear here.
 */
export const pricing = [
  {
    name: "Mouse Wall 3-pack",
    price: "$69.95",
    cadence: "over the counter",
    blurb:
      "Three bottles plus an applicator brush, so a customer can keep up protection between visits.",
    note: "Includes acid brush applicator.",
    featured: false,
  },
  {
    name: "Professional application",
    price: "$129.95",
    cadence: "installed",
    blurb:
      "Mouse Wall applied for you by the shop. Quick when the vehicle is already on a lift.",
    note: "Install time 5–10 min when already on a lift.",
    featured: true,
  },
  {
    name: "With an oil change",
    price: "$99.00",
    cadence: "add-on",
    blurb:
      "The easiest time to apply Mouse Wall — bundled into a routine oil change.",
    note: "Best value when paired with regular service.",
    featured: false,
  },
  {
    name: "Ozone scent elimination",
    price: "$149.00",
    cadence: "overnight treatment",
    blurb:
      "Neutralizes existing rodent scent so the trail does not keep drawing more mice in.",
    note: "Requires an overnight stay at the shop.",
    featured: false,
  },
  {
    name: "Vent / air-intake copper screening",
    price: "$950.00",
    cadence: "heavier service",
    blurb:
      "Physical screening of entry points for tough or recurring infestations.",
    note:
      "Roughly 4 hours of labor. Includes free Mouse Wall reapplications for as long as the original owner keeps the vehicle.",
    featured: false,
  },
] as const;
