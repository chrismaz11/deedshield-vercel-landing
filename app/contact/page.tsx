import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { ContactForm } from "@/components/contact-form";
import { Button } from "@/components/ui/button";

export default function ContactPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 container mx-auto px-4 py-12 max-w-4xl">
        <h1 className="text-4xl font-bold mb-8">Contact Us</h1>
        <div className="prose dark:prose-invert max-w-none space-y-4">
          <p>
            Have questions? We'd love to hear from you. Reach out to our team for support, sales, or general inquiries.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8 mt-8">
            <div>
              <h2 className="text-2xl font-semibold">Get in Touch</h2>
              <p className="mt-2">
                <strong>Email:</strong> support@deedshield.com<br />
                <strong>Phone:</strong> (555) 123-4567<br />
                <strong>Address:</strong><br />
                123 Security Blvd<br />
                Suite 100<br />
                Tech City, TC 90210
              </p>
            </div>
            <div className="bg-card p-6 rounded-lg border">
                <h3 className="text-xl font-semibold mb-4">Send us a message</h3>
                <p className="mb-6 text-muted-foreground">
                    Ready to start securing your land records? Fill out our form and we'll be in touch.
                </p>
                <ContactForm trigger={<Button className="w-full">Open Contact Form</Button>} />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
