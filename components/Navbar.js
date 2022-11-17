import React, { useState } from "react"
import {
  AiOutlineMenu,
  AiOutlineSearch,
  AiOutlineClose,
  AiFillTag
} from "react-icons/ai"

const Navbar = () => {
  const [nav, setNav] = useState(false)

  return (
    <div className=" max-w-[1640px] mx-auto flex justify-between items-center p-4">
      {/* Right side */}
      <div className="flex items-center">
        <div onClick={() => setNav(!nav)} className="cursor-pointer">
          <AiOutlineMenu size={30} />
        </div>
      </div>

      {/* Mobile Menu */}
      {/* Overlay */}
      {nav ? (
        <div className="bg-black/80 fixed w-full h-screen z-10 top-0 right-0"></div>
      ) : (
        ""
      )}

      {/* Side drawer menu */}
      <div
        className={
          nav
            ? "fixed top-0 right-0 w-[300px] h-screen bg-white z-10 duration-300"
            : "fixed top-0 right-[-100%] w-[300px] h-screen bg-white z-10 duration-300"
        }
      >
        <AiOutlineClose
          onClick={() => setNav(!nav)}
          size={30}
          className="absolute right-4 top-4 cursor-pointer"
        />

        <nav>
          <div class="nav-rightSide-mobile ">
            <div class="nav-list-mobile">
              <div class="logo-screen-mobile">
                <img src="header-logo.png" alt="logo" height="28" />
              </div>
              <ul>
                <li class="false">
                  <a href="/home">Home</a>
                </li>
                <li class="false">
                  {" "}
                  <a href="/Services">Services</a>
                </li>

                <li class="false">
                  {" "}
                  <a href="/Blogs">Blogs</a>
                </li>
                <li class="false">
                  {" "}
                  <a href="/Projects">Projects</a>
                </li>
                <li class="false">
                  {" "}
                  <a href="/Projects">About Us</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </div>
  )
}

export default Navbar
