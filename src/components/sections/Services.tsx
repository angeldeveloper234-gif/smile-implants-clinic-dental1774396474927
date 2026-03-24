import { motion } from "framer-motion";
import { config } from "@/config";
import { Features, CTA } from "@/components/sections";
import { SEO } from "@/components/ui/SEO";

export function Services() {
    return (
        <main className="pt-24 min-h-screen bg-background">
            <SEO title="Tratamientos" />
            <section className="py-20 px-6 bg-surface/50 border-b border-white/5">
                <div className="container mx-auto max-w-4xl text-center">
                    <span className="text-peach font-bold tracking-widest uppercase text-sm block mb-4">
                        Especialidades
                    </span>
                    <h1 className="text-4xl md:text-6xl font-display font-bold text-white mb-8">
                        SOLUCIONES <span className="text-peach">AVANZADAS</span>
                    </h1>
                    <p className="text-xl text-dark leading-relaxed">
                        Desde implantes dentales hasta diseño de sonrisa digital.
                    </p>
                </div>
            </section>
            <Features />
            <CTA />
        </main>
    );
}