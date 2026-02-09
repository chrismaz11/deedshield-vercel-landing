import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";

export default function CareersPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 container mx-auto px-4 py-12 max-w-4xl">
        <h1 className="text-4xl font-bold mb-8">Careers at Deed Shield</h1>
        <div className="prose dark:prose-invert max-w-none space-y-4">
          <p>
            Join us in our mission to secure the future of property ownership. We are always looking for talented individuals to join our growing team.
          </p>
          <h2 className="text-2xl font-semibold mt-8">Open Positions</h2>
          <div className="space-y-6">
            <div className="border p-4 rounded-lg">
              <h3 className="text-xl font-bold">Senior Software Engineer</h3>
              <p className="text-muted-foreground">Remote / Hybrid</p>
              <p className="mt-2">Lead the development of our core verification engine.</p>
              <Button className="mt-4" variant="outline">Apply Now</Button>
            </div>
            <div className="border p-4 rounded-lg">
              <h3 className="text-xl font-bold">Product Manager</h3>
              <p className="text-muted-foreground">Remote</p>
              <p className="mt-2">Drive the product vision and roadmap for Deed Shield.</p>
              <Button className="mt-4" variant="outline">Apply Now</Button>
            </div>
          </div>
          <p className="mt-8">
            Don't see a role that fits? Email us at careers@deedshield.com.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
