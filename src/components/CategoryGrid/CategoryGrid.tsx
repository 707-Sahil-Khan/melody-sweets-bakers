"use client";

import styles from "./CategoryGrid.module.css";
import { Candy, Cake, Wheat, Croissant } from "lucide-react";

const CATEGORIES = [
    {
        title: "Traditional Sweets",
        icon: <Candy size={40} />,
        href: "#heritage"
    },
    {
        title: "Artisan Cakes",
        icon: <Cake size={40} />,
        href: "#products"
    },
    {
        title: "Fresh Bakery",
        icon: <Wheat size={40} />,
        href: "#products"
    },
    {
        title: "Savory Delights",
        icon: <Croissant size={40} />,
        href: "#products"
    }
];

export default function CategoryGrid() {
    return (
        <section className="section-white">
            <div className="container">
                <div className={styles.grid}>
                    {CATEGORIES.map((cat, idx) => (
                        <div key={idx} className={styles.tile}>
                            <div className={styles.iconWrapper}>{cat.icon}</div>
                            <h3 className={styles.title}>{cat.title}</h3>
                            <a href={cat.href} className={styles.btn}>EXPLORE</a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
