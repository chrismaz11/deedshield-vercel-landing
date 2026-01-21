import { AlertTriangle, DollarSign, Scale } from "lucide-react";

const problems = [
  {
    icon: AlertTriangle,
    title: "Post-Recording Risk Exposure",
    description:
      "Fraudulent deeds using forged notary stamps and fabricated identities can enter public records undetected. For title operations, detection after recording means costly unwinding, legal liability, and disrupted closings.",
  },
  {
    icon: DollarSign,
    title: "Rework and Legal Costs",
    description:
      "Title companies face direct exposure when fraudulent documents are recorded. Remediation requires quiet title actions often exceeding $10,000 in legal fees, plus operational delays and client relationship damage.",
  },
  {
    icon: Scale,
    title: "Liability Transfer",
    description:
      "Once a fraudulent document is recorded, the burden shifts to title companies and property owners. Without independent verification before recording, proving due diligence becomes significantly harder.",
  },
];

export function ProblemSection() {
  return (
    <section id="problem" className="bg-card py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl mb-16">
          <blockquote className="border-l-4 border-primary bg-muted/50 p-6 italic text-foreground/90 leading-relaxed">
            <p className="text-pretty">
              &ldquo;Fraudsters are stealing land out from under owners… it begins when a real estate agent gets a solicitation from a fake property owner wanting to sell their vacant lot in a rural community… meanwhile, the real property owner has no idea their land has just been sold out from under them.&rdquo;
            </p>
            <footer className="mt-4 text-sm font-medium not-italic text-muted-foreground">
              — FBI Newark field office press release
            </footer>
          </blockquote>
        </div>

        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl text-balance">
            The Ministerial Duty Gap
          </h2>
          <p className="mt-4 text-lg text-muted-foreground text-pretty">
            County Recorders operate under ministerial duty: they must record
            documents that meet formatting and fee requirements, regardless of
            underlying validity. For title operations, this means no upstream
            fraud filter before documents enter the public record.
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
