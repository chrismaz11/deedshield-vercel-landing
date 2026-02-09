import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

export default function PrivacyPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 container mx-auto px-4 py-12 max-w-4xl">
        <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
        <div className="prose dark:prose-invert max-w-none space-y-4">
          <p>Last updated: {new Date().toLocaleDateString()}</p>
          <p>
            At Deed Shield, we take your privacy seriously. This Privacy Policy describes how we collect, use, and share your personal information when you visit our website or use our services.
          </p>
          <h2 className="text-2xl font-semibold mt-8">Information We Collect</h2>
          <p>
            We collect information you provide directly to us, such as when you create an account, subscribe to our newsletter, or contact us for support.
          </p>
          <h2 className="text-2xl font-semibold mt-8">How We Use Your Information</h2>
          <p>
            We use the information we collect to provide, maintain, and improve our services, to communicate with you, and to comply with legal obligations.
          </p>
          <h2 className="text-2xl font-semibold mt-8">Contact Us</h2>
          <p>
            If you have any questions about this Privacy Policy, please contact us at privacy@deedshield.com.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
