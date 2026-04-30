import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/PageShell";
import { ArrowRight, MapPin, Phone, Mail, Building2 } from "lucide-react";

export const Route = createFileRoute("/kontaktai")({
  head: () => ({
    meta: [
      { title: "Kontaktai — Medianta" },
      {
        name: "description",
        content: "Susisiekite su Medianta — pramoninės saugos sprendimų tiekėju Lietuvoje.",
      },
      { property: "og:title", content: "Kontaktai — Medianta" },
      { property: "og:description", content: "UAB Medianta kontaktai ir adresas Vilniuje." },
    ],
  }),
  component: KontaktaiPage,
});

function KontaktaiPage() {
  return (
    <PageShell>
      <section className="container-px mx-auto max-w-[1400px] pt-24 md:pt-36 pb-20">
        <p className="eyebrow reveal">Kontaktai</p>
        <h1 className="reveal reveal-delay-1 mt-6 font-display text-5xl md:text-7xl lg:text-[88px] font-light leading-[1.02] max-w-4xl">
          Pradėkime pokalbį.
        </h1>
        <p className="reveal reveal-delay-2 mt-8 max-w-xl text-ink-soft text-lg leading-relaxed">
          Mūsų komanda atsakys į užklausą per vieną darbo dieną.
        </p>
      </section>

      <section className="border-t border-hairline">
        <div className="container-px mx-auto max-w-[1400px] grid md:grid-cols-2">
          <div className="py-16 md:py-24 md:pr-16 space-y-12">
            <Detail icon={Building2} label="Įmonė" lines={["UAB Medianta", "Įm. k. 300000000"]} />
            <Detail icon={MapPin} label="Adresas" lines={["Savanorių pr. 178", "LT-03154 Vilnius, Lietuva"]} />
            <Detail icon={Phone} label="Telefonas" lines={["+370 600 00000"]} />
            <Detail icon={Mail} label="El. paštas" lines={["info@medianta.lt", "sales@medianta.lt"]} />
            <Detail icon={Building2} label="Darbo laikas" lines={["I–V  08:00 – 17:00", "VI–VII  Nedirbame"]} />
          </div>

          <form
            onSubmit={(e) => e.preventDefault()}
            className="py-16 md:py-24 md:pl-16 md:border-l border-hairline border-t md:border-t-0 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-10"
          >
            <div className="sm:col-span-2">
              <p className="eyebrow">Užklausos forma</p>
            </div>
            <div>
              <label className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground">Vardas</label>
              <input className="field mt-2" placeholder="Jūsų vardas" />
            </div>
            <div>
              <label className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground">Įmonė</label>
              <input className="field mt-2" placeholder="Įmonės pavadinimas" />
            </div>
            <div>
              <label className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground">El. paštas</label>
              <input type="email" className="field mt-2" placeholder="vardas@imone.lt" />
            </div>
            <div>
              <label className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground">Telefonas</label>
              <input className="field mt-2" placeholder="+370" />
            </div>
            <div className="sm:col-span-2">
              <label className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground">Žinutė</label>
              <textarea rows={4} className="field-area mt-2" placeholder="Aprašykite savo poreikį…" />
            </div>
            <div className="sm:col-span-2 mt-2">
              <button className="btn-ink">
                Siųsti žinutę
                <ArrowRight size={16} />
              </button>
            </div>
          </form>
        </div>
      </section>

      <section className="border-t border-hairline">
        <div className="container-px mx-auto max-w-[1400px] py-16 md:py-20">
          <p className="eyebrow mb-6">Vietovė</p>
          <div className="aspect-[21/9] w-full overflow-hidden bg-secondary">
            <iframe
              title="Medianta vieta"
              src="https://www.openstreetmap.org/export/embed.html?bbox=25.232%2C54.674%2C25.292%2C54.704&layer=mapnik"
              className="w-full h-full grayscale contrast-[0.95]"
              loading="lazy"
            />
          </div>
        </div>
      </section>
    </PageShell>
  );
}

function Detail({
  icon: Icon,
  label,
  lines,
}: {
  icon: typeof MapPin;
  label: string;
  lines: string[];
}) {
  return (
    <div className="flex gap-6">
      <Icon size={20} strokeWidth={1.25} className="mt-1 text-ink shrink-0" />
      <div>
        <p className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground">{label}</p>
        <div className="mt-3 space-y-1 text-base text-ink">
          {lines.map((l) => (
            <p key={l}>{l}</p>
          ))}
        </div>
      </div>
    </div>
  );
}
