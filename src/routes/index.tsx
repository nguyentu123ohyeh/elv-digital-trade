import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Cpu, MemoryStick, HardDrive, CircuitBoard, Monitor, Zap, Snowflake,
  Keyboard, Network, ArrowRight, Globe2, Boxes, Headphones, ShieldCheck,
  Search, FileText, Calculator, PackageCheck, Truck, MessagesSquare,
} from "lucide-react";
import { PRODUCTS } from "@/data/products";
import { ProductCard } from "@/components/ProductCard";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Deligent Elv Industrial Import and Export Limited — Computer Components Trading" },
      { name: "description", content: "Reliable computer components, PC hardware, and electronics import-export trading partner for B2B procurement." },
    ],
  }),
  component: HomePage,
});

const CATEGORIES = [
  { name: "CPU & Processors", icon: Cpu, desc: "Latest-gen and legacy desktop processors." },
  { name: "RAM Memory", icon: MemoryStick, desc: "DDR4 and DDR5 desktop & laptop modules." },
  { name: "SSD & Storage", icon: HardDrive, desc: "NVMe, SATA SSDs and storage accessories." },
  { name: "Motherboards", icon: CircuitBoard, desc: "Intel and AMD compatible boards." },
  { name: "Graphics Cards", icon: Monitor, desc: "Entry to high-performance GPUs." },
  { name: "Power Supplies", icon: Zap, desc: "Reliable PSUs from 500W to 1000W+." },
  { name: "Cooling Components", icon: Snowflake, desc: "Air coolers, AIO liquid, fans, paste." },
  { name: "Computer Accessories", icon: Keyboard, desc: "Peripherals, cables, docking, enclosures." },
  { name: "Networking Devices", icon: Network, desc: "Switches, adapters, wireless devices." },
];

const STATS = [
  { v: "9+", l: "Product Categories" },
  { v: "200+", l: "Models Supported" },
  { v: "Global", l: "Trading Capability" },
  { v: "B2B", l: "Procurement Focus" },
];

const WORKFLOW = [
  { i: Search, t: "Product Inquiry", d: "Send your product list or requirement." },
  { i: FileText, t: "Spec Confirmation", d: "Confirm model and technical details." },
  { i: Calculator, t: "Quotation", d: "Receive structured quotation." },
  { i: PackageCheck, t: "Order Coordination", d: "Confirm packaging and quantity." },
  { i: Truck, t: "Delivery Support", d: "Coordinate logistics and shipping." },
  { i: MessagesSquare, t: "After-sales", d: "Ongoing communication & support." },
];

