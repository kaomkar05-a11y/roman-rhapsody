import { createFileRoute, Link } from "@tanstack/react-router";
import heroImg from "@/assets/hero.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About · Caffè Delle Commari" },
      { name: "description", content: "A few steps from the Vatican walls in Rome's Prati neighbourhood. Open every day for breakfast, lunch and dinner." },
      { property: "og:title", content: "About · Caffè Delle Commari" },
      { property: "og:description", content: "Roman café in Prati, near the Vatican." },
    ],
  }),
  component: AboutPage,
});

const amenities = [
  "Wheelchair-accessible entrance, seating & toilet",
  "Outdoor seating",
  "Free Wi-Fi",
  "Bar on site",
  "Accepts reservations",
  "Dogs allowed",
  "LGBTQ+ friendly · Family friendly · Transgender safe space",
  "Credit card, debit card, NFC mobile payments",
  "Happy hour drinks & food",
];

function AboutPage() {
  return (
    <>
      <section className="relative overflow-hidden">
        <img src={heroImg} alt="" loading="lazy" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-charcoal/70" />
        <div className="relative mx-auto max-w-5xl px-5 py-24 text-center text-cream lg:px-8">
          <span className="inline-flex items-center gap-2 rounded-full border border-gold/40 px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-gold">
            Near the Vatican
          </span>
          <h1 className="mt-6 font-display text-5xl font-bold md:text-6xl">Our story</h1>
          <p className="mt-5 text-cream/85 text-lg max-w-2xl mx-auto">
            A few steps from the Vatican walls in Rome's Prati neighbourhood — a warm Roman welcome from morning to midnight.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-5 py-20 lg:px-8">
        <div className="prose prose-lg max-w-none">
          <p className="text-lg leading-relaxed text-foreground/85">
            Caffè Delle Commari opens its doors every day for breakfast, lunch and dinner. Our morning table is rich
            and generous — Italian, American and vegetarian options, fresh pastries, and a perfectly pulled espresso
            (or our beloved pistachio cappuccino).
          </p>
          <p className="mt-5 text-lg leading-relaxed text-foreground/85">
            Throughout the day our hot table offers freshly prepared dishes — from truffle carbonara to focaccia,
            arancini, supplì and pizzas baked just the way Romans love them. An indoor room is available for groups,
            and our terrace is always a sunny invitation.
          </p>
          <p className="mt-5 text-lg leading-relaxed text-foreground/85">
            But what guests come back for, again and again, is the courtesy of our staff and the friendly atmosphere
            that turns first-time visitors into family.
          </p>
        </div>

        <div className="mt-16 grid gap-10 md:grid-cols-2">
          <div>
            <h2 className="font-display text-3xl font-bold">Specialities</h2>
            <ul className="mt-5 space-y-3 text-foreground/80">
              {["Pistachio Cappuccino", "Truffle Carbonara", "Tiramisù", "Cannoli with caramel", "Roman-style Pizza"].map((s) => (
                <li key={s} className="flex items-center gap-3">
                  <span className="h-1.5 w-1.5 rounded-full bg-gold" /> {s}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="font-display text-3xl font-bold">Amenities</h2>
            <ul className="mt-5 space-y-3 text-foreground/80">
              {amenities.map((a) => (
                <li key={a} className="flex gap-3">
                  <span className="text-gold">✓</span>
                  <span>{a}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16 rounded-2xl bg-secondary/60 p-8 text-center">
          <p className="font-display text-xl">
            Guests often enjoy a complimentary <span className="text-primary">bruschetta or dessert</span> — a small
            Roman thank you from our team.
          </p>
          <Link to="/reserve" className="mt-6 inline-flex rounded-full bg-primary px-7 py-3 text-sm font-semibold text-primary-foreground">
            Reserve a Table
          </Link>
        </div>
      </section>
    </>
  );
}
