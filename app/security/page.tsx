import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

export default function SecurityPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 container mx-auto px-4 py-12 max-w-4xl">
        <h1 className="text-4xl font-bold mb-8">Security</h1>
        <div className="prose dark:prose-invert max-w-none space-y-4">
          <p>
            Security is the core of Deed Shield. We employ state-of-the-art cryptographic techniques to ensure the integrity and authenticity of land records.
          </p>
          <h2 className="text-2xl font-semibold mt-8">Infrastructure</h2>
          <p>
            Our infrastructure is built on secure, redundant cloud systems with strict access controls and continuous monitoring.
          </p>
          <h2 className="text-2xl font-semibold mt-8">Data Protection</h2>
          <p>
            All data is encrypted in transit and at rest. We use industry-standard encryption algorithms to protect sensitive information.
          </p>
          <h2 className="text-2xl font-semibold mt-8">Responsible Disclosure</h2>
          <p>
            If you believe you have found a security vulnerability in Deed Shield, please contact us immediately at security@deedshield.com.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
