import { Hero, Stats, Features, Roadmap, Testimonials, CTA, Contact, FAQ } from "@/components/sections";
import { CustomCursor } from "@/components/features/CustomCursor";
import { SEO } from "@/components/ui/SEO";
import { config } from "@/config";

export function Home() {
    const { branding } = config;

    return (
        <main className="relative">
            <SEO 
                description={`Líderes en ${branding.trade}. Tratamientos dentales de alta calidad en ${config.dynamicContent.city}. ${branding.slogan}.`}
                keywords={`${branding.name}, dentista, ortodoncia, diseño de sonrisa, ${config.dynamicContent.city.toLowerCase()}`}
            />
            <Hero />
            <Stats />
            <Features />
            <Roadmap />
            <Testimonials />
            <CTA />
            <FAQ />
            <Contact />
            <CustomCursor />
        </main>
    );
}