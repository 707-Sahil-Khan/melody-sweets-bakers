"use client";

import { useEffect, useState, useRef } from "react";
import styles from "./Cursor.module.css";

export default function DynamicCursor() {
    const cursorRef = useRef<HTMLDivElement>(null);
    const glowRef = useRef<HTMLDivElement>(null);
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [isHovering, setIsHovering] = useState(false);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            setPosition({ x: e.clientX, y: e.clientY });

            if (cursorRef.current && glowRef.current) {
                cursorRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
                glowRef.current.style.transform = `translate3d(${e.clientX - 150}px, ${e.clientY - 150}px, 0)`;
            }
        };

        const handleMouseOver = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            if (target.closest("button") || target.closest("a") || target.dataset.luxuryHover) {
                setIsHovering(true);
            } else {
                setIsHovering(false);
            }
        };

        window.addEventListener("mousemove", handleMouseMove);
        window.addEventListener("mouseover", handleMouseOver);

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
            window.removeEventListener("mouseover", handleMouseOver);
        };
    }, []);

    return (
        <>
            <div
                ref={glowRef}
                className={`${styles.glow} ${isHovering ? styles.glowActive : ""}`}
            />
            <div
                ref={cursorRef}
                className={`${styles.cursor} ${isHovering ? styles.cursorHover : ""}`}
            >
                <div className={styles.dot} />
            </div>
        </>
    );
}
