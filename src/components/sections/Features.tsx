import { motion } from "framer-motion";
import { config } from "@/config";
import { ArrowRight } from "lucide-react";

const serviceImages = [
    "/images-media/Dentista examinando los dientes del paciente femenino.jpg",
    "/images-media/Ortodoncista con guantes de látex manipulando equipos dentales.jpg",
    "/images-media/Un primer plano de los instrumentos dentales.jpg",
    "/images-media/dentista-tratando-pacientes-con-dientes.jpg",
];

export function Features() {
    const { services } = config;

    return (
        <section className="py-32 bg-ivory">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-end mb-20">
                    <div className="max-w-xl">
                        <span className="text-peach font-bold tracking-[0.2em] uppercase text-xs mb-4 block">
                            Nuestros Tratamientos
                        </span>
                        <h2 className="text-4xl md:text-5xl font-serif text-navy leading-tight">
                            Exelencia en odontología <br className="hidden md:block"/> 
                            <span className="italic text-navy/70">con un toque humano.</span>
                        </h2>
                    </div>
                    <div className="mt-8 md:mt-0">
                        <p className="text-dark/60 font-sans max-w-sm text-sm">
                            Descubre opiniones de pacientes encantados y conoce los tratamientos especializados de primer nivel.
                        </p>
                    </div>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={service.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className="group relative h-[450px] w-full  rounded-[2rem] overflow-hidden cursor-pointer bg-navy"
                        >
                            {/* Background Image */}
                            <img
                                src={serviceImages[index]}
                                alt={service.title}
                                className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1500ms] group-hover:scale-110 opacity-60 group-hover:opacity-40"
                            />
                            
                            {/* Gradient Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/50 to-transparent transition-opacity duration-500 opacity-90 group-hover:opacity-100" />

                            {/* Content */}
                            <div className="absolute inset-0 p-8 flex flex-col justify-end">
                                <div className="transform transition-transform duration-500 group-hover:-translate-y-8">
                                    <div className="w-14 h-14 rounded-2xl border border-ivory/20 flex items-center justify-center text-3xl mb-8 bg-navy/30 backdrop-blur-md transition-all duration-700 group-hover:bg-peach group-hover:text-navy group-hover:scale-110 group-hover:rotate-6">
                                        {service.icon}
                                    </div>
                                    <h3 className="text-2xl font-serif text-ivory mb-3 leading-tight">
                                        {service.title}
                                    </h3>
                                    <p className="text-ivory/50 text-sm font-sans leading-relaxed line-clamp-2 transition-opacity group-hover:opacity-100">
                                        {service.solve}
                                    </p>
                                </div>

                                {/* Hover Button */}
                                <div className="absolute bottom-8 left-8 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-700 delay-100">
                                    <button className="flex items-center gap-3 bg-peach text-navy px-7 py-3 rounded-full text-[10px] font-bold uppercase tracking-[0.2em] shadow-xl shadow-peach/20 hover:scale-105 transition-transform">
                                        Saber más <ArrowRight className="w-4 h-4" />
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}