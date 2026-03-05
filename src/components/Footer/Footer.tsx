"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
    Instagram,
    Linkedin,
    Facebook,
    ArrowRight,
    ArrowLeft
} from "lucide-react";
import styles from "./Footer.module.css";

const SLIDES = [
    {
        id: 1,
        title: "Salads",
        img: "/products/Salad.png", // Corrected casing to match your file
        tag: "Ready to Eat"
    },
    {
        id: 2,
        title: "Birthday personalised Cake",
        img: "/products/Birthday.png",
        tag: "Pastry & Sweets"
    },
    {
        id: 3,
        title: "Blueberry Cheese Cake",
        img: "/products/Blueberry.png",
        tag: "Pastry & Sweets"
    },
];

export default function Footer() {
    const [current, setCurrent] = useState(0);

    const next = () => setCurrent((prev) => (prev === SLIDES.length - 1 ? 0 : prev + 1));
    const prev = () => setCurrent((prev) => (prev === 0 ? SLIDES.length - 1 : prev - 1));

    return (
        <footer className={styles.footer}>
            <div className={styles.container}>

                {/* TOP SECTION */}
                <div className={styles.mainGrid}>

                    {/* 1. Slider Card */}
                    <div className={styles.cardWrapper}>
                        <div className={styles.productCard}>
                            <div className={styles.cardHeader}>
                                <span className={styles.badge}>{SLIDES[current].tag}</span>
                                <div className={styles.dots}>
                                    {SLIDES.map((_, i) => (
                                        <span key={i} className={i === current ? styles.activeDot : styles.dot} />
                                    ))}
                                </div>
                            </div>

                            <div className={styles.sliderBody}>
                                <button onClick={prev} className={styles.navBtn} aria-label="Previous product">
                                    <ArrowLeft size={18} />
                                </button>
                                <div className={styles.imgContainer}>
                                    <Image
                                        src={SLIDES[current].img}
                                        alt={SLIDES[current].title}
                                        width={150}
                                        height={150}
                                        className={styles.productImg}
                                        key={current}
                                        priority
                                    />
                                </div>
                                <button onClick={next} className={styles.navBtn} aria-label="Next product">
                                    <ArrowRight size={18} />
                                </button>
                            </div>
                            <h3 className={styles.cardTitle}>{SLIDES[current].title}</h3>
                        </div>
                    </div>

                    {/* 2. Navigation */}
                    <div className={styles.navLinks}>
                        <span className={styles.label}>Navigation</span>
                        <ul className={styles.giantLinks}>
                            <li>Solutions</li>
                            <li className={styles.activeLink}>Products</li>
                            <li>Recipes</li>
                            <li>Contact</li>
                        </ul>
                    </div>

                    {/* 3. Lists */}
                    <div className={styles.listGroups}>
                        <div className={styles.listCol}>
                            <span className={styles.label}>Categories</span>
                            <ul className={styles.smallLinks}>
                                <li>Bread</li><li>Confectionery</li><li>Healthy</li><li>Pastry & Sweets</li><li>Ready to Eat</li>
                            </ul>
                        </div>
                        <div className={styles.listCol}>
                            <span className={styles.label}>About us</span>
                            <ul className={styles.smallLinks}>
                                <li>Our story</li><li>Certifications</li><li>Facilities</li><li>Careers</li><li>Sustainability</li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* BOTTOM SECTION */}
                <div className={styles.bottomFlex}>
                    <div className={styles.newsletter}>
                        <span className={styles.label}>Newsletter</span>
                        <h2 className={styles.newsTitle}>Get our fresh Bakery updates</h2>
                        <div className={styles.inputRow}>
                            <input type="email" placeholder="Enter your email address" className={styles.input} />
                            <button className={styles.btn}>Sign up <ArrowRight size={16} /></button>
                        </div>
                    </div>

                    <div className={styles.socials}>
                        <span className={styles.label}>Follow us</span>
                        <div className={styles.icons}>
                            <a href="https://www.instagram.com/melodysweetspkofficial/" target="_blank" rel="noopener noreferrer" className={styles.socialIcon}>
                                <Instagram size={18} />
                            </a>
                            <a href="https://linkedin.com/in/melody-sweets-and-bakers-2954b7384?originalSubdomain=pk" target="_blank" rel="noopener noreferrer" className={styles.socialIcon}>
                                <Linkedin size={18} />
                            </a>
                            <a href="https://www.facebook.com/p/Melody-Sweets-and-Bakers-61579018833859/" target="_blank" rel="noopener noreferrer" className={styles.socialIcon}>
                                <Facebook size={18} />
                            </a>
                            {/* Official TikTok SVG Path */}
                            <a href="https://www.tiktok.com/@melodybakerywah" target="_blank" rel="noopener noreferrer" className={styles.socialIcon}>
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>

                <div className={styles.footerFinisher}>
                    <p>© 2026 Melody Sweets & Bakers — Wah Cantt Heritage</p>
                    <a href="#">Privacy Policy</a>
                </div>
            </div>
        </footer>
    );
}