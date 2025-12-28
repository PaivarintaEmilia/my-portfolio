import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "../components/Header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Emilia Päivärinta | Portfolio",
  description: "Portfolio ja projektit",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">
        <Header />
        <main className="mx-auto w-full max-w-6xl px-4 pb-16 pt-10 sm:px-6">
          {children}
        </main>
        <footer className="border-t border-white/10 py-8">
          <div className="mx-auto w-full max-w-6xl px-4 text-sm text-zinc-400 sm:px-6">
            © {new Date().getFullYear()} Emilia Päivärinta
          </div>
        </footer>
      </body>
    </html>
  );
}
