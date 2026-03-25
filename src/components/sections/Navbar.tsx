import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { config } from "@/config";

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();
    const { branding } = config;

    const links = [
        { href: "/", label: "Inicio" },
        { href: "/about", label: "Filosofía" },
        { href: "/services", label: "Tratamientos" },
        { href: "/contact", label: "Contacto" },
    ];

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const isActive = (path: string) => location.pathname === path;

    return (
        <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? "bg-white/90 backdrop-blur-xl border-b border-navy/5 py-4" : "bg-transparent py-6"}`}>
            <div className="container mx-auto px-6 flex items-center justify-between">
                <Link to="/" className="flex flex-col">
                    <span className="text-2xl font-serif font-bold text-navy tracking-tight block">
                        {branding.name}
                    </span>
                    <span className="text-[9px] text-dark/50 font-bold tracking-[0.2em] uppercase">
                        Dental Excellence
                    </span>
                </Link>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-10">
                    {links.map((link) => (
                        <Link
                            key={link.href}
                            to={link.href}
                            className={`text-[11px] font-sans font-bold uppercase tracking-widest transition-colors ${isActive(link.href) ? "text-navy" : "text-dark/60 hover:text-navy"}`}
                        >
                            {link.label}
                        </Link>
                    ))}
                    <Link to="/contact">
                        <Button className="bg-navy text-white hover:bg-navy/90 rounded-full px-8 h-10 text-[11px] font-bold uppercase tracking-wider transition-all hover:scale-105">
                            Agendar
                        </Button>
                    </Link>
                </div>

                {/* Mobile Menu Toggle */}
                <button
                    className="md:hidden text-navy"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X strokeWidth={1.5} /> : <Menu strokeWidth={1.5} />}
                </button>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    className="md:hidden absolute top-full left-0 right-0 bg-white border-t border-navy/5 shadow-2xl"
                >
                    <div className="flex flex-col p-8 gap-6">
                        {links.map((link) => (
                            <Link
                                key={link.href}
                                to={link.href}
                                className={`text-sm font-sans font-bold uppercase tracking-widest ${isActive(link.href) ? "text-navy" : "text-dark/70"}`}
                                onClick={() => setIsOpen(false)}
                            >
                                {link.label}
                            </Link>
                        ))}
                        <Link to="/contact" onClick={() => setIsOpen(false)}>
                            <Button className="w-full mt-4 bg-navy text-white h-12 rounded-full uppercase tracking-widest text-xs font-bold">
                                Agendar Cita
                            </Button>
                        </Link>
                    </div>
                </motion.div>
            )}
        </nav>
    );
}