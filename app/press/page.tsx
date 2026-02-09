import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

export default function PressPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 container mx-auto px-4 py-12 max-w-4xl">
        <h1 className="text-4xl font-bold mb-8">Press</h1>
        <div className="prose dark:prose-invert max-w-none space-y-4">
          <p>
            Latest news and updates from Deed Shield.
          </p>
          <h2 className="text-2xl font-semibold mt-8">Press Releases</h2>
          <div className="space-y-6">
            <div className="border-l-4 border-primary pl-4">
              <p className="text-sm text-muted-foreground">October 15, 2025</p>
              <h3 className="text-xl font-bold">Deed Shield Announces Series A Funding</h3>
              <p className="mt-1">Securing $10M to expand operations nationwide.</p>
            </div>
             <div className="border-l-4 border-primary pl-4">
              <p className="text-sm text-muted-foreground">August 1, 2025</p>
              <h3 className="text-xl font-bold">Deed Shield Partners with Major County Recorders</h3>
              <p className="mt-1">Launching pilot programs in 5 major counties.</p>
            </div>
          </div>
          <h2 className="text-2xl font-semibold mt-8">Media Kit</h2>
          <p>
            For media inquiries and assets, please contact press@deedshield.com.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
