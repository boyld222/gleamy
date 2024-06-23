import { CMS_NAME } from "@/lib/constants";
import { Poppins } from "next/font/google";
import "./globals.css";
import Header from "./components/Layout/Header";
import Sidebar from "./components/Layout/Sidebar";
import Footer from "./components/Layout/Footer";

export const metadata = {
  title: `Next.js and ${CMS_NAME} Example`,
  description: `This is a blog built with Next.js and ${CMS_NAME}.`,
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
        <section className="min-h-screen w-screen bg-black">
          <main>{children}</main>
        </section>
        <div className="fixed bottom-[58px] right-[92px] bg-transparent z-[9998]">
        <div className=" w-[110px] h-[110px]">
          <img
            src="/logo-watch.png"
            alt="Circle animated Gleamy Watch Logo div"
            className="animate-spin-slow w-full h-full"
          />
        </div>
      </div>
      </body>
    </html>
  );
}
