import type { Metadata } from "next";
import "./globals.css";
import { CartProvider } from "@/contexts/CartContext";

export const metadata: Metadata = {
  title: "מארזי בטון מיוחדים - יצירות אומנות לבית",
  description: "מארזים מיוחדים מבטון בעבודת יד. מתנות ייחודיות לכל אירוע - יום הולדת, חנוכת בית, חגים ועוד. משלוח עד הבית תוך 7 ימי עסקים.",
  keywords: "מארזי בטון, מתנות מבטון, יצירות בטון, מתנות ליום הולדת, מתנות לחנוכת בית, מתנות ייחודיות",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="he" dir="rtl">
      <body className="antialiased">
        <CartProvider>
          {children}
        </CartProvider>
      </body>
    </html>
  );
}
