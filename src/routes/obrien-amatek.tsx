import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/PageShell";
import { ArrowUpRight, FileText, Wrench, Headphones, Cog, Download } from "lucide-react";
import tubing from "@/assets/product-tubing.jpg";
import enclosure from "@/assets/product-enclosure.jpg";
import valve from "@/assets/product-valve.jpg";
import tracing from "@/assets/product-tracing.jpg";
import support from "@/assets/product-support.jpg";
import insulation from "@/assets/product-insulation.jpg";
import bundle from "@/assets/tubing-bundle.jpg";

export const Route = createFileRoute("/obrien-amatek")({
  head: () => ({
    meta: [
      { title: "Obrien Amatek — Oficialus atstovas Lietuvoje | Medianta" },
      {
        name: "description",
        content:
          "Medianta — oficialus Obrien Amatek atstovas Lietuvoje. Šildomi vamzdynai, prietaisų korpusai, izoliacija ir vožtuvų šildytuvai.",
      },
      { property: "og:title", content: "Obrien Amatek — Oficialus atstovas Lietuvoje" },
      { property: "og:description", content: "Pramoniniai šildomi vamzdynai ir prietaisų sprendimai." },
    ],
  }),
  component: ObrienAmatekPage,
});

const products = [
  { name: "TRACEPAK®", subtitle: "Traced Tubing Bundle", img: bundle },
  { name: "STACKPAK®", subtitle: "CEMS / Analyzer Tubing Bundle", img: tubing },
  { name: "S-Line®", subtitle: "Insulated Tubing", img: tubing },
  { name: "J-Line®", subtitle: "Jacketed Tubing", img: tubing },
  { name: "MJ®", subtitle: "Multi-Tube Jacketed Bundle", img: bundle },
  { name: "VIPAK® / HEATPAK® II", subtitle: "Instrument Enclosures", img: enclosure },
  { name: "T-Series", subtitle: "Enclosure Heaters", img: enclosure },
  { name: "TraceBOOST®", subtitle: "Pipe Tracing System", img: tracing },
  { name: "Instrument Sunshade", subtitle: "Apsauga nuo aplinkos", img: support },
  { name: "Instrument Supports", subtitle: "Tvirtinimo sistemos", img: support },
  { name: "FLEXPAK®", subtitle: "Strip Insulation", img: insulation },
  { name: "VALVEPAK®", subtitle: "Valve Heaters", img: valve },
];

function ObrienAmatekPage() {
  return (
    <PageShell>
      <Hero />
      <Statement />
      <Products />
      <Services />
      <Documentation />
    </PageShell>
  );
}

function Hero() {
  return (
    <section className="relative bg-ink text-primary-foreground overflow-hidden">
      <div className="absolute inset-0 opacity-30">
        <img src={tracing} alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/80 to-transparent" />
      </div>
      <div className="relative container-px mx-auto max-w-[1400px] py-32 md:py-44">
        <p className="eyebrow text-white/60 reveal">Partnerystė</p>
        <h1 className="reveal reveal-delay-1 mt-6 font-display text-5xl md:text-7xl lg:text-[88px] font-light leading-[1.05] max-w-4xl">
          Obrien Amatek
        </h1>
        <p className="reveal reveal-delay-2 mt-8 max-w-2xl text-white/75 text-lg leading-relaxed">
          Oficialus atstovas Lietuvoje. Pramoniniai šildomi vamzdynai,
          prietaisų korpusai ir specializuoti šildymo sprendimai
          chemijos, naftos perdirbimo bei energetikos sektoriams.
        </p>
      </div>
    </section>
  );
}

function Statement() {
  return (
    <section className="container-px mx-auto max-w-[1400px] py-24 md:py-32">
      <div className="grid md:grid-cols-12 gap-10">
        <div className="md:col-span-5">
          <p className="eyebrow">Apie partnerystę</p>
        </div>
        <div className="md:col-span-7 space-y-6 text-ink-soft leading-[1.8]">
          <p className="text-2xl md:text-3xl text-ink font-display font-light leading-snug -tracking-[0.01em]">
            „Obrien Amatek pasaulinė inžinerinė kompetencija — tiesiai į Lietuvos pramonės objektus.“
          </p>
          <p>
            Kaip oficialus atstovas, Medianta užtikrina autentiškus produktus,
            techninį konsultavimą projektavimo etape, montavimo palaikymą ir
            garantinį aptarnavimą per visą gaminio gyvavimo ciklą.
          </p>
        </div>
      </div>
    </section>
  );
}

