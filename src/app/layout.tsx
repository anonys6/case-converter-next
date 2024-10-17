// src/app/layout.tsx
import { TextProvider } from '@/context/TextContext';
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import styles from "@/styles/Home.module.css";
import "./globals.css";
import Footer from "@/components/Footer";
import TextInput from "@/components/TextInput";
import Script from 'next/script';

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
            <head>
                <Script id="clarity-script" strategy="afterInteractive">
                    {`
            (function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "${process.env.NEXT_PUBLIC_CLARITY_PROJECT_ID}");
          `}
                </Script>
            </head>
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
