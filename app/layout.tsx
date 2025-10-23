// app/layout.tsx
import { Geist, Geist_Mono } from "next/font/google";
import "../styles.css";
import { ReactNode } from "react";
import LoadingScreen from "@/components/LoadingScreen";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title:
    "FANIS NETWORK - Une Agence Digitale Casablanca | Marketing Digital & Développement Web",
  description:
    "Une agence digitale casablanca spécialisée en création de sites web, marketing digital, publicité en ligne, production vidéo et gestion des réseaux sociaux. Transformez votre présence digitale avec FANIS NETWORK.",
  keywords:
    "une agence digitale casablanca, agence digitale maroc, marketing digital casablanca, développement web casablanca, création site web maroc, publicité en ligne, social media management",
  icons: [
    { rel: "icon", url: "/favicon.png" },
    { rel: "shortcut icon", url: "/favicon.png" },
  ],
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="fr">
      <body
        suppressHydrationWarning
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <LoadingScreen />
        {children}
      </body>
    </html>
  );
}
