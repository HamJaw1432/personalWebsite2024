import { Inter } from "next/font/google";
import Navbar from "@/components/navbar";
import styles from "./layout.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <main className={styles.main}>
          <div className={styles.center}>
            {children}
          </div>
        </main>
        
      </body>
    </html>
  );
}
