export default function Sidebar() {
  return (
    <div className="fixed hidden left-0 h-full w-fit bg-transparent ml-[5.27%] mt-[120px] lg:block lg:w-[200px] lg:ml-[101.12px] pt-[17.6px] z-[9998]">
      <div className=" w-[96.58px] h-[96.06px]">
        <img
          src="/logo-sidebar.png"
          alt="Circle animated Gleamy Logo Sidebar"
          className="animate-spin-slow w-full h-full cursor-pointer"
        />
      </div>
      <div className="flex justify-between items-start w-full writing-mode-vertical-rl text-orientation-mixed rotate-180 gap-10 pb-[105.94px]">
        <p className="uppercas text-white text-sm  whitespace-nowrap cursor-pointer">
          Development
        </p>
        <p className="uppercase text-white text-sm  whitespace-nowrap cursor-pointer">
          Designing
        </p>
        <p className="uppercase text-white text-sm whitespace-nowrap cursor-pointer">
          Digital Marketing
        </p>
      </div>
    </div>
  );
}
