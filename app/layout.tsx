import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import Link from "next/link"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Tic Tac Toe - Playful, Stylish, and Mobile-Ready",
  description:
    "A fully functional Tic Tac Toe game built with Next.js, featuring a colorful, modern UI, AI opponent, score tracking, and game history.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header className="bg-gradient-to-r from-purple-600 to-rose-600 text-white p-4 shadow-md">
          <nav className="container mx-auto flex justify-between items-center">
            <Link href="/" className="text-2xl font-bold hover:opacity-80 transition-opacity">
              Tic Tac Toe
            </Link>
            <div className="space-x-4">
              <Link href="/" className="hover:underline">
                Home
              </Link>
              <Link href="/about" className="hover:underline">
                About
              </Link>
              <Link href="/features" className="hover:underline">
                Features
              </Link>
            </div>
          </nav>
        </header>
        {children}
      </body>
    </html>
  )
}
