"use client";

import styles from "./Navbar.module.css";
import Link from "next/link";
import { useState, useEffect } from "react";
import { ArrowRight } from "lucide-react";

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ""}`}>
            <div className={styles.container}>

                <Link href="/" className={styles.glassCard}>
                    <span className={styles.logoMain}>MELODY</span>
                    <span className={styles.logoSub}>Sweets and Bakers</span>
                </Link>

                <div className={styles.menu}>
                    <Link href="/" className={styles.link}>Solutions</Link>
                    <Link href="#products" className={styles.link}>Products</Link>
                    <Link href="#heritage" className={styles.link}>About</Link>
                    <Link href="#recipes" className={styles.link}>Recipes</Link>
                    <Link href="#contact" className={styles.link}>Contact</Link>
                </div>

                <div className={styles.actions}>
                    <Link href="/partner" className={styles.btnGold}>
                        Become a partner <ArrowRight size={18} />
                    </Link>
                </div>

            </div>
        </nav>
    );
}