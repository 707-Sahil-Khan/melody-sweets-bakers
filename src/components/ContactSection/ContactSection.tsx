"use client";

import React, { useState } from "react";
import styles from "./ContactSection.module.css";

export default function ContactSection() {
    const [formData, setFormData] = useState({
        name: "",
        company: "",
        phone: "",
        email: "",
        message: "",
    });
    const [status, setStatus] = useState("idle"); // idle | loading | success | error
    const [errorMsg, setErrorMsg] = useState("");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("loading");
        setErrorMsg("");

        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            const data = await res.json();

            if (res.ok) {
                setStatus("success");
                setFormData({ name: "", company: "", phone: "", email: "", message: "" });
            } else {
                setStatus("error");
                setErrorMsg(data.error || "Something went wrong. Please try again.");
            }
        } catch (err) {
            setStatus("error");
            setErrorMsg("Network error. Please check your connection and try again.");
        }
    };

    return (
        <section className={styles.contactSection}>
            {/* LEFT SIDE */}
            <div className={styles.leftPanel}>
                <h1 className={styles.heading}>Contact us</h1>
                <p className={styles.subtext}>
                    Have a question or request? We'd love to hear from you. Fill out the
                    form or reach out to our team directly, we're here to help.
                </p>

                <div className={styles.contactBlock}>
                    <h3 className={styles.blockTitle}>General contact</h3>
                    <div className={styles.contactRow}>
                        <span className={styles.label}>Contact number:</span>
                        <a href="tel:03001590951" className={styles.link}>
                            0300 159 0951
                        </a>
                    </div>
                    <div className={styles.contactRow}>
                        <span className={styles.label}>Contact mail:</span>
                        <a
                            href="mailto:melodysweetsandbakers@gmail.com"
                            className={styles.link}
                        >
                            melodysweetsandbakers@gmail.com
                        </a>
                    </div>
                </div>

                <div className={styles.partnerBlock}>
                    <h3 className={styles.blockTitle}>Want to become a partner?</h3>
                    <button className={styles.partnerBtn}>
                        Go to partnership form <span className={styles.arrow}>→</span>
                    </button>
                </div>
            </div>

            {/* RIGHT SIDE */}
            <div className={styles.rightPanel}>
                <h2 className={styles.formHeading}>Leave us a message</h2>

                {status === "success" ? (
                    <div className={styles.successMsg}>
                        <p>✓ Message sent! We'll get back to you soon.</p>
                    </div>
                ) : (
                    <form className={styles.form} onSubmit={handleSubmit}>
                        <div className={styles.fieldGroup}>
                            <label className={styles.fieldLabel}>Name</label>
                            <input
                                className={styles.input}
                                type="text"
                                name="name"
                                placeholder="Please enter your full name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className={styles.fieldGroup}>
                            <div className={styles.labelRow}>
                                <label className={styles.fieldLabel}>Company</label>
                                <span className={styles.optional}>*optional</span>
                            </div>
                            <input
                                className={styles.input}
                                type="text"
                                name="company"
                                placeholder="Your company name or brand"
                                value={formData.company}
                                onChange={handleChange}
                            />
                        </div>

                        <div className={styles.fieldGroup}>
                            <div className={styles.labelRow}>
                                <label className={styles.fieldLabel}>Phone</label>
                                <span className={styles.optional}>*optional</span>
                            </div>
                            <input
                                className={styles.input}
                                type="tel"
                                name="phone"
                                placeholder="Phone number (optional, but helpful)"
                                value={formData.phone}
                                onChange={handleChange}
                            />
                        </div>

                        <div className={styles.fieldGroup}>
                            <label className={styles.fieldLabel}>Email</label>
                            <input
                                className={styles.input}
                                type="email"
                                name="email"
                                placeholder="Your email address"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className={styles.fieldGroup}>
                            <label className={styles.fieldLabel}>Message</label>
                            <textarea
                                className={styles.textarea}
                                name="message"
                                placeholder="Tell us what you're looking for."
                                value={formData.message}
                                onChange={handleChange}
                                rows={5}
                                required
                            />
                        </div>

                        {status === "error" && (
                            <p className={styles.errorMsg}>⚠ {errorMsg}</p>
                        )}

                        <button
                            type="submit"
                            className={styles.submitBtn}
                            disabled={status === "loading"}
                        >
                            {status === "loading" ? "Sending..." : "Send message →"}
                        </button>
                    </form>
                )}
            </div>
        </section>
    );
}