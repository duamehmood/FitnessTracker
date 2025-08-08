function Navbar({ title, children }) {
  return (
    <nav className="sticky top-0 left-0 w-full bg-[#0f172a]  px-10 py-[15px] border-b-[1px] border-[#33415580]">
    <div className="container flex items-center justify-between ">

      {/* Left Side: Logo + Title */}
      <div className="flex items-center gap-2">
        <span className="bg-secondary text-white font-[700]  w-7 h-7 flex items-center justify-center rounded">
          F
        </span>
        <span className="font-[700] text-[20px] text-secondary">{title}</span>
      </div>

      {/* Right Side: Children */}
      <div className="flex items-center gap-4">
        {children}
      </div>
    </div>
    </nav>
  );
}

export default Navbar;
