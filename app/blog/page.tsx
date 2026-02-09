import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

export default function BlogPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 container mx-auto px-4 py-12 max-w-4xl">
        <h1 className="text-4xl font-bold mb-8">Blog</h1>
        <div className="grid md:grid-cols-2 gap-8">
            <article className="border rounded-lg overflow-hidden">
                <div className="h-48 bg-muted w-full"></div>
                <div className="p-6">
                    <p className="text-sm text-muted-foreground mb-2">September 28, 2025</p>
                    <h2 className="text-xl font-bold mb-2">The Rising Cost of Deed Fraud</h2>
                    <p className="text-muted-foreground mb-4">How modern recording systems are being exploited and what we can do about it.</p>
                     <a href="#" className="text-primary hover:underline">Read Article &rarr;</a>
                </div>
            </article>
            <article className="border rounded-lg overflow-hidden">
                <div className="h-48 bg-muted w-full"></div>
                <div className="p-6">
                     <p className="text-sm text-muted-foreground mb-2">September 14, 2025</p>
                    <h2 className="text-xl font-bold mb-2">Implementing Cryptographic Verification</h2>
                    <p className="text-muted-foreground mb-4">A technical look at how Deed Shield ensures data integrity.</p>
                     <a href="#" className="text-primary hover:underline">Read Article &rarr;</a>
                </div>
            </article>
        </div>
      </main>
      <Footer />
    </div>
  );
}
