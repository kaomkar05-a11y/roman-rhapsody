import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { HOURS, SITE } from "@/lib/site";
import { Reveal } from "@/components/Reveal";

export const Route = createFileRoute("/reserve")({
  head: () => ({
    meta: [
      { title: "Reserve & Contact · Caffè Delle Commari" },
      { name: "description", content: "Book a table at Caffè Delle Commari · Via Santamaura 22, Roma · +39 06 8354 5754." },
      { property: "og:title", content: "Reserve · Caffè Delle Commari" },
      { property: "og:description", content: "Reserve your table at Caffè Delle Commari, Roma." },
    ],
  }),
  component: ReservePage,
});

function ReservePage() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [form, setForm] = useState({ name: "", date: "", time: "19:30", party: "2", notes: "" });

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitting(true);
    const subject = encodeURIComponent(`Reservation request — ${form.name}`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nDate: ${form.date}\nTime: ${form.time}\nParty size: ${form.party}\n\nSpecial requests:\n${form.notes}`
    );
    setTimeout(() => {
      window.location.href = `mailto:info@caffedellecommari.it?subject=${subject}&body=${body}`;
      setSubmitting(false);
      setSubmitted(true);
    }, 700);
  }

  return (
    <>
      <section className="bg-charcoal py-20 text-cream">
        <div className="mx-auto max-w-5xl px-5 text-center lg:px-8">
          <span className="anim-fade-up text-xs font-semibold uppercase tracking-[0.25em] text-gold">Prenotazioni</span>
          <h1 className="anim-fade-up delay-150 mt-4 font-display text-5xl font-bold md:text-6xl">Reserve your table</h1>
          <p className="anim-fade-up delay-300 mt-5 text-cream/80 max-w-xl mx-auto">
            Tell us when to expect you. For groups of 8 or more, please call us directly or book via Quandoo.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-20 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-5">
          {/* Form */}
          <Reveal variant="left" className="lg:col-span-3">
            <div className="rounded-2xl bg-card p-8 shadow-soft">
              <h2 className="font-display text-3xl font-bold">Reservation request</h2>
              {submitted ? (
                <div className="mt-6 rounded-xl bg-secondary/70 p-6 text-center anim-fade-up">
                  <p className="font-display text-xl text-primary">Grazie mille!</p>
                  <p className="mt-2 text-foreground/75">
                    Your email client should be opening with your request. We'll confirm shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="mt-6 grid gap-5">
                  <Field label="Full name">
                    <input
                      required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="input" placeholder="Your name"
                    />
                  </Field>
                  <div className="grid gap-5 sm:grid-cols-3">
                    <Field label="Date">
                      <input type="date" required value={form.date} onChange={(e) => setForm({ ...form, date: e.target.value })} className="input" />
                    </Field>
                    <Field label="Time">
                      <input type="time" required value={form.time} onChange={(e) => setForm({ ...form, time: e.target.value })} className="input" />
                    </Field>
                    <Field label="Party size">
                      <input type="number" min={1} max={20} required value={form.party} onChange={(e) => setForm({ ...form, party: e.target.value })} className="input" />
                    </Field>
                  </div>
                  <Field label="Special requests">
                    <textarea
                      rows={4} value={form.notes} onChange={(e) => setForm({ ...form, notes: e.target.value })}
                      className="input resize-none" placeholder="Allergies, occasions, seating preferences…"
                    />
                  </Field>
                  <button type="submit" disabled={submitting}
                    className="press inline-flex items-center justify-center gap-2 rounded-full bg-primary px-8 py-3.5 text-base font-semibold text-primary-foreground shadow-warm transition hover:scale-[1.02] disabled:opacity-80 disabled:cursor-wait">
                    {submitting && (
                      <svg className="anim-spin h-4 w-4" viewBox="0 0 24 24" fill="none" aria-hidden>
                        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeOpacity="0.3" strokeWidth="3" />
                        <path d="M22 12a10 10 0 0 1-10 10" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
                      </svg>
                    )}
                    {submitting ? "Sending…" : "Send reservation request"}
                  </button>
                  <p className="text-xs text-muted-foreground">
                    For instant booking, call <a href={SITE.phoneHref} className="text-primary font-medium">{SITE.phone}</a> or use{" "}
                    <a href="https://social.quandoo.com" target="_blank" rel="noreferrer" className="text-primary font-medium">Quandoo</a>.
                  </p>
                </form>
              )}
            </div>
          </Reveal>

          {/* Info */}
          <Reveal as="aside" variant="right" className="lg:col-span-2 space-y-6">
            <div className="lift rounded-2xl bg-card p-7 shadow-soft">
              <h3 className="font-display text-2xl font-bold">Visit us</h3>
              <p className="mt-3 text-foreground/80">{SITE.address}</p>
              <a href={SITE.phoneHref} className="mt-2 block font-medium text-primary">{SITE.phone}</a>
              <a href={SITE.website} target="_blank" rel="noreferrer" className="mt-1 block text-sm text-foreground/70 hover:text-primary">
                caffedellecommari.it
              </a>
            </div>

            <div className="lift rounded-2xl bg-card p-7 shadow-soft">
              <h3 className="font-display text-2xl font-bold">Opening hours</h3>
              <ul className="mt-4 divide-y divide-border text-sm">
                {HOURS.map((h) => (
                  <li key={h.day} className="flex justify-between py-2">
                    <span className="font-medium">{h.day}</span>
                    <span className="text-foreground/75">{h.open} – {h.close}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>

        {/* Map */}
        <Reveal variant="scale" className="mt-16 overflow-hidden rounded-3xl shadow-warm">
          <iframe
            title="Caffè Delle Commari on Google Maps"
            src="https://www.google.com/maps?q=Via+Santamaura+22,+00192+Roma+RM,+Italy&output=embed"
            width="100%" height="450" loading="lazy" referrerPolicy="no-referrer-when-downgrade"
            className="block w-full border-0"
          />
        </Reveal>
      </section>

      <style>{`.input{width:100%;border-radius:.6rem;border:1px solid var(--border);background:var(--background);padding:.7rem .9rem;font-size:.95rem;color:var(--foreground);transition:border-color .15s,box-shadow .15s;}
.input:focus{outline:none;border-color:var(--primary);box-shadow:0 0 0 3px color-mix(in oklab,var(--primary) 18%,transparent);}`}</style>
    </>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-sm font-medium text-foreground/80">{label}</span>
      {children}
    </label>
  );
}
