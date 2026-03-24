import { config } from "@/config";
import { Facebook, Instagram } from "lucide-react";
import { Link } from "react-router-dom";

export function Footer() {
    const { branding } = config;

    return (
        <footer className="bg-surface text-white pt-24 pb-12 border-t border-white/5">
            <div className="container mx-auto px-6">
                <div className="grid md:grid-cols-4 gap-12 mb-20">
                    <div className="col-span-1 md:col-span-2">
                        <h2 className="text-3xl font-serif font-bold mb-4 text-white">{branding.name}</h2>
                        <p className="text-dark max-w-sm mb-8 font-sans leading-relaxed">
                            {branding.slogan}. Comprometidos con la excelencia clínica y la calidez humana en cada tratamiento.
                        </p>
                        <div className="flex gap-4">
                            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-peach hover:text-background transition-colors">
                                <Instagram size={18} className="text-white hover:text-background" />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-peach hover:text-background transition-colors">
                                <Facebook size={18} className="text-white hover:text-background" />
                            </a>
                        </div>
                    </div>
                    
                    <div>
                        <h4 className="font-bold mb-6 font-sans text-xs uppercase tracking-widest text-peach">Enlaces Rápidos</h4>
                        <ul className="space-y-4 text-dark font-sans text-sm">
                            <li><Link to="/" className="hover:text-white transition-colors">Inicio</Link></li>
                            <li><Link to="/about" className="hover:text-white transition-colors">Filosofía</Link></li>
                            <li><Link to="/services" className="hover:text-white transition-colors">Tratamientos</Link></li>
                            <li><Link to="/contact" className="hover:text-white transition-colors">Contacto</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold mb-6 font-sans text-xs uppercase tracking-widest text-peach">Legal</h4>
                        <ul className="space-y-4 text-dark font-sans text-sm">
                            <li><a href="#" className="hover:text-white transition-colors">Aviso de Privacidad</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Términos de Uso</a></li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-white/5 pt-8 text-center text-white/20 text-[11px] font-sans tracking-widest uppercase">
                    <p>© {new Date().getFullYear()} {branding.name}. Todos los derechos reservados.</p>
                </div>
            </div>
        </footer>
    );
}