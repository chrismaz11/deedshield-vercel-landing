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
            Reduce Post-Recording Risk Before It Enters the Record
          </h2>
          <p className="mt-4 text-lg text-primary-foreground/80 text-pretty">
            We are currently accepting title companies and county recorders for
            a paid, 60-day pilot program. Assess whether pre-recording
            verification improves workflow visibility and audit documentation in
            live operational conditions—with no system replacement required.
          </p>
          <div className="mt-10">
            <ContactForm
              trigger={
                <Button size="lg" variant="secondary" className="font-medium">
                  Discuss Pilot Program
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
