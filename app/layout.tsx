import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
});

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
    <html lang="en">
      <body
        className={`${poppins.variable} antialiased vsc-initialized`}
        data-new-gr-c-s-check-loaded="14.1214.0"
        data-gr-ext-installed=""
        cz-shortcut-listen="true"
      >
        {children}
      </body>
    </html>
  );
}
