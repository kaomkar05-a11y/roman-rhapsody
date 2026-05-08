import { createFileRoute } from "@tanstack/react-router";
import pistachioImg from "@/assets/pistachio.jpg";
import { Reveal } from "@/components/Reveal";

export const Route = createFileRoute("/menu")({
  head: () => ({
    meta: [
      { title: "Menu · Caffè Delle Commari" },
      { name: "description", content: "Coffee, breakfast, pastries, pasta, pizza, cocktails — the full Caffè Delle Commari menu." },
      { property: "og:title", content: "Menu · Caffè Delle Commari" },
      { property: "og:description", content: "Authentic Roman menu near the Vatican." },
    ],
  }),
  component: MenuPage,
});

type Item = { name: string; popular?: boolean; note?: string };
type Section = { title: string; italian?: string; items: Item[] };

const sections: Section[] = [
  {
    title: "Coffee", italian: "Caffetteria",
    items: [
      { name: "Espresso" },
      { name: "Cappuccino" },
      { name: "Pistachio Cappuccino", popular: true },
      { name: "Pistachio Espresso" },
      { name: "Ginseng Latte" },
      { name: "Americano" },
    ],
  },
  {
    title: "Breakfast", italian: "Colazione",
    items: [
      { name: "Croissant + Fresh Orange Juice", popular: true },
      { name: "Cornetto Fragola", popular: true },
      { name: "Full English Breakfast" },
      { name: "Vegetarian Breakfast" },
      { name: "Commari Breakfast", note: "Scrambled eggs, bacon, bread with jam & butter, croissant, juice, hot drink" },
    ],
  },
  {
    title: "Pastries", italian: "Pasticceria",
    items: [
      { name: "Cannolo Siciliano" },
      { name: "Cannoli with caramel drizzle" },
      { name: "Cream Bun" },
      { name: "Tiramisù", popular: true },
      { name: "Lemon Ice Cream" },
    ],
  },
  {
    title: "Pizza & Fritti",
    items: [
      { name: "Pizza", note: "White sauce with mushrooms & sausage is a guest favourite" },
      { name: "Chicken Wings", popular: true },
      { name: "Croquettes" },
      { name: "Fries · Patatine Fritte" },
      { name: "Arancini" },
      { name: "Supplì" },
    ],
  },
  {
    title: "Pasta & Mains",
    items: [
      { name: "Truffle Carbonara", popular: true },
      { name: "Four Cheese Spaghetti" },
      { name: "Bucatini" },
      { name: "Lasagna" },
      { name: "Tonno e Pomodoro", popular: true },
    ],
  },
  {
    title: "Focaccione & Salads",
    items: [
      { name: "Focaccia with toppings" },
      { name: "Chicken Salad" },
    ],
  },
  {
    title: "Smoothies & Milkshakes",
    items: [{ name: "Fresh juices, smoothies & milkshakes" }],
  },
  {
    title: "Desserts",
    items: [
      { name: "Tiramisù" },
      { name: "Cannolo Siciliano" },
      { name: "Lemon Ice Cream" },
      { name: "Cannoli with caramel drizzle" },
    ],
  },
  {
    title: "Cocktail Bar",
    items: [
      { name: "Aperol Spritz" },
      { name: "Full cocktail menu — ask our bartenders" },
    ],
  },
  {
    title: "Wine & Beer",
    items: [
      { name: "Curated wine list" },
      { name: "Italian & international beer selection" },
    ],
  },
];

function MenuPage() {
  return (
    <>
      {/* HEADER */}
      <section className="relative overflow-hidden bg-charcoal text-cream">
        <img src={pistachioImg} alt="" loading="lazy" className="absolute inset-0 h-full w-full object-cover opacity-25 anim-ken-burns" />
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal/60 to-charcoal" />
        <div className="relative mx-auto max-w-5xl px-5 py-24 text-center lg:px-8">
          <span className="anim-fade-up text-xs font-semibold uppercase tracking-[0.25em] text-gold">Il Menù</span>
          <h1 className="anim-fade-up delay-150 mt-4 font-display text-5xl font-bold md:text-6xl">Our Menu</h1>
          <p className="anim-fade-up delay-300 mt-5 text-cream/80 max-w-2xl mx-auto">
            From morning espresso to midnight Spritz — a complete journey through Roman flavours.
            Daily specials and seasonal additions are always on offer.
          </p>
          <p className="anim-fade-up delay-450 mt-6 text-sm text-gold">€10 – €20 per person</p>
        </div>
      </section>

      {/* MENU GRID */}
      <section className="mx-auto max-w-6xl px-5 py-20 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2">
          {sections.map((s, i) => (
            <Reveal key={s.title} as="article" variant={i % 2 === 0 ? "left" : "right"}
              className="lift rounded-2xl bg-card p-8 shadow-soft">
              <header className="border-b border-border pb-4">
                {s.italian && <p className="text-xs font-semibold uppercase tracking-widest text-primary">{s.italian}</p>}
                <h2 className="mt-1 font-display text-3xl font-bold">{s.title}</h2>
              </header>
              <ul className="mt-5 space-y-4">
                {s.items.map((it) => (
                  <li key={it.name} className="flex flex-col gap-1">
                    <div className="flex items-baseline gap-2">
                      <span className="font-medium">{it.name}</span>
                      {it.popular && (
                        <span className="anim-flicker rounded-full bg-primary/10 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-primary">
                          🔥 Popular
                        </span>
                      )}
                    </div>
                    {it.note && <p className="text-sm text-muted-foreground">{it.note}</p>}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>

        <Reveal variant="scale" className="mt-16 rounded-2xl border-2 border-dashed border-gold/50 bg-gold/5 p-8 text-center">
          <p className="font-display text-xl text-charcoal">
            Full menu available in-store. <span className="text-primary">Ask our staff for daily specials!</span>
          </p>
        </Reveal>
      </section>
    </>
  );
}
