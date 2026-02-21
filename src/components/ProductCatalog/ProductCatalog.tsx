"use client";

import styles from "./ProductCatalog.module.css";
import { MessageCircle } from "lucide-react";

const PRODUCTS = [
    {
        category: "Cakes & Pastries",
        items: [
            { name: "Red Velvet", tag: "Signature" },
            { name: "Lotus Cake", tag: "Premium" },
            { name: "Black Forest", tag: "Classic" },
            { name: "Chocolate Cake (1 Pound)", tag: "Classic" },
            { name: "Pineapple Pastry", tag: "Fresh" }
        ]
    },
    {
        category: "Heritage Confectionery",
        items: [
            { name: "Sohan Halwa", tag: "Heritage" },
            { name: "Badam Barfi", tag: "Traditional" },
            { name: "Gulab Jamun", tag: "Hot" },
            { name: "Ras Malai", tag: "Fresh" },
            { name: "Patisa", tag: "Traditional" },
            { name: "Maysu", tag: "Heritage" }
        ]
    },
    {
        category: "Bakery & Savories",
        items: [
            { name: "Chicken Paties", tag: "Snack" },
            { name: "Butter Biscuits", tag: "Daily" },
            { name: "Desi Ghee Khatai", tag: "Heritage" },
            { name: "Cake Rusk Butter", tag: "Daily" },
            { name: "Namak Paray", tag: "Savory" }
        ]
    }
];

export default function ProductCatalog() {
    return (
        <section id="products" className="section-white">
            <div className="container">
                {PRODUCTS.map((section, idx) => (
                    <div key={idx} className={styles.categorySection}>
                        <div className={styles.header}>
                            <h2 className={styles.categoryTitle}>{section.category}</h2>
                            <div className="divider" />
                        </div>

                        <div className={styles.grid}>
                            {section.items.map((item, i) => (
                                <div key={i} className={styles.item}>
                                    <div className={styles.itemInfo}>
                                        <h4 className={styles.itemName}>{item.name}</h4>
                                        <span className={styles.tag}>{item.tag}</span>
                                    </div>
                                    <a
                                        href={`https://wa.me/923000000000?text=Hi Melody, I want to order your ${item.name}`}
                                        target="_blank"
                                        className={styles.orderBtn}
                                    >
                                        <MessageCircle size={18} />
                                    </a>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
