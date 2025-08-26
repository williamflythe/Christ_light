import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Christ-Centered Sentence Prompter',
  description: 'A Next.js application for displaying Christ-centered sentences with dynamic timing',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-black text-white min-h-screen flex flex-col">
        {children}
      </body>
    </html>
  )
}