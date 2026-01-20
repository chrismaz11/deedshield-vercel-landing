import { CheckCircle2, XCircle, ArrowRight } from "lucide-react";

const features = [
  {
    type: "positive",
    text: 'No "Rip and Replace": Your team continues using SoftPro or ResWare for document creation.',
  },
  {
    type: "positive",
    text: "The Checkpoint: Before hitting \"Submit\" to the county, the file is hashed by Deed Shield.",
  },
  {
    type: "positive",
    text: 'A visual "Green Light" allows the recording to proceed.',
  },
  {
    type: "warning",
    text: 'A "Red Flag" pauses the submission for human review, preventing rejection fees and fraud liability.',
  },
];

export function IntegrationSection() {
  return (
    <section id="integration" className="bg-card py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-sm font-medium uppercase tracking-wider text-muted-foreground">
              Workflow Overlay
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl text-balance">
              Enhancing SoftPro & ResWare Workflows
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              &ldquo;Watch & Verify&rdquo; without blocking commerce. Deed
              Shield is deployed as a lightweight API integration or web portal
              overlay.
            </p>

            <ul className="mt-8 space-y-4">
              {features.map((feature, index) => (
                <li key={index} className="flex items-start gap-3">
                  {feature.type === "positive" ? (
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-foreground" />
                  ) : (
                    <XCircle className="mt-0.5 h-5 w-5 shrink-0 text-destructive" />
                  )}
                  <span className="text-sm leading-relaxed text-muted-foreground">
                    {feature.text}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-lg border border-border bg-background p-8">
            <h3 className="text-lg font-medium text-foreground">
              Built on Zero-Trust Architecture
            </h3>
            <ul className="mt-6 space-y-6">
              <li>
                <div className="flex items-center gap-2">
                  <ArrowRight className="h-4 w-4 text-foreground" />
                  <span className="font-medium text-foreground">
                    No Document Storage
                  </span>
                </div>
                <p className="mt-1 pl-6 text-sm text-muted-foreground">
                  We utilize SHA-256 hashing. We see the fingerprint, but never
                  the file. Your client&apos;s PII never touches our servers.
                </p>
              </li>
              <li>
                <div className="flex items-center gap-2">
                  <ArrowRight className="h-4 w-4 text-foreground" />
                  <span className="font-medium text-foreground">
                    Tamper-Evident Receipts
                  </span>
                </div>
                <p className="mt-1 pl-6 text-sm text-muted-foreground">
                  All Verification Receipts are issued as JSON Web Tokens (JWT),
                  cryptographically signed to prevent alteration.
                </p>
              </li>
              <li>
                <div className="flex items-center gap-2">
                  <ArrowRight className="h-4 w-4 text-foreground" />
                  <span className="font-medium text-foreground">
                    Regulatory Alignment
                  </span>
                </div>
                <p className="mt-1 pl-6 text-sm text-muted-foreground">
                  Compliant with the Illinois Notary Act (Section 176.835)
                  regarding identity proofing and credential analysis.
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
