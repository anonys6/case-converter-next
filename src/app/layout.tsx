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
    openGraph: {
        title: "Live Case Converter: Convert Your Text Cases Online for FREE",
        description: "This free online case converter comes with features like case conversion, super-easy text editing and 10+ formatting functionalities. Try now.",
        url: "https://www.livecaseconverter.com/",
        siteName: "Live Case Converter",
        images: [
            {
                url: "https://www.livecaseconverter.com/og-image.svg",
                width: 1200,
                height: 630,
            },
        ],
        locale: "en_US",
        type: "website",
    },
    other: {
        "robots": "index, follow",
        "keywords": "case converter, online case converter, free case converter, advanced case converter",
    },
};


export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" data-theme="light">
            <body className={inter.className}>
                {/* Metadata script */}
                <Script type="application/ld+json" id="json-ld">
                    {`
                        {
                          "@context": "http://schema.org",
                          "@type": "WebSite",
                          "name": "Live Case Converter",
                          "url": "https://www.livecaseconverter.com/",
                          "description": "This free online case converter comes with features like case conversion, super-easy text editing and 10+ formatting functionalities.",
                          "author": {
                              "@type": "Person",
                              "name": "Md Shakib Alam"
                          }
                        }
                    `}
                </Script>

                {/* Clarity script */}
                <Script id="clarity-script" strategy="afterInteractive">
                    {`
                        (function(c,l,a,r,i,t,y){
                            c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                            t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                            y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
                        })(window, document, "clarity", "script", "${process.env.NEXT_PUBLIC_CLARITY_PROJECT_ID}");
                    `}
                </Script>

                {/* App Components */}
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
