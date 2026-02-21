"use client";

import styles from "./Footer.module.css";
import { MessageCircle, MapPin, Phone, Instagram, Facebook, Twitter } from "lucide-react";

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className="container">
                <div className={styles.grid}>
                    <div className={styles.column}>
                        <h2 className={styles.logo}>MELODY</h2>
                        <p className={styles.desc}>
                            Quality You Can Trust. Establishing excellence in Wah Cantt with a heritage of purity and traditional taste.
                        </p>
                    </div>

                    <div className={styles.column}>
                        <h3 className={styles.title}>Products</h3>
                        <ul className={styles.links}>
                            <li><a href="#products">Artisan Cakes</a></li>
                            <li><a href="#products">Traditional Mithai</a></li>
                            <li><a href="#products">Fresh Bakery</a></li>
                            <li><a href="#products">Savory Delights</a></li>
                        </ul>
                    </div>

                    <div className={styles.column}>
                        <h3 className={styles.title}>Location</h3>
                        <div className={styles.detail}>
                            <MapPin size={16} className={styles.icon} />
                            <p>Main Market, Wah Cantt,<br />Punjab, Pakistan</p>
                        </div>
                        <div className={styles.detail}>
                            <Phone size={16} className={styles.icon} />
                            <p>+92 (51) 453XXXX</p>
                        </div>
                    </div>

                    <div className={styles.column}>
                        <h3 className={styles.title}>Customer Support</h3>
                        <a href="https://wa.me/923000000000" className={styles.whatsappBtn}>
                            <MessageCircle size={20} />
                            <span>WhatsApp Chat</span>
                        </a>
                        <div className={styles.socials}>
                            <Instagram size={20} />
                            <Facebook size={20} />
                            <Twitter size={20} />
                        </div>
                    </div>
                </div>

                <div className={styles.bottom}>
                    <div className={styles.divider} />
                    <div className={styles.bottomFlex}>
                        <p>© 2026 Melody Sweets & Bakers. All rights reserved.</p>
                        <p className={styles.credit}>Wah Cantt Heritage</p>
                    </div>
                </div>
            </div>
        </footer>
    );
}

