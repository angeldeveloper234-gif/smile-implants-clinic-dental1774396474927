import { motion } from "framer-motion";
import { config } from "@/config";
import { Stats, Testimonials, CTA } from "@/components/sections";
import { SEO } from "@/components/ui/SEO";

export function About() {
    const { branding } = config;

    return (
        <main className="pt-24 min-h-screen bg-background">
            <SEO 
                title="Sobre Nosotros" 
                description={`Conoce la trayectoria de ${branding.name}.`}
            />

            <section className="py-20 px-6">
                <div className="container mx-auto max-w-4xl text-center">
                    <span className="text-peach font-bold tracking-widest uppercase text-sm block mb-4">
                        Nuestra Filosofía
                    </span>
                    <h1 className="text-4xl md:text-6xl font-display font-bold text-white mb-8">
                        EXPERIENCIA Y <span className="text-peach">PRECISIÓN</span>
                    </h1>
                    <p className="text-xl text-dark leading-relaxed">
                        En {branding.name}, combinamos tecnología de vanguardia con la experiencia del Dr. Jerry Mongalo.
                        Ubicados en {config.dynamicContent.city}, garantizamos resultados estéticos y funcionales de por vida.
                    </p>
                </div>
            </section>

            <section className="py-20 px-6 bg-surface border-y border-white/5">
                <div className="container mx-auto max-w-6xl">
                    <div className="grid md:grid-cols-2 gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            className="rounded-3xl overflow-hidden shadow-2xl border border-white/10"
                        >
                            <img 
                                src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=1000" 
                                alt="Dr. Jerry Mongalo"
                                className="w-full h-full object-cover"
                            />
                        </motion.div>
                        <div className="space-y-6">
                            <h2 className="text-3xl font-display font-bold text-white">
                                Liderazgo Clínico
                            </h2>
                            <p className="text-dark leading-relaxed">
                                El Dr. Jerry Mongalo y su equipo se especializan en casos complejos de implantología y rehabilitación oral. 
                                Nuestra clínica está equipada con tecnología de sedación consciente y escáneres intraorales para tu comodidad.
                            </p>
                            <ul className="space-y-3 pt-4">
                                {["Certificación Internacional", "Protocolos de Esterilización Hospitalaria", "Atención Bilingüe (Español/Inglés)"].map((item, i) => (
                                    <li key={i} className="flex items-center gap-3 text-white/80 font-medium">
                                        <span className="w-2 h-2 bg-peach rounded-full" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <Stats />
            <Testimonials />
            <CTA />
        </main>
    );
}