import { React, useState } from "react"
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai"
import {
  AiFillFacebook,
  AiFillTwitterCircle,
  AiFillYoutube,
  AiFillLinkedin
} from "react-icons/ai"
import { BsInstagram } from "react-icons/bs"
const Header = () => {
  const [nav, setNav] = useState(false)
  return (
    <header>
      <div class="header-top">
        <nav class="navbar navbar-light bg-light justify-content-between">
          <div class="container-fluid">
            <div class="topbar-email">
              <img src="mail.png" alt="email-icon" class="w-15 h-12 mr-2" />
              <a href="mailto:info@example.com">info@example.com</a>
            </div>
            <div class="login-section mt-2">
              <img src="user.png" alt="user" class="w-15 h-12 mr-2" />
              <a href="#" class="mr-2">
                Login{" "}
              </a>
              <span class="mr-2"> / </span>
              <a href="#" class="mr-2">
                Register
              </a>
            </div>
          </div>
        </nav>
      </div>
      <div className="nav-container">
        <div class="content container">
          <div class=".logo-section">
            <div class="absolute   left-0 top-0  w-30.">
              <a>
                <img src="header-logo.png" alt="image" class="mt-4" />
              </a>
            </div>
          </div>

          <div class="nav-rightSide ">
            <div class="nav-list">
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

                <li class="nav-item dropdown">
                  <a
                    class="nav-link dropdown-toggle"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                  >
                    About Us
                  </a>
                  <ul class="dropdown-menu">
                    <li>
                      <a class="dropdown-item" href="#">
                        Contant Us
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        Flags
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        A third link
                      </a>
                    </li>
                  </ul>
                </li>
                <li class="nav-item dropdown">
                  <a
                    class="nav-link dropdown-toggle"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                  >
                    <img src="Ksa.png" alt="flag" />
                  </a>
                  <ul class="dropdown-menu">
                    <li>
                      <a class="dropdown-item" href="#">
                        <img src="Ksa.png" alt="flag" />
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        <img src="usa.png" alt="flag" class="w-28 h-18 " />
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
            <div class="callUs">
              <a href="#" class="btn1  yellow">
                <img src="call.png" alt="call" height="20" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="hamburger">
        <div className="logo">
          <img src="header-logo.png" />
        </div>
        <div class="class ">
          <div className=" max-w-[1640px] mx-auto flex justify-between items-center p-4">
            {/* Right side */}

            {/* Mobile Menu */}
            {/* Overlay */}
            {nav ? (
              <div className="bg-white/80 fixed w-full h-screen z-10 top-0 right-0"></div>
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
                size={20}
                className="absolute bg-white left-0 top-0 cursor-pointer"
              />

              <nav>
                <div class="nav-rightSide-mobile ">
                  <div class="nav-list-mobile">
                    <div class="logo-screen-mobile">
                      <img src="header-logo.png" alt="logo" />
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
                  <div class="side-bar-mobile">
                    <div>
                      <img className="person" src="user.png" alt="no photo" />
                    </div>
                    <div class="login-section-mobile mt-2">
                      <a href="#" class="mr-2">
                        Login{" "}
                      </a>
                      <span class="mr-2"> / </span>
                      <a href="#" class="mr-2">
                        Register
                      </a>
                    </div>
                  </div>
                  <div class="social-icons">
                    <a href="#">
                      <AiFillLinkedin size={27} />
                    </a>
                    <a href="#">
                      <AiFillFacebook size={27} />
                    </a>
                    <a href="#">
                      <AiFillTwitterCircle size={27} />
                    </a>
                    <a href="#">
                      <BsInstagram size={27} />
                    </a>
                    <a href="#">
                      <AiFillYoutube size={27} />
                    </a>
                  </div>
                </div>
              </nav>
            </div>
          </div>
          <div class="left-screen-1200">
            <div className="flex items-center"></div>
            <div class="nav-item  dropdown">
              <div className="mid">
                <a
                  class="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                >
                  <img src="Ksa.png" alt="flag" />
                </a>
              </div>
              <ul class="dropdown-menu">
                <li>
                  <a class="dropdown-item" href="#">
                    <img src="Ksa.png" alt="flag" />
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    <img src="usa.png" alt="flag" />
                  </a>
                </li>
              </ul>
            </div>

            <div class="callUs">
              <a href="#" class="btn1 yellow">
                <img src="call.png" alt="call" height="20" />
              </a>
            </div>
            <div onClick={() => setNav(!nav)} className="cursor-pointer">
              <AiOutlineMenu size={23} />
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
