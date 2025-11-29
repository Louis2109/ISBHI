import type { Metadata } from "next";
import { Poppins, Inter } from "next/font/google";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./globals.css";
import BootstrapClient from "../components/BootstrapClient";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ISBHI — Institut Supérieur Bilingue des Hautes Innovations",
  description:
    "Landing page officielle de l'ISBHI — Programmes BTS, HND, Licence, Master.",
  applicationName: "ISBHI",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={`${poppins.variable} ${inter.variable} bg-light text-dark`}>
        <BootstrapClient />
        {children}
      </body>
    </html>
  );
}
