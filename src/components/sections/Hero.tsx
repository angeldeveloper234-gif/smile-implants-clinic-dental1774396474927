import { motion } from "framer-motion";
import { ArrowRight, Star, Clock, CheckCircle2, Play, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { config } from "@/config";
import { Link } from "react-router-dom";

export function Hero() {
    const { dynamicContent, branding } = config;
    const { city } = dynamicContent;

    return (
        <section className="relative min-h-screen flex flex-col pt-24 overflow-hidden bg-background">
            <div className="relative flex-grow flex flex-col justify-center w-full">
                {/* Background Accents */}
                <div className="absolute top-0 right-0 w-[45%] h-full bg-surface/30 rounded-l-[10rem] hidden lg:block z-0 border-l border-white/5" />
                
                <div className="container mx-auto px-6 relative z-10 flex-grow flex items-center py-12 lg:py-0">
                    <div className="w-full lg:w-[55%] xl:w-1/2">
                        {/* Left Side: Copy */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            className="max-w-2xl py-10"
                        >
                            <motion.div 
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 0.2 }}
                                className="inline-flex items-center gap-2 bg-surface px-4 py-2 rounded-full border border-peach/30 mb-8 shadow-xl shadow-black/20"
                            >
                                <span className="flex">
                                    {[1, 2, 3, 4, 5].map((_, i) => (
                                        <Star key={i} className="w-3 h-3 fill-peach text-peach" />
                                    ))}
                                </span>
                                <span className="text-[10px] font-bold text-white uppercase tracking-[0.2em]">
                                    Excelencia en {city}
                                </span>
                            </motion.div>

                            <h1 className="text-5xl md:text-7xl lg:text-[5rem] font-serif text-white leading-[1.05] mb-8 font-bold">
                                Recupera la <span className="italic text-peach">confianza</span> de sonreír.
                            </h1>

                            <p className="text-xl text-dark mb-10 leading-relaxed font-sans max-w-lg">
                                Implantología y rehabilitación oral de alta precisión en {city}. 
                                Liderados por el {config.team.leadDoctors}.
                            </p>

                            <div className="flex flex-col sm:flex-row items-center gap-8 mb-12">
                                <Link to="/contact">
                                    <Button 
                                        size="lg" 
                                        className="bg-peach text-background hover:bg-peach/90 h-16 px-10 rounded-full text-sm font-bold tracking-widest transition-all hover:scale-105 shadow-2xl shadow-peach/10 w-full sm:w-auto uppercase"
                                    >
                                        AGENDAR VALORACIÓN <ArrowRight className="ml-2 w-4 h-4" />
                                    </Button>
                                </Link>
                                
                                <button className="flex items-center gap-4 group">
                                    <span className="w-14 h-14 rounded-full bg-surface text-peach border border-white/10 flex items-center justify-center transition-transform group-hover:scale-110 shadow-lg">
                                        <Play size={20} fill="currentColor" />
                                    </span>
                                    <span className="text-sm font-bold text-white uppercase tracking-widest border-b border-white/20 pb-1">
                                        Ver Casos
                                    </span>
                                </button>
                            </div>

                            {/* Social Proof */}
                            <div className="flex items-center gap-4 py-6 border-t border-white/5">
                                <div className="flex -space-x-2">
                                    {[
                                        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=150&h=150&q=80",
                                        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&h=150&q=80",
                                        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=150&h=150&q=80"
                                    ].map((url, i) => (
                                        <img 
                                            key={i} 
                                            src={url} 
                                            alt={`Paciente ${i + 1}`}
                                            className="w-12 h-12 rounded-full border-4 border-background object-cover shadow-sm bg-surface" 
                                        />
                                    ))}
                                </div>
                                <div className="text-sm font-bold text-dark leading-tight">
                                    +3,400 <br/> Pacientes felices
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>

                {/* Right Side: Image */}
                <motion.div
                    initial={{ opacity: 0, y: 100 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.3 }}
                    className="absolute bottom-0 right-0 w-[50%] h-[95%] hidden lg:flex justify-center items-end pointer-events-none z-10"
                >
                    <img 
                        src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2000&auto=format&fit=crop" 
                        alt={`Especialistas ${branding.name}`} 
                        className="h-full w-auto object-contain object-bottom select-none drop-shadow-2xl mask-image-gradient"
                        style={{ maskImage: 'linear-gradient(to bottom, black 80%, transparent 100%)' }}
                    />

                    <div className="absolute top-[20%] left-[5%] z-20 w-32 h-32 bg-surface/80 backdrop-blur-md rounded-full flex items-center justify-center p-4 text-center shadow-2xl -rotate-12 border border-peach/30">
                        <span className="text-xs font-bold text-peach leading-tight uppercase tracking-wider">
                            {config.team.badgeText}
                        </span>
                    </div>
                </motion.div>
            </div>

            {/* Bottom Bar */}
            <motion.div 
                initial={{ y: 100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="w-full bg-surface border-t border-white/5 relative z-30"
            >
                <div className="container mx-auto px-6 py-10">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-center text-white">
                        <div className="flex items-center gap-5">
                            <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center">
                                <CheckCircle2 className="text-peach" size={28} />
                            </div>
                            <div>
                                <h3 className="text-2xl font-serif font-bold text-white">Diagnóstico</h3>
                                <p className="text-dark text-xs font-bold uppercase tracking-widest">Alta Precisión</p>
                            </div>
                        </div>
                        
                        <div className="flex items-center gap-5">
                            <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center">
                                <Star className="text-peach fill-peach" size={28} />
                            </div>
                            <div>
                                <h3 className="text-2xl font-serif font-bold text-white">{config.dynamicContent.stats.experienceYears}+ Años</h3>
                                <p className="text-dark text-xs font-bold uppercase tracking-widest">Experiencia Clínica</p>
                            </div>
                        </div>

                        <div className="flex items-center gap-5">
                            <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center">
                                <Calendar className="text-peach" size={28} />
                            </div>
                            <div>
                                <h3 className="text-2xl font-serif font-bold text-white">{city}</h3>
                                <p className="text-dark text-xs font-bold uppercase tracking-widest">Ubicación Premium</p>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>
        </section>
    );
}