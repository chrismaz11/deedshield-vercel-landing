import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

export default function DocumentationPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 container mx-auto px-4 py-12 max-w-4xl">
        <h1 className="text-4xl font-bold mb-8">Documentation</h1>
        <div className="prose dark:prose-invert max-w-none space-y-4">
          <p>
            Welcome to the Deed Shield documentation. Here you will find comprehensive guides and resources to help you integrate and use our platform.
          </p>
          <div className="grid md:grid-cols-2 gap-6 mt-8">
            <div className="border p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">Getting Started</h3>
              <p className="text-muted-foreground mb-4">Learn the basics of Deed Shield and how to set up your account.</p>
              <a href="#" className="text-primary hover:underline">Read more &rarr;</a>
            </div>
             <div className="border p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">Integration Guides</h3>
              <p className="text-muted-foreground mb-4">Step-by-step guides for integrating with your existing recording software.</p>
              <a href="#" className="text-primary hover:underline">Read more &rarr;</a>
            </div>
             <div className="border p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">Verification Process</h3>
              <p className="text-muted-foreground mb-4">Deep dive into how our cryptographic verification works.</p>
              <a href="#" className="text-primary hover:underline">Read more &rarr;</a>
            </div>
             <div className="border p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">Troubleshooting</h3>
              <p className="text-muted-foreground mb-4">Solutions to common issues and FAQs.</p>
              <a href="#" className="text-primary hover:underline">Read more &rarr;</a>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
