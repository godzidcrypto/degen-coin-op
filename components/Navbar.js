const Navbar = () => {
  return (
    <nav className="text-white flex justify-between py-4 px-12 fixed w-full items-center z-20">
      <div className="flex gap-16 font-medium">
        <p>Logo</p>
        <p>Games</p>
        <p>About Us</p>
        <p>Degen Fat Cats</p>
        <p>Careers</p>
      </div>
      <button className="bg-[#312966] rounded-full p-2">
        Download Phantom
      </button>
    </nav>
  );
};

export default Navbar;
