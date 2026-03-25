import { config } from "@/config";
import { Facebook, Instagram } from "lucide-react";

export function Footer() {
    const { branding } = config;

    return (
        <footer className="bg-white text-dark pt-24 pb-12 border-t border-navy/5">
            <div className="container mx-auto px-6">
                <div className="grid md:grid-cols-4 gap-12 mb-20">
                    <div className="col-span-1 md:col-span-2">
                        <h2 className="text-3xl font-serif font-bold mb-4 text-navy">{branding.name}</h2>
                        <p className="text-dark/60 max-w-sm mb-8 font-sans leading-relaxed">
                            {branding.slogan}. Comprometidos con la excelencia clínica y la calidez humana en cada tratamiento.
                        </p>
                        <div className="flex gap-4">
                            <a href="#" className="w-10 h-10 rounded-full bg-navy/5 flex items-center justify-center hover:bg-peach hover:text-navy transition-colors">
                                <Instagram size={18} className="text-navy" />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-navy/5 flex items-center justify-center hover:bg-peach hover:text-navy transition-colors">
                                <Facebook size={18} className="text-navy" />
                            </a>
                        </div>
                    </div>
                    
                    <div>
                        <h4 className="font-bold mb-6 font-sans text-xs uppercase tracking-widest text-peach">Enlaces Rápidos</h4>
                        <ul className="space-y-4 text-dark/70 font-sans text-sm">
                            <li><a href="/" className="hover:text-navy transition-colors">Inicio</a></li>
                            <li><a href="/about" className="hover:text-navy transition-colors">Filosofía</a></li>
                            <li><a href="/services" className="hover:text-navy transition-colors">Tratamientos</a></li>
                            <li><a href="/contact" className="hover:text-navy transition-colors">Contacto</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold mb-6 font-sans text-xs uppercase tracking-widest text-peach">Legal</h4>
                        <ul className="space-y-4 text-dark/70 font-sans text-sm">
                            <li><a href="#" className="hover:text-navy transition-colors">Aviso de Privacidad</a></li>
                            <li><a href="#" className="hover:text-navy transition-colors">Términos de Uso</a></li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-navy/5 pt-8 text-center text-dark/40 text-[11px] font-sans tracking-widest uppercase">
                    <p>© {new Date().getFullYear()} {branding.name}. Todos los derechos reservados.</p>
                </div>
            </div>
        </footer>
    );
}