"use client";

import React from 'react';
import styles from './PartnershipSection.module.css';

export default function PartnershipSection() {
    return (
        <section className={styles.container}>
            <div className={styles.contentWrapper}>

                <div className={styles.leftSide}>
                    <span className={styles.label}>Become a partner</span>
                    <h2 className={styles.title}>
                        Custom bakery <br /> solutions for all
                    </h2>
                    <p className={styles.description}>
                        Supplying retailers, restaurants, cafés, hotels, and distributors across
                        the region with certified, high-quality bakery products tailored to
                        your business needs.
                    </p>

                    <div className={styles.btnGroup}>
                        <button className={styles.primaryBtn}>Become a partner →</button>
                        <button className={styles.secondaryBtn}>Explore our Solutions →</button>
                    </div>
                </div>

                <div className={styles.rightSide}>
                    <ul className={styles.partnerList}>
                        <li>retailers</li>
                        <li>restaurants</li>
                        <li className={styles.highlight}>cafés</li>
                        <li>hotels</li>
                        <li>distributors</li>
                    </ul>
                </div>

            </div>
        </section>
    );
}