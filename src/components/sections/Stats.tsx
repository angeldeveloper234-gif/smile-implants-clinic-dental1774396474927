import { motion } from 'framer-motion';
import { config } from '@/config';
import { CheckCircle2, ArrowUpRight } from 'lucide-react';

export function Stats() {
    const { stats } = config.dynamicContent;

    const data = [
        { label: "Pacientes Felices", value: "98", suffix: "%" },
        { label: "Años de Experiencia", value: stats.experienceYears, suffix: "+" },
        { label: "Sonrisas Transformadas", value: "3.5K", suffix: "" },
        { label: "Reviews 5 Estrellas", value: "4.9", suffix: "/5" },
    ];

    return (
        <section className="py-24 md:py-32 bg-ivory relative overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
                    {/* Left Column - Photography */}
                    <div className="relative">
                        <motion.div 
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.8 }}
                            className="relative aspect-[3/4] md:aspect-square lg:aspect-[4/5] rounded-[2rem] overflow-hidden"
                        >
                            <img 
                                src="/images-media/Dentista de pie con los brazos cruzados.jpg" 
                                alt="Dr. Benito - Especialista Dental" 
                                className="w-full h-full object-cover"
                            />
                            
                            {/* Glassmorphism Badge */}
                            <div className="absolute bottom-6 left-6 right-6 md:left-auto md:right-[-20px] md:bottom-12 md:w-64 bg-white p-5 rounded-3xl shadow-xl border border-white/50">
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-full bg-peach/20 flex items-center justify-center">
                                        <ArrowUpRight className="text-navy w-6 h-6" />
                                    </div>
                                    <div>
                                        <p className="font-serif text-navy font-bold text-lg leading-tight">Clínica Certificada</p>
                                        <p className="text-xs text-dark/70 font-medium tracking-wide">Estándares Internacionales</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                        
                        {/* Decorative Background Element */}
                        <div className="absolute -z-10 top-1/2 left-[-10%] w-[120%] h-[80%] bg-ivory rounded-[3rem] -rotate-6 transform -translate-y-1/2" />
                    </div>

                    {/* Right Column - Content */}
                    <div className="max-w-xl">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.6 }}
                        >
                            <div className="flex items-center gap-4 mb-6">
                                <span className="text-peach font-bold tracking-[0.2em] uppercase text-xs">La Experiencia Sunset</span>
                                <div className="h-[1px] flex-1 bg-navy/10"></div>
                            </div>

                            <h2 className="text-4xl md:text-5xl font-serif text-navy leading-[1.1] mb-8">
                                EXCELENCIA EN ODONTOLOGÍA CON <span className="italic text-navy/70">TRATO HUMANO</span>
                            </h2>

                            <p className="text-dark text-lg leading-relaxed mb-10 font-sans">
                                Entendemos que visitar al dentista puede generar ansiedad. Por eso, hemos rediseñado por completo la experiencia clínica. Un entorno relajante, atención personalizada y la tecnología más avanzada a tu disposición.
                            </p>

                            <ul className="space-y-5 mb-12">
                                {[
                                    {
                                        title: "Tecnología 3D de última generación",
                                        desc: "Diagnósticos precisos y planificación digital para resultados predecibles."
                                    },
                                    {
                                        title: "Tratamientos sin dolor",
                                        desc: "Técnicas mínimamente invasivas enfocadas en tu máximo confort."
                                    },
                                    {
                                        title: "Financiación a medida",
                                        desc: "Planes de pago flexibles porque tu salud dental es prioridad."
                                    }
                                ].map((item, index) => (
                                    <li key={index} className="flex gap-4">
                                        <div className="mt-1 bg-peach/10 p-1.5 rounded-full h-fit">
                                            <CheckCircle2 className="w-5 h-5 text-peach" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-navy mb-1">{item.title}</h4>
                                            <p className="text-sm text-dark/60 leading-relaxed max-w-sm">{item.desc}</p>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    </div>
                </div>

                {/* Stats Footer */}
                <div className="mt-24 pt-16 border-t border-navy/5">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-12">
                        {data.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="flex flex-col items-start border-l-2 border-peach/30 pl-6"
                            >
                                <div className="text-4xl md:text-5xl font-serif text-navy font-medium mb-3">
                                    {item.value}<span className="text-peach">{item.suffix}</span>
                                </div>
                                <p className="text-dark/50 text-xs font-bold uppercase tracking-[0.15em] leading-tight">
                                    {item.label}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}