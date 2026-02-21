"use client";

import styles from "./Heritage.module.css";

export default function Heritage() {
    const events = [
        { year: "1980", title: "The Foundation", desc: "Starting with a single oven and a passion for pure ingredients in Wah Cantt." },
        { year: "2005", title: "Local Icon", desc: "Recognized as the region's premier destination for traditional sweets and artisan bread." },
        { year: "2024", title: "Modern Heritage", desc: "Serving over 100,000 fresh goods daily with the same secret recipes." },
    ];

    return (
        <section className={styles.heritage}>
            <div className={styles.header}>
                <span className={styles.label}>Timeline</span>
                <h2 className={styles.title}>The Heritage Scroll</h2>
            </div>

            <div className={styles.timeline}>
                {events.map((ev, idx) => (
                    <div key={idx} className={styles.event}>
                        <div className={styles.year}>{ev.year}</div>
                        <div className={styles.content}>
                            <h3>{ev.title}</h3>
                            <p>{ev.desc}</p>
                        </div>
                        <div className={styles.line} />
                    </div>
                ))}
            </div>
        </section>
    );
}