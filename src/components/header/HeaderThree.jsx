import React, { useState } from "react";
import { Link } from "react-router-dom";
import MegaMenu from "./mega-menu/MegaMenu";
import MegaMenuMobile from "./mega-menu/MegaMenuMobile";
import raidenlogo from '../../assets/Logo/raiden-logo.jpg'



const HeaderThree = () => {
  const [navbar, setNavbar] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 68) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  window.addEventListener("scroll", changeBackground);

  return (
    <>
      <div
        className={
          navbar
            ? "theme-main-menu sticky-menu theme-menu-three bg-none fixed"
            : "theme-main-menu sticky-menu theme-menu-three bg-none"
        }
      >
        <div className="d-flex align-items-center justify-content-center">
          <div className="logo">
            <Link to="/">
              <img src={raidenlogo} alt="brand logo" style={{width:'45%'}} />
            </Link>
          </div>
          {/* End Logo */}

          <nav id="mega-menu-holder" className="navbar navbar-expand-lg">
            <div className="container nav-container">
              <div
                className="navbar-collapse collapse"
                id="navbarSupportedContent"
              >
                <div className="d-lg-flex justify-content-between align-items-center">
                  <MegaMenu />
                  {/* End MegaMenu */}

                  <ul className="right-widget user-login-button d-flex align-items-center justify-content-center">
                    {/* <li>
                      <Link
                        to="/login"
                        className="signIn-action d-flex align-items-center"
                      >
                        <img src="images/icon/52.svg" alt="icon" />
                        <span>Login</span>
                      </Link>
                    </li> */}
                    {/* End li */}
                    <li>
                      <Link
                        to="/signup"
                        className="signUp-action d-flex align-items-center"
                      >
                        <span>Getting Started</span>
                        <img src="images/icon/53.svg" alt="icon" />
                      </Link>
                    </li>
                  </ul>
                  {/* End right-button-group  */}
                </div>
              </div>
            </div>
          </nav>
          {/* End nav */}
        </div>

        <MegaMenuMobile />
        {/* 	End Mega Menu for Mobile */}
      </div>
      {/* /.theme-main-menu */}
    </>
  );
};

export default HeaderThree;
