import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'History Points Race - Wineobs',
  description: 'Carrera de history points de desarrolladores',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  )
}
