import React, { useState } from "react";
import Logo from "../../assets/logo.png";
import { FaCartShopping } from "react-icons/fa6";
import { FaCaretDown } from "react-icons/fa";
import { HiMenu, HiX } from "react-icons/hi";
import DarkMode from "./DarkMode";

const Menu = [
  {
    id: 1,
    name: "Home",
    link: "#",
  },
  {
    id: 2,
    name: "Top Rated",
    link: "#services",
  },
  {
    id: 3,
    name: "About Us",
    link: "#about",
  },
  {
    id: 4,
    name: "Contact Us",
    link: "#contact",
  },
];

const DropdownLinks = [
  {
    id: 1,
    name: "Utility",
    link: "#utility",
  },
  {
    id: 2,
    name: "Accessories",
    link: "#accessories",
  },
  {
    id: 3,
    name: "Marble crafts",
    link: "#marble-crafts",
  },
];

const Navbar = ({ handleOrderPopup }) => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  return (
    <div className="shadow-md bg-white/60 dark:bg-gray-900/60 backdrop-blur-md dark:backdrop-blur-md duration-200 sticky top-0 z-40">
      {/* upper Navbar */}
      <div className="bg-primary/40 py-2">
        <div className="container flex justify-between items-center">
          <div>
            <a href="#home" className="font-bold text-2xl sm:text-3xl flex gap-2">
              <img src={Logo} alt="Logo" className="w-10" />
              Craftopia
            </a>
          </div>

          <div className="flex justify-between items-center gap-4">
            {/* order button */}
            <button
              onClick={() => handleOrderPopup()}
              className="bg-gradient-to-r from-primary to-secondary transition-all duration-200 text-white py-1 px-4 rounded-full flex items-center gap-3 group"
            >
              <span className="group-hover:block hidden transition-all duration-200">
                Order
              </span>
              <FaCartShopping className="text-xl text-white drop-shadow-sm cursor-pointer" />
            </button>

            {/* Darkmode Switch */}
            <div className="hidden sm:block">
              <DarkMode />
            </div>

            {/* Menu button for mobile */}
            <div className="sm:hidden flex items-center">
              <button onClick={toggleDrawer}>
                {drawerOpen ? (
                  <HiX className="text-2xl" />
                ) : (
                  <HiMenu className="text-2xl" />
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* lower Navbar */}
      <div className="sm:flex justify-center hidden">
        <ul className="sm:flex items-center gap-4">
          {Menu.map((data) => (
            <li key={data.id}>
              <a
                href={data.link}
                className="inline-block px-4 py-2 hover:text-primary duration-200"
              >
                {data.name}
              </a>
            </li>
          ))}
          
          <li className="group relative cursor-pointer">
            <a href="#" className="flex items-center gap-[2px] py-2">
              Trending Products
              <span>
                <FaCaretDown className="transition-all duration-200 group-hover:rotate-180" />
              </span>
            </a>
            <div className="absolute z-[9999] hidden group-hover:block w-[200px] rounded-md bg-white p-2 text-black shadow-md">
              <ul>
                {DropdownLinks.map((data) => (
                  <li key={data.id}>
                    <a
                      href={data.link}
                      className="inline-block w-full rounded-md p-2 hover:bg-primary/20"
                    >
                      {data.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </li>
        </ul>
      </div>

      {/* Drawer for mobile */}
      {drawerOpen && (
        <div className="sm:hidden bg-white dark:bg-gray-900 dark:text-white duration-200">
          <ul className="flex flex-col items-center gap-4">
            {Menu.map((data) => (
              <li key={data.id}>
                <a
                  href={data.link}
                  className="inline-block px-4 py-2 hover:text-primary duration-200"
                  onClick={toggleDrawer}
                >
                  {data.name}
                </a>
              </li>
            ))}
            <li className="group relative cursor-pointer">
              <a href="#" className="flex items-center gap-[2px] py-2">
                Trending Products
                <span>
                  <FaCaretDown className="transition-all duration-200 group-hover:rotate-180" />
                </span>
              </a>
              <div className="absolute z-[9999] hidden group-hover:block w-[200px] rounded-md bg-white p-2 text-black shadow-md">
                <ul>
                  {DropdownLinks.map((data) => (
                    <li key={data.id}>
                      <a
                        href={data.link}
                        className="inline-block w-full rounded-md p-2 hover:bg-primary/20"
                      >
                        {data.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
