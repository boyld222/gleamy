export default function Header() {
  return (
    <header className=" fixed top-0 w-full h-[120px] bg-transparent flex justify-between items-center px-[101.12px] z-[9998]">
      <div className="text-white flex gap-4 text-sm">FB <span className="text-[#FF7E21]">●</span> IN <span className="text-[#FF7E21]">●</span> DR <span className="text-[#FF7E21]">●</span> BE</div>
      <img src="/logo-header.png" alt="Header Logo" className="w-[205.75px]" />
      <div className="flex justify-between items-center gap-10">
        <img src="/images/search.png" alt="Search Icon" />
        <img src="/images/line.png" alt="Line" />
        <img src="/images/menu.png" alt="Menu Icon" />
      </div>
    </header>
  );
}
