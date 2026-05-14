import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import type { Product } from "@/data/products";

export function ProductCard({ product }: { product: Product }) {
  return (
    <Link
      to="/products/$slug"
      params={{ slug: product.slug }}
      className="group relative overflow-hidden rounded-xl bg-surface border border-border/60 hover-lift block"
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-gradient-hero">
        <div className="absolute inset-0 circuit-bg opacity-40" />
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110 mix-blend-luminosity opacity-90 group-hover:opacity-100"
        />
        <div className="absolute top-3 left-3 px-2 py-1 rounded-md text-[10px] font-mono uppercase tracking-wider bg-background/70 backdrop-blur border border-border/60">
          {product.category}
        </div>
        <div className="absolute top-3 right-3 px-2 py-1 rounded-md text-[10px] font-mono bg-primary/20 text-primary border border-primary/40">
          {product.availabilityStatus}
        </div>
      </div>
      <div className="p-5">
        <div className="text-[10px] font-mono text-muted-foreground tracking-widest uppercase">{product.model}</div>
        <h3 className="mt-1 text-lg font-semibold leading-tight group-hover:text-primary transition-colors">
          {product.name}
        </h3>
        <p className="mt-2 text-sm text-muted-foreground line-clamp-2">{product.shortDescription}</p>
        <div className="mt-4 inline-flex items-center gap-1 text-sm text-primary">
          View Details <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </div>
      </div>
    </Link>
  );
}
