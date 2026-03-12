"use client";

import styles from "./SignatureGrid.module.css";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const COLLECTION_DATA = [
    {
        id: 1,
        title: "Artisan Cakes",
        desc: "From rich chocolate drips to classic fruit cakes — every slice is baked fresh daily with the finest ingredients.",
        image: "/products/chocolate-pastry.png",
        label: "Cakes & Pastries"
    },
    {
        id: 2,
        title: "Traditional Sweets",
        desc: "A tribute to local tradition — rich Sohan Halwa, silky Barfi, and syrup-soaked Gulab Jamun.",
        image: "/products/fruit-cake.png",
        label: "Heritage Mithai"
    },
    {
        id: 3,
        title: "Fresh Bakery",
        desc: "Golden-brown breads baked every morning. Soft milky loaves, crispy bakarkhani and buttery buns.",
        image: "/products/plain-cake.png",
        label: "Daily Bakes"
    }
];

export default function SignatureGrid() {
    const gridRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const items = gridRef.current?.querySelectorAll(`.${styles.item}`);
        if (!items) return;

        gsap.from(items, {
            scrollTrigger: {
                trigger: gridRef.current,
                start: "top 80%",
            },
            y: 40,
            opacity: 0,
            duration: 1.5,
            stagger: 0.3,
            ease: "power2.out"
        });
    }, []);

    return (
        <section id="collections" className={styles.section}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <span className={styles.preTitle}>Curated Selection</span>
                    <h2 className={styles.sectionTitle}>Signature Collections</h2>
                </div>

                <div ref={gridRef} className={styles.grid}>
                    {COLLECTION_DATA.map((item) => (
                        <div
                            key={item.id}
                            className={`${styles.item} ${styles['item--' + item.id]}`}
                        >
                            <div className={styles.imageOverlay}>
                                <div
                                    className={styles.image}
                                    style={{ backgroundImage: `url(${item.image})` }}
                                />
                                <div className={styles.vignette} />
                            </div>

                            <div className={styles.content}>
                                <span className={styles.label}>{item.label}</span>
                                <h3 className={styles.itemTitle}>{item.title}</h3>
                                <p className={styles.itemDesc}>{item.desc}</p>
                                <div className={styles.explore}>
                                    <span className={styles.exploreText}>Discover Collection</span>
                                    <div className={styles.exploreLine} />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}