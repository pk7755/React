import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const poppins = Poppins({
  subsets:['latin'],
  weight: ['400', '600'],
  display:'swap'
})

export const metadata = {
  title: "Travel Guide Website",
  description: "Best travel guidence",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${poppins.className} bg-black w-screen h-screen`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
