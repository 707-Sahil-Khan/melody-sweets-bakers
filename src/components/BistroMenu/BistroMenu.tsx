"use client";

import styles from "./BistroMenu.module.css";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const MENU_DATA = [
    {
        category: "Cakes & Pastries",
        items: ["Red Velvet", "Lotus Cake", "Death by Chocolate", "Belgium Malt"]
    },
    {
        category: "Traditional Confectionery",
        items: ["Badam Barfi", "Sohan Halwa", "Gulab Jamun", "Motichoor Ladu"]
    },
    {
        category: "Savory & Biscuits",
        items: ["Chicken Patties", "Desi Ghee Khatai", "Zeera Biscuits", "Butter Puffs"]
    }
];

export default function BistroMenu() {
    const sectionRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const categories = sectionRef.current?.querySelectorAll(`.${styles.categoryGroup}`);
        if (!categories) return;

        gsap.from(categories, {
            scrollTrigger: {
                trigger: sectionRef.current,
                start: "top 70%",
            },
            y: 30,
            opacity: 0,
            duration: 1.2,
            stagger: 0.2,
            ease: "power2.out"
        });
    }, []);

    return (
        <section ref={sectionRef} className={styles.section}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <span className={styles.pre}>Taste the Legacy</span>
                    <h2 className={styles.title}>The Bistro Menu</h2>
                </div>

                <div className={styles.menuGrid}>
                    {MENU_DATA.map((group, idx) => (
                        <div key={idx} className={styles.categoryGroup}>
                            <h3 className={styles.categoryTitle}>{group.category}</h3>
                            <ul className={styles.itemList}>
                                {group.items.map((item, i) => (
                                    <li key={i} className={styles.menuItem}>
                                        <span className={styles.itemName}>{item}</span>
                                        <div className="bistro-dots" />
                                        <span className={styles.itemAvailable}>Signature</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
