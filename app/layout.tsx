import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
    title: "Glazuur Creations",
    description:
        "Glazuur Creations provides high-quality, home-made, edible fondant icing decorations for cakes and cupcakes.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body>{children}</body>
        </html>
    );
}
