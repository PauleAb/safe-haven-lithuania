import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/PageShell";
import { ArrowRight, ShieldCheck, Cog, Award } from "lucide-react";
import heroImg from "@/assets/hero-industrial.jpg";
import engineerImg from "@/assets/engineer.jpg";
import tubingImg from "@/assets/tubing-bundle.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Medianta — Pramoninės saugos sprendimai Lietuvoje" },
      {
        name: "description",
        content:
          "Medianta — patikimas pramoninės saugos prietaisų ir sprendimų tiekėjas Lietuvoje. Oficialus Obrien Amatek ir Pepperl+Fuchs atstovas.",
      },
      { property: "og:title", content: "Medianta — Industrial Safety Solutions" },
      { property: "og:description", content: "Patikimi pramoninės saugos sprendimai B2B klientams Lietuvoje." },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <PageShell>
      <Hero />
      <Intro />
      <Values />
      <Showcase />
      <Partners />
      <DemoForm />
    </PageShell>
  );
}

function Hero() {
  return (
    <section className="relative h-[88vh] min-h-[640px] w-full overflow-hidden bg-ink">
      <div className="absolute inset-0">
        <img
          src={heroImg}
          alt="Modern industrial facility"
          width={1920}
          height={1080}
          className="w-full h-full object-cover opacity-70 animate-slow-zoom"
        />
        <div className="absolute inset-0" style={{ background: "var(--gradient-fade)" }} />
        <div className="absolute inset-0 bg-ink/30" />
      </div>

      <div className="relative h-full container-px mx-auto max-w-[1400px] flex flex-col justify-end pb-20 md:pb-28">
        <p className="eyebrow text-white/70 reveal">Medianta — Lietuva</p>
        <h1 className="reveal reveal-delay-1 mt-6 max-w-4xl font-display text-white text-[40px] leading-[1.05] sm:text-6xl md:text-7xl lg:text-[88px] font-light">
          Industrial safety
          <br />
          <span className="italic font-extralight text-white/85">solutions you can trust.</span>
        </h1>
        <p className="reveal reveal-delay-2 mt-8 max-w-xl text-white/70 text-base md:text-lg leading-relaxed">
          Pramoninės saugos prietaisai, šildymo sistemos ir sprogimui atsparūs
          sprendimai — tiekiami tiesiai iš pasaulinių lyderių į Lietuvos pramonę.
        </p>
        <div className="reveal reveal-delay-3 mt-10 flex flex-wrap gap-4">
          <a href="#demo" className="btn-light">
            Užsisakyti demo
            <ArrowRight size={16} />
          </a>
          <a href="#about" className="text-white text-sm tracking-wide link-underline self-center">
            Sužinoti daugiau
          </a>
        </div>
      </div>

      <div className="absolute bottom-6 right-6 md:right-16 text-white/40 text-[10px] tracking-[0.3em] uppercase">
        Est. Lithuania
      </div>
    </section>
  );
}

function Intro() {
  return (
    <section id="about" className="container-px mx-auto max-w-[1400px] py-24 md:py-36">
      <div className="grid md:grid-cols-12 gap-12 md:gap-20">
        <div className="md:col-span-4">
          <p className="eyebrow">01 — Apie Mediantą</p>
          <h2 className="mt-6 font-display text-3xl md:text-4xl leading-tight">
            Patikimas partneris Lietuvos pramonei.
          </h2>
        </div>
        <div className="md:col-span-7 md:col-start-6 space-y-6 text-ink-soft text-[15px] md:text-base leading-[1.8]">
          <p>
            Medianta tiekia aukščiausios kokybės pramoninės saugos ir prietaisų
            sprendimus B2B klientams chemijos, naftos, energetikos ir
            apdirbamosios pramonės sektoriuose. Mūsų ekspertizė remiasi
            ilgamete partneryste su pasauliniais gamintojais.
          </p>
          <p>
            Esame oficialūs <span className="text-ink font-medium">Obrien Amatek</span> bei{" "}
            <span className="text-ink font-medium">Pepperl+Fuchs</span> atstovai
            Lietuvoje — užtikriname autentiškus produktus, techninį konsultavimą
            ir ilgalaikę palaikymo paslaugą kiekviename projekte.
          </p>
        </div>
      </div>
    </section>
  );
}

