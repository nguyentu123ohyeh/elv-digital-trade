import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Mail, Clock, Building2, CheckCircle2, Send } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Us — Deligent Elv Industrial Import and Export Limited" },
      { name: "description", content: "Send a product inquiry to Deligent Elv. Our team responds with specifications and quotation arrangements." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [sent, setSent] = useState(false);

  return (
    <div className="relative">
      <div className="absolute inset-0 circuit-bg opacity-30 pointer-events-none" />
      <div className="absolute inset-x-0 top-0 h-80 bg-gradient-hero -z-10" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="font-mono text-xs tracking-[0.3em] uppercase text-primary">// Contact</div>
        <h1 className="mt-3 text-4xl lg:text-5xl font-bold">Send us your inquiry</h1>
        <p className="mt-4 text-muted-foreground max-w-2xl">
          Send us your inquiry and our team will contact you with product
          information, specifications, and quotation arrangements.
        </p>

        <div className="mt-12 grid lg:grid-cols-5 gap-8">
          {/* Info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="glass rounded-2xl p-6">
              <Building2 className="h-6 w-6 text-primary" />
              <div className="mt-3 text-xs font-mono uppercase tracking-widest text-muted-foreground">Company</div>
              <div className="mt-1 font-semibold leading-tight">
                Deligent Elv Industrial Import and Export Limited
              </div>
            </div>
            <div className="glass rounded-2xl p-6">
              <Mail className="h-6 w-6 text-primary" />
              <div className="mt-3 text-xs font-mono uppercase tracking-widest text-muted-foreground">Email</div>
<<<<<<< HEAD
              <div className="mt-1 font-mono text-sm">sales@deligentelvindustrial.com</div>
=======
              <div className="mt-1 font-mono text-sm">your-email@example.com</div>
>>>>>>> 8cd8b5a4435d8b752b88c74018e6f3a86367c10a
            </div>
            <div className="glass rounded-2xl p-6">
              <Clock className="h-6 w-6 text-primary" />
              <div className="mt-3 text-xs font-mono uppercase tracking-widest text-muted-foreground">Working Hours</div>
              <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
                <li>Mon – Fri: 9:00 AM – 6:00 PM</li>
                <li>Saturday: 9:00 AM – 12:00 PM</li>
                <li>Sunday: Closed</li>
              </ul>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-3">
            <div className="relative glass rounded-2xl p-6 lg:p-8">
              {sent ? (
                <div className="py-16 text-center">
                  <CheckCircle2 className="mx-auto h-14 w-14 text-circuit" />
                  <h2 className="mt-4 text-2xl font-bold">Inquiry sent</h2>
                  <p className="mt-2 text-muted-foreground">
                    Thank you. Our team will contact you with product information.
                  </p>
                  <button
                    onClick={() => setSent(false)}
                    className="mt-6 px-5 py-2 rounded-md border border-border bg-surface hover:bg-surface-elevated text-sm"
                  >
                    Send another inquiry
                  </button>
                </div>
              ) : (
                <form
                  onSubmit={(e) => { e.preventDefault(); setSent(true); }}
                  className="space-y-4"
                >
                  <div className="grid sm:grid-cols-2 gap-4">
                    <Field label="Full Name" name="name" required />
                    <Field label="Company Name" name="company" />
                  </div>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <Field label="Email Address" name="email" type="email" required />
                    <Field label="Phone Number" name="phone" />
                  </div>
                  <Field label="Product Interested In" name="product" placeholder="e.g. DDR4 16GB, 750W PSU, NVMe SSD..." />
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-widest text-muted-foreground mb-2">
                      Message
                    </label>
                    <textarea
                      name="message"
                      rows={5}
                      required
                      className="w-full px-4 py-3 rounded-lg bg-surface border border-border/60 focus:outline-none focus:border-primary text-sm resize-none"
                      placeholder="Quantities, model numbers, delivery destination..."
                    />
                  </div>
                  <button
                    type="submit"
                    className="inline-flex items-center gap-2 rounded-md bg-gradient-cyan px-6 py-3 font-medium text-primary-foreground hover:opacity-90 transition glow"
                  >
                    Send Inquiry <Send className="h-4 w-4" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Field({
  label, name, type = "text", required, placeholder,
}: { label: string; name: string; type?: string; required?: boolean; placeholder?: string }) {
  return (
    <div>
      <label className="block text-xs font-mono uppercase tracking-widest text-muted-foreground mb-2">
        {label}{required && <span className="text-primary"> *</span>}
      </label>
      <input
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="w-full px-4 py-3 rounded-lg bg-surface border border-border/60 focus:outline-none focus:border-primary text-sm"
      />
    </div>
  );
}
