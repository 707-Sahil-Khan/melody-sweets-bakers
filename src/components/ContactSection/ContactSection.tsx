"use client";

import styles from "./ContactSection.module.css";
import { MapPin, Phone, MessageCircle } from "lucide-react";

export default function ContactSection() {
    return (
        <section id="contact" className="section-white">
            <div className="container">
                <div className={styles.grid}>
                    <div className={styles.formSide}>
                        <h2 className={styles.title}>Get in Touch</h2>
                        <div className="divider" />
                        <form className={styles.form}>
                            <input type="text" placeholder="FULL NAME" className={styles.input} />
                            <input type="email" placeholder="EMAIL ADDRESS" className={styles.input} />
                            <textarea placeholder="YOUR MESSAGE" rows={5} className={styles.textarea}></textarea>
                            <button type="submit" className="btn-red">SEND MESSAGE</button>
                        </form>
                    </div>

                    <div className={styles.infoSide}>
                        <div className={styles.infoBlock}>
                            <h3 className={styles.infoTitle}>Visit Our Shop</h3>
                            <div className={styles.detail}>
                                <MapPin className={styles.icon} size={24} />
                                <div>
                                    <p className={styles.infoText}>Main Market, Wah Cantt</p>
                                    <p className={styles.infoSub}>Punjab, Pakistan</p>
                                </div>
                            </div>
                        </div>

                        <div className={styles.infoBlock}>
                            <h3 className={styles.infoTitle}>Contact Us</h3>
                            <div className={styles.detail}>
                                <Phone className={styles.icon} size={24} />
                                <p className={styles.infoText}>+92 (51) 453XXXX</p>
                            </div>
                            <div className={styles.detail}>
                                <MessageCircle className={styles.icon} size={24} />
                                <p className={styles.infoText}>+92 (300) 000XXXX</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
