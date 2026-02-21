"use client";

import styles from "./Hero.module.css";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import Navbar from "../Navbar/Navbar";

export default function Hero() {
    const contentRef = useRef<HTMLDivElement>(null);
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);

        // Safety: ensure DOM is ready and clean up on unmount
        let ctx = gsap.context(() => {
            if (contentRef.current) {
                gsap.to(contentRef.current, {
                    opacity: 1,
                    y: 0,
                    duration: 1.8,
                    ease: "expo.out",
                    delay: 0.5 // Wait for video to start
                });
            }
        });

        return () => ctx.revert();
    }, []);

    return (
        <section className={styles.hero}>
            <Navbar />

            <video autoPlay muted loop playsInline className={styles.video}>
                <source src="/melody-hero.mp4" type="video/mp4" />
            </video>

            <div className={styles.overlay} />

            {/* Content starts hidden via CSS and is revealed by GSAP */}
            <div
                className={styles.mainContent}
                ref={contentRef}
                style={{ opacity: 0, transform: "translateY(50px)" }}
            >
                <div className={styles.contentLeft}>
                    <h1 className={styles.title}>
                        Heritage in<br />every grain
                    </h1>

                    <div className={styles.descriptionCard}>
                        <p>
                            Wah Cantt's leading bakery, crafting more than 100,000 fresh goods every day.
                            From traditional sweets to artisan breads, delivered with quality you can trust.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}