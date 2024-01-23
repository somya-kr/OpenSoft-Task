import { Archivo } from "next/font/google";
import "../styles/global.scss";

import Navbar from "../components/navbar";

const archivo = Archivo({
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={archivo.className}>
        <Navbar logged_in={false} />
        {children}
      </body>
    </html>
  );
}
