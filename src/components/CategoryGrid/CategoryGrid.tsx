"use client";

import Link from "next/link";
import styles from "./CategoryGrid.module.css";
import { Candy, Cake, Wheat, Croissant } from "lucide-react";

const CATEGORIES = [
    {
        title: "Traditional Sweets",
        desc: "Mithai, halwa & desi favourites",
        icon: <Candy size={44} />,
        href: "/products/traditional-sweets",
        count: "12 products"
    },
    {
        title: "Artisan Cakes",
        desc: "Celebration & everyday cakes",
        icon: <Cake size={44} />,
        href: "/products/artisan-cakes",
        count: "8 products"
    },
    {
        title: "Fresh Bakery",
        desc: "Breads, buns & daily bakes",
        icon: <Wheat size={44} />,
        href: "/products/fresh-bakery",
        count: "10 products"
    },
    {
        title: "Savory Delights",
        desc: "Biscuits, bakarkhani & more",
        icon: <Croissant size={44} />,
        href: "/products/savory-delights",
        count: "6 products"
    }
];

export default function CategoryGrid() {
    return (
        <section className={styles.section}>
            <div className={styles.inner}>
                <div className={styles.header}>
                    <span className={styles.eyebrow}>What we make</span>
                    <h2 className={styles.heading}>Our Categories</h2>
                </div>
                <div className={styles.grid}>
                    {CATEGORIES.map((cat, idx) => (
                        <Link key={idx} href={cat.href} className={styles.tile}>
                            <div className={styles.iconWrapper}>{cat.icon}</div>
                            <div className={styles.tileBody}>
                                <h3 className={styles.title}>{cat.title}</h3>
                                <p className={styles.desc}>{cat.desc}</p>
                            </div>
                            <span className={styles.btn}>Explore →</span>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}