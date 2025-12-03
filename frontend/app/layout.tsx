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

const inter = Inter({variable: "--font-inter",  subsets: ["latin"], });

export const metadata: Metadata = {
  title: "ISBHI — Institut Supérieur Bilingue des Hautes Innovations",
  description:  "Landing page officielle de l'ISBHI — Programmes BTS, HND, Licence, Master.",
  applicationName: "ISBHI",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <head>
        <script 
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" 
          integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" 
          crossOrigin="anonymous"
          async
        />
      </head>
      <body className={`${poppins.variable} ${inter.variable}`}>
        {children}
      </body>
    </html>
  );
}
