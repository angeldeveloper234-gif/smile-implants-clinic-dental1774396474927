import { motion } from "framer-motion";
import { CalendarCheck, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { config } from "@/config";

export function CTA() {
    return (
        <section className="py-24 md:py-32 bg-ivory relative overflow-hidden">
            {/* Elegant Background Pattern */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]" />
            
            <div className="container mx-auto px-6 relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="max-w-5xl mx-auto bg-white p-12 md:p-24 rounded-[4rem] shadow-2xl shadow-navy/5 border border-white/50 relative overflow-hidden"
                >
                    {/* Decorative Blobs */}
                    <div className="absolute top-[-100px] left-[-100px] w-64 h-64 bg-peach/10 rounded-full blur-3xl -z-10" />
                    <div className="absolute bottom-[-100px] right-[-100px] w-64 h-64 bg-navy/5 rounded-full blur-3xl -z-10" />

                    <span className="text-peach font-bold tracking-[0.2em] uppercase text-xs mb-6 block">Comienza hoy</span>
                    <h2 className="text-4xl md:text-6xl lg:text-7xl font-serif text-navy leading-tight mb-10">
                        ¿LISTO PARA <span className="italic opacity-80 underline decoration-peach underline-offset-8">SONREÍR</span> SIN MIEDO?
                    </h2>
                    <p className="text-dark/60 text-lg md:text-xl mb-14 max-w-2xl mx-auto font-sans leading-relaxed">
                        Agenda tu valoración hoy mismo. Sin compromiso y con la tecnología más avanzada de {config.dynamicContent.city}.
                    </p>
                    
                    <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
                        <Button 
                            size="lg" 
                            className="bg-navy text-white hover:bg-navy/90 shadow-2xl shadow-navy/20 h-16 px-10 rounded-full text-sm font-bold uppercase tracking-widest transition-all hover:scale-105"
                        >
                            <CalendarCheck className="mr-2 w-5 h-5" />
                            Agendar Cita Online
                        </Button>
                        <Button 
                            size="lg" 
                            variant="outline" 
                            className="border-navy/10 text-navy hover:bg-navy/5 h-16 px-10 rounded-full text-sm font-bold uppercase tracking-widest transition-all"
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