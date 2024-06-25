export default function Header() {
  return (
    <header className="fixed top-0 w-full h-[120px] bg-transparent flex  items-center justify-center lg:justify-between lg:px-[101.12px] z-[9998]">
      <div className="text-white  gap-4 text-sm hidden lg:flex">
        <span className="cursor-pointer">FB</span>{" "}
        <span className="text-[#FF7E21]">●</span>{" "}
        <span className="cursor-pointer">IN</span>{" "}
        <span className="text-[#FF7E21]">●</span>{" "}
        <span className="cursor-pointer">DR</span>{" "}
        <span className="text-[#FF7E21]">●</span>{" "}
        <span className="cursor-pointer">BE</span>
      </div>
      <img
        src="/logo-header.png"
        alt="Header Logo"
        className="w-[150px] cursor-pointer lg:w-[205.75px]"
      />
      <div className="hidden justify-between items-center gap-10 lg:flex">
        <img
          className="cursor-pointer"
          src="/images/search.png"
          alt="Search Icon"
        />
        <img src="/images/line.png" alt="Line" />
        <img
          className="cursor-pointer"
          src="/images/menu.png"
          alt="Menu Icon"
        />
      </div>
      <img
        className="absolute right-[5.27%] cursor-pointer w-[28px] lg:hidden"
        src="/images/hamburg.png"
        alt="Menu Icon"
      />
    </header>
  );
}
