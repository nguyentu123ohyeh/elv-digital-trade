import { createFileRoute, Link } from "@tanstack/react-router";
import { Boxes, Globe2, Users2, Target, Lightbulb, Handshake, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us — Deligent Elv Industrial Import and Export Limited" },
      { name: "description", content: "Computer components and electronics trading company focused on B2B procurement and import-export coordination." },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden py-24">
        <div className="absolute inset-0 bg-gradient-hero" />
        <div className="absolute inset-0 grid-bg opacity-40" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="font-mono text-xs tracking-[0.3em] uppercase text-primary">// About</div>
          <h1 className="mt-3 text-4xl lg:text-6xl font-bold max-w-4xl">
            A trading partner for <span className="text-gradient">computer components</span> & electronics.
          </h1>
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl">
            Deligent Elv Industrial Import and Export Limited focuses on supplying
            computer components, PC hardware, electronic accessories, and
            technology-related products for business customers worldwide.
          </p>
        </div>
      </section>

      {/* Intro split */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="font-mono text-xs tracking-[0.3em] uppercase text-primary">// 01 — Company Introduction</div>
            <h2 className="mt-3 text-3xl font-bold">Built around hardware sourcing & trading</h2>
            <p className="mt-5 text-muted-foreground leading-relaxed">
              We work as a dedicated trading and supply company in the computer
              components industry. Our focus is on accurate product information,
              clear specifications, and reliable communication for resellers,
              procurement buyers, and technology distributors.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              From storage and memory to motherboards, GPUs, power supplies, cooling,
              and networking equipment — our catalog is structured to support
              technology supply across regions.
            </p>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-glow opacity-60 blur-2xl" />
            <div className="relative glass rounded-2xl p-8 grid-bg">
              <div className="grid grid-cols-3 gap-6">
                {[
                  ["9+", "Categories"], ["27+", "Models"], ["B2B", "Focus"],
                  ["I/E", "Trading"], ["Global", "Reach"], ["24/7", "Inquiry"],
                ].map(([v, l]) => (
                  <div key={l} className="text-center">
                    <div className="text-2xl font-bold text-gradient">{v}</div>
                    <div className="text-[10px] mt-1 uppercase tracking-widest font-mono text-muted-foreground">{l}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Business Scope */}
      <section className="py-20 relative">
        <div className="absolute inset-0 circuit-bg opacity-30" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="font-mono text-xs tracking-[0.3em] uppercase text-primary">// 02 — Business Scope</div>
          <h2 className="mt-3 text-3xl font-bold">What we trade</h2>
          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-5 gap-3">
            {[
              "Computer components", "PC hardware", "Storage devices", "Memory products",
              "Motherboards", "Power supplies", "Cooling accessories", "Networking equipment",
              "Technology accessories", "Import-export support",
            ].map((s, i) => (
              <div key={s} className="glass rounded-lg p-4 hover-lift">
                <div className="font-mono text-[10px] text-primary">{String(i + 1).padStart(2, "0")}</div>
                <div className="mt-1 text-sm font-medium">{s}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Customers */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="font-mono text-xs tracking-[0.3em] uppercase text-primary">// 03 — Our Customers</div>
          <h2 className="mt-3 text-3xl font-bold">Who we work with</h2>
          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { i: Users2, t: "Resellers" },
              { i: Boxes, t: "Procurement Buyers" },
              { i: Globe2, t: "Distributors" },
              { i: Handshake, t: "Repair Providers" },
              { i: Target, t: "Office Suppliers" },
              { i: Lightbulb, t: "PC Assemblers" },
              { i: Users2, t: "B2B Customers" },
              { i: Boxes, t: "Bulk Buyers" },
            ].map((c) => (
              <div key={c.t} className="bg-surface border border-border/60 rounded-xl p-6 hover-lift">
                <c.i className="h-6 w-6 text-primary" />
                <div className="mt-3 font-medium">{c.t}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Strengths timeline */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-hero opacity-50" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="font-mono text-xs tracking-[0.3em] uppercase text-primary">// 04 — Our Strengths</div>
          <h2 className="mt-3 text-3xl font-bold">Where we add value</h2>
          <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              "Product variety across categories",
              "Clear, structured communication",
              "Flexible inquiry support",
              "Suitable for bulk procurement",
              "Detailed technical product information",
              "Export-oriented coordination",
            ].map((t, i) => (
              <div key={t} className="glass rounded-xl p-6 hover-lift">
                <div className="font-mono text-xs text-primary">0{i + 1}</div>
                <div className="mt-2 font-medium">{t}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Working Principle */}
      <section className="py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <div className="font-mono text-xs tracking-[0.3em] uppercase text-primary">// 05 — Working Principle</div>
          <h2 className="mt-3 text-3xl lg:text-4xl font-bold">
            Communication, accuracy, <span className="text-gradient">cooperation.</span>
          </h2>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            We believe that clear communication, accurate product information, and
            reliable coordination are important for long-term business cooperation.
          </p>
          <Link to="/contact" className="mt-8 inline-flex items-center gap-2 rounded-md bg-gradient-cyan px-6 py-3 font-medium text-primary-foreground hover:opacity-90 transition">
            Talk to us <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
