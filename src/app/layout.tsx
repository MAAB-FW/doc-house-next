import type { Metadata } from "next";
import { Source_Sans_3 } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

// const inter = Inter({ subsets: ["latin"] });
const source_Sans_3 = Source_Sans_3({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Doc House",
    description: "Generated by create next app",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={source_Sans_3.className}>
                <Navbar />
                {children}
            </body>
        </html>
    );
}
