"use client";

import React from "react";
import { motion } from "motion/react";

interface NavLinkProps {
    children: React.ReactNode;
    onMouseEnter: () => void;
    isActive: boolean;
}

const NavLink = ({ children, onMouseEnter, isActive }: NavLinkProps) => {
    return (
        <div
            onMouseEnter={onMouseEnter}
            className={`relative px-4 py-2 cursor-pointer transition-colors duration-300 ${isActive ? "text-white" : "text-gray-500 hover:text-gray-300"
                }`}
        >
            <span className="relative z-10 font-black text-xs tracking-[0.05em]">
                {children}
            </span>
            {isActive && (
                <motion.div
                    layoutId="nav-bg"
                    className="absolute inset-0 bg-white/10 rounded-full -z-0"
                    transition={{ type: "spring", bounce: 0.15, duration: 0.5 }}
                />
            )}
        </div>
    );
};

export default NavLink;
