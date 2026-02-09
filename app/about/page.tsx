import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 container mx-auto px-4 py-12 max-w-4xl">
        <h1 className="text-4xl font-bold mb-8">About Deed Shield</h1>
        <div className="prose dark:prose-invert max-w-none space-y-4">
          <p>
            Deed Shield is the first pre-recording verification layer designed to secure land records. We bridge the ministerial gap without disrupting your eRecording workflow.
          </p>
          <h2 className="text-2xl font-semibold mt-8">Our Mission</h2>
          <p>
            To restore trust in property ownership by eliminating deed fraud through advanced cryptographic verification.
          </p>
          <h2 className="text-2xl font-semibold mt-8">Our Team</h2>
          <p>
            We are a team of technologists, real estate experts, and legal professionals dedicated to solving one of the most pressing issues in the property sector.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
