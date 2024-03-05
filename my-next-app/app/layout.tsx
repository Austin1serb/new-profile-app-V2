import './globals.css'
import { Analytics } from "@vercel/analytics/react"

export const metadata = {
  icons: {
    icon: "/icon.png",
  },

}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <>
      <head>
        <title>Austin Serb - Full Stack Developer | Portfolio</title>
        <meta name="description" content="Discover the portfolio of Austin Serb, a skilled Full Stack Developer with a passion for crafting efficient, scalable web solutions. Explore projects, skills, and experiences that demonstrate my expertise in full-stack development." />
        <link rel="icon" href="/icon.png" sizes="any" />
        <link
          rel="apple-touch-icon"
          href="/icon.png"
          type="image/"
          sizes="any"
        />
        <meta property="og:title" content="Austin Serb - Full Stack Developer | Portfolio" />
        <meta property="og:description" content="Discover the portfolio of Austin Serb, a skilled Full Stack Developer with a passion for crafting efficient, scalable web solutions. Explore projects, skills, and experiences that demonstrate my expertise in full-stack development." />
        <meta property="og:image" content="https://i.imgur.com/9yEqyVp.png" />
        <meta property="og:url" content="new-profile-app-v2.vercel.app" />
        <meta property="og:type" content="website" />
        <link rel="icon" href="/icon.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        {/*<meta
    name="viewport"
    content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" />*/}
      </head>
      <html lang="en">
        <body>
          {children}
          <Analytics />
        </body>
      </html>
    </>
  )
}
