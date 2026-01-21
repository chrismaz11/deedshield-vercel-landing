import { Button } from "@/components/ui/button";
import {
  CheckCircle2,
  FileCheck,
  Lightbulb,
  Package,
  XCircle,
} from "lucide-react";
import { ContactForm } from "@/components/contact-form";

const deliverables = [
  "Defined pilot scope and technical onboarding session",
  "Pre-recording verification signals applied to a limited transaction set",
  "Visibility into document integrity, metadata consistency, and flagged anomalies",
  "End-of-pilot findings report suitable for internal stakeholder review",
];

const outcomes = [
  "Earlier operational awareness of integrity issues",
  "Stronger audit documentation for compliance and liability defense",
  "Measurable insight into workflow accuracy and blind spots",
  "Evidence-based assessment to inform future fraud mitigation strategy",
];

const notRequired = [
  "No system replacement",
  "No long-term commitment",
  "No full integration",
  "No public deployment or customer-facing changes",
];

export function PilotProgramSection() {
  return (
    <section id="pilot-program" className="border-t border-border bg-card py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
            60-Day Paid Pilot Program
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-lg leading-relaxed text-muted-foreground">
            A focused, time-bound evaluation in real operational conditions
          </p>
        </div>

        <div className="mt-12 rounded-lg border border-border bg-background p-8 md:p-10">
          <h3 className="text-xl font-semibold text-foreground">
            What the Pilot Is
          </h3>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            This is a paid, time-boxed, limited-scope evaluation of Deed Shield
            in live title or recording workflows. The pilot assesses whether
            pre-recording integrity signals improve workflow visibility,
            strengthen audit documentation, and fit operationally—without
            requiring system replacement or long-term commitment.
          </p>
        </div>

        <div className="mt-8 grid gap-8 lg:grid-cols-2">
          <div className="rounded-lg border border-border bg-background p-8">
            <div className="flex items-center gap-3">
              <Package className="h-5 w-5 text-foreground" />
              <h3 className="text-lg font-semibold text-foreground">
                What Participants Receive
              </h3>
            </div>
            <ul className="mt-6 space-y-4">
              {deliverables.map((item) => (
                <li key={item} className="flex gap-3">
                  <FileCheck className="mt-0.5 h-5 w-5 flex-shrink-0 text-muted-foreground" />
                  <span className="text-muted-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-lg border border-border bg-background p-8">
            <div className="flex items-center gap-3">
              <Lightbulb className="h-5 w-5 text-foreground" />
              <h3 className="text-lg font-semibold text-foreground">
                What Participants Gain
              </h3>
            </div>
            <ul className="mt-6 space-y-4">
              {outcomes.map((item) => (
                <li key={item} className="flex gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-muted-foreground" />
                  <span className="text-muted-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-8 rounded-lg border border-border bg-muted/50 p-8">
          <div className="flex items-center gap-3">
            <XCircle className="h-5 w-5 text-muted-foreground" />
            <h3 className="text-lg font-semibold text-foreground">
              What the Pilot Does NOT Require
            </h3>
          </div>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {notRequired.map((item) => (
              <div
                key={item}
                className="rounded border border-border bg-background px-4 py-3 text-center text-sm text-muted-foreground"
              >
                {item}
              </div>
            ))}
          </div>
        </div>

        <div className="mt-8 rounded-lg border border-border bg-background p-8">
          <h3 className="text-lg font-semibold text-foreground">
            What Happens After 60 Days
          </h3>
          <div className="mt-4 space-y-3">
            <p className="text-muted-foreground">
              Participants may choose to expand, adjust scope, or discontinue
              based on measured outcomes.
            </p>
            <p className="text-muted-foreground">
              Findings may inform broader deployment, internal process
              improvements, or fraud mitigation strategy.
            </p>
            <p className="text-muted-foreground">
              No exclusivity, long-term commitment, or follow-on obligation is
              required or implied.
            </p>
          </div>
        </div>

        <div className="mt-16 rounded-lg border border-foreground/10 bg-primary p-8 text-center md:p-12">
          <p className="text-lg font-medium text-primary-foreground md:text-xl">
            When post-recording fraud costs exceed $1B annually, pre-recording
            verification is a measurable operational decision—not a speculative
            investment.
          </p>
          <div className="mt-8">
            <ContactForm
              trigger={
                <Button
                  size="lg"
                  variant="secondary"
                  className="text-secondary-foreground"
                >
                  Discuss a 60-Day Pilot
                </Button>
              }
            />
          </div>
          <p className="mt-4 text-sm text-primary-foreground/70">
            Paid pilot. Time-boxed scope. No long-term obligation.
          </p>
        </div>
      </div>
    </section>
  );
}
