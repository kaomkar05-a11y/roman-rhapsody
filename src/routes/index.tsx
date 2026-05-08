import { createFileRoute, Link } from "@tanstack/react-router";
import heroImg from "@/assets/hero.jpg";
import pastriesImg from "@/assets/pastries.jpg";
import carbonaraImg from "@/assets/carbonara.jpg";
import { SITE } from "@/lib/site";
import { Reveal } from "@/components/Reveal";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Caffè Delle Commari · Roman Café Near the Vatican" },
      { name: "description", content: "Authentic Roman café steps from the Vatican. Breakfast, pasta, pizza & cocktails. 4.8★ · 13,949 reviews." },
      { property: "og:title", content: "Caffè Delle Commari · Roman Café" },
      { property: "og:description", content: "Charming Roman café near the Vatican — pastries, pasta, cocktails." },
    ],
  }),
  component: HomePage,
});

const features = [
  { icon: "🥐", title: "Breakfast & Pastries", text: "Fresh cornetti, croissants, and Italian classics from 6:30am." },
  { icon: "🍕", title: "Lunch & Dinner", text: "Authentic pasta, pizza, carbonara, and focaccia." },
  { icon: "🍸", title: "Cocktail Bar", text: "Aperol Spritz, cocktails, wine, beer & happy hour." },
];

const team = ["Fatima", "Riti", "Edel", "Saila", "Dheeraj"];

