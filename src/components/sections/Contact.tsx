import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { config } from "@/config";

export function Contact() {
    const { dynamicContent, demoUser } = config;

    return (
        <section id="contact" className="py-24 md:py-32 bg-ivory">
            <div className="container mx-auto px-6">
                <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
                    <div>
                        <span className="text-peach font-bold tracking-[0.2em] uppercase text-xs mb-4 block">Contacto</span>
                        <h2 className="text-4xl md:text-5xl font-serif text-navy leading-tight mb-8 uppercase tracking-tight">
                            VISÍTANOS EN <br/> <span className="italic text-navy/70 normal-case">{dynamicContent.city.toUpperCase()}</span>
                        </h2>
                        <p className="text-dark/60 mb-12 font-sans leading-relaxed max-w-md">
                            Estamos ubicados estratégicamente para tu comodidad. Estacionamiento privado y acceso universal en todas nuestras instalaciones.
                        </p>

                        <div className="space-y-8">
                            {[
                                {
                                    icon: MapPin,
                                    title: "Dirección",
                                    desc: config.contact.address
                                },
                                {
                                    icon: Phone,
                                    title: "Teléfono / WhatsApp",
                                    desc: config.contact.phoneDisplay
                                },
                                {
                                    icon: Clock,
                                    title: "Horario de Atención",
                                    desc: "Lun - Vie: 9:00 AM - 7:00 PM",
                                    desc2: "Sáb: 9:00 AM - 2:00 PM"
                                }
                            ].map((item, idx) => (
                                <div key={idx} className="flex items-start gap-5 group">
                                    <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-navy shrink-0 group-hover:bg-navy group-hover:text-ivory transition-all duration-500 shadow-xl shadow-navy/5 border border-navy/5">
                                        <item.icon size={22} />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-navy mb-1 font-sans text-sm uppercase tracking-wider">{item.title}</h4>
                                        <p className="text-dark/70 text-sm leading-relaxed">{item.desc}</p>
                                        {item.desc2 && <p className="text-dark/70 text-sm leading-relaxed">{item.desc2}</p>}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="bg-white p-10 md:p-14 rounded-[3rem] shadow-2xl shadow-navy/5 border border-white/50 relative"
                    >
                        {/* Decorative background circle */}
                        <div className="absolute top-[-20px] right-[-20px] w-20 h-20 bg-peach/20 rounded-full blur-2xl -z-10" />

                        <h3 className="text-2xl font-serif text-navy mb-8 italic">Solicita tu Valoración Digital</h3>
                        <form className="space-y-5">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                <input type="text" placeholder="Nombre" className="w-full px-6 py-4 rounded-2xl bg-ivory/30 border border-navy/5 focus:bg-white focus:border-peach focus:ring-0 transition-all text-dark placeholder:text-dark/30 text-sm font-medium" />
                                <input type="text" placeholder="Apellido" className="w-full px-6 py-4 rounded-2xl bg-ivory/30 border border-navy/5 focus:bg-white focus:border-peach focus:ring-0 transition-all text-dark placeholder:text-dark/30 text-sm font-medium" />
                            </div>
                            <input type="tel" placeholder="Teléfono" className="w-full px-6 py-4 rounded-2xl bg-ivory/30 border border-navy/5 focus:bg-white focus:border-peach focus:ring-0 transition-all text-dark placeholder:text-dark/30 text-sm font-medium" />
                            <select className="w-full px-6 py-4 rounded-2xl bg-ivory/30 border border-navy/5 focus:bg-white focus:border-peach focus:ring-0 transition-all text-dark/50 text-sm font-medium appearance-none">
                                <option>Interés del Tratamiento</option>
                                <option>Diseño de Sonrisa</option>
                                <option>Ortodoncia Invisible</option>
                                <option>Implantes Dentales</option>
                                <option>Limpieza / General</option>
                            </select>
                            <textarea rows={4} placeholder="¿Cómo podemos ayudarte?" className="w-full px-6 py-4 rounded-2xl bg-ivory/30 border border-navy/5 focus:bg-white focus:border-peach focus:ring-0 transition-all text-dark placeholder:text-dark/30 text-sm font-medium"></textarea>
                            <Button className="w-full h-16 bg-navy text-ivory hover:bg-navy/90 rounded-full text-sm font-bold uppercase tracking-widest shadow-xl shadow-navy/20 transition-all hover:scale-[1.02]">
                                Enviar Mensaje
                            </Button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}