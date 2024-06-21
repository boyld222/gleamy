import "./globals.css";
import { Inter, Poppins } from "next/font/google";
import { EXAMPLE_PATH, CMS_NAME } from "@/lib/constants";
import Loader from "./components/Layout/Loader";

export const metadata = {
  title: `Next.js and ${CMS_NAME} Example`,
  description: `This is a blog built with Next.js and ${CMS_NAME}.`,
};

const poppins = Poppins({
  variable: "--font-poppins",
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
    <html lang="en" className={poppins.variable}>
      <body>
        <Loader />
        <section className="min-h-screen">
          <main>{children}</main>
        </section>
      </body>
    </html>
  );
}
