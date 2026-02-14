import type { Metadata } from "next";
import { Manrope } from "next/font/google"; // Import Manrope font
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-display", // Use the variable defined in globals.css
});

export const metadata: Metadata = {
  title: "Lumina AI - Next Gen Chatbot",
  description: "A modern glassmorphism chatbot interface powered by AI.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${manrope.variable} font-display antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
