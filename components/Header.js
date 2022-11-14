import React from'react'
 
export default function Header () {
    return(
        <nav  class="navbar navbar-expand-lg ">
        <div class="container-fluid mt-0">
            <a href="#" class="navbar-brand">
                <img src="mail.png" height="28" alt="CoolBrand" />
            </a>
                <div class="navbar-nav">
                <a href="#" class="nav-item nav-link">info@gmail.com</a>
                </div>
                <div class="navbar-nav ms-auto">
                    <img src="user.png" height="28" alt="user 0picture" />
                    <a href="#" class="nav-item nav-link ">Login</a>
                    <a href="#" class="nav-item nav-link">Register</a>
                </div>
        </div>  
        <div className='container-fluid'>
        <div className='content'>
         <div className='logo-section'>
            <a href='#'>
                <img src="header-logo.png" alt='logo'  />
            </a>
        </div>
        </div>
        </div>
        
    
    </nav>

  
    )
}

