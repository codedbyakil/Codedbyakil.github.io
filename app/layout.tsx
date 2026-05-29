import type { Metadata, Viewport } from "next"
import { Inter, JetBrains_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
})

export const metadata: Metadata = {
  metadataBase: new URL("https://codedbyakil.github.io"),
  title: {
    default: "Akil | Android Developer, Web Designer & Streaming Systems Builder",
    template: "%s | Akil",
  },
  description:
    "Grade 12 self-taught developer from Tamil Nadu, India. Building Android apps with Kotlin, IPTV streaming platforms, and modern web experiences.",
  keywords: [
    "Android Developer",
    "Kotlin Developer",
    "Web Designer",
    "IPTV Developer",
    "Streaming Systems",
    "ExoPlayer",
    "Tamil Nadu Developer",
    "Self-taught Developer",
    "Portfolio",
    "Akil",
    "codedbyakil",
  ],
  authors: [{ name: "Akil", url: "https://codedbyakil.github.io" }],
  creator: "Akil",
  publisher: "Akil",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://codedbyakil.github.io",
    siteName: "Akil Portfolio",
    title: "Akil | Android Developer, Web Designer & Streaming Systems Builder",
    description:
      "Grade 12 self-taught developer from Tamil Nadu, India. Building Android apps with Kotlin, IPTV streaming platforms, and modern web experiences.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Akil - Android Developer & Web Designer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Akil | Android Developer & Streaming Systems Builder",
    description:
      "Self-taught developer building Android apps, IPTV platforms, and modern web experiences.",
    images: ["/og-image.png"],
    creator: "@codedbyakil",
  },
  alternates: {
    canonical: "https://codedbyakil.github.io",
  },
  category: "technology",
}

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0a0a" },
  ],
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <head>
        <link rel="canonical" href="https://codedbyakil.github.io" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Akil",
              url: "https://codedbyakil.github.io",
              jobTitle: "Android Developer & Web Designer",
              description:
                "Grade 12 self-taught developer from Tamil Nadu, India building Android apps, IPTV platforms, and modern web experiences.",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Kanyakumari",
                addressRegion: "Tamil Nadu",
                addressCountry: "India",
              },
              email: "akilaskan@gmail.com",
              sameAs: [
                "https://github.com/codedbyakil",
                "https://instagram.com/codedbyakil",
              ],
              knowsAbout: [
                "Android Development",
                "Kotlin",
                "IPTV Systems",
                "Streaming Technology",
                "Web Design",
                "ExoPlayer",
                "HLS/DASH Protocols",
              ],
            }),
          }}
        />
      </head>
      <body className="font-sans antialiased bg-background">
        {children}
        {process.env.NODE_ENV === "production" && <Analytics />}
      </body>
    </html>
  )
}
