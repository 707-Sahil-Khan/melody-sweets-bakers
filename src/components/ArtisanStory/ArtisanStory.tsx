"use client";

import styles from "./ArtisanStory.module.css";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ArtisanStory() {
    const sectionRef = useRef<HTMLDivElement>(null);
    const contentRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        gsap.from(contentRef.current, {
            scrollTrigger: {
                trigger: sectionRef.current,
                start: "top 60%",
            },
            y: 50,
            opacity: 0,
            duration: 1.5,
            ease: "power3.out"
        });
    }, []);

    return (
        <section ref={sectionRef} className={styles.section}>
            <div className={styles.imageGrid}>
                <div className={styles.imageItem} style={{ backgroundImage: "url('https://images.unsplash.com/photo-1594911772120-e41620c3291d?q=80&w=800')" }} />
                <div className={styles.imageItem} style={{ backgroundImage: "url('https://images.unsplash.com/photo-1550617931-e17a7b70dce2?q=80&w=800')" }} />
            </div>

            <div className={styles.overlay} />

            <div ref={contentRef} className={styles.container}>
                <span className={styles.label}>Our Philosophy</span>
                <h2 className={styles.headline}>A Legacy of Purity.</h2>
                <p className={styles.text}>
                    Deeply rooted in the heart of Wah Cantt, Melody is a tribute to the timeless traditions of baking and confectionery. Every pinch of flour and drop of milk is selected for its purity, ensuring that our heritage lives on in every bite.
                </p>
            </div>
        </section>
    );
}
