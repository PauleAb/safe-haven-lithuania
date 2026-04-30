import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell } from "@/components/PageShell";
import { ArrowRight } from "lucide-react";
import hazardImg from "@/assets/hazardous-area.jpg";

export const Route = createFileRoute("/pepperl-fuchs")({
  head: () => ({
    meta: [
      { title: "Pepperl+Fuchs — Oficialus distributorius Lietuvoje | Medianta" },
      {
        name: "description",
        content:
          "Medianta — oficialus Pepperl+Fuchs distributorius Lietuvoje. Sprogimui atsparūs sprendimai pavojingoms zonoms.",
      },
      { property: "og:title", content: "Pepperl+Fuchs — Oficialus distributorius Lietuvoje" },
      { property: "og:description", content: "Hazardous Area produktai ir sprendimai." },
    ],
  }),
  component: PepperlFuchsPage,
});

function PepperlFuchsPage() {
  return (
    <PageShell>
      <section className="relative h-[70vh] min-h-[520px] bg-ink text-primary-foreground overflow-hidden">
        <img
          src={hazardImg}
          alt="Hazardous area industrial equipment"
          className="absolute inset-0 w-full h-full object-cover opacity-65 animate-slow-zoom"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0" style={{ background: "var(--gradient-fade)" }} />
        <div className="relative h-full container-px mx-auto max-w-[1400px] flex flex-col justify-end pb-20">
          <p className="eyebrow text-white/70 reveal">Distributoriaus statusas</p>
          <h1 className="reveal reveal-delay-1 mt-6 font-display text-5xl md:text-7xl lg:text-[88px] font-light leading-[1.05]">
            Pepperl+Fuchs
          </h1>
          <p className="reveal reveal-delay-2 mt-6 text-white/70 text-base md:text-lg max-w-xl">
            Oficialus distributorius Lietuvoje.
          </p>
        </div>
      </section>

      <section className="container-px mx-auto max-w-[1400px] py-24 md:py-36">
        <div className="grid md:grid-cols-12 gap-12">
          <div className="md:col-span-5">
            <p className="eyebrow">Pristatymas</p>
            <h2 className="mt-6 font-display text-3xl md:text-4xl leading-tight">
              Saugumas pavojingose zonose.
            </h2>
          </div>
          <div className="md:col-span-7 space-y-6 text-ink-soft leading-[1.8]">
            <p>
              Pepperl+Fuchs — pasaulinis lyderis pramoninės automatikos ir sprogimui
              atsparių sprendimų srityje. Daugiau nei 75 metų patirtis užtikrinant
              saugumą ten, kur tai svarbiausia.
            </p>
            <p>
              Medianta tiekia pilną Hazardous Area produktų liniją Lietuvos
              pramonei: barjerus, jutiklius, signalizatorius, HMI sprendimus
              ir tinklo komponentus, sertifikuotus pagal ATEX ir IECEx.
            </p>
          </div>
        </div>
      </section>

      <section className="border-t border-hairline">
        <div className="container-px mx-auto max-w-[1400px] py-24 md:py-32">
          <div className="bg-ink text-primary-foreground p-12 md:p-20 grid md:grid-cols-12 gap-10 items-center">
            <div className="md:col-span-8">
              <p className="eyebrow text-white/60">Sprendimai</p>
              <h3 className="mt-6 font-display text-3xl md:text-5xl leading-tight">
                Hazardous Area Products
                <br />
                <span className="text-white/60 italic font-extralight">and Solutions.</span>
              </h3>
              <p className="mt-6 max-w-xl text-white/70 leading-relaxed">
                Peržiūrėkite pilną sprogimui atsparių produktų katalogą ir
                susisiekite dėl techninio konsultavimo savo projektui.
              </p>
            </div>
            <div className="md:col-span-4 flex md:justify-end">
              <a
                href="https://www.pepperl-fuchs.com/global/en/explosion-protection.htm"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-light"
              >
                Peržiūrėti
                <ArrowRight size={16} />
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="container-px mx-auto max-w-[1400px] py-20 md:py-28 text-center">
        <p className="text-ink-soft">
          Reikia konsultacijos?{" "}
          <Link to="/kontaktai" className="text-ink link-underline">
            Susisiekite su mūsų inžinieriais
          </Link>
        </p>
      </section>
    </PageShell>
  );
}
