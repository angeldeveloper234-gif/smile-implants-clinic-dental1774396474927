import { motion } from 'framer-motion';
import { config } from '@/config';

export function Roadmap() {
    const { roadmap } = config.dynamicContent;

    return (
        <section className="py-24 md:py-32 bg-ivory overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-8">
                    <div className="max-w-xl">
                        <span className="text-peach font-bold tracking-[0.2em] uppercase text-xs mb-4 block">Tu Experiencia</span>
                        <h2 className="text-4xl md:text-5xl font-serif text-navy leading-tight">
                            EL CAMINO HACIA TU <span className="italic text-navy/70">MEJOR SONRISA</span>
                        </h2>
                    </div>
                    <p className="text-dark/60 max-w-sm font-sans text-sm leading-relaxed">
                        Hemos optimizado cada paso para que tu visita sea relajante, eficiente y transparente desde el primer minuto.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 relative">
                    {/* Connecting Line (Desktop) */}
                    <div className="hidden lg:block absolute top-[2.75rem] left-[4rem] right-[4rem] h-[1px] bg-navy/5 -z-10" />

                    {roadmap.map((item: { step: string; title: string; desc: string }, index: number) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ delay: index * 0.15, duration: 0.6 }}
                            className="relative group"
                        >
                            <div className="w-20 h-20 bg-white rounded-2xl flex items-center justify-center text-2xl font-serif italic font-bold text-navy mb-8 shadow-xl shadow-navy/5 border border-white/50 group-hover:bg-navy group-hover:text-ivory transition-all duration-500">
                                {item.step}
                            </div>
                            <h3 className="text-xl font-bold text-navy mb-4 font-sans tracking-tight uppercase text-xs tracking-[0.1em]">
                                Paso {item.step}: <span className="block text-xl font-serif italic normal-case tracking-normal mt-1 opacity-90">{item.title}</span>
                            </h3>
                            <p className="text-dark/60 text-sm leading-relaxed font-sans max-w-[85%]">
                                {item.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}