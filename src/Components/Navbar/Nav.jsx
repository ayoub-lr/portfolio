import React from "react";
import './Nav.css';
import Toggle from '../Toggle/Toggle';
import {Link} from 'react-scroll';

const Nav = () => {
return(
    <div className="n-Wrapper">

        <div className="n-left">
          <div className="n-name">AYOUB</div>
           <Toggle />
        </div>

        <div className="n-right">
            <div className="n-list">
               <ul style={{listStyleType: "none"}}>
                  <Link spy={true} to='Nav' smooth={true} activeClass="activeClass">
                  <li>Home </li>
                  </Link>
                  <Link spy={true} to='Services' smooth={true}>
                  <li>Services</li>
                  </Link>
                  <Link spy={true} to='Experience' smooth={true}>
                  <li>Experience</li>
                  </Link>
                  <Link spy={true} to='Portfolio' smooth={true}>
                  <li>Portfolio</li>
                  </Link>
                  <Link spy={true} to='Testimonials' smooth={true}>
                  <li>Testimonials</li>
                  </Link>
               </ul>
           </div>
           <button className="button n-btn">
           <Link spy={true} to='Contact' smooth={true}>
                Contact
            </Link>
            </button>


        </div>

    </div>

)

}

export default Nav