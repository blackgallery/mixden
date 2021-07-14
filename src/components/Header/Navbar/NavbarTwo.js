import React from "react";
import NavbarItem from "./NavbarItem";
import MobileMenu from "../../mobile-menu/MobileMenu";
import MobileBtn from "../../mobile-menu/MobileBtn";
import { Link } from "react-router-dom";
//Logo
import logo from "../../../assets/images/logo.png";


function Navbar(props) {


  return (
    <div className="menu_area">
      <div className="navigation">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">

              {/* Logo */}
              <div className="header_logo">
                <Link to={"/"}>
                  <img src={logo} alt=""/>
                </Link>
              </div>

              {/* Social Icon  */}
              <div className="social-nav">
                <ul className="listnone">
                  <li><a href="//facebook.com"><i className="social_pinterest"/></a></li>
                  <li><a href="//facebook.com"><i className="social_dribbble"/></a></li>
                  <li><a href="//facebook.com"><i className="social_googleplus"/></a></li>
                </ul>
              </div>


              {/* Mobile Menu */}

              <MobileBtn/>

              <MobileMenu/>

              {/* End:  Mobile Menu */}


              {/* Start:  NAVIGATION  */}

              <div id="navigation">
                <ul>
                  <NavbarItem/>
                </ul>
              </div>

              {/* End: NAVIGATION  */}


            </div>
          </div>
        </div>
      </div>
    </div>

  );
}

export default Navbar;