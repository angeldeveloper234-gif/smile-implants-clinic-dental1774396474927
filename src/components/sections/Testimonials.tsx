import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { config } from "@/config";

export function Testimonials() {
    const { testimonials } = config;

    return (
        <section className="py-32 bg-ivory">
            <div className="container mx-auto px-6">
                <div className="text-center mb-24">
                    <span className="text-peach font-bold tracking-[0.2em] uppercase text-xs mb-4 block">
                        Testimonios
                    </span>
                    <h2 className="text-4xl md:text-5xl font-serif text-navy leading-tight">
                        Historias de <span className="italic text-navy/70">Éxito</span>
                    </h2>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {testimonials.map((item, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.8, delay: i * 0.1 }}
                            className="bg-white p-10 md:p-12 rounded-[2.5rem] relative group hover:shadow-2xl hover:shadow-navy/5 transition-all duration-500 border border-white/50"
                        >
                            <div className="flex gap-1 mb-10">
                                {[...Array(5)].map((_, idx) => (
                                    <Star key={idx} size={14} className="fill-navy text-navy" />
                                ))}
                            </div>
                            
                            <p className="text-xl md:text-2xl text-navy font-serif leading-relaxed mb-10 relative z-10 italic">
                                "{item.text}"
                            </p>
                            
                            <div className="pt-8 border-t border-navy/10 flex items-center justify-between">
                                <div>
                                    <p className="font-bold text-navy font-sans text-sm mb-1">{item.name}</p>
                                    <p className="text-[10px] text-dark/50 font-bold uppercase tracking-widest">{item.role}</p>
                                </div>
                                <div className="w-10 h-10 rounded-full bg-softblue flex items-center justify-center text-navy font-serif font-bold italic shadow-sm transition-colors duration-500 group-hover:bg-peach group-hover:text-navy">
                                    {item.name.charAt(0)}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}