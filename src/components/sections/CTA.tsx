import { motion } from "framer-motion";
import { CalendarCheck, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { config } from "@/config";
import { Link } from "react-router-dom";

export function CTA() {
    return (
        <section className="py-24 md:py-32 bg-background relative overflow-hidden">
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]" />
            
            <div className="container mx-auto px-6 relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="max-w-5xl mx-auto bg-surface p-12 md:p-24 rounded-[4rem] shadow-2xl shadow-black/50 border border-white/5 relative overflow-hidden"
                >
                    <div className="absolute top-[-100px] left-[-100px] w-64 h-64 bg-peach/5 rounded-full blur-3xl -z-10" />
                    <div className="absolute bottom-[-100px] right-[-100px] w-64 h-64 bg-white/5 rounded-full blur-3xl -z-10" />

                    <span className="text-peach font-bold tracking-[0.2em] uppercase text-xs mb-6 block">Comienza hoy</span>
                    <h2 className="text-4xl md:text-6xl lg:text-7xl font-serif text-white leading-tight mb-10">
                        ¿LISTO PARA <span className="italic opacity-80 underline decoration-peach underline-offset-8">SONREÍR</span> SIN MIEDO?
                    </h2>
                    <p className="text-dark text-lg md:text-xl mb-14 max-w-2xl mx-auto font-sans leading-relaxed">
                        Agenda tu valoración hoy mismo. Sin compromiso y con la tecnología más avanzada de {config.dynamicContent.city}.
                    </p>
                    
                    <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
                        <Link to="/contact">
                            <Button 
                                size="lg" 
                                className="bg-peach text-background hover:bg-peach/90 shadow-2xl shadow-peach/10 h-16 px-10 rounded-full text-sm font-bold uppercase tracking-widest transition-all hover:scale-105"
                            >
                                <CalendarCheck className="mr-2 w-5 h-5" />
                                Agendar Cita Online
                            </Button>
                        </Link>
                        <Button 
                            size="lg" 
                            variant="outline" 
                            className="border-white/10 text-white hover:bg-white/5 h-16 px-10 rounded-full text-sm font-bold uppercase tracking-widest transition-all"
                            onClick={() => window.location.href = `https://wa.me/${config.demoUser.whatsapp.replace('+', '')}`}
                        >
                            <Phone className="mr-2 w-5 h-5" />
                            WhatsApp Directo
                        </Button>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}