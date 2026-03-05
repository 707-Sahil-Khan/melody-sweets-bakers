"use client";

import Navbar from "@/components/Navbar/Navbar";
import Hero from "@/components/Hero/Hero";
import CategoryGrid from "@/components/CategoryGrid/CategoryGrid";
import MovingShowcase from "@/components/MovingShowcase/MovingShowcase";
import ProductCatalog from "@/components/ProductCatalog/ProductCatalog";
import FacilitySection from "@/components/FacilitySection/FacilitySection";
import ContactSection from "@/components/ContactSection/ContactSection";
import Footer from "@/components/Footer/Footer";
import FeaturedProducts from "@/components/FeaturedProducts/FeaturedProducts";
import PartnershipSection from "@/components/PartnershipSection/PartnershipSection";
import styles from "./page.module.css";

export default function Home() {
    return (
        <main className={styles.main}>
            <Navbar />
            <Hero />

            <div className={styles.contentSections}>
                <CategoryGrid />
                <MovingShowcase />

                {/* --- Interactive Cards Section --- */}
                <FeaturedProducts />

                {/* --- Yellow Partnership Section (Added Here) --- */}
                <PartnershipSection />

                <ProductCatalog />
                <FacilitySection />
                <ContactSection />
            </div>

            <Footer />
        </main>
    );
}