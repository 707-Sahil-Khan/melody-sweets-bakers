import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
// 1. Add the import here
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
    title: "Melody Sweets & Bakers | Wah Cantt",
    description: "Official Commercial Flagship of Melody Sweets & Bakers, Wah Cantt. Quality You Can Trust.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={inter.variable}>
                {children}
                {/* 2. Add the component inside the body */}
                <Analytics />
            </body>
        </html>
    );
}