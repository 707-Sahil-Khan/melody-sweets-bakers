"use client";

import Navbar from "@/components/Navbar/Navbar";
import Hero from "@/components/Hero/Hero";
import CategoryGrid from "@/components/CategoryGrid/CategoryGrid";
import MovingShowcase from "@/components/MovingShowcase/MovingShowcase";
import ProductCatalog from "@/components/ProductCatalog/ProductCatalog";
import FacilitySection from "@/components/FacilitySection/FacilitySection";
import ContactSection from "@/components/ContactSection/ContactSection";
import Footer from "@/components/Footer/Footer";
import styles from "./page.module.css";

export default function Home() {
    return (
        <main className={styles.main}>
            <Navbar />
            <Hero />
            <CategoryGrid />
            <MovingShowcase />
            <ProductCatalog />
            <FacilitySection />
            <ContactSection />
            <Footer />
        </main>
    );
}

