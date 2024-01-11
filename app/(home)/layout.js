import { Poppins } from "next/font/google";
import "../globals.css";
import Header from "./_components/Header/Header";
import Footer from "./_components/Footer/Footer";
import { cn } from "@/lib/utils";

const poppins = Poppins({ subsets: ["latin"], weight: ["600"] });

export const metadata = {
  title: "Glovo: you order, we get it!",
  description: "Glovo App",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={cn("relative transition-all delay-75", poppins.className)}
      >
        <div>
          <Header />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
