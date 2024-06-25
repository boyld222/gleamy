import { Open_Sans } from "next/font/google";
import SkewedRectangle from "./SkewedRectangle";

const openSans = Open_Sans({
  subsets: ["latin"],
  display: "swap",
  weight: ["400"],
});

export default function IconButton({
  text,
  hideIcon,
}: {
  text: string;
  hideIcon?: boolean;
}) {
  return (
    <div className="cursor-pointer relative flex items-center w-fit text-2xl font-bold pb-1 text-white transition-colors duration-300  hover-underline">
      <span className={`text-[24px] z-10 ${openSans.className}`}>{text}</span>
      {!hideIcon && (
        <div className="absolute w-fit left-0 right-0 m-auto">
          <SkewedRectangle />
        </div>
      )}
    </div>
  );
}
