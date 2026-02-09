import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

export default function CompliancePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 container mx-auto px-4 py-12 max-w-4xl">
        <h1 className="text-4xl font-bold mb-8">Compliance</h1>
        <div className="prose dark:prose-invert max-w-none space-y-4">
          <p>
            Deed Shield is committed to maintaining the highest standards of compliance with applicable laws and regulations regarding land records and data security.
          </p>
          <h2 className="text-2xl font-semibold mt-8">Regulatory Adherence</h2>
          <p>
            We work closely with local, state, and federal bodies to ensure our cryptographic verification methods meet all statutory requirements for land record recording and preservation.
          </p>
          <h2 className="text-2xl font-semibold mt-8">Standards</h2>
          <p>
            Our platform adheres to industry-standard protocols for data integrity and auditability.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
