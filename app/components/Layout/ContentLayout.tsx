interface Props {
  children: React.ReactElement;
  logoText?: string;
  title: string;
}

export default function ContentLayout({ children, title, logoText }: Props) {
  return (
    <div className="relative w-full h-screen overflow-hidden bg-black text-white pl-[200px] pt-[120px]">
      <div className="pt-[126px] pl-[101.42px]">
        <div>
          <span className="uppercase text-[40px]">{title}</span>
          <hr className="w-[61px]" />
        </div>
        <div className="flex items-start gap-[66px] pt-[131px]">
          <span className="transparent-border-text text-[454px] text-[#363636] leading-[0.4]">
            {logoText}
          </span>
          <div className="pl-[67px]">{children}</div>
        </div>
      </div>
    </div>
  );
}
