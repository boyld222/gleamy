import { CMS_NAME } from "@/lib/constants";
import { Poppins } from "next/font/google";
import "./globals.css";
import Header from "./components/Layout/Header";
import Sidebar from "./components/Layout/Sidebar";
import Footer from "./components/Layout/Footer";

export const metadata = {
  title: `Gleamy`,
  description: `Gleamy Landing Page.`,
};

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={poppins.className}>
      <body>
        <Header />
        <Sidebar />
        <section className="min-h-screen w-full bg-black">
          <main>{children}</main>
        </section>
        <Footer />
      </body>
    </html>
  );
}
