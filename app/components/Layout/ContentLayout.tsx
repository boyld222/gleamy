interface Props {
  children: React.ReactElement;
  logoText?: string;
  title: string;
  hasFooter?: boolean;
}

export default function ContentLayout({
  children,
  title,
  logoText,
  hasFooter = false,
}: Props) {
  return (
    <div className="relative w-full min-h-screen overflow-hidden bg-black text-white lg:pl-[200px]">
      <div className="pl-[4.76%] pr-[4.76%] lg:pt-[126px] lg:pl-[101.42px] lg:pr-[0px]">
        <div>
          <span className="uppercase text-[40px]">{title}</span>
          <hr className="w-[61px]" />
        </div>
        <div className="flex items-start pt-[12.13%] gap-[3.4375%] lg:gap-[66px] lg:pt-[131px]">
          <span className="absolute left-0 transparent-border-text text-[454px] text-[#363636] leading-none lg:translate-y-[-128px] lg:static">
            {logoText}
          </span>
          <div>{children}</div>
        </div>
      </div>
      {hasFooter && (
        <div className="text-[90px] uppercase  font-bold transparent-border-text text-[#4D4D4D] opacity-50 lg:translate-x-[-172px] lg:translate-y-[-117px] lg:text-[180px]">
          the cre8tive
        </div>
      )}
    </div>
  );
}
