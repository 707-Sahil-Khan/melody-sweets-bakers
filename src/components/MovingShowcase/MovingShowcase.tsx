"use client";

import styles from "./MovingShowcase.module.css";

const CARDS = [
    {
        title: "Artisan Cakes",
        tag: "Cakes & Pastries",
        image: "/products/chocolate-pastry.png"
    },
    {
        title: "Black Forest",
        tag: "Premium",
        image: "/products/black-forest.png"
    },
    {
        title: "Fresh Breads",
        tag: "Bakery",
        image: "/products/plain-small-slice.webp"
    },
    {
        title: "Fruit Cake",
        tag: "Traditional",
        image: "/products/fruit-cake.png"
    },
    {
        title: "Pineapple Pastry",
        tag: "Pastry",
        image: "/products/pineapple-pastry.png"
    },
    {
        title: "Brownie",
        tag: "Premium",
        image: "/products/brownie.png"
    },
    {
        title: "Milky Bread",
        tag: "Bakery",
        image: "/products/milky-small-slice.webp"
    },
    {
        title: "Plain Cake",
        tag: "Classic",
        image: "/products/plain-cake.png"
    }
];

export default function MovingShowcase() {
    const displayCards = [...CARDS, ...CARDS];

    return (
        <section className={styles.showcase}>
            <div className={styles.track}>
                {displayCards.map((card, idx) => (
                    <div key={idx} className={styles.card}>
                        <div className={styles.imageWrapper}>
                            <img src={card.image} alt={card.title} className={styles.img} />
                            <div className={styles.overlay} />
                        </div>
                        <div className={styles.content}>
                            <span className={styles.tag}>{card.tag}</span>
                            <h3 className={styles.title}>{card.title}</h3>
                            <div className={styles.line} />
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}