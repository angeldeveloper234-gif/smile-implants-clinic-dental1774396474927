import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Plus, HelpCircle } from "lucide-react";

const faqs = [
    {
        q: "¿La primera consulta de valoración tiene costo?",
        a: "En Smile & Implants Clinic, tu primera consulta de diagnóstico integral es una inversión en tu salud. Incluye examen clínico detallado y plan de tratamiento personalizado.",
    },
    {
        q: "¿Aceptan seguros dentales internacionales?",
        a: "Sí, trabajamos con los principales seguros. Nuestro equipo te ayudará con toda la documentación necesaria para que tu reembolso sea rápido y sencillo.",
    },
    {
        q: "¿Realizan tratamientos en un solo día?",
        a: "Gracias a nuestra tecnología CAD/CAM y laboratorio propio, podemos realizar coronas y carillas en una sola sesión, optimizando tu tiempo.",
    },
    {
        q: "¿Qué materiales utilizan para los implantes?",
        a: "Utilizamos exclusivamente titanio de grado médico y zirconio de alta gama de marcas líderes mundiales, garantizando la máxima biocompatibilidad.",
    },
];

export function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    return (
        <section id="faq" className="py-24 md:py-32 bg-background relative border-t border-white/5">
            <div className="container mx-auto px-6 max-w-4xl">
                <div className="text-center mb-16 md:mb-24">
                    <span className="text-peach font-bold tracking-[0.2em] uppercase text-xs mb-4 block">
                        Despeja tus dudas
                    </span>
                    <h2 className="text-4xl md:text-5xl font-serif text-white leading-tight">
                        Preguntas <span className="italic text-peach">Frecuentes</span>
                    </h2>
                </div>

                <div className="space-y-4">
                    {faqs.map((faq, i) => (
                        <div 
                            key={i} 
                            className={`rounded-3xl border transition-all duration-500 overflow-hidden ${
                                openIndex === i 
                                ? "bg-surface border-peach/30 shadow-2xl shadow-black/20" 
                                : "bg-surface/40 border-white/5 hover:border-peach/20"
                            }`}
                        >
                            <button
                                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                                className="flex items-center justify-between w-full p-6 md:p-8 text-left transition-all group"
                            >
                                <div className="flex items-center gap-4 pr-8">
                                    <HelpCircle className={`w-5 h-5 transition-colors ${openIndex === i ? "text-peach" : "text-white/30"}`} />
                                    <span className={`text-base md:text-lg font-bold font-sans tracking-tight transition-colors ${openIndex === i ? "text-white" : "text-dark group-hover:text-white"}`}>
                                        {faq.q}
                                    </span>
                                </div>
                                <div className={`shrink-0 w-10 h-10 rounded-full flex items-center justify-center transition-all ${openIndex === i ? "bg-peach text-background rotate-45" : "bg-white/5 text-white hover:bg-white/10"}`}>
                                    <Plus className="w-5 h-5" />
                                </div>
                            </button>

                            <AnimatePresence>
                                {openIndex === i && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.4, ease: "circOut" }}
                                    >
                                        <div className="px-8 pb-8 md:px-14 md:pb-10">
                                            <div className="h-px w-full bg-white/5 mb-6" />
                                            <p className="text-dark font-sans leading-relaxed text-sm md:text-base">
                                                {faq.a}
                                            </p>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}