import '../styles/global.scss'
import {Archivo} from 'next/font/google'

const archivo= Archivo({
  subsets: ['latin'],
})

export default function RootLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
      <html lang="en">
        <body className={archivo.className}>{children}</body>
      </html>
    )
  }