import { motion } from "framer-motion";
import { config } from "@/config";
import { Features, CTA } from "@/components/sections";
import { SEO } from "@/components/ui/SEO";

export function Services() {
    return (
        <main className="pt-24 min-h-screen bg-white">
            <SEO title="Tratamientos" />
            <section className="py-20 px-6 bg-blue-50/30">
                <div className="container mx-auto max-w-4xl text-center">
                    <span className="text-secondary font-bold tracking-widest uppercase text-sm block mb-4">
                        Especialidades
                    </span>
                    <h1 className="text-4xl md:text-6xl font-display font-bold text-gray-900 mb-8">
                        SOLUCIONES <span className="text-primary">DENTALES</span>
                    </h1>
                    <p className="text-xl text-gray-600 leading-relaxed">
                        Desde limpiezas preventivas hasta rehabilitaciones orales completas.
                    </p>
                </div>
            </section>
            <Features />
            <CTA />
        </main>
    );
}