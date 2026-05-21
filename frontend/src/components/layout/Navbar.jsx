import { Link } from "react-router-dom";
import { HiOutlineMenuAlt3, HiX } from "react-icons/hi";
import { useState } from "react";

function Navbar({ setIsOpen }) {

  const [mobileMenu, setMobileMenu] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#f8f3ee]/90 backdrop-blur-md border-b border-gray-200">

      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 md:px-10 py-5">

        <Link
          to="/"
          className="text-3xl font-bold tracking-wide text-[#1e1e1e]"
        >
          Nourish
        </Link>

        <div className="hidden md:flex items-center gap-10 text-[15px] font-medium">

          <Link to="/" className="hover:text-[#c49a6c] duration-300">
            Home
          </Link>

          <Link to="/about" className="hover:text-[#c49a6c] duration-300">
            About
          </Link>

          <Link to="/programs" className="hover:text-[#c49a6c] duration-300">
            Programs
          </Link>

          <Link to="/contact" className="hover:text-[#c49a6c] duration-300">
            Contact
          </Link>

        </div>

        <div className="hidden md:block">

          <button
            onClick={() => setIsOpen(true)}
            className="bg-black text-white px-6 py-3 rounded-full hover:bg-[#c49a6c] duration-300"
          >
            Book Consultation
          </button>

        </div>

        <button
          onClick={() => setMobileMenu(true)}
          className="md:hidden text-3xl"
        >
          <HiOutlineMenuAlt3 />
        </button>

      </div>

      {/* MOBILE MENU */}

      <div
        className={`fixed top-0 right-0 h-screen w-[85%] bg-white z-[100] p-8 duration-500 ${
          mobileMenu ? "translate-x-0" : "translate-x-full"
        }`}
      >

        <div className="flex items-center justify-between">

          <h2 className="text-3xl font-bold">
            Nourish
          </h2>

          <button
            onClick={() => setMobileMenu(false)}
            className="text-4xl"
          >
            <HiX />
          </button>

        </div>

        <div className="flex flex-col gap-8 mt-20 text-2xl font-medium">

          <Link
            to="/"
            onClick={() => setMobileMenu(false)}
          >
            Home
          </Link>

          <Link
            to="/about"
            onClick={() => setMobileMenu(false)}
          >
            About
          </Link>

          <Link
            to="/programs"
            onClick={() => setMobileMenu(false)}
          >
            Programs
          </Link>

          <Link
            to="/contact"
            onClick={() => setMobileMenu(false)}
          >
            Contact
          </Link>

          <button
            onClick={() => {
              setIsOpen(true);
              setMobileMenu(false);
            }}
            className="bg-black text-white py-4 rounded-full mt-6"
          >
            Book Consultation
          </button>

        </div>
      </div>
    </nav>
  );
}

export default Navbar;