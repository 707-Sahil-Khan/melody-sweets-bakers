"use client";

import styles from "./FacilitySection.module.css";

export default function FacilitySection() {
    return (
        <section id="heritage" className="section-gray">
            <div className="container">
                <div className={styles.flex}>
                    <div className={styles.textSide}>
                        <h2 className={styles.title}>The Wah Cantt Facility</h2>
                        <div className="divider" />
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
                                src="https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=800"
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
