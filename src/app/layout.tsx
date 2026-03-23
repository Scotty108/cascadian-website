import type { Metadata } from "next";
import ThemeProvider from "@/components/ThemeProvider";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://cascadian.ai"),
  title: "Cascadian — Your Path to Agentic AI",
  description:
    "Cascadian is a leading AI consultancy that delivers transformation services to guide organizations into the new era of AI.",
  icons: {
    icon: "/images/favicon.svg",
  },
  openGraph: {
    title: "Cascadian — Your Path to Agentic AI",
    description:
      "Cascadian is a leading AI consultancy that delivers transformation services to guide organizations into the new era of AI.",
    url: "https://cascadian.ai",
    siteName: "Cascadian",
    images: [{ url: "/images/og-image.svg", width: 1200, height: 630 }],
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-theme="dark" suppressHydrationWarning>
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
