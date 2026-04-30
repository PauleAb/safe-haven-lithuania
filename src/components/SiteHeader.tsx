import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const nav = [
  { to: "/", label: "Apie mus" },
  { to: "/obrien-amatek", label: "Obrien Amatek" },
  { to: "/pepperl-fuchs", label: "Pepperl+Fuchs" },
  { to: "/kontaktai", label: "Kontaktai" },
] as const;

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-background/85 backdrop-blur-md border-b border-hairline"
          : "bg-transparent"
      }`}
    >
      <div className="container-px mx-auto max-w-[1400px] flex items-center justify-between h-16 md:h-20">
        <Link to="/" className="flex items-center gap-2 group" onClick={() => setOpen(false)}>
          <span className="w-7 h-7 bg-ink flex items-center justify-center text-primary-foreground text-[11px] font-semibold tracking-widest">
            M
          </span>
          <span className="font-display text-base font-medium tracking-tight">Medianta</span>
        </Link>

        <nav className="hidden md:flex items-center gap-10">
          {nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              activeOptions={{ exact: true }}
              className="text-[13px] tracking-wide text-ink-soft hover:text-ink transition-colors data-[status=active]:text-ink data-[status=active]:font-medium"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <Link
          to="/kontaktai"
          className="hidden md:inline-flex items-center gap-2 text-[13px] tracking-wide text-ink link-underline"
        >
          Susisiekti
        </Link>

        <button
          aria-label="Meniu"
          className="md:hidden p-2 -mr-2"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-hairline bg-background">
          <nav className="container-px mx-auto py-6 flex flex-col gap-5">
            {nav.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                activeOptions={{ exact: true }}
                onClick={() => setOpen(false)}
                className="text-base text-ink-soft data-[status=active]:text-ink data-[status=active]:font-medium"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
