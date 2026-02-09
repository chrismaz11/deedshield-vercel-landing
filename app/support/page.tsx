import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";

export default function SupportPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 container mx-auto px-4 py-12 max-w-4xl">
        <h1 className="text-4xl font-bold mb-8">Support Center</h1>
        <div className="prose dark:prose-invert max-w-none space-y-4">
          <p>
            Need help? Our support team is here to assist you.
          </p>
          <div className="grid md:grid-cols-3 gap-6 mt-8">
             <div className="border p-6 rounded-lg text-center">
                <h3 className="font-semibold mb-2">Knowledge Base</h3>
                <p className="text-sm text-muted-foreground mb-4">Find answers to common questions.</p>
                <Button variant="outline" className="w-full">Browse Articles</Button>
            </div>
             <div className="border p-6 rounded-lg text-center">
                <h3 className="font-semibold mb-2">Email Support</h3>
                <p className="text-sm text-muted-foreground mb-4">Get in touch with our team directly.</p>
                <Button variant="outline" className="w-full">Email Us</Button>
            </div>
             <div className="border p-6 rounded-lg text-center">
                <h3 className="font-semibold mb-2">Live Chat</h3>
                <p className="text-sm text-muted-foreground mb-4">Chat with a support agent.</p>
                <Button variant="outline" className="w-full">Start Chat</Button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
