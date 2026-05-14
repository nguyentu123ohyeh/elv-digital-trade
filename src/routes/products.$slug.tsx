import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowLeft, Mail, MessageSquare, FileText } from "lucide-react";
import { PRODUCTS } from "@/data/products";
import { ProductCard } from "@/components/ProductCard";

export const Route = createFileRoute("/products/$slug")({
  loader: ({ params }) => {
    const product = PRODUCTS.find((p) => p.slug === params.slug);
    if (!product) throw notFound();
    return { product };
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          { title: `${loaderData.product.name} — Deligent Elv` },
          { name: "description", content: loaderData.product.shortDescription },
        ]
      : [],
  }),
  notFoundComponent: () => (
    <div className="mx-auto max-w-3xl px-4 py-32 text-center">
      <h1 className="text-3xl font-bold">Product not found</h1>
      <p className="mt-3 text-muted-foreground">This product is no longer available.</p>
      <Link to="/products" className="mt-6 inline-flex items-center gap-2 text-primary">
        <ArrowLeft className="h-4 w-4" /> Back to catalog
      </Link>
    </div>
  ),
  errorComponent: ({ error }) => (
    <div className="mx-auto max-w-3xl px-4 py-32 text-center">
      <h1 className="text-2xl font-bold">Something went wrong</h1>
      <p className="mt-3 text-muted-foreground">{error.message}</p>
    </div>
  ),
  component: ProductDetail,
});

const TABS = ["Overview", "Specifications", "Applications", "Packaging & Supply", "Inquiry"] as const;

function ProductDetail() {
  const { product } = Route.useLoaderData();
  const [activeImg, setActiveImg] = useState(0);
  const [tab, setTab] = useState<(typeof TABS)[number]>("Overview");

  const related = PRODUCTS.filter((p) => p.category === product.category && p.id !== product.id).slice(0, 3);

  return (
    <div className="relative">
      <div className="absolute inset-x-0 top-0 h-80 bg-gradient-hero -z-10" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <Link to="/products" className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-primary">
          <ArrowLeft className="h-4 w-4" /> Back to catalog
        </Link>

        <div className="mt-8 grid lg:grid-cols-2 gap-10">
          {/* Gallery */}
          <div>
            <div className="relative overflow-hidden rounded-2xl glass aspect-square">
              <div className="absolute inset-0 circuit-bg opacity-40" />
              <img
                src={product.gallery[activeImg]}
                alt={product.name}
                className="relative h-full w-full object-cover mix-blend-luminosity opacity-90"
              />
              <div className="absolute top-4 left-4 px-3 py-1 rounded-md text-xs font-mono bg-background/70 backdrop-blur border border-border/60">
                {product.category}
              </div>
            </div>
            <div className="mt-4 grid grid-cols-3 gap-3">
              {product.gallery.map((g, i) => (
                <button
                  key={i}
                  onClick={() => setActiveImg(i)}
                  className={`relative aspect-square overflow-hidden rounded-lg border ${
                    activeImg === i ? "border-primary" : "border-border/60"
                  }`}
                >
                  <img src={g} alt="" className="h-full w-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Info */}
          <div>
            <div className="font-mono text-xs tracking-[0.3em] uppercase text-primary">{product.model}</div>
            <h1 className="mt-2 text-3xl lg:text-4xl font-bold">{product.name}</h1>
            <div className="mt-3 flex flex-wrap gap-2">
              <span className="px-3 py-1 rounded-full text-xs bg-surface border border-border/60">{product.category}</span>
              <span className="px-3 py-1 rounded-full text-xs bg-primary/15 text-primary border border-primary/40">
                {product.availabilityStatus}
              </span>
            </div>
            <p className="mt-5 text-muted-foreground leading-relaxed">{product.shortDescription}</p>

            <div className="mt-6 grid sm:grid-cols-2 gap-3">
              {Object.entries(product.specifications).slice(0, 4).map(([k, v]) => (
                <div key={k} className="p-3 rounded-lg bg-surface border border-border/60">
                  <div className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground">{k}</div>
                  <div className="text-sm font-medium mt-1">{v}</div>
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/contact" className="inline-flex items-center gap-2 rounded-md bg-gradient-cyan px-6 py-3 font-medium text-primary-foreground hover:opacity-90 transition glow">
                <Mail className="h-4 w-4" /> Contact Us
              </Link>
              <Link to="/contact" className="inline-flex items-center gap-2 rounded-md border border-border bg-surface/60 px-6 py-3 font-medium hover:bg-surface-elevated transition">
                <MessageSquare className="h-4 w-4" /> Request Information
              </Link>
            </div>

            <div className="mt-6 p-4 rounded-lg glass text-sm text-muted-foreground flex gap-3">
              <FileText className="h-5 w-5 text-primary shrink-0" />
              For pricing, stock availability, and order details, please contact us directly.
              Bulk and reseller inquiries are welcome.
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="mt-16">
          <div className="flex flex-wrap gap-1 border-b border-border/60">
            {TABS.map((t) => (
              <button
                key={t}
                onClick={() => setTab(t)}
                className={`px-4 py-3 text-sm font-medium transition relative ${
                  tab === t ? "text-primary" : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {t}
                {tab === t && <span className="absolute -bottom-px left-0 right-0 h-0.5 bg-gradient-cyan" />}
              </button>
            ))}
          </div>

          <div className="mt-8 animate-fade-up">
            {tab === "Overview" && (
              <div className="prose-invert max-w-3xl text-muted-foreground leading-relaxed">
                <p>{product.fullDescription}</p>
              </div>
            )}
            {tab === "Specifications" && (
              <div className="overflow-hidden rounded-xl border border-border/60">
                <table className="w-full text-sm">
                  <tbody>
                    {Object.entries(product.specifications).map(([k, v], i) => (
                      <tr key={k} className={i % 2 === 0 ? "bg-surface" : "bg-surface-elevated"}>
                        <td className="px-5 py-3 font-mono text-xs uppercase tracking-wider text-muted-foreground w-1/3">{k}</td>
                        <td className="px-5 py-3 font-medium">{v}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
            {tab === "Applications" && (
              <ul className="grid sm:grid-cols-2 gap-3 max-w-3xl">
                {product.applications.map((a) => (
                  <li key={a} className="flex items-start gap-3 p-4 rounded-lg bg-surface border border-border/60">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                    <span className="text-sm">{a}</span>
                  </li>
                ))}
              </ul>
            )}
            {tab === "Packaging & Supply" && (
              <div className="max-w-3xl space-y-3 text-muted-foreground">
                <p>{product.packagingInfo}</p>
                <ul className="space-y-2 text-sm">
                  <li>• Standard export carton packaging</li>
                  <li>• Bulk order support available</li>
                  <li>• Model and quantity confirmation required before quotation</li>
                </ul>
              </div>
            )}
            {tab === "Inquiry" && (
              <div className="max-w-3xl">
                <p className="text-muted-foreground">
                  For pricing, stock availability, and order details, please contact us directly.
                </p>
                <Link to="/contact" className="mt-5 inline-flex items-center gap-2 rounded-md bg-gradient-cyan px-6 py-3 font-medium text-primary-foreground hover:opacity-90 transition">
                  Send Inquiry <Mail className="h-4 w-4" />
                </Link>
              </div>
            )}
          </div>
        </div>

        {/* Related */}
        {related.length > 0 && (
          <div className="mt-20">
            <h2 className="text-2xl font-bold">Related Products</h2>
            <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {related.map((p) => <ProductCard key={p.id} product={p} />)}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
