import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { Search, ChevronLeft, ChevronRight } from "lucide-react";
import { PRODUCTS, CATEGORIES } from "@/data/products";
import { ProductCard } from "@/components/ProductCard";

export const Route = createFileRoute("/products")({
  head: () => ({
    meta: [
      { title: "Products — Deligent Elv Industrial Import and Export Limited" },
      { name: "description", content: "Computer components, PC hardware, storage, memory, GPUs, networking and accessories catalog." },
    ],
  }),
  component: ProductsPage,
});

const PER_PAGE = 9;
const SORTS = ["Default", "Name A–Z", "Name Z–A", "Category"] as const;

function ProductsPage() {
  const [q, setQ] = useState("");
  const [cat, setCat] = useState<string>("All Products");
  const [sort, setSort] = useState<(typeof SORTS)[number]>("Default");
  const [page, setPage] = useState(1);

  const filtered = useMemo(() => {
    const term = q.trim().toLowerCase();
    let list = PRODUCTS.filter((p) => {
      if (cat !== "All Products" && p.category !== cat) return false;
      if (!term) return true;
      const hay = [
        p.name, p.category, p.model, p.shortDescription,
        ...Object.values(p.specifications),
      ].join(" ").toLowerCase();
      return hay.includes(term);
    });
    if (sort === "Name A–Z") list = [...list].sort((a, b) => a.name.localeCompare(b.name));
    if (sort === "Name Z–A") list = [...list].sort((a, b) => b.name.localeCompare(a.name));
    if (sort === "Category") list = [...list].sort((a, b) => a.category.localeCompare(b.category));
    return list;
  }, [q, cat, sort]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / PER_PAGE));
  const safePage = Math.min(page, totalPages);
  const pageItems = filtered.slice((safePage - 1) * PER_PAGE, safePage * PER_PAGE);

  const setFilter = (fn: () => void) => { fn(); setPage(1); };

  return (
    <div className="relative">
      <div className="absolute inset-x-0 top-0 h-64 bg-gradient-hero -z-10" />
      <div className="absolute inset-x-0 top-0 h-64 grid-bg opacity-30 -z-10" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="font-mono text-xs tracking-[0.3em] uppercase text-primary">// Catalog</div>
        <h1 className="mt-3 text-4xl lg:text-5xl font-bold">Product Catalog</h1>
        <p className="mt-3 text-muted-foreground max-w-2xl">
          Browse our selection of computer components and electronics. For pricing,
          stock and bulk orders, please send an inquiry.
        </p>

        {/* Controls */}
        <div className="mt-10 grid lg:grid-cols-12 gap-4">
          <div className="lg:col-span-5 relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search by name, model, category, specifications..."
              value={q}
              onChange={(e) => setFilter(() => setQ(e.target.value))}
              className="w-full pl-10 pr-4 py-3 rounded-lg bg-surface border border-border/60 focus:outline-none focus:border-primary text-sm"
            />
          </div>
          <select
            value={cat}
            onChange={(e) => setFilter(() => setCat(e.target.value))}
            className="lg:col-span-4 px-4 py-3 rounded-lg bg-surface border border-border/60 focus:outline-none focus:border-primary text-sm"
          >
            <option>All Products</option>
            {CATEGORIES.map((c) => <option key={c}>{c}</option>)}
          </select>
          <select
            value={sort}
            onChange={(e) => setSort(e.target.value as (typeof SORTS)[number])}
            className="lg:col-span-3 px-4 py-3 rounded-lg bg-surface border border-border/60 focus:outline-none focus:border-primary text-sm"
          >
            {SORTS.map((s) => <option key={s}>{s}</option>)}
          </select>
        </div>

        <div className="mt-6 flex items-center justify-between text-sm text-muted-foreground">
          <div>
            Showing <span className="text-foreground font-medium">{pageItems.length}</span> of{" "}
            <span className="text-foreground font-medium">{filtered.length}</span> products
          </div>
          <div className="font-mono text-xs">Page {safePage} / {totalPages}</div>
        </div>

        {/* Grid */}
        {pageItems.length === 0 ? (
          <div className="mt-16 text-center text-muted-foreground">
            No products match your search. Try different keywords or category.
          </div>
        ) : (
          <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {pageItems.map((p) => <ProductCard key={p.id} product={p} />)}
          </div>
        )}

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="mt-12 flex items-center justify-center gap-2">
            <button
              onClick={() => setPage((p) => Math.max(1, p - 1))}
              disabled={safePage === 1}
              className="inline-flex items-center gap-1 px-4 py-2 rounded-md border border-border/60 bg-surface text-sm hover:bg-surface-elevated disabled:opacity-40 disabled:cursor-not-allowed"
            >
              <ChevronLeft className="h-4 w-4" /> Prev
            </button>
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((n) => (
              <button
                key={n}
                onClick={() => setPage(n)}
                className={`w-10 h-10 rounded-md text-sm font-medium transition ${
                  n === safePage
                    ? "bg-gradient-cyan text-primary-foreground"
                    : "bg-surface border border-border/60 hover:bg-surface-elevated"
                }`}
              >
                {n}
              </button>
            ))}
            <button
              onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
              disabled={safePage === totalPages}
              className="inline-flex items-center gap-1 px-4 py-2 rounded-md border border-border/60 bg-surface text-sm hover:bg-surface-elevated disabled:opacity-40 disabled:cursor-not-allowed"
            >
              Next <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
