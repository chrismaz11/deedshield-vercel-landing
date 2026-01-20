import { AlertTriangle, DollarSign, Scale } from "lucide-react";

const problems = [
  {
    icon: AlertTriangle,
    title: "The Vulnerability",
    description:
      "Bad actors exploit statutory limitations to inject fraudulent deeds into the public record using forged notary stamps and synthetic identities.",
  },
  {
    icon: DollarSign,
    title: "The Cost of Inaction",
    description:
      'Current "Title Lock" services are merely smoke detectors—alerting owners only after the fraud is recorded. Remediation requires "Quiet Title" actions costing over $10,000 in legal fees.',
  },
  {
    icon: Scale,
    title: "The Liability Shift",
    description:
      "Once recorded, the burden of fraud shifts entirely to the Title Company and the homeowner, creating significant financial and legal exposure.",
  },
];

export function ProblemSection() {
  return (
    <section id="problem" className="bg-card py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl text-balance">
            Why the County Recorder Cannot Be Your Gatekeeper
          </h2>
          <p className="mt-4 text-lg text-muted-foreground text-pretty">
            Under current statutory frameworks, Recorders operate under strict
            &ldquo;ministerial duties.&rdquo; By law, they must record any
            document that meets formatting requirements and fee payments,
            regardless of the underlying validity of the legal claims.
          </p>
        </div>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {problems.map((problem) => (
            <div
              key={problem.title}
              className="rounded-lg border border-border bg-background p-6"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-md bg-primary">
                <problem.icon className="h-5 w-5 text-primary-foreground" />
              </div>
              <h3 className="mt-4 text-lg font-medium text-foreground">
                {problem.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {problem.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
