import { Scale, FileCheck, Zap } from "lucide-react";

const pillars = [
  {
    icon: Scale,
    title: "Regulatory Compliance",
    subtitle: "Protecting the Recorder",
    description:
      'Deed Shield provides Recorders with an objective, technical "pass/fail" signal rooted in data integrity, allowing them to filter suspicious filings without violating their ministerial duty to record.',
  },
  {
    icon: FileCheck,
    title: "Liability Defense",
    subtitle: "Immutable Audit Trails",
    description:
      'Every transaction generates a cryptographic "Verification Receipt" anchored to a public ledger (e.g., Polygon). This provides Title Agencies with permanent, third-party proof of due diligence.',
  },
  {
    icon: Zap,
    title: "Operational Continuity",
    subtitle: "Zero-Friction Integration",
    description:
      "Designed as an overlay, not a replacement. Deed Shield integrates with SoftPro, ResWare, and major eRecording gateways, requiring no changes to your existing production software.",
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
      </div>
    </section>
  );
}
