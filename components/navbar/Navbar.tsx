"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import NavLink from "./NavLink";
import MenuContent from "./MenuContent";
import AnnouncementBar from "./AnnouncementBar";

const Navbar = () => {
    const [mounted, setMounted] = useState(false);
    const [selected, setSelected] = useState<string | null>(null);
    const timeoutRef = useRef<NodeJS.Timeout | null>(null);

    useEffect(() => {
        setMounted(true);
    }, []);

    const handleMouseEnter = (menu: string) => {
        if (timeoutRef.current) clearTimeout(timeoutRef.current);
        setSelected(menu);
    };

    const handleMouseLeave = () => {
        timeoutRef.current = setTimeout(() => {
            setSelected(null);
        }, 200);
    };

    const navLinks = [
        "PRODUCT",
        "CUSTOMERS",
        "PRICING",
        "INTEGRATIONS",
        "RESOURCES",
        "COMPANY"
    ];

    if (!mounted) return null;

    return (
        <>
            <AnnouncementBar isShrunk={!!selected} />

            <motion.nav
                initial={false}
                animate={{
                    width: "auto",
                    borderRadius: "100px",
                }}
                transition={{
                    type: "spring",
                    stiffness: 260,
                    damping: 30,
                    mass: 1
                }}
                className="fixed top-20 left-1/2 -translate-x-1/2 z-[100] flex items-center p-1.5 bg-white/5 backdrop-blur-2xl border border-white/10 shadow-2xl overflow-visible"
                onMouseLeave={handleMouseLeave}
            >
                <div className="flex items-center ml-4 mr-6 group cursor-pointer shrink-0">
                    <div className="w-6 h-6 bg-white rounded-md flex items-center justify-center group-hover:rotate-[360deg] transition-transform duration-700">
                        <div className="w-3 h-3 bg-black rounded-sm" />
                    </div>
                </div>

                <div className="flex items-center gap-1 overflow-hidden">
                    {navLinks.map((link) => (
                        <NavLink
                            key={link}
                            isActive={selected === link}
                            onMouseEnter={() => handleMouseEnter(link)}
                        >
                            {link}
                        </NavLink>
                    ))}
                </div>

                <div className="flex-grow" />

                <div className="h-5 w-[1px] bg-white/10 mx-4 shrink-0" />

                <div className="flex items-center shrink-0">
                    <button className="px-5 py-2 text-xs font-black text-gray-400 hover:text-white transition-colors tracking-widest flex items-center gap-1">
                        SIGN IN <span>↗</span>
                    </button>
                    <button className="bg-[#3448FF] px-6 py-2.5 text-xs font-bold text-white rounded-full hover:scale-105 active:scale-95 transition-all shadow-lg shadow-blue-600/20 whitespace-nowrap">
                        SIGN UP
                    </button>
                </div>

                <AnimatePresence>
                    {selected && selected !== "PRICING" && (
                        <MenuContent selected={selected} />
                    )}
                </AnimatePresence>
            </motion.nav>
        </>
    );
};

export default Navbar;
