import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { Plus, Minus, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: "FAQ — Deligent Elv Industrial Import and Export Limited" },
      { name: "description", content: "Frequently asked questions about products, inquiries, quotations and trading." },
    ],
  }),
  component: FAQPage,
});

const FAQS: { q: string; a: string }[] = [
  { q: "What types of computer components do you supply?",
    a: "We supply a range of computer components including CPUs, RAM, SSDs, motherboards, GPUs, power supplies, cooling components, networking devices, and computer accessories." },
  { q: "Can I request product specifications before ordering?",
    a: "Yes. Send us the model numbers or product list and we will provide structured specification details and additional documentation when available." },
  { q: "Do you support bulk inquiries?",
    a: "Yes. Bulk inquiries are welcome. Please share quantity, model, and destination so we can prepare an appropriate quotation." },
  { q: "Are the products available for international trade?",
    a: "Yes. We coordinate import and export trading and work with logistics partners for international product supply." },
  { q: "How can I get a quotation?",
    a: "Send your requirement through the Contact page. After confirming model and quantity, we arrange the quotation and respond by email." },
  { q: "Do you provide product images and model details?",
    a: "Yes. Product images, model numbers, and specifications can be shared as part of the inquiry response." },
  { q: "Can I contact you for specific models not listed on the website?",
    a: "Yes. The website shows a representative selection of our catalog. Please contact us directly for additional models or sourcing requests." },
  { q: "Is there an online checkout system?",
    a: "No. This website is designed for product display and business inquiries. Please contact us directly for pricing, availability, and order details." },
];

function FAQPage() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="relative">
      <div className="absolute inset-x-0 top-0 h-72 bg-gradient-hero -z-10" />

      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="font-mono text-xs tracking-[0.3em] uppercase text-primary">// FAQ</div>
        <h1 className="mt-3 text-4xl lg:text-5xl font-bold">Frequently Asked Questions</h1>
        <p className="mt-4 text-muted-foreground max-w-2xl">
          Common questions about our products, inquiries, and trading process.
        </p>

        <div className="mt-12 space-y-3">
          {FAQS.map((f, i) => {
            const isOpen = open === i;
            return (
              <div key={f.q} className="glass rounded-xl overflow-hidden">
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
                >
                  <span className="flex items-start gap-4">
                    <span className="font-mono text-xs text-primary mt-1">{String(i + 1).padStart(2, "0")}</span>
                    <span className="font-medium">{f.q}</span>
                  </span>
                  <span className="shrink-0 w-8 h-8 rounded-full bg-surface-elevated flex items-center justify-center">
                    {isOpen ? <Minus className="h-4 w-4 text-primary" /> : <Plus className="h-4 w-4" />}
                  </span>
                </button>
                {isOpen && (
                  <div className="px-6 pb-5 pl-16 text-sm text-muted-foreground leading-relaxed animate-fade-up">
                    {f.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="mt-12 glass rounded-2xl p-8 text-center">
          <h2 className="text-2xl font-bold">Still have questions?</h2>
          <p className="mt-2 text-muted-foreground">Send your inquiry and we'll get back with details.</p>
          <Link to="/contact" className="mt-6 inline-flex items-center gap-2 rounded-md bg-gradient-cyan px-6 py-3 font-medium text-primary-foreground hover:opacity-90 transition">
            Contact Us <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
