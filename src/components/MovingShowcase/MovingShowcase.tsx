"use client";

import styles from "./MovingShowcase.module.css";

const CARDS = [
    {
        title: "Bento Series",
        tag: "Artisan",
        image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=600"
    },
    {
        title: "Heritage Mithai",
        tag: "Traditional",
        image: "https://images.unsplash.com/photo-1589119634718-69382218659d?auto=format&fit=crop&w=600"
    },
    {
        title: "Fresh Harvest",
        tag: "Bakery",
        image: "https://images.unsplash.com/photo-1549931319-a545dcf3bc73?auto=format&fit=crop&w=600"
    },
    {
        title: "Savory Batch",
        tag: "Snacks",
        image: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=600"
    },
    {
        title: "Midnight Cocoa",
        tag: "Premium",
        image: "https://images.unsplash.com/photo-1571115177098-24ec42ed2bb4?auto=format&fit=crop&w=600"
    },
    {
        title: "Golden Crust",
        tag: "Biscuits",
        image: "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?auto=format&fit=crop&w=600"
    }
];

export default function MovingShowcase() {
    // Duplicate cards for seamless loop
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
