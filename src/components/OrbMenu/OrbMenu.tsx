"use client";

import { Home, LayoutGrid, History, PenTool, ShoppingBag } from "lucide-react";
import styles from "./OrbMenu.module.css";
import { useState } from "react";

export default function OrbMenu() {
    const [isOpen, setIsOpen] = useState(false);

    const menuItems = [
        { icon: <Home size={20} />, label: "Home" },
        { icon: <LayoutGrid size={20} />, label: "Boutique" },
        { icon: <PenTool size={20} />, label: "Flavor Lab" },
        { icon: <History size={20} />, label: "Heritage" },
        { icon: <ShoppingBag size={20} />, label: "Cart" },
    ];

    return (
        <nav className={styles.orbContainer}>
            <div
                className={`${styles.orb} ${isOpen ? styles.orbOpen : ""}`}
                onClick={() => setIsOpen(!isOpen)}
            >
                <div className={styles.orbInner}>
                    <div className={styles.orbPulse} />
                    <span className={styles.orbText}>Melody</span>
                </div>
            </div>

            <div className={`${styles.menuItems} ${isOpen ? styles.menuVisible : ""}`}>
                {menuItems.map((item, idx) => (
                    <div key={idx} className={styles.menuItem} data-luxury-hover="true">
                        {item.icon}
                        <span className={styles.itemLabel}>{item.label}</span>
                    </div>
                ))}
            </div>
        </nav>
    );
}
