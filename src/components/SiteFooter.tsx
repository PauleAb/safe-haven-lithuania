import { Link } from "@tanstack/react-router";

export function SiteFooter() {
  return (
    <footer className="bg-ink text-primary-foreground">
      <div className="container-px mx-auto max-w-[1400px] py-20">
        <div className="grid md:grid-cols-12 gap-12">
          <div className="md:col-span-5">
            <div className="flex items-center gap-2">
              <span className="w-7 h-7 bg-white text-ink flex items-center justify-center text-[11px] font-semibold tracking-widest">
                M
              </span>
              <span className="font-display text-base font-medium">Medianta</span>
            </div>
            <p className="mt-6 max-w-md text-sm text-white/60 leading-relaxed">
              Pramoninės saugos ir prietaisų sprendimai Lietuvos rinkai.
              Patikimi partneriai. Aukščiausi standartai.
            </p>
          </div>

          <div className="md:col-span-3">
            <p className="text-[11px] uppercase tracking-[0.2em] text-white/40">Navigacija</p>
            <ul className="mt-6 space-y-3 text-sm text-white/80">
              <li><Link to="/" className="link-underline">Apie mus</Link></li>
              <li><Link to="/obrien-amatek" className="link-underline">Obrien Amatek</Link></li>
              <li><Link to="/pepperl-fuchs" className="link-underline">Pepperl+Fuchs</Link></li>
              <li><Link to="/kontaktai" className="link-underline">Kontaktai</Link></li>
            </ul>
          </div>

          <div className="md:col-span-4">
            <p className="text-[11px] uppercase tracking-[0.2em] text-white/40">Kontaktai</p>
            <ul className="mt-6 space-y-3 text-sm text-white/80">
              <li>UAB Medianta</li>
              <li>Savanorių pr. 178, Vilnius, Lietuva</li>
              <li>+370 600 00000</li>
              <li>info@medianta.lt</li>
            </ul>
          </div>
        </div>

        <div className="mt-20 pt-8 border-t border-white/10 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-xs text-white/40">
          <p>© {new Date().getFullYear()} Medianta. Visos teisės saugomos.</p>
          <p>Pramoninės saugos sprendimai • Lietuva</p>
        </div>
      </div>
    </footer>
  );
}
