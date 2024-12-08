import type { Metadata } from "next";
import localFont from "next/font/local";
import { Poppins } from 'next/font/google'
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-poppins',
})

export const metadata: Metadata = {
  title: "PitchIn",
  description: "Pitch, Vote and Grow",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
      <body
        className={`${poppins.variable} antialiased vsc-initialized`}
        data-new-gr-c-s-check-loaded="14.1211.0"
        data-gr-ext-installed=""
        cz-shortcut-listen="true"
      >
        {children}
      </body>
    </html>
    </ClerkProvider>
  );
}
