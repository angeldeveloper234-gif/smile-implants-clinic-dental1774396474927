export interface GalleryItem {
    title: string;
    category: string;
    image: string;
}

export interface ProductItem {
    id: string;
    name: string;
    price: string;
    desc: string;
    image: string;
}

export interface ServiceItem {
    id: string;
    icon: string;
    title: string;
    problem: string;
    agitation: string;
    solve: string;
    price: string;
}

export interface TestimonialItem {
    name: string;
    role: string;
    text: string;
    tags: string[];
}

export interface Config {
    branding: {
        name: string;
        slogan: string;
        logo: string;
        trade: string;
    };
    contact: {
        address: string;
        googleMaps: string;
        phoneDisplay: string;
    };
    supabase: {
        url: string;
        anonKey: string;
    };
    analytics: {
        webhookUrl: string;
    };
    bookingUrl: string;
    paymentLink: string;
    googleMapsReviewUrl: string;
    dynamicContent: {
        city: string;
        localAnchor: string;
        stats: {
            projectsDone: number;
            experienceYears: number;
            happyClients: number;
            m2Built?: string;
        };
        specialization: {
            title: string;
            pain: string;
            ego: string;
            hook: string;
        };
        roadmap: Array<{
            step: string;
            title: string;
            desc: string;
        }>;
        pricing: {
            basic: string;
            comprehensive: string;
            retainer: string;
        };
    };
    services: ServiceItem[];
    testimonials: TestimonialItem[];
    demoUser: {
        name: string;
        email: string;
        whatsapp: string;
    };
    features: {
        showGallery: boolean;
        showProducts: boolean;
        showTestimonials: boolean;
        showFAQ: boolean;
        showStats: boolean;
    };
    gallery: GalleryItem[];
    products: ProductItem[];
}

export const config: Config = {
    branding: {
        name: "Smile & Implants Clinic | Guadalajara",
        slogan: "Recupera la confianza de sonreír",
        logo: "Smile & Implants",
        trade: "Implantología y Rehabilitación Oral",
    },
    contact: {
        address: "C. Primo Feliciano Velázquez 761, Chapalita, 44500 Guadalajara, Jal., México",
        googleMaps: "https://www.google.com/maps/place/Smile+%26+Implants+Clinic/@20.6696649,-103.4204259,15z/data=!4m10!1m2!2m1!1sSmile+%26+Implants+Clinic!3m6!1s0x8428af7455219839:0x3dc55b0e60ed4868!8m2!3d20.6696649!4d-103.4013715",
        phoneDisplay: "+52 33 2494 8947"
    },
    supabase: {
        url: "",
        anonKey: "",
    },
    analytics: {
        webhookUrl: "",
    },
    bookingUrl: "#contact",
    paymentLink: "",
    googleMapsReviewUrl: "",
    dynamicContent: {
        city: "Guadalajara",
        localAnchor: "Chapalita",
        stats: {
            projectsDone: 3500,
            experienceYears: 15,
            happyClients: 3400,
            m2Built: "100%"
        },
        specialization: {
            title: "Implantología",
            pain: "Miedo al dentista y pérdida de piezas",
            ego: "Sonrisa Perfecta y Funcional",
            hook: "Resultados Garantizados"
        },
        roadmap: [
            {
                step: "01",
                title: "Diagnóstico 3D",
                desc: "Evaluación integral con tomografía y escáner intraoral para precisión milimétrica."
            },
            {
                step: "02",
                title: "Estrategia Clínica",
                desc: "Planificación digital de tu cirugía o rehabilitación para resultados predecibles."
            },
            {
                step: "03",
                title: "Resolución",
                desc: "Ejecución del tratamiento con sedación consciente y entrega de resultados finales."
            }
        ],
        pricing: {
            basic: "Valoración Inicial",
            comprehensive: "Rehabilitación Completa",
            retainer: "Mantenimiento Anual"
        }
    },
    services: [
        {
            id: "01",
            icon: "🦷",
            title: "Implantes Dentales",
            problem: "Pérdida de piezas dentales",
            agitation: "Dificultad para comer y sonreír con confianza.",
            solve: "Implantes de titanio grado médico con garantía de por vida.",
            price: "Valoración Personalizada"
        },
        {
            id: "02",
            icon: "✨",
            title: "Diseño de Sonrisa",
            problem: "Dientes desgastados o manchados",
            agitation: "Apariencia envejecida y falta de estética.",
            solve: "Carillas de cerámica y blanqueamiento de alta gama.",
            price: "Valoración Personalizada"
        },
        {
            id: "03",
            icon: "🛡️",
            title: "Rehabilitación Oral",
            problem: "Problemas funcionales severos",
            agitation: "Dolor articular y colapso de mordida.",
            solve: "Restauración completa de la función y estética.",
            price: "Valoración Personalizada"
        },
        {
            id: "04",
            icon: "🏥",
            title: "Cirugía Maxilofacial",
            problem: "Problemas óseos complejos",
            agitation: "Necesidad de intervenciones especializadas.",
            solve: "Procedimientos quirúrgicos avanzados y seguros.",
            price: "Valoración Personalizada"
        }
    ],
    testimonials: [
        {
            name: "Roberto G.",
            role: "Paciente de Implantes",
            text: "El Dr. Mongalo y su equipo cambiaron mi vida. Puedo comer de todo nuevamente.",
            tags: ["Implantes", "Profesionalismo"]
        },
        {
            name: "Ana María L.",
            role: "Diseño de Sonrisa",
            text: "La atención en Guadalajara fue excelente. Instalaciones de primer mundo.",
            tags: ["Estética", "Guadalajara"]
        },
        {
            name: "Carlos D.",
            role: "Rehabilitación",
            text: "Profesionalismo absoluto. Me explicaron cada paso del proceso.",
            tags: ["Salud", "Confianza"]
        }
    ],
    demoUser: {
        name: "Smile & Implants Recepción",
        email: "contacto@smileimplants.com",
        whatsapp: "+523333596877"
    },
    features: {
        showGallery: true,
        showProducts: false,
        showTestimonials: true,
        showFAQ: true,
        showStats: true
    },
    gallery: [
        {
            title: "Clínica Chapalita",
            category: "Instalaciones",
            image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=800&auto=format&fit=crop"
        },
        {
            title: "Instalaciones Médicas",
            category: "Equipamiento",
            image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?q=80&w=800&auto=format&fit=crop"
        }
    ],
    products: []
};