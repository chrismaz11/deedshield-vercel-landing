"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Does Deed Shield replace notaries, title insurance, or recorders?",
    answer:
      "No. Deed Shield is a pre-recording verification checkpoint for title operations. Notaries perform standard duties, title insurance remains in place, and county recorders retain final recording authority. Deed Shield provides an independent integrity signal—not a replacement for existing processes.",
  },
  {
    question: "What does a PASS or FLAG signal mean operationally?",
    answer:
      "A PASS indicates document integrity and metadata consistency based on cryptographic validation and registry cross-checks. A FLAG alerts operations to a potential anomaly for internal review. Neither constitutes a legal determination—Deed Shield outputs an integrity signal, not a legal opinion.",
  },
  {
    question: "What happens when a document is flagged?",
    answer:
      "Flagged documents are routed to internal compliance or operations for review. The pilot operates in observation mode: flags provide visibility without blocking transactions, allowing participants to assess signal accuracy and establish baselines for anomaly types (fraud vs. clerical errors).",
  },
  {
    question: "How does the 60-day pilot work for title operations?",
    answer:
      "The pilot applies pre-recording verification to a limited transaction set in live workflows. Participants receive integrity signals, audit documentation, and an end-of-pilot findings report. The scope is time-boxed and does not require system replacement, staff retraining, or long-term commitment.",
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
