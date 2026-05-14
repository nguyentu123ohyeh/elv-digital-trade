import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X, Cpu } from "lucide-react";

const links = [
  { to: "/", label: "Home" },
  { to: "/products", label: "Products" },
  { to: "/about", label: "About Us" },
  { to: "/contact", label: "Contact Us" },
  { to: "/faq", label: "FAQ" },
  { to: "/policies", label: "Policies" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 glass border-b border-border/50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link to="/" className="flex items-center gap-2 group">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-cyan blur-lg opacity-50 group-hover:opacity-80 transition" />
              <div className="relative flex h-9 w-9 items-center justify-center rounded-md bg-gradient-cyan text-primary-foreground">
                <Cpu className="h-5 w-5" />
              </div>
            </div>
            <div className="leading-tight">
              <div className="font-mono text-[10px] tracking-[0.2em] text-primary uppercase">Deligent Elv</div>
              <div className="text-sm font-semibold">Industrial I/E</div>
            </div>
          </Link>
          <nav className="hidden lg:flex items-center gap-1">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                className="px-3 py-2 text-sm text-muted-foreground hover:text-foreground transition relative"
                activeProps={{ className: "px-3 py-2 text-sm text-foreground font-medium" }}
                activeOptions={{ exact: l.to === "/" }}
              >
                {l.label}
              </Link>
            ))}
            <Link
              to="/contact"
              className="ml-3 inline-flex items-center rounded-md bg-gradient-cyan px-4 py-2 text-sm font-medium text-primary-foreground hover:opacity-90 transition"
            >
              Send Inquiry
            </Link>
          </nav>
          <button
            className="lg:hidden p-2 text-foreground"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>
      {open && (
        <div className="lg:hidden border-t border-border/50 glass">
          <div className="px-4 py-3 space-y-1">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className="block px-3 py-2 text-sm rounded-md hover:bg-surface-elevated"
              >
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
