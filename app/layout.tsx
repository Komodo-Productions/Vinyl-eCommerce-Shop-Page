import type { Metadata } from "next";
import { Geist, Geist_Mono, Roboto, Montserrat } from "next/font/google";
import "./globals.css";
import ClientLayout from "./ClientLayout";
import GoogleAnalytics from './components/GoogleAnalytics'


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const roboto = Roboto({
  weight: ["400", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  title: "Komodo Productions",
  description: "A Vinyl Store",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className={montserrat.variable}>
        <ClientLayout>{children}</ClientLayout>
        <GoogleAnalytics />
      </body>
    </html>
  );
}
