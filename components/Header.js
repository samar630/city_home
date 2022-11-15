import React, { Fragment } from "react"

export default function Header() {
  return (
    <Fragment>
      <div class="navbar navbar-expand-lg ">
        <div class="container-fluid">
          <a href="#" class="navbar-brand">
            <img src="mail.png" height="28" alt="CoolBrand" />
          </a>
          <div class="navbar-nav">
            <a href="#" class="nav-item nav-link">
              info@gmail.com
            </a>
          </div>
          <div class="navbar-nav ms-auto">
            <img src="user.png" height="28" alt="user 0picture" />
            <a href="#" class="nav-item nav-link ">
              Login
            </a>
            <a href="#" class="nav-item nav-link">
              Register
            </a>
          </div>
        </div>
      </div>
      <div className="logo-section navbar-expand-lg">
        <div className="photo">
          <a>
            <img src="header-logo.png" alt="image" />
          </a>
        </div>
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
              <a href="/Property"></a>
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
                <img src="Ksa.png" alt="flag" height="28" />
              </a>
              <ul class="dropdown-menu">
                <li >
                  <a class="dropdown-item" href="#">
                    <img src="Ksa.png" alt="flag" height="28" />
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    <img src="usa.png" alt="flag" height="28" />
                  </a>
                </li>
              </ul>
              </li>
              <li>
              <div class='callUs'>
      <a href="#" class="btn yellow"><img src="call.png" alt="call" height='28'/></a>
      </div>
              </li>
          </ul>
       
        </div>
      </div>

    </Fragment>
  )
}
