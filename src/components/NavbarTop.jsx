const NavbarTop = () => {
  return (
    <nav className="w-full bg-white flex flex-col md:flex-row justify-center items-center px-4 md:px-10 py-3 gap-4 md:gap-80">
      <div className="flex flex-col md:flex-row md:items-center gap-3">
        <img
          className="w-[160px] h-auto"
          src="https://sulfur-man.com/wp-content/uploads/2023/07/sulfurman.png"
          alt="Sulfur Logo"
        />

        <p className="text-gray-600 text-[14px] leading-[20px] md:ml-2 text-center md:text-left">
          Sulfur, industrial chemicals. <br />
          <span className="text-[14px]">Reliable deliveries WorldWide</span>
        </p>
      </div>

      <div className="flex flex-col md:flex-row items-center gap-2 md:gap-6 text-center">
        <div className="text-[15px] leading-[20px] md:mr-30">
          <a
            href="tel:+4915732015007"
            className="block text-gray-800 font-medium hover:text-yellow-600 transition"
          >
            +49 157 320 150 07 (Germany)
          </a>
          <a
            href="mailto:info@sulfur-man.com"
            className="block text-yellow-600 hover:text-yellow-700 transition"
          >
            info@sulfur-man.com
          </a>
        </div>

        <button  className="bg-[#f59e0b] hover:bg-[#e48c05] text-white font-medium py-2 px-6 rounded transition">
          <a href="#contacts-section">Contact Us</a>
        </button>
      </div>
    </nav>
  );
};

export default NavbarTop;
