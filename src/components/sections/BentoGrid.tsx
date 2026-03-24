import { motion } from "framer-motion";
import { HardHat, Ruler, Building2, TreePine } from "lucide-react";
import { cn } from "@/lib/utils";

const items = [
    {
        title: "Seguridad Clínica",
        description: "Protocolos estrictos de esterilización para proteger tu salud.",
        header: <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-amber-600/20 to-amber-900/20 border border-amber-500/10" />,
        icon: <HardHat className="h-4 w-4 text-amber-500" />,
        className: "md:col-span-2",
    },
    {
        title: "Diagnóstico 3D",
        description: "Visualiza tu tratamiento antes de empezar.",
        header: <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-zinc-800 to-zinc-900 border border-white/5" />,
        icon: <Building2 className="h-4 w-4 text-zinc-400" />,
        className: "md:col-span-1",
    },
    {
        title: "Precisión Digital",
        description: "Escáneres intraorales para ajustes perfectos.",
        header: <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-zinc-800 to-zinc-900 border border-white/5" />,
        icon: <Ruler className="h-4 w-4 text-zinc-400" />,
        className: "md:col-span-1",
    },
    {
        title: "Biocompatibilidad",
        description: "Materiales libres de metal y altamente estéticos.",
        header: <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-green-900/20 to-zinc-900 border border-green-500/10" />,
        icon: <TreePine className="h-4 w-4 text-green-500" />,
        className: "md:col-span-2",
    },
];

export function BentoGrid() {
    return (
        <section className="py-24 bg-background">
            <div className="container px-4 md:px-6 mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-display font-bold mb-4 text-white tracking-tight">
                        Estándares de Excelencia
                    </h2>
                    <p className="text-dark max-w-2xl mx-auto">
                        Combinamos técnicas tradicionales con la tecnología más avanzada del mercado.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto">
                    {items.map((item, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1, duration: 0.5 }}
                            whileHover={{ scale: 1.01 }}
                            className={cn(
                                "row-span-1 rounded-xl group/bento hover:shadow-xl transition duration-200 shadow-none p-6 bg-surface border border-white/5 justify-between flex flex-col space-y-4",
                                item.className
                            )}
                        >
                            {item.header}
                            <div className="group-hover/bento:translate-x-1 transition duration-200">
                                <div className="flex items-center gap-2 mb-2">
                                    {item.icon}
                                    <div className="font-bold text-neutral-200">
                                        {item.title}
                                    </div>
                                </div>
                                <div className="font-normal text-zinc-500 text-sm">
                                    {item.description}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}