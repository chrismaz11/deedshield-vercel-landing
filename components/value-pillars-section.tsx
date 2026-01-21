import { Scale, FileCheck, Zap } from "lucide-react";

const pillars = [
  {
    icon: Scale,
    title: "Workflow-Level Risk Reduction",
    subtitle: "For title operations and recording workflows",
    description:
      "Deed Shield provides an independent integrity signal before documents are recorded. This enables earlier detection of anomalies and stronger internal documentation—without making legal determinations or replacing existing review processes.",
  },
  {
    icon: FileCheck,
    title: "Auditable Due Diligence",
    subtitle: "Permanent verification records",
    description:
      "Every transaction generates a cryptographic verification receipt. This tamper-evident artifact provides title agencies and recorders with permanent, third-party proof of pre-recording review—useful for compliance and liability defense.",
  },
  {
    icon: Zap,
    title: "Operational Continuity",
    subtitle: "Integrates with existing systems",
    description:
      "Deed Shield is designed as an overlay for title and recording workflows. Integration with SoftPro, ResWare, and major eRecording gateways requires no changes to production software or staff retraining.",
  },
];

export function ValuePillarsSection() {
  return (
    <section id="value" className="bg-card py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Three Value Pillars
          </h2>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {pillars.map((pillar) => (
            <div
              key={pillar.title}
              className="rounded-lg border border-border bg-background p-8"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-md bg-primary">
                <pillar.icon className="h-6 w-6 text-primary-foreground" />
              </div>
              <h3 className="mt-6 text-xl font-medium text-foreground">
                {pillar.title}
              </h3>
              <p className="mt-1 text-sm font-medium text-muted-foreground">
                {pillar.subtitle}
              </p>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 rounded-lg border border-border bg-muted/50 p-8">
          <h3 className="text-lg font-semibold text-foreground">
            What Deed Shield Does Not Do
          </h3>
          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            <div className="flex gap-3">
              <div className="mt-0.5 h-2 w-2 flex-shrink-0 rounded-full bg-foreground/40" />
              <p className="text-sm text-muted-foreground">
                Does not replace legal review or title insurance
              </p>
            </div>
            <div className="flex gap-3">
              <div className="mt-0.5 h-2 w-2 flex-shrink-0 rounded-full bg-foreground/40" />
              <p className="text-sm text-muted-foreground">
                Does not alter or store public records
              </p>
            </div>
            <div className="flex gap-3">
              <div className="mt-0.5 h-2 w-2 flex-shrink-0 rounded-full bg-foreground/40" />
              <p className="text-sm text-muted-foreground">
                Final authority remains with recording entity
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
