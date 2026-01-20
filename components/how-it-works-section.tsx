import { FileText, Link2, ShieldCheck, FileCheck } from "lucide-react";

const steps = [
  {
    step: "01",
    icon: FileText,
    title: "Ingest & Hash",
    description:
      "The operator uploads the closing deed. The system generates a cryptographic hash (digital fingerprint) of the file. Crucially, Deed Shield never stores the document contents.",
  },
  {
    step: "02",
    icon: Link2,
    title: "Metadata Binding",
    description:
      "Key data (Jurisdiction, Doc Type, Notary ID) is cryptographically bound to the document hash, creating an immutable record of the transaction metadata.",
  },
  {
    step: "03",
    icon: ShieldCheck,
    title: "Verification Check",
    description:
      "The system cross-references the Notary ID against state indexes and validates operator attestation to ensure document integrity.",
  },
  {
    step: "04",
    icon: FileCheck,
    title: "Immutable Receipt",
    description:
      'A "Verification Receipt" (JWT) is generated. This tamper-evident artifact accompanies the filing, providing the Recorder with independent proof of due diligence.',
  },
];

export function HowItWorksSection() {
  return (
    <section id="how-it-works" className="bg-background py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-medium uppercase tracking-wider text-muted-foreground">
            The Green Light Protocol
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl text-balance">
            Cryptographic Verification Before Submission
          </h2>
          <p className="mt-4 text-lg text-muted-foreground text-pretty">
            Deed Shield acts as a middleware layer between the Closing Table and
            the eRecording gateway. We validate the integrity of the transaction
            before it enters the public record.
          </p>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step) => (
            <div
              key={step.step}
              className="relative rounded-lg border border-border bg-card p-6"
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-medium text-muted-foreground">
                  STEP {step.step}
                </span>
                <step.icon className="h-5 w-5 text-foreground" />
              </div>
              <h3 className="mt-4 text-lg font-medium text-foreground">
                {step.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
