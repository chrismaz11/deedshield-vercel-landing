import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

export default function TermsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 container mx-auto px-4 py-12 max-w-4xl">
        <h1 className="text-4xl font-bold mb-8">Terms of Service</h1>
        <div className="prose dark:prose-invert max-w-none space-y-4">
          <p>Last updated: {new Date().toLocaleDateString()}</p>
          <p>
            Please read these Terms of Service carefully before using the Deed Shield platform operated by Deed Shield Inc.
          </p>
          <h2 className="text-2xl font-semibold mt-8">Acceptance of Terms</h2>
          <p>
            By accessing or using our service, you agree to be bound by these Terms. If you disagree with any part of the terms, then you may not access the service.
          </p>
          <h2 className="text-2xl font-semibold mt-8">Use License</h2>
          <p>
            Permission is granted to temporarily download one copy of the materials (information or software) on Deed Shield's website for personal, non-commercial transitory viewing only.
          </p>
          <h2 className="text-2xl font-semibold mt-8">Disclaimer</h2>
          <p>
            The materials on Deed Shield's website are provided on an 'as is' basis. Deed Shield makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
