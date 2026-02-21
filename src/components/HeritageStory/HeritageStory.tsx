"use client";

import styles from "./HeritageStory.module.css";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}

export default function HeritageStory() {
    const sectionRef = useRef<HTMLDivElement>(null);
    const imgRef = useRef<HTMLDivElement>(null);
    const textRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        let ctx = gsap.context(() => {
            gsap.from(imgRef.current, {
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 80%",
                },
                x: -60,
                opacity: 0,
                duration: 1.2,
                ease: "power2.out"
            });

            gsap.from(textRef.current, {
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 80%",
                },
                x: 60,
                opacity: 0,
                duration: 1.2,
                ease: "power2.out"
            });
        });
        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} className={styles.section}>
            <div className={styles.container}>
                <div ref={imgRef} className={styles.imageWrapper}>
                    <div className={styles.moodyImage} />
                </div>
                <div ref={textRef} className={styles.textContent}>
                    <span className={styles.label}>Our Legacy</span>
                    <h2 className={styles.title}>The Soul of <br />Wah Cantt</h2>
                    <p className={styles.story}>
                        From the rolling hills of the Taxila Valley to the heart of Wah Cantt, our story is baked into every crust. What started as a small local patisserie has blossomed into a beacon of culinary heritage.
                    </p>
                    <div className={styles.signature}>Melody Sweets & Bakers</div>
                </div>
            </div>
        </section>
    );
}