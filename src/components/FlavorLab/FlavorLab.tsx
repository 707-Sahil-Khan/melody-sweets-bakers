"use client";

import { useState } from "react";
import styles from "./FlavorLab.module.css";

export default function FlavorLab() {
    const [layers, setLayers] = useState(["Obsidian Dark Chocolate"]);

    const options = [
        { name: "Obsidian Dark Chocolate", color: "#050505" },
        { name: "Velvet Rose Emulsion", color: "#8B0000" },
        { name: "Champagne Cream", color: "#D4AF37" },
        { name: "Tahitian Gold Mist", color: "#C5B358" },
    ];

    const addLayer = (flavor: string) => {
        if (layers.length < 5) {
            setLayers([...layers, flavor]);
            // Play "tink" sound conceptually here
        }
    };

    return (
        <section className={styles.container}>
            <h2 className={styles.title}>The Flavor Lab</h2>
            <p className={styles.subtitle}>Compose your own edible symphony.</p>

            <div className={styles.labGrid}>
                <div className={styles.preview}>
                    <div className={styles.cakeStack}>
                        {layers.map((layer, idx) => (
                            <div
                                key={idx}
                                className={styles.layer}
                                style={{
                                    backgroundColor: options.find(o => o.name === layer)?.color,
                                    zIndex: 10 - idx,
                                    transform: `translateY(${-idx * 20}px) scale(${1 - idx * 0.05})`
                                }}
                            >
                                <span className={styles.layerLabel}>{layer}</span>
                            </div>
                        ))}
                    </div>
                </div>

                <div className={styles.controls}>
                    <h3>Select Component</h3>
                    <div className={styles.options}>
                        {options.map((opt) => (
                            <button
                                key={opt.name}
                                className={styles.optBtn}
                                onClick={() => addLayer(opt.name)}
                                data-luxury-hover="true"
                            >
                                <div className={styles.colorDot} style={{ background: opt.color }} />
                                {opt.name}
                            </button>
                        ))}
                    </div>
                    <button
                        className={styles.reset}
                        onClick={() => setLayers(["Obsidian Dark Chocolate"])}
                    >
                        Reset Masterpiece
                    </button>
                </div>
            </div>
        </section>
    );
}
