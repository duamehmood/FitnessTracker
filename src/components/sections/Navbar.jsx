function Navbar({ title, children }) {
  return (
    <nav className="sticky top-0 left-0 w-full bg-[#0f172a]  border-b-[1px] border-[#33415580]">
      <div className="container mx-auto ">

        <div className="flex items-center justify-between py-[15px]">
          <div className="flex items-center gap-2">
            <span className="bg-secondary text-white font-[700] w-7 h-7 flex items-center justify-center rounded">
              F
            </span>
            <span className="font-[700] md:text-[22px] text-[20px] text-secondary">{title}</span>
          </div>
          <div className="flex items-center md:gap-4 sm:gap-3 gap-2 ">
            {children}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
