import { createFileRoute } from "@tanstack/react-router";
import { FileText, MessageSquare, Calculator, PackageCheck, Headphones, ShieldCheck } from "lucide-react";

export const Route = createFileRoute("/policies")({
  head: () => ({
    meta: [
      { title: "Policies — Deligent Elv Industrial Import and Export Limited" },
      { name: "description", content: "Inquiry, quotation, availability, communication and privacy notices for our B2B product display website." },
    ],
  }),
  component: PoliciesPage,
});

const SECTIONS = [
  {
    icon: FileText,
    t: "Product Information Notice",
    d: "Product information published on this website — including specifications, models, and images — is for reference and product display purposes. Final technical details should be confirmed during inquiry.",
  },
  {
    icon: MessageSquare,
    t: "Inquiry Policy",
    d: "Inquiries can be submitted through the Contact page. Please include product names, model numbers, and approximate quantities so our team can prepare a structured response.",
  },
  {
    icon: Calculator,
    t: "Quotation Policy",
    d: "Quotations are arranged after model and quantity confirmation. Pricing depends on availability, sourcing conditions, and order scope. All quotations are provided through direct communication.",
  },
  {
    icon: PackageCheck,
    t: "Availability Notice",
    d: "Availability status shown on product pages is indicative. Stock levels can change and must be confirmed before any commitment.",
  },
  {
    icon: Headphones,
    t: "Communication Policy",
    d: "We aim to respond to inquiries within standard working hours. Detailed product, packaging, and trade coordination information is provided through email communication.",
  },
  {
    icon: ShieldCheck,
    t: "Privacy Notice",
    d: "Information submitted through the contact form is used only to respond to your inquiry. We do not publish or share submitted contact details with third parties.",
  },
];

function PoliciesPage() {
  return (
    <div className="relative">
      <div className="absolute inset-x-0 top-0 h-72 bg-gradient-hero -z-10" />

      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="font-mono text-xs tracking-[0.3em] uppercase text-primary">// Policies</div>
        <h1 className="mt-3 text-4xl lg:text-5xl font-bold">Policies & Notices</h1>
        <p className="mt-4 text-muted-foreground max-w-2xl">
          This website is designed for product display and B2B inquiries.
          Pricing, availability, and order details are confirmed through direct
          communication.
        </p>

        <div className="mt-12 grid md:grid-cols-2 gap-4">
          {SECTIONS.map((s, i) => (
            <div key={s.t} className="glass rounded-2xl p-6 hover-lift">
              <div className="flex items-center justify-between">
                <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-gradient-cyan text-primary-foreground">
                  <s.icon className="h-5 w-5" />
                </div>
                <span className="font-mono text-xs text-muted-foreground">0{i + 1}</span>
              </div>
              <h2 className="mt-4 font-semibold text-lg">{s.t}</h2>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.d}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 glass rounded-2xl p-6 border-l-2 border-primary text-sm text-muted-foreground">
          <strong className="text-foreground">Note:</strong> No online checkout, shopping cart,
          or online payment is provided on this website. All orders and pricing
          must be confirmed through direct communication.
        </div>
      </div>
    </div>
  );
}
