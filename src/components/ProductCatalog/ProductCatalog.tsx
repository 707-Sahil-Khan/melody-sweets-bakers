"use client";

import styles from "./ProductCatalog.module.css";
import { MessageCircle } from "lucide-react";
import Image from "next/image";

const PRODUCTS = [
    {
        category: "Cakes & Pastries",
        eyebrow: "Freshly Baked",
        items: [
            { name: "Red Velvet", tag: "Signature", image: "/products/red velvet cake.png" },
            { name: "Lotus Cake", tag: "Premium", image: "/products/lotus cake.png" },
            { name: "Black Forest", tag: "Classic", image: "/products/black forest.png" },
            { name: "Chocolate Cake (1 Pound)", tag: "Classic", image: "/products/chocolate cake bg.png" },
            { name: "Pineapple Pastry", tag: "Fresh", image: "/products/pinapple cake.png" },
            { name: "Brownie", tag: "Premium", image: "/products/brownie cake.png" },
        ]
    },
    {
        category: "Heritage Confectionery",
        eyebrow: "Traditional Recipes",
        items: [
            { name: "Sohan Halwa", tag: "Heritage", image: "/products/sohan halwa.png" },
            { name: "Badam Barfi", tag: "Traditional", image: "/products/badam barfi.png" },
            { name: "Gulab Jamun", tag: "Hot", image: "/products/gulab jamun.png" },
            { name: "Ras Malai", tag: "Fresh", image: "/products/ras malai.png" },
            { name: "Patisa", tag: "Traditional", image: "/products/baisan patisa.png" },
            { name: "Maysu", tag: "Heritage", image: "/products/maysu.png" },
        ]
    },
    {
        category: "Bakery & Savories",
        eyebrow: "Baked Daily",
        items: [
            { name: "Chicken Patties", tag: "Snack", image: "/products/plain-small-slice.webp" },
            { name: "Butter Biscuits", tag: "Daily", image: "/products/plain-small-pkg.webp" },
            { name: "Desi Ghee Khatai", tag: "Heritage", image: "/products/brown-small-slice.webp" },
            { name: "Cake Rusk Butter", tag: "Daily", image: "/products/plain-small-slice-pkg.webp" },
            { name: "Namak Paray", tag: "Savory", image: "/products/brown-small-pkg.webp" },
        ]
    }
];

export default function ProductCatalog() {
    return (
        <section id="products" className={styles.section}>
            <div className={styles.container}>
                <div className={styles.sectionHeader}>
                    <span className={styles.eyebrow}>Our Menu</span>
                    <h2 className={styles.sectionTitle}>Full Product Range</h2>
                </div>

                {PRODUCTS.map((section, idx) => (
                    <div key={idx} className={styles.categorySection}>
                        <div className={styles.categoryHeader}>
                            <span className={styles.categoryEyebrow}>{section.eyebrow}</span>
                            <h2 className={styles.categoryTitle}>{section.category}</h2>
                        </div>

                        <div className={styles.grid}>
                            {section.items.map((item, i) => (
                                <div key={i} className={styles.card}>
                                    <div className={styles.imageArea}>
                                        <Image
                                            src={item.image}
                                            alt={item.name}
                                            fill
                                            className={styles.productImg}
                                            sizes="(max-width: 768px) 50vw, 25vw"
                                        />
                                    </div>
                                    <div className={styles.cardInfo}>
                                        <span className={styles.tag}>{item.tag}</span>
                                        <h4 className={styles.itemName}>{item.name}</h4>
                                        <a
                                            href={`https://wa.me/923001590951?text=Hi Melody, I want to order your ${item.name}`}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className={styles.orderBtn}
                                        >
                                            <MessageCircle size={15} />
                                            Order
                                        </a>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}