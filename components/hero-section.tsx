import Link from "next/link"
import { Button } from "@/components/ui/button";
import { ArrowRight, ShieldCheck } from "lucide-react";
import { ContactForm } from "@/components/contact-form";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-background py-20 sm:py-28 lg:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-1.5 text-sm text-muted-foreground">
            <ShieldCheck className="h-4 w-4" />
            <span>Pre-Recording Verification Layer</span>
          </div>

          <h1 className="text-4xl font-semibold tracking-tight text-foreground sm:text-5xl lg:text-6xl text-balance">
            Pre-Recording Fraud Detection for Title Operations
          </h1>

          <p className="mt-6 text-lg leading-relaxed text-muted-foreground text-pretty">
            Deed Shield provides title companies and county recorders with an
            independent integrity checkpoint before documents enter the public
            record. Reduce exposure to post-recording fraud, unwind costs, and
            liability—without replacing existing systems or workflows.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <ContactForm
              trigger={
                <Button size="lg">
                  Contact Us
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              }
            />
          </div>
        </div>

        <div className="mx-auto mt-16 grid max-w-4xl grid-cols-2 gap-8 border-t border-border pt-12 sm:grid-cols-4">
          {[
            { value: "0", label: "Documents Stored" },
            { value: "SHA-256", label: "Hash Standard" },
            { value: "JWT", label: "Receipt Format" },
            { value: "60-Day", label: "Pilot Program" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
                {stat.value}
              </div>
              <div className="mt-1 text-sm text-muted-foreground">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
