
export const metadata={
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
        <link rel="icon" href="favicon.ico" sizes="any" />
        <link
  rel="apple-touch-icon"
  href="/favicon.ico"
  type="image/"
  sizes="any"
/>
      </head>
      <html lang="en">
        <body>{children}</body>
      </html>
    </>
  )
}
