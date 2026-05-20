import { Link } from "@tanstack/react-router";
import { Cpu, Mail, Clock } from "lucide-react";

export function Footer() {
  return (
    <footer className="mt-20 border-t border-border/50 bg-surface/50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 grid gap-10 lg:grid-cols-4">
        <div className="lg:col-span-2">
          <div className="flex items-center gap-2 mb-4">
            <div className="flex h-9 w-9 items-center justify-center rounded-md bg-gradient-cyan">
              <Cpu className="h-5 w-5 text-primary-foreground" />
            </div>
            <div className="font-semibold">Deligent Elv Industrial Import and Export Limited</div>
          </div>
          <p className="text-sm text-muted-foreground max-w-md">
            Reliable supplier of computer components, PC hardware, and electronic
            accessories for B2B procurement, resellers, and technology distributors.
          </p>
        </div>
        <div>
          <div className="text-xs font-mono uppercase tracking-[0.2em] text-primary mb-3">Navigate</div>
          <ul className="space-y-2 text-sm">
            <li><Link to="/" className="text-muted-foreground hover:text-foreground">Home</Link></li>
            <li><Link to="/products" className="text-muted-foreground hover:text-foreground">Products</Link></li>
            <li><Link to="/about" className="text-muted-foreground hover:text-foreground">About Us</Link></li>
            <li><Link to="/contact" className="text-muted-foreground hover:text-foreground">Contact Us</Link></li>
            <li><Link to="/faq" className="text-muted-foreground hover:text-foreground">FAQ</Link></li>
            <li><Link to="/policies" className="text-muted-foreground hover:text-foreground">Policies</Link></li>
          </ul>
        </div>
        <div>
          <div className="text-xs font-mono uppercase tracking-[0.2em] text-primary mb-3">Contact</div>
          <ul className="space-y-3 text-sm text-muted-foreground">
            <li className="flex items-start gap-2"><Mail className="h-4 w-4 mt-0.5 text-primary" /> sales@deligentelvindustrial.com</li>
            <li className="flex items-start gap-2"><Clock className="h-4 w-4 mt-0.5 text-primary" /> Mon–Fri 9:00–18:00</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border/50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-muted-foreground">
          <div>© {new Date().getFullYear()} Deligent Elv Industrial Import and Export Limited. All rights reserved.</div>
          <div className="font-mono">// computer components · electronics · trading</div>
        </div>
      </div>
    </footer>
  );
}
