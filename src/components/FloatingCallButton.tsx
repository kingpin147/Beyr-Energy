"use client";

import { useState, useEffect } from "react";
import { Phone } from "lucide-react";

export default function FloatingCallButton() {
    const [visible, setVisible] = useState(false);
    const phoneNumber = "+971559514603";

    useEffect(() => {
        const timer = setTimeout(() => {
            setVisible(true);
        }, 2000);
        return () => clearTimeout(timer);
    }, []);

    return (
        <a
            href={`tel:${phoneNumber}`}
            className={`fixed bottom-6 left-6 z-50 lg:hidden w-16 h-16 rounded-2xl bg-navy-900 border border-white/10 shadow-navy-card flex items-center justify-center transition-all duration-500 hover:scale-110 active:scale-95 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
            aria-label="Call Us"
        >
            <Phone className="w-7 h-7 text-energy" />
            <span className="absolute -top-1 -right-1 w-4 h-4 bg-energy rounded-full animate-pulse shadow-green-glow" />
        </a>
    );
}