function HomePage() {
  const featured = PRODUCTS.slice(0, 6);

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-40" />
        <div className="absolute inset-0 bg-gradient-hero" />
        <div className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full bg-gradient-cyan opacity-20 blur-3xl animate-pulse-glow" />
        <div className="absolute -bottom-40 -left-20 w-[400px] h-[400px] rounded-full bg-accent opacity-20 blur-3xl animate-pulse-glow" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 animate-fade-up">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass text-xs font-mono tracking-wider uppercase">
                <span className="w-1.5 h-1.5 rounded-full bg-circuit animate-pulse" />
                Computer Components · Electronics · Trading
              </div>
              <h1 className="mt-6 text-4xl sm:text-5xl lg:text-7xl font-bold leading-[1.05]">
                Reliable <span className="text-gradient">Computer Components</span><br />
                & Technology Hardware Trading Solutions
              </h1>
              <p className="mt-6 text-lg text-muted-foreground max-w-2xl">
                Deligent Elv Industrial Import and Export Limited supplies PC hardware,
                electronic accessories, and technology-related products for B2B
                customers, resellers, and procurement buyers worldwide.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link to="/products" className="inline-flex items-center gap-2 rounded-md bg-gradient-cyan px-6 py-3 font-medium text-primary-foreground hover:opacity-90 transition glow">
                  Explore Products <ArrowRight className="h-4 w-4" />
                </Link>
                <Link to="/contact" className="inline-flex items-center gap-2 rounded-md border border-border bg-surface/60 backdrop-blur px-6 py-3 font-medium hover:bg-surface-elevated transition">
                  Contact Us
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5 relative">
              <div className="relative grid grid-cols-2 gap-4">
                {[Cpu, MemoryStick, CircuitBoard, HardDrive].map((Icon, i) => (
                  <div
                    key={i}
                    className="glass rounded-2xl p-6 hover-lift animate-float"
                    style={{ animationDelay: `${i * 0.4}s` }}
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-cyan text-primary-foreground">
                      <Icon className="h-6 w-6" />
                    </div>
                    <div className="mt-4 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                      Module {String(i + 1).padStart(2, "0")}
                    </div>
                    <div className="mt-1 font-semibold">
                      {["CPU", "RAM", "Mainboard", "Storage"][i]}
                    </div>
                  </div>
                ))}
                <div className="absolute -inset-8 -z-10 bg-gradient-glow opacity-50" />
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-4">
            {STATS.map((s) => (
              <div key={s.l} className="glass rounded-xl p-5 text-center">
                <div className="text-3xl font-bold text-gradient">{s.v}</div>
                <div className="mt-1 text-xs uppercase tracking-widest text-muted-foreground font-mono">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who We Are */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="font-mono text-xs tracking-[0.3em] uppercase text-primary">// Who We Are</div>
            <h2 className="mt-3 text-3xl lg:text-4xl font-bold">A trading partner built for technology procurement</h2>
            <p className="mt-5 text-muted-foreground leading-relaxed">
              Deligent Elv Industrial Import and Export Limited focuses on supplying
              computer components, PC hardware, electronic accessories, and
              technology-related products. We work with business customers, resellers,
              and procurement buyers, providing flexible sourcing and clear product
              communication.
            </p>
            <div className="mt-6 grid sm:grid-cols-2 gap-4">
              {[
                { i: Boxes, t: "Wide product range", d: "From storage to networking." },
                { i: Globe2, t: "Import-export ready", d: "International coordination." },
                { i: ShieldCheck, t: "Stable info", d: "Clear specs & documentation." },
                { i: Headphones, t: "Responsive comms", d: "Inquiry and support follow-up." },
              ].map((f) => (
                <div key={f.t} className="flex gap-3 p-4 rounded-lg bg-surface border border-border/60">
                  <f.i className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <div>
                    <div className="font-medium text-sm">{f.t}</div>
                    <div className="text-xs text-muted-foreground">{f.d}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-glow opacity-60 blur-2xl" />
            <div className="relative glass rounded-2xl p-8 grid-bg">
              <div className="font-mono text-xs text-primary mb-4">{`> system.identify()`}</div>
              <pre className="text-xs sm:text-sm text-muted-foreground font-mono leading-relaxed overflow-x-auto">
{`{
  company:    "Deligent Elv Industrial",
  industry:   "Computer Components Trading",
  scope:      ["PC Hardware", "Electronics",
               "Accessories", "Networking"],
  customers:  ["Resellers", "B2B Buyers",
               "Distributors", "Repair Services"],
  trade:      "Import / Export",
  status:     "OPERATIONAL"
}`}
              </pre>
              <div className="mt-4 flex items-center gap-2 text-xs font-mono text-circuit">
                <span className="w-1.5 h-1.5 rounded-full bg-circuit animate-pulse" />
                Connected · ready for inquiry
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-20 relative">
        <div className="absolute inset-0 grid-bg opacity-30" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4 mb-10">
            <div>
              <div className="font-mono text-xs tracking-[0.3em] uppercase text-primary">// Catalog</div>
              <h2 className="mt-3 text-3xl lg:text-4xl font-bold">Core Product Categories</h2>
            </div>
            <Link to="/products" className="inline-flex items-center gap-1 text-primary text-sm hover:gap-2 transition-all">
              Browse all products <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {CATEGORIES.map((c) => (
              <Link
                key={c.name}
                to="/products"
                className="group relative overflow-hidden rounded-xl bg-surface border border-border/60 p-6 hover-lift glow-border"
              >
                <div className="flex items-start justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-cyan text-primary-foreground">
                    <c.icon className="h-6 w-6" />
                  </div>
                  <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition" />
                </div>
                <div className="mt-5 font-semibold text-lg">{c.name}</div>
                <div className="mt-1 text-sm text-muted-foreground">{c.desc}</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto">
            <div className="font-mono text-xs tracking-[0.3em] uppercase text-primary">// Advantages</div>
            <h2 className="mt-3 text-3xl lg:text-4xl font-bold">Why Choose Us</h2>
          </div>
          <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              "Wide range of computer components",
              "Suitable for B2B procurement",
              "Flexible sourcing support",
              "Stable product information",
              "Responsive communication",
              "Import-export trading experience",
              "Clear quotation and documentation",
              "Reseller-friendly coordination",
              "Technical specification support",
            ].map((t, i) => (
              <div key={t} className="glass rounded-xl p-6 hover-lift">
                <div className="font-mono text-xs text-primary">{String(i + 1).padStart(2, "0")}</div>
                <div className="mt-2 font-medium">{t}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Workflow */}
      <section className="py-20 relative">
        <div className="absolute inset-0 circuit-bg opacity-30" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto">
            <div className="font-mono text-xs tracking-[0.3em] uppercase text-primary">// Process</div>
            <h2 className="mt-3 text-3xl lg:text-4xl font-bold">Technology Supply Workflow</h2>
          </div>
          <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {WORKFLOW.map((w, i) => (
              <div key={w.t} className="relative glass rounded-xl p-6 hover-lift">
                <div className="absolute -top-3 -left-3 w-10 h-10 rounded-lg bg-gradient-cyan text-primary-foreground font-mono font-bold flex items-center justify-center text-sm">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <w.i className="h-6 w-6 text-primary mt-2" />
                <div className="mt-3 font-semibold">{w.t}</div>
                <div className="mt-1 text-sm text-muted-foreground">{w.d}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4 mb-10">
            <div>
              <div className="font-mono text-xs tracking-[0.3em] uppercase text-primary">// Featured</div>
              <h2 className="mt-3 text-3xl lg:text-4xl font-bold">Featured Products</h2>
            </div>
            <Link to="/products" className="inline-flex items-center gap-1 text-primary text-sm hover:gap-2 transition-all">
              View full catalog <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {featured.map((p) => <ProductCard key={p.id} product={p} />)}
          </div>
        </div>
      </section>

      {/* Global Trading */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-40" />
        <div className="absolute inset-0 bg-gradient-hero opacity-80" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="font-mono text-xs tracking-[0.3em] uppercase text-primary">// Reach</div>
            <h2 className="mt-3 text-3xl lg:text-4xl font-bold">Global Trading Capability</h2>
            <p className="mt-5 text-muted-foreground">
              We support international product supply communication and import-export
              coordination across regions, working with logistics partners to enable
              cross-border B2B trading of computer components and electronics.
            </p>
            <Link to="/contact" className="mt-6 inline-flex items-center gap-2 rounded-md bg-gradient-cyan px-6 py-3 font-medium text-primary-foreground hover:opacity-90 transition">
              Start an Inquiry <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="relative aspect-square">
            <div className="absolute inset-0 rounded-full border border-primary/30 animate-pulse-glow" />
            <div className="absolute inset-8 rounded-full border border-primary/20" />
            <div className="absolute inset-16 rounded-full border border-primary/10" />
            <div className="absolute inset-0 flex items-center justify-center">
              <Globe2 className="h-32 w-32 text-primary opacity-60" strokeWidth={1} />
            </div>
            {[0, 60, 120, 180, 240, 300].map((deg, i) => (
              <div
                key={i}
                className="absolute top-1/2 left-1/2 w-3 h-3 rounded-full bg-gradient-cyan"
                style={{ transform: `rotate(${deg}deg) translate(140px) rotate(-${deg}deg)` }}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-3xl glass p-10 lg:p-16 text-center">
            <div className="absolute inset-0 bg-gradient-glow opacity-50" />
            <div className="relative">
              <h2 className="text-3xl lg:text-5xl font-bold">
                Looking for reliable<br /><span className="text-gradient">computer component supply?</span>
              </h2>
              <p className="mt-5 text-muted-foreground max-w-xl mx-auto">
                Send us your inquiry — our team will respond with product information,
                specifications, and quotation arrangements.
              </p>
              <Link to="/contact" className="mt-8 inline-flex items-center gap-2 rounded-md bg-gradient-cyan px-8 py-4 font-medium text-primary-foreground hover:opacity-90 transition glow">
                Contact Us <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
