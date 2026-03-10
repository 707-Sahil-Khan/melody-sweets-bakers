"use client";

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import styles from './FeaturedProducts.module.css';

const PRODUCTS = [
    {
        id: 1,
        name: "Plain Bread (Small)",
        tag: "Freshly Baked",
        desc: "Our classic daily bread, soft and perfect for your morning toast.",
        image: "/products/plain-small-slice.png",
        hoverImage: "/products/plain-small-pkg.png"
    },
    {
        id: 2,
        name: "Plain Bread (Large)",
        tag: "Family Size",
        desc: "The same classic taste in a larger loaf for the whole family.",
        image: "/products/plain-small-slice.png",
        hoverImage: "/products/plain-small-pkg.png"
    },
    {
        id: 3,
        name: "Milky Bread (Small)",
        tag: "Rich & Soft",
        desc: "Enriched with high-quality milk for a creamy texture and sweet aroma.",
        image: "/products/milky-small-slice.png",
        hoverImage: "/products/plain-small-pkg.png"
    },
    {
        id: 4,
        name: "Milky Bread (Large)",
        tag: "Premium",
        desc: "Our signature milky loaf, perfect for premium sandwiches.",
        image: "/products/milky-small-slice.png",
        hoverImage: "/products/plain-small-pkg.png"
    }
];

// All beige shades — active is lightest, back cards get slightly darker
const CARD_COLORS = [
    '#ddd0b8', // 1 behind
    '#cfc2a8', // 2 behind
    '#c2b598', // 3 behind
];

export default function FeaturedProducts() {
    const [activeIndex, setActiveIndex] = useState(0);
    const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

    const handleNext = () => setActiveIndex((prev) => (prev + 1) % PRODUCTS.length);
    const handlePrev = () => setActiveIndex((prev) => (prev - 1 + PRODUCTS.length) % PRODUCTS.length);

    useEffect(() => {
        cardsRef.current.forEach((card, i) => {
            if (!card) return;

            const total = PRODUCTS.length;
            let offset = i - activeIndex;
            if (offset > total / 2) offset -= total;
            if (offset < -total / 2) offset += total;

            const absOffset = Math.abs(offset);
            const isActive = offset === 0;

            // Set card color — active = warm beige, back = progressively darker beige
            if (isActive) {
                card.style.background = '#ede3cf';
            } else {
                const colorIndex = Math.min(absOffset - 1, CARD_COLORS.length - 1);
                card.style.background = CARD_COLORS[colorIndex];
            }

            gsap.to(card, {
                x: offset * 85,
                rotation: offset * 9,
                scale: isActive ? 1 : Math.max(0.82, 1 - absOffset * 0.09),
                opacity: absOffset > 2 ? 0 : 1,
                zIndex: PRODUCTS.length - absOffset,
                duration: 0.65,
                ease: "power3.out",
            });
        });
    }, [activeIndex]);

    const current = PRODUCTS[activeIndex];
    const counter = `${String(activeIndex + 1).padStart(2, '0')} / ${String(PRODUCTS.length).padStart(2, '0')}`;

    return (
        <section className={styles.container}>
            <h2 className={styles.bgText}>Featured</h2>

            {/* Left */}
            <div className={styles.leftInfo}>
                <p className={styles.counter}>{counter}</p>
                <h3 className={styles.productTitle}>{current.name}</h3>
            </div>

            {/* Center */}
            <div className={styles.centerWrapper}>
                <div className={styles.cardStack}>
                    {PRODUCTS.map((product, i) => (
                        <div
                            key={product.id}
                            className={styles.card}
                            ref={el => { cardsRef.current[i] = el; }}
                        >
                            <span className={styles.tag}>{product.tag}</span>
                            <div className={styles.imageContainer}>
                                <Image
                                    src={product.image}
                                    alt={product.name}
                                    width={260}
                                    height={300}
                                    className={styles.mainImg}
                                />
                                <Image
                                    src={product.hoverImage}
                                    alt="Packaging"
                                    width={260}
                                    height={300}
                                    className={styles.hoverImg}
                                />
                            </div>
                        </div>
                    ))}
                </div>

                <button className={styles.discoverBtn}>
                    Discover product →
                </button>
            </div>

            {/* Right */}
            <div className={styles.rightInfo}>
                <p className={styles.description}>{current.desc}</p>
                <div className={styles.navigation}>
                    <button className={styles.navBtn} onClick={handlePrev}>←</button>
                    <button className={styles.navBtn} onClick={handleNext}>→</button>
                </div>
            </div>
        </section>
    );
}