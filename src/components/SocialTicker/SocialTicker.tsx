"use client";

import styles from "./SocialTicker.module.css";
import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function SocialTicker() {
    const tickerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ticker = tickerRef.current;
        if (!ticker) return;

        const totalWidth = ticker.scrollWidth;

        gsap.to(ticker, {
            x: -totalWidth / 2,
            duration: 20,
            ease: "none",
            repeat: -1,
        });
    }, []);

    const text = "• BENTO CAKES • TRADITIONAL MITHAI • FRESH POUND CAKES • HAND-CRAFTED BISCUITS • BAKED DAILY IN WAH CANTT • ";

    return (
        <div className={styles.tickerContainer}>
            <div ref={tickerRef} className={styles.tickerWrapper}>
                <span className={styles.tickerText}>{text}</span>
                <span className={styles.tickerText}>{text}</span>
            </div>
        </div>
    );
}

