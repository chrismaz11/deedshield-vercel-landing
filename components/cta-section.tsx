import Link from "next/link"
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { ContactForm } from "@/components/contact-form";

export function CTASection() {
  return (
    <section id="pilot" className="bg-primary py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-primary-foreground sm:text-4xl text-balance">
            Secure Your Chain of Title
          </h2>
          <p className="mt-4 text-lg text-primary-foreground/80 text-pretty">
            We are currently accepting partners for a 60-Day &ldquo;Watch &
            Verify&rdquo; Pilot. Validate the efficacy of cryptographic
            pre-checks in your live environment with zero operational risk.
          </p>
          <div className="mt-10">
            <ContactForm
              trigger={
                <Button size="lg" variant="secondary" className="font-medium">
                  Initialize Pilot Protocol
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              }
            />
          </div>
        </div>
      </div>
    </section>
  );
}
