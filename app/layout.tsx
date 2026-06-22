import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Delaitre Multiservices – Artisan polyvalent à Basse-sur-le-Rupt (88)",
  description:
    "Jérôme Delaitre, artisan polyvalent dans les Vosges : carrelage, plomberie, électricité, peinture, placo, montage de meubles et entretien extérieur. Devis gratuit & intervention rapide.",
  keywords:
    "artisan Vosges, multiservices Basse-sur-le-Rupt, carrelage, plomberie, peinture, électricité, plaquiste, montage meubles, jardinage 88",
  openGraph: {
    title: "Delaitre Multiservices – Artisan polyvalent Vosges",
    description:
      "Vos travaux du quotidien réalisés avec soin. Devis gratuit & intervention rapide dans les Vosges.",
    locale: "fr_FR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
