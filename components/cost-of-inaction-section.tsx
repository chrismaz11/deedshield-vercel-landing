import { AlertTriangle, FileWarning, Scale, TrendingDown } from "lucide-react";

const lossCategories = [
  {
    icon: TrendingDown,
    title: "Direct Financial Losses",
    description:
      "Funds lost to fraudulent transactions, wire fraud, and property theft schemes.",
  },
  {
    icon: Scale,
    title: "Legal & Investigative Costs",
    description:
      "Attorney fees, forensic analysis, and extended litigation to resolve fraudulent claims.",
  },
  {
    icon: FileWarning,
    title: "Transaction Delays",
    description:
      "Closings halted or reversed, disrupting pipelines and damaging client relationships.",
  },
  {
    icon: AlertTriangle,
    title: "Operational & Reputational Impact",
    description:
      "Staff time diverted to remediation, plus long-term trust erosion with clients and partners.",
  },
];

export function CostOfInactionSection() {
  return (
    <section className="border-t border-border bg-card py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
            The Cost of Inaction
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-lg leading-relaxed text-muted-foreground">
            Quantified risk from authoritative federal data
          </p>
        </div>

        <div className="mt-12 rounded-lg border border-border bg-background p-8 md:p-10">
          <div className="flex flex-col items-center gap-6 md:flex-row md:gap-10">
            <div className="flex-shrink-0 rounded-lg border border-border bg-muted px-6 py-4 text-center">
              <p className="text-4xl font-bold text-foreground md:text-5xl">
                $1B+
              </p>
              <p className="mt-1 text-sm font-medium text-muted-foreground">
                Annual Losses
              </p>
              <p className="mt-0.5 text-xs text-muted-foreground">FBI IC3</p>
            </div>
            <div className="flex-1">
              <p className="text-base leading-relaxed text-foreground md:text-lg">
                According to the FBI&apos;s Internet Crime Complaint Center
                (IC3), real estate-related fraud and property scams account for
                well over $1 billion in reported losses annually in the United
                States. These losses often surface after transactions are
                completed and recorded, when investigation and remediation
                become significantly more costly.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12">
          <h3 className="text-center text-xl font-semibold text-foreground">
            What These Losses Include
          </h3>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {lossCategories.map((category) => (
              <div
                key={category.title}
                className="rounded-lg border border-border bg-background p-6"
              >
                <category.icon className="h-6 w-6 text-muted-foreground" />
                <h4 className="mt-4 font-medium text-foreground">
                  {category.title}
                </h4>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {category.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 rounded-lg border border-border bg-muted/50 p-8">
          <h3 className="text-xl font-semibold text-foreground">
            Why These Losses Persist
          </h3>
          <div className="mt-6 space-y-4">
            <div className="flex gap-4">
              <div className="mt-1.5 h-2 w-2 flex-shrink-0 rounded-full bg-foreground/40" />
              <p className="text-muted-foreground">
                Recording workflows prioritize processing and storage, not
                continuous verification
              </p>
            </div>
            <div className="flex gap-4">
              <div className="mt-1.5 h-2 w-2 flex-shrink-0 rounded-full bg-foreground/40" />
              <p className="text-muted-foreground">
                Fraud and anomalies are frequently detected only after recording
              </p>
            </div>
            <div className="flex gap-4">
              <div className="mt-1.5 h-2 w-2 flex-shrink-0 rounded-full bg-foreground/40" />
              <p className="text-muted-foreground">
                Post-recording review often lacks independent integrity signals
                and audit artifacts
              </p>
            </div>
          </div>
          <p className="mt-6 text-sm text-muted-foreground">
            This is a structural visibility gap — not a failure of institutions
            or professionals.
          </p>
        </div>
      </div>
    </section>
  );
}
