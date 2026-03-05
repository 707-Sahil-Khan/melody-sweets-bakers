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

export default function FeaturedProducts() {
    const [activeIndex, setActiveIndex] = useState(0);
    const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

    const handleNext = () => setActiveIndex((prev) => (prev + 1) % PRODUCTS.length);
    const handlePrev = () => setActiveIndex((prev) => (prev - 1 + PRODUCTS.length) % PRODUCTS.length);

    useEffect(() => {
        cardsRef.current.forEach((card, i) => {
            if (!card) return;
            const isSelected = i === activeIndex;

            gsap.to(card, {
                x: isSelected ? 0 : (i < activeIndex ? -120 : 60),
                rotation: isSelected ? 0 : (i - activeIndex) * 12,
                opacity: isSelected ? 1 : 0.4,
                scale: isSelected ? 1 : 0.8,
                duration: 0.8,
                ease: "power2.out",
                zIndex: isSelected ? 10 : 1,
            });
        });
    }, [activeIndex]);

    return (
        <section className={styles.container}>
            <h2 className={styles.bgText}>Featured</h2>

            <div className={styles.contentWrapper}>
                <div className={styles.infoSide}>
                    <span className={styles.sectionLabel}>Melody Bakery</span>
                    <h3 className={styles.productTitle}>{PRODUCTS[activeIndex].name}</h3>
                    <p className={styles.description}>{PRODUCTS[activeIndex].desc}</p>

                    <div className={styles.navigation}>
                        <button className={styles.navBtn} onClick={handlePrev}>←</button>
                        <button className={styles.navBtn} onClick={handleNext}>→</button>
                    </div>
                </div>

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
                                    width={300}
                                    height={300}
                                    className={styles.mainImg}
                                />
                                <Image
                                    src={product.hoverImage}
                                    alt="Packaging"
                                    width={300}
                                    height={300}
                                    className={styles.hoverImg}
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}