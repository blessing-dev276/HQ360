import { Eyebrow, PrimaryCta, SecondaryCta, Section } from "@/components/site/Primitives";
import featuredAuthor from "@/assets/featured-author-sanman.jpg.asset.json";

export function FeaturedAuthor() {
  return (
    <Section tone="dark">
      <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)] lg:items-center">
        <div className="relative">
          <div className="overflow-hidden rounded-3xl border border-white/12 shadow-editorial">
            <img
              src={featuredAuthor.url}
              alt="Sanman Thapa holding From the Window: The City of What Ifs at his signing table"
              loading="lazy"
              className="aspect-[4/5] w-full object-cover"
            />
          </div>
          <span className="absolute -top-4 left-6 rounded-full bg-fire px-5 py-2 text-xs font-semibold tracking-[0.18em] text-white uppercase shadow-lift">
            Featured Author of the Year
          </span>
        </div>

        <div>
          <Eyebrow dark>Arti Facts Publishing</Eyebrow>
          <h2 className="mt-3 font-serif text-3xl leading-tight text-balance sm:text-4xl lg:text-[2.75rem]">
            Sanman Thapa, our Featured Author of the Year.
          </h2>
          <div className="rule-fire mt-5" />
          <p className="mt-6 text-base leading-relaxed text-[oklch(0.83_0.012_80)] sm:text-lg">
            Two titles, a full signing room and a launch day that sold through the table. From the
            Window: The City of What Ifs and A Fight for a Cup of Chai were carried from manuscript
            to shelf with Arti Facts Publishing and a launch campaign built by HQ360.
          </p>
          <ul className="mt-8 grid gap-4 sm:grid-cols-3">
            {[
              { value: "2", label: "Titles in print" },
              { value: "1 day", label: "Sold out signing" },
              { value: "5 star", label: "Reader reviews" },
            ].map((item) => (
              <li key={item.label} className="rounded-xl border border-white/12 px-5 py-4">
                <span className="text-fire block font-serif text-2xl font-semibold">
                  {item.value}
                </span>
                <span className="mt-1 block text-sm text-[oklch(0.8_0.012_80)]">{item.label}</span>
              </li>
            ))}
          </ul>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <PrimaryCta to="/contact">Get Your Book Featured</PrimaryCta>
            <SecondaryCta to="/book-launch" dark>
              See the Launch Story
            </SecondaryCta>
          </div>
          <p className="mt-5 text-sm text-[oklch(0.8_0.012_80)]">
            Featured placement runs across our homepage, results pages and campaign features.
          </p>
        </div>
      </div>
    </Section>
  );
}
