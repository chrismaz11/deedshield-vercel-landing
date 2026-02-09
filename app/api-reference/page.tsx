import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

export default function ApiReferencePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 container mx-auto px-4 py-12 max-w-4xl">
        <h1 className="text-4xl font-bold mb-8">API Reference</h1>
        <div className="prose dark:prose-invert max-w-none space-y-4">
          <p>
            Explore the Deed Shield API to build custom integrations and workflows.
          </p>
          <div className="bg-muted p-4 rounded-md font-mono text-sm mt-4">
            GET https://api.deedshield.com/v1/verify
          </div>
          <p>
            <strong>Authentication:</strong> All API requests must be authenticated using a Bearer token.
          </p>
          <h2 className="text-2xl font-semibold mt-8">Endpoints</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>/verify</strong>: Verify a document hash.</li>
            <li><strong>/submit</strong>: Submit a document for pre-recording verification.</li>
            <li><strong>/status</strong>: Check the status of a verification request.</li>
          </ul>
           <p className="mt-8">
            <a href="#" className="text-primary hover:underline">View full API documentation (Swagger/OpenAPI) &rarr;</a>
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
