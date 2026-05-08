import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

export const Route = createFileRoute("/reviews")({
  head: () => ({
    meta: [
      { title: "Reviews · Caffè Delle Commari" },
      { name: "description", content: "Read what guests say about Caffè Delle Commari — 4.8★ on Google with 13,949 reviews." },
      { property: "og:title", content: "Reviews · Caffè Delle Commari" },
      { property: "og:description", content: "13,949 reviews · 4.8★ on Google." },
    ],
  }),
  component: ReviewsPage,
});

const reviews = [
  { name: "April Fields", text: "This place is great! When you first walk in your eyes grow wide with the sight of a wonderful array of delicious pastries. Our server Sail was terrific and gifted our group of ten a complimentary appetizer. The pizzas were delicious and the cannoli with caramel was completely decadent." },
  { name: "Jessica Ghali", text: "Food was amazing! Fatima was super helpful and gave the best recommendations. Ended up being the best things we ate! Def recommend for brunch!" },
  { name: "Nelly Risdon", text: "First night in Rome and we found this spot. Not fancy but the food was amazing — pizza with white sauce, mushrooms and sausage, and carbonara. Saila was excellent." },
  { name: "Diana Nastasa", text: "The food was very good, the portions were generous, and everything arrived on time. Our waitress Riti took great care of us. We had a wonderful experience." },
  { name: "Wan Yin Ooi", text: "Had a great breakfast! We got complimentary bruschetta and desserts. Special thanks to Dheeraj — very helpful and speaks fluent English." },
  { name: "Maisy Louisa", text: "Genuinely the best fries I've ever eaten. Our server Riti was so kind, friendly and accommodating. If ever visiting Rome again I'd make an effort to come back." },
  { name: "J T", text: "The four cheese spaghetti and carbonara with truffle were absolutely delicious. Our waiter Edel provided excellent, friendly service. Highly recommend!" },
  { name: "Manna P", text: "We came back three times during our stay — it was that good! Their pastries, breakfast combos, and dishes are amazing — a delicious fusion of English and Italian cuisine." },
];

function Stars() {
  return <span className="text-gold tracking-tight" aria-label="5 star rating">★★★★★</span>;
}

function ReviewsPage() {
  const [showAll, setShowAll] = useState(false);
  const visible = showAll ? reviews : reviews.slice(0, 6);

  return (
    <>
      <section className="bg-gradient-warm py-20 text-cream">
        <div className="mx-auto max-w-5xl px-5 text-center lg:px-8">
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-gold">Le Recensioni</span>
          <h1 className="mt-4 font-display text-5xl font-bold md:text-6xl">Loved by guests worldwide</h1>
          <div className="mt-8 inline-flex flex-wrap items-center justify-center gap-6 rounded-2xl bg-cream/10 px-8 py-5 backdrop-blur">
            <div className="text-left">
              <div className="font-display text-5xl font-bold text-gold">4.8</div>
              <Stars />
            </div>
            <div className="h-12 w-px bg-cream/30" />
            <div className="text-left">
              <div className="font-display text-3xl font-semibold">13,949</div>
              <div className="text-xs uppercase tracking-widest text-cream/70">Google Reviews</div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-20 lg:px-8">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {visible.map((r) => (
            <article key={r.name} className="flex flex-col rounded-2xl bg-card p-7 shadow-soft transition hover:shadow-warm">
              <Stars />
              <p className="mt-4 flex-1 text-foreground/85 leading-relaxed">"{r.text}"</p>
              <footer className="mt-6 flex items-center gap-3 border-t border-border pt-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-gold font-display text-lg font-bold text-gold-foreground">
                  {r.name[0]}
                </div>
                <div>
                  <div className="font-semibold">{r.name}</div>
                  <div className="text-xs text-muted-foreground">via Google Reviews</div>
                </div>
              </footer>
            </article>
          ))}
        </div>

        {!showAll && reviews.length > 6 && (
          <div className="mt-12 text-center">
            <button
              onClick={() => setShowAll(true)}
              className="rounded-full border-2 border-primary px-8 py-3 text-sm font-semibold text-primary transition hover:bg-primary hover:text-primary-foreground"
            >
              Load more reviews
            </button>
          </div>
        )}
      </section>
    </>
  );
}
