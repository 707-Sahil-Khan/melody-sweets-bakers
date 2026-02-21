"use client";

import styles from "./SignatureGrid.module.css";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const COLLECTION_DATA = [
    {
        id: 1,
        title: "The Bento Series",
        desc: "Artistic mini-cakes crafted for intimate moments and delicate celebrations.",
        image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?q=80&w=800",
        label: "Collection One"
    },
    {
        id: 2,
        title: "Heritage Sweets",
        desc: "A tribute to local tradition, focusing on the rich textures of Badam Barfi and Sohan Halwa.",
        image: "https://images.unsplash.com/photo-1591892425484-825edef16ab3?q=80&w=800",
        label: "Collection Two"
    },
    {
        id: 3,
        title: "The Morning Batch",
        desc: "Golden-brown perfection. Delicate Chicken Patties and buttery, crisp tea puffs.",
        image: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?q=80&w=800",
        label: "Collection Three"
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
