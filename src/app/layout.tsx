// src/app/layout.tsx
import { TextProvider } from '@/context/TextContext';
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import styles from "@/styles/Home.module.css";
import "./globals.css";
import Footer from "@/components/Footer";
import TextInput from "@/components/TextInput";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Case Converter",
    description: "Convert between camelCase, kebab-case, PascalCase, and snake_case.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" data-theme="light">
            <body className={inter.className}>
                <TextProvider>
                    <Navbar />
                    <div className={styles.container}>
                        <div className={styles.inputDiv}><TextInput /></div>
                        <div className={styles.outputDiv}>{children}</div>
                    </div>
                    <Footer />
                </TextProvider>
            </body>
        </html>
    );
}
