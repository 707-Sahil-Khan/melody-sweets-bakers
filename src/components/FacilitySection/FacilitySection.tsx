"use client";

import styles from "./FacilitySection.module.css";

export default function FacilitySection() {
    return (
        <section id="heritage" className={styles.section}>
            <div className={styles.inner}>
                <div className={styles.flex}>
                    <div className={styles.textSide}>
                        <span className={styles.eyebrow}>Our Facility</span>
                        <h2 className={styles.title}>The Wah Cantt Facility</h2>
                        <p className={styles.desc}>
                            Our production facility in the heart of Wah Cantt's Main Market is a testament to quality and scale. We combine traditional recipes with modern industrial standards to ensure every batch of sweets and bakery items is fresh, hygienic, and authentic.
                        </p>
                        <p className={styles.highlight}>
                            100% Purity • Daily Production • Industrial Grade Hygiene
                        </p>
                    </div>
                    <div className={styles.imageSide}>
                        <div className={styles.imageWrapper}>
                            <img
                                src="/products/wahcantt.webp"
                                alt="Melody Facility"
                                className={styles.img}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}