import { Contact as ContactSection } from "@/components/sections";
import { SEO } from "@/components/ui/SEO";

export function Contact() {
    return (
        <main className="pt-24 min-h-screen bg-white">
            <SEO title="Contacto" />
            <ContactSection />
        </main>
    );
}