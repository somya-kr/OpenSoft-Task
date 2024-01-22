import '../styles/global.scss'
import {Archivo} from 'next/font/google'

import Navbar from '../compoments/navbar'

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
        <body className={archivo.className}>
          <Navbar logged_in={false}/>
          {children}
          </body>
      </html>
    )
  }