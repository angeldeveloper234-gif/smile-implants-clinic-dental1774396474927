import { motion } from "framer-motion";
import { config } from "@/config";
import { Stats, Testimonials, CTA } from "@/components/sections";
import { SEO } from "@/components/ui/SEO";

export function About() {
    const { branding } = config;

    return (
        <main className="pt-24 min-h-screen bg-white">
            <SEO 
                title="Sobre Nosotros" 
                description={`Conoce la trayectoria de ${branding.name}.`}
            />

            <section className="py-20 px-6">
                <div className="container mx-auto max-w-4xl text-center">
                    <span className="text-secondary font-bold tracking-widest uppercase text-sm block mb-4">
                        Nuestra Filosofía
                    </span>
                    <h1 className="text-4xl md:text-6xl font-display font-bold text-gray-900 mb-8">
                        EXPERIENCIA Y <span className="text-primary">CALIDEZ</span>
                    </h1>
                    <p className="text-xl text-gray-600 leading-relaxed">
                        En Dental Sunset, combinamos tecnología moderna con un trato humano. 
                        Ubicados en Plaza GARA, nuestros especialistas garantizan resultados estéticos y funcionales.
                    </p>
                </div>
            </section>

            <section className="py-20 px-6 bg-surface">
                <div className="container mx-auto max-w-6xl">
                    <div className="grid md:grid-cols-2 gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            className="rounded-3xl overflow-hidden shadow-2xl"
                        >
                            <img 
                                src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=800&auto=format&fit=crop" 
                                alt="Clínica Dental"
                                className="w-full h-full object-cover"
                            />
                        </motion.div>
                        <div className="space-y-6">
                            <h2 className="text-3xl font-display font-bold text-gray-900">
                                Tecnología al servicio de tu salud
                            </h2>
                            <p className="text-gray-600 leading-relaxed">
                                Creemos que ir al dentista no debe ser una experiencia traumática. Por eso invertimos en equipos de sedación consciente, escáneres intraorales y radiografía digital de baja radiación.
                            </p>
                            <ul className="space-y-3 pt-4">
                                {["Certificación Internacional", "Protocolos de Esterilización Hospitalaria", "Atención Bilingüe (Español/Inglés)"].map((item, i) => (
                                    <li key={i} className="flex items-center gap-3 text-gray-700 font-medium">
                                        <span className="w-2 h-2 bg-secondary rounded-full" />
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