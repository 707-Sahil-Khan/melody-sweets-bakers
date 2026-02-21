"use client";

import styles from "./BakersTable.module.css";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function BakersTable() {
    const sectionRef = useRef<HTMLDivElement>(null);
    const storyRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        gsap.from(storyRef.current, {
            scrollTrigger: {
                trigger: sectionRef.current,
                start: "top 60%",
            },
            y: 100,
            opacity: 0,
            duration: 1.5,
            ease: "power4.out"
        });
    }, []);

    return (
        <section ref={sectionRef} className={styles.section}>
            <div className={styles.backgroundContainer}>
                <div className={styles.moodyImage} />
                <div className={styles.vignette} />
            </div>

            <div className={styles.container}>
                <div ref={storyRef} className={styles.storyBlock}>
                    <span className={styles.label}>Since Day One</span>
                    <h2 className={styles.title}>The Baker’s Table</h2>
                    <p className={styles.story}>
                        In the heart of Wah Cantt's Main Market, we’ve been crafting more than just sweets. We’ve been crafting memories. Our table is where tradition meets passion, and where every glaze tells a story of authentic flavors.
                    </p>
                    <p className={styles.story}>
                        From our signature Bento cakes to the finest Milk Barfi, every creation is a testament to our dedication to quality and the heritage of our city.
                    </p>
                    <div className={styles.footer}>Melody Sweets & Bakers</div>
                </div>
            </div>
        </section>
    );
}