function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <img src={heroImg} alt="Caffè Delle Commari interior" width={1920} height={1280} className="h-full w-full object-cover anim-ken-burns" />
          <div className="absolute inset-0 bg-gradient-to-b from-charcoal/70 via-charcoal/55 to-charcoal/85" />
          {/* Bokeh particles */}
          <span className="bokeh" style={{ width: 220, height: 220, top: "12%", left: "8%" }} />
          <span className="bokeh" style={{ width: 140, height: 140, top: "60%", left: "78%", animationDelay: "1.5s" }} />
          <span className="bokeh" style={{ width: 90, height: 90, top: "30%", left: "65%", animationDelay: "3s" }} />
          <span className="bokeh" style={{ width: 180, height: 180, top: "70%", left: "20%", animationDelay: "4.5s" }} />
          <span className="bokeh" style={{ width: 70, height: 70, top: "20%", left: "85%", animationDelay: "2s" }} />
        </div>

        <div className="relative mx-auto flex min-h-[90vh] max-w-6xl flex-col justify-center px-5 py-24 lg:px-8">
          <span className="anim-fade-up inline-flex w-fit items-center gap-2 rounded-full border border-gold/40 bg-charcoal/40 px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-gold backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-gold" /> Near the Vatican · Roma
          </span>

          <h1 className="anim-fade-up mt-6 font-display text-5xl font-bold leading-[1.05] text-cream text-balance sm:text-6xl md:text-7xl lg:text-8xl">
            Caffè Delle <span className="italic text-gold">Commari</span>
          </h1>
          <p className="anim-fade-up delay-300 mt-5 max-w-xl text-lg text-cream/85 md:text-xl">{SITE.tagline}</p>

          <div className="anim-fade-up delay-600 mt-10 flex flex-wrap items-center gap-4">
            <Link
              to="/reserve"
              className="press anim-pulse-glow rounded-full bg-primary px-8 py-3.5 text-base font-semibold text-primary-foreground shadow-warm transition-transform hover:scale-[1.03]"
            >
              Reserve a Table
            </Link>
            <Link
              to="/menu"
              className="press rounded-full border border-cream/30 px-8 py-3.5 text-base font-semibold text-cream backdrop-blur-sm transition hover:bg-cream/10"
            >
              View Menu
            </Link>
          </div>

          <div className="anim-fade-up delay-750 mt-12 flex flex-wrap gap-x-6 gap-y-3 text-sm text-cream/85">
            <Badge>⭐ 4.8 Rating</Badge>
            <Badge>13,949 Reviews</Badge>
            <Badge>Steps from the Vatican</Badge>
            <Badge>€10 – €20</Badge>
          </div>
        </div>

        {/* Hours strip */}
        <div className="relative bg-gradient-warm py-3 text-center text-sm text-cream">
          <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-x-8 gap-y-1 px-5 font-medium">
            <span>Mon–Thu · 6:30 – 22:00</span>
            <span className="opacity-50">|</span>
            <span>Fri–Sat · 6:30 – 22:30</span>
            <span className="opacity-50">|</span>
            <span>Sun · 7:00 – 22:00</span>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <Reveal as="section" className="mx-auto max-w-4xl px-5 py-24 text-center lg:px-8">
        <span className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">Benvenuti</span>
        <h2 className="mt-4 font-display text-4xl font-bold text-balance md:text-5xl">
          A taste of Rome, just beyond the Vatican walls
        </h2>
        <p className="mt-6 text-lg leading-relaxed text-foreground/75 text-balance">
          A charming Roman café celebrated for delicious pastries, authentic Italian dishes, and exceptional service.
          Located steps from the Vatican, we offer the perfect blend of delectable cuisine and warm hospitality —
          a favourite for both breakfast and dinner.
        </p>
      </Reveal>

      {/* FEATURES */}
      <section className="mx-auto max-w-6xl px-5 pb-24 lg:px-8">
        <div className="grid gap-6 md:grid-cols-3">
          {features.map((f, i) => (
            <Reveal key={f.title} as="article" variant="scale" delay={i * 120}
              className="lift group rounded-2xl border border-border bg-card p-8 shadow-soft">
              <div className="text-5xl">{f.icon}</div>
              <h3 className="mt-5 font-display text-2xl font-semibold">{f.title}</h3>
              <p className="mt-3 text-foreground/70">{f.text}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* SHOWCASE */}
      <section className="bg-secondary/60 py-24">
        <div className="mx-auto grid max-w-6xl gap-12 px-5 md:grid-cols-2 md:items-center lg:px-8">
          <Reveal variant="left" className="overflow-hidden rounded-3xl shadow-warm">
            <img src={carbonaraImg} alt="Truffle carbonara" width={1024} height={1024} loading="lazy" className="h-full w-full object-cover" />
          </Reveal>
          <Reveal variant="right">
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">Le Specialità</span>
            <h2 className="mt-4 font-display text-4xl font-bold md:text-5xl">Signature dishes loved by thousands</h2>
            <ul className="mt-8 space-y-4 text-foreground/80">
              {[
                "Truffle Carbonara — our most celebrated pasta",
                "Pistachio Cappuccino — a Commari favourite",
                "Tiramisù & Cannoli with caramel drizzle",
                "Pizza with white sauce, mushrooms & sausage",
                "Aperol Spritz at golden hour",
              ].map((s) => (
                <li key={s} className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                  <span>{s}</span>
                </li>
              ))}
            </ul>
            <Link
              to="/menu"
              className="press mt-10 inline-flex rounded-full bg-charcoal px-7 py-3 text-sm font-semibold text-cream transition hover:bg-primary"
            >
              Explore the full menu →
            </Link>
          </Reveal>
        </div>
      </section>

      {/* TEAM */}
      <Reveal as="section" className="mx-auto max-w-5xl px-5 py-24 text-center lg:px-8">
        <span className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">La Famiglia</span>
        <h2 className="mt-4 font-display text-4xl font-bold md:text-5xl">Meet our wonderful team</h2>
        <p className="mt-5 text-foreground/70 max-w-2xl mx-auto">
          Guests say it best — our staff make every visit memorable. Look out for warm welcomes (and the occasional
          complimentary bruschetta or dessert) from:
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          {team.map((n, i) => (
            <Reveal key={n} as="span" delay={i * 100}
              className="inline-block rounded-full bg-gradient-gold px-6 py-2 text-sm font-semibold text-gold-foreground shadow-soft">
              {n}
            </Reveal>
          ))}
        </div>
      </Reveal>

      {/* CTA */}
      <section className="mx-auto max-w-6xl px-5 pb-24 lg:px-8">
        <Reveal variant="scale" className="relative overflow-hidden rounded-3xl bg-gradient-warm p-12 text-center shadow-warm md:p-20">
          <img src={pastriesImg} alt="" loading="lazy" className="absolute inset-0 h-full w-full object-cover opacity-20" />
          <div className="relative">
            <h2 className="font-display text-4xl font-bold text-cream md:text-5xl text-balance">
              Save your table for tonight
            </h2>
            <p className="mt-4 text-cream/85">Open every day · Family, dog & LGBTQ+ friendly · Free Wi-Fi</p>
            <Link
              to="/reserve"
              className="press mt-8 inline-flex rounded-full bg-cream px-8 py-3.5 text-base font-semibold text-charcoal transition-transform hover:scale-[1.03]"
            >
              Reserve a Table
            </Link>
          </div>
        </Reveal>
      </section>
    </>
  );
}

function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded-full border border-cream/25 bg-cream/5 px-3 py-1 backdrop-blur-sm">{children}</span>
  );
}
