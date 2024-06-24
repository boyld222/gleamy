export default function Header() {
  return (
    <header className=" fixed top-0 w-full h-[120px] bg-transparent flex justify-between items-center px-[101.12px] z-[9998]">
      <div className="text-white flex gap-4 text-sm">
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
        className="w-[205.75px] cursor-pointer"
      />
      <div className="flex justify-between items-center gap-10">
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
    </header>
  );
}
