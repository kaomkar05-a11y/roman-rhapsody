import { Link } from "@tanstack/react-router";
import { SITE } from "@/lib/site";

export function Footer() {
  return (
    <footer className="mt-24 bg-charcoal text-cream">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 md:grid-cols-4 lg:px-8">
        <div className="md:col-span-2">
          <h3 className="font-display text-2xl text-cream">{SITE.name}</h3>
          <p className="mt-2 text-sm text-cream/70">{SITE.tagline}</p>
          <p className="mt-6 text-sm text-cream/80 max-w-sm">
            A few steps from the Vatican walls in Rome's Prati neighbourhood. Open every day for breakfast, lunch and dinner.
          </p>
        </div>

        <div>
          <h4 className="font-display text-lg text-gold">Visit</h4>
          <p className="mt-3 text-sm text-cream/80">{SITE.address}</p>
          <a href={SITE.phoneHref} className="mt-2 block text-sm text-cream/80 hover:text-gold">
            {SITE.phone}
          </a>
          <a href={SITE.website} target="_blank" rel="noreferrer" className="mt-2 block text-sm text-cream/80 hover:text-gold">
            caffedellecommari.it
          </a>
        </div>

        <div>
          <h4 className="font-display text-lg text-gold">Hours</h4>
          <ul className="mt-3 space-y-1 text-sm text-cream/80">
            <li>Mon–Thu · 6:30 – 22:00</li>
            <li>Fri–Sat · 6:30 – 22:30</li>
            <li>Sunday · 7:00 – 22:00</li>
          </ul>
          <div className="mt-4 flex gap-3 text-sm">
            <a href="https://instagram.com" target="_blank" rel="noreferrer" className="hover:text-gold">Instagram</a>
            <a href="https://facebook.com" target="_blank" rel="noreferrer" className="hover:text-gold">Facebook</a>
            <a href="https://social.quandoo.com" target="_blank" rel="noreferrer" className="hover:text-gold">Quandoo</a>
          </div>
        </div>
      </div>
      <div className="border-t border-cream/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-5 py-5 text-xs text-cream/60 md:flex-row md:items-center md:justify-between lg:px-8">
          <p>© {new Date().getFullYear()} Caffè Delle Commari. All rights reserved.</p>
          <p>Made with love in Roma · Prati</p>
        </div>
      </div>
    </footer>
  );
}
