"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Does Deed Shield replace the Notary?",
    answer:
      "No. The Notary performs their standard duties. Deed Shield validates the metadata and operator attestation after notarization but before recording.",
  },
  {
    question: 'Is the "Verification Receipt" legally binding?',
    answer:
      'A "PASS" result is a technical verification of data integrity and policy compliance. It does not constitute a legal opinion on title validity. The County Recorder remains the final legal authority.',
  },
  {
    question: "What happens if a document is flagged?",
    answer:
      'In "Watch & Verify" mode, a flag alerts your risk management team without blocking the transaction, allowing you to establish a baseline for fraud attempts vs. clerical errors.',
  },
  {
    question: "How does the pilot program work?",
    answer:
      'We offer a 60-Day "Watch & Verify" Pilot program. This allows you to validate the efficacy of cryptographic pre-checks in your live environment with zero operational risk before full deployment.',
  },
];

export function FAQSection() {
  return (
    <section id="faq" className="bg-background py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Operational focus questions about Deed Shield implementation
          </p>
        </div>

        <div className="mx-auto mt-12 max-w-3xl">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left text-base font-medium text-foreground">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
