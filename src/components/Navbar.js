const Navbar = () => {
  return (
    <div className="h-12 flex items-center justify-center gap-x-4 bg-slate-700 mb-6">
      <h1 className="text-xl font-bold text-slate-300">
        Inventory app using tailwind and React
      </h1>
      <div
        id="product-count-wrapper"
        className="flex justify-center items-center rounded-full h-7 w-7 bg-slate-500 border-2 border-slate-300 font-bold text-slate-300"
      >
        7
      </div>
    </div>
  );
};

export default Navbar;
