"use client";

import React from "react";
import { motion, AnimatePresence } from "motion/react";
import ProductSlide from "./slides/ProductSlide";
import CustomersSlide from "./slides/CustomersSlide";
import IntegrationsSlide from "./slides/IntegrationsSlide";
import ResourcesSlide from "./slides/ResourcesSlide";
import CompanySlide from "./slides/CompanySlide";

interface MenuContentProps {
    selected: string | null;
}

const MenuContent = ({ selected }: MenuContentProps) => {
    const getContent = () => {
        switch (selected) {
            case "PRODUCT":
                return <ProductSlide />;
            case "CUSTOMERS":
                return <CustomersSlide />;
            case "INTEGRATIONS":
                return <IntegrationsSlide />;
            case "RESOURCES":
                return <ResourcesSlide />;
            case "COMPANY":
                return <CompanySlide />;
            default:
                return null;
        }
    };

    return (
        <motion.div
            layout
            style={{ borderRadius: "24px" }}
            initial={{ opacity: 0, y: 15, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.98 }}
            transition={{
                duration: 0.4,
                ease: [0.77, 0, 0.18, 1] // Accurate easing from audit
            }}
            className="absolute top-full left-1/2 -translate-x-1/2 mt-4 bg-[#0a0a0a] border border-white/10 overflow-hidden shadow-[0_32px_64px_-16px_rgba(0,0,0,0.8)] z-50 p-1"
        >
            <motion.div layout className="relative">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={selected}
                        initial={{ opacity: 0, x: 20, filter: "blur(10px)" }}
                        animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                        exit={{ opacity: 0, x: -20, filter: "blur(10px)" }}
                        transition={{ duration: 0.3, ease: "easeOut" }}
                    >
                        {getContent()}
                    </motion.div>
                </AnimatePresence>
            </motion.div>
        </motion.div>
    );
};

export default MenuContent;