function Values() {
  const values = [
    { icon: ShieldCheck, title: "Patikimumas", text: "Sertifikuoti, pasaulyje patikrinti sprendimai kritinei pramonės infrastruktūrai." },
    { icon: Cog, title: "Ekspertizė", text: "Inžineriniai sprendimai, pritaikyti konkrečioms gamybos sąlygoms." },
    { icon: Award, title: "Partnerystė", text: "Tiesioginiai gamintojų atstovai — be tarpininkų, su pilna garantija." },
  ];
  return (
    <section className="border-t border-hairline">
      <div className="container-px mx-auto max-w-[1400px] grid md:grid-cols-3">
        {values.map(({ icon: Icon, title, text }, i) => (
          <div
            key={title}
            className={`py-14 md:py-20 md:px-12 ${i > 0 ? "md:border-l border-hairline border-t md:border-t-0" : ""}`}
          >
            <Icon size={28} strokeWidth={1.25} className="text-ink" />
            <h3 className="mt-8 font-display text-xl">{title}</h3>
            <p className="mt-4 text-sm text-ink-soft leading-relaxed">{text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function Showcase() {
  return (
    <section className="bg-secondary">
      <div className="container-px mx-auto max-w-[1400px] py-24 md:py-36">
        <div className="flex items-end justify-between flex-wrap gap-6 mb-16">
          <div>
            <p className="eyebrow">02 — Sritys</p>
            <h2 className="mt-6 font-display text-3xl md:text-5xl leading-tight max-w-2xl">
              Sprendimai veikiantys ten, kur tikslumas yra būtinybė.
            </h2>
          </div>
        </div>

        <div className="grid md:grid-cols-12 gap-6">
          <figure className="md:col-span-7 relative overflow-hidden group aspect-[16/11]">
            <img
              src={engineerImg}
              alt="Engineer at refinery"
              loading="lazy"
              className="w-full h-full object-cover transition-transform duration-[1.4s] ease-out group-hover:scale-105"
            />
            <figcaption className="absolute bottom-6 left-6 right-6 text-white text-sm flex justify-between">
              <span>Naftos perdirbimo įrenginiai</span>
              <span className="text-white/60">— 01</span>
            </figcaption>
          </figure>
          <figure className="md:col-span-5 relative overflow-hidden group aspect-[16/11]">
            <img
              src={tubingImg}
              alt="Industrial tubing bundles"
              loading="lazy"
              className="w-full h-full object-cover transition-transform duration-[1.4s] ease-out group-hover:scale-105"
            />
            <figcaption className="absolute bottom-6 left-6 right-6 text-white text-sm flex justify-between">
              <span>Šildomos vamzdyno linijos</span>
              <span className="text-white/60">— 02</span>
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}

function Partners() {
  const partners = ["OBRIEN AMATEK", "PEPPERL+FUCHS", "ATEX", "IECEx", "ISO 9001", "CE"];
  return (
    <section className="border-y border-hairline">
      <div className="container-px mx-auto max-w-[1400px] py-12">
        <div className="flex flex-wrap items-center justify-between gap-x-12 gap-y-6">
          <p className="text-[11px] uppercase tracking-[0.25em] text-muted-foreground">
            Patikimi partneriai & sertifikatai
          </p>
          <div className="flex flex-wrap items-center gap-x-10 gap-y-4">
            {partners.map((p) => (
              <span key={p} className="text-sm font-medium tracking-[0.15em] text-ink-soft/70">
                {p}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function DemoForm() {
  return (
    <section id="demo" className="container-px mx-auto max-w-[1400px] py-24 md:py-36">
      <div className="grid md:grid-cols-12 gap-12 md:gap-20">
        <div className="md:col-span-5">
          <p className="eyebrow">03 — Susisiekime</p>
          <h2 className="mt-6 font-display text-4xl md:text-5xl leading-[1.05]">
            Užsisakykite asmeninę demonstraciją.
          </h2>
          <p className="mt-8 text-ink-soft leading-relaxed max-w-md">
            Mūsų inžinieriai per 24 valandas atsakys į užklausą ir parengs
            sprendimo pasiūlymą jūsų pramonės taikymui.
          </p>
          <div className="mt-12 hairline" />
          <div className="mt-6 text-sm text-muted-foreground">
            Arba rašykite: <span className="text-ink">info@medianta.lt</span>
          </div>
        </div>

        <form
          className="md:col-span-7 md:col-start-7 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-10"
          onSubmit={(e) => e.preventDefault()}
        >
          <div>
            <label className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground">Vardas</label>
            <input className="field mt-2" placeholder="Jonas Jonaitis" />
          </div>
          <div>
            <label className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground">Įmonė</label>
            <input className="field mt-2" placeholder="UAB Pavadinimas" />
          </div>
          <div className="sm:col-span-2">
            <label className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground">El. paštas</label>
            <input type="email" className="field mt-2" placeholder="vardas@imone.lt" />
          </div>
          <div className="sm:col-span-2">
            <label className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground">Žinutė</label>
            <textarea rows={3} className="field-area mt-2" placeholder="Trumpai aprašykite poreikį…" />
          </div>
          <div className="sm:col-span-2 mt-2">
            <button className="btn-ink">
              Siųsti užklausą
              <ArrowRight size={16} />
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
