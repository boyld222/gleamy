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
    <div className="relative w-full min-h-screen overflow-hidden bg-black text-white pl-[200px] pt-[120px]">
      <div className="pt-[126px] pl-[101.42px]">
        <div>
          <span className="uppercase text-[40px]">{title}</span>
          <hr className="w-[61px]" />
        </div>
        <div className="flex items-start gap-[66px] pt-[131px]">
          <span className="transparent-border-text text-[454px] text-[#363636] leading-none translate-y-[-128px]">
            {logoText}
          </span>
          <div>{children}</div>
        </div>
      </div>
      {hasFooter && (
        <div className="translate-x-[-172px] translate-y-[-117px]  uppercase text-[180px] font-bold transparent-border-text text-[#4D4D4D] opacity-50">
          the cre8tive
        </div>
      )}
    </div>
  );
}
