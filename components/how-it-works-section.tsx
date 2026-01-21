import { FileText, Link2, ShieldCheck, FileCheck } from "lucide-react";

const steps = [
  {
    step: "01",
    icon: FileText,
    title: "Document Fingerprinting",
    description:
      "Title operations upload the closing deed. Deed Shield generates a cryptographic hash—a unique digital fingerprint—without storing document contents. Privacy is preserved.",
  },
  {
    step: "02",
    icon: Link2,
    title: "Metadata Binding",
    description:
      "Key transaction data (jurisdiction, document type, notary ID) is cryptographically bound to the hash, creating an immutable audit reference for pre-recording review.",
  },
  {
    step: "03",
    icon: ShieldCheck,
    title: "Integrity Signal",
    description:
      "Deed Shield cross-references notary credentials against state registries and validates operator attestations. The output is a PASS or FLAG signal—not a legal determination.",
  },
  {
    step: "04",
    icon: FileCheck,
    title: "Verification Receipt",
    description:
      "A tamper-evident receipt (JWT format) is generated and accompanies the filing. This provides recorders and title agencies with independent, auditable proof of pre-recording review.",
  },
];

export function HowItWorksSection() {
  return (
    <section id="how-it-works" className="bg-background py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-medium uppercase tracking-wider text-muted-foreground">
            How It Works
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl text-balance">
            Independent Verification Before Recording
          </h2>
          <p className="mt-4 text-lg text-muted-foreground text-pretty">
            Deed Shield operates as a pre-recording checkpoint for title
            operations. The system validates document integrity and generates an
            audit artifact before submission to the recorder—without altering
            workflows or storing documents.
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
