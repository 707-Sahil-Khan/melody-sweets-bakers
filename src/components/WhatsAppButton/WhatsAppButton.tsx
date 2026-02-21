"use client";

import styles from "./WhatsAppButton.module.css";
import { MessageCircle } from "lucide-react";

export default function WhatsAppButton() {
    return (
        <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.float}
        >
            <div className={styles.pulse} />
            <MessageCircle size={28} />
            <span className={styles.tooltip}>Order Now</span>
        </a>
    );
}