function Products() {
  return (
    <section className="bg-secondary border-y border-hairline">
      <div className="container-px mx-auto max-w-[1400px] py-24 md:py-32">
        <div className="flex items-end justify-between flex-wrap gap-6 mb-14">
          <div>
            <p className="eyebrow">Produktai</p>
            <h2 className="mt-6 font-display text-3xl md:text-5xl">Pilnas Obrien Amatek katalogas.</h2>
          </div>
          <span className="text-sm text-muted-foreground">{products.length} sprendimų grupės</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-hairline">
          {products.map((p) => (
            <a
              key={p.name}
              href="#"
              className="group relative bg-background p-6 md:p-8 flex flex-col gap-6 transition-colors hover:bg-white"
            >
              <div className="aspect-[4/3] overflow-hidden bg-secondary">
                <img
                  src={p.img}
                  alt={p.name}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-110"
                />
              </div>
              <div className="flex items-start justify-between gap-3">
                <div>
                  <h3 className="font-display text-lg leading-tight">{p.name}</h3>
                  <p className="mt-1.5 text-sm text-muted-foreground">{p.subtitle}</p>
                </div>
                <ArrowUpRight
                  size={18}
                  className="shrink-0 text-ink-soft transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

function Services() {
  const services = [
    { icon: Cog, title: "Inžinerinis projektavimas", text: "Sistemos pritaikymas konkrečioms aplinkos sąlygoms ir technologiniams reikalavimams." },
    { icon: Wrench, title: "Montavimo priežiūra", text: "Techninis palaikymas objekte ir įrangos paleidimo metu." },
    { icon: Headphones, title: "Po-pardavimo palaikymas", text: "Techninės konsultacijos, atsarginės dalys ir garantinis aptarnavimas." },
    { icon: FileText, title: "Dokumentacija", text: "Pilnas techninis paketas: schemos, sertifikatai, eksploatacijos vadovai." },
  ];
  return (
    <section className="container-px mx-auto max-w-[1400px] py-24 md:py-32">
      <p className="eyebrow">Paslaugos</p>
      <h2 className="mt-6 font-display text-3xl md:text-5xl max-w-2xl leading-tight">
        Pilna paslauga — nuo projekto iki eksploatacijos.
      </h2>

      <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-hairline">
        {services.map(({ icon: Icon, title, text }) => (
          <div key={title} className="bg-background p-8 md:p-10">
            <Icon size={28} strokeWidth={1.25} className="text-ink" />
            <h3 className="mt-8 font-display text-lg">{title}</h3>
            <p className="mt-3 text-sm text-ink-soft leading-relaxed">{text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function Documentation() {
  const docs = [
    { title: "TRACEPAK® Techninės specifikacijos", size: "PDF • 2.4 MB" },
    { title: "VIPAK® Korpusų katalogas", size: "PDF • 5.1 MB" },
    { title: "TraceBOOST® Sistemos vadovas", size: "PDF • 3.8 MB" },
    { title: "Bendras Obrien Amatek katalogas", size: "PDF • 12.6 MB" },
  ];
  return (
    <section className="bg-ink text-primary-foreground">
      <div className="container-px mx-auto max-w-[1400px] py-24 md:py-32">
        <div className="grid md:grid-cols-12 gap-10">
          <div className="md:col-span-5">
            <p className="eyebrow text-white/60">Dokumentacija</p>
            <h2 className="mt-6 font-display text-3xl md:text-5xl leading-tight">
              Atsisiųskite techninę medžiagą.
            </h2>
            <p className="mt-6 text-white/60 max-w-md leading-relaxed">
              Visi katalogai, brėžiniai ir specifikacijos vienoje vietoje.
            </p>
          </div>
          <ul className="md:col-span-7 md:col-start-6 divide-y divide-white/10 border-y border-white/10">
            {docs.map((d) => (
              <li key={d.title}>
                <a
                  href="#"
                  className="flex items-center justify-between gap-6 py-6 group"
                >
                  <div>
                    <p className="text-base md:text-lg group-hover:translate-x-1 transition-transform duration-300">
                      {d.title}
                    </p>
                    <p className="mt-1 text-xs text-white/50 tracking-wider uppercase">{d.size}</p>
                  </div>
                  <Download size={20} className="text-white/60 group-hover:text-white transition-colors" />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
