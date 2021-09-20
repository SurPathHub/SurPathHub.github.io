import * as React from 'react';
import { Link } from "gatsby";
import SPHButton from "./SPHButton";
import { useState } from "react";

interface SPHNavBarProps {
    trigger?: any;
}

interface SPHNavItemProps {
    label?: string;
    link?: string;
}

const SPHNavBar: React.FC<SPHNavBarProps> = () => {

    const [isNavOpen, setIsNavOpen] = useState(false);

    return (
        <>
            <button onClick={() => setIsNavOpen(!isNavOpen)} className="sph-navbar__trigger">
                { isNavOpen ? <i className="bx bx-x" /> : <i className="bx bx-menu" /> }
            </button>
            <nav className={`sph-navbar${isNavOpen ? ' visible' : ''}`}>
                <SPHNavItem
                    label="Home"
                    link="/"
                />
                <SPHNavItem
                    label="About Us"
                    link="/"
                />
                <SPHNavItem
                    label="Our Projects"
                    link="/"
                />
                <SPHNavItem
                    label="The Team"
                    link="/"
                />
                <div className="sph-navbar__item">
                    <SPHButton
                        label="Join Us!"
                        link="/"
                        type="outlined"
                    />
                </div>
            </nav>
        </>
    );
};

const SPHNavItem: React.FC<SPHNavItemProps> = ({ label, link }) => {
  return (
      <div className="sph-navbar__item">
          <Link to={link}>
             <p>{label}</p>
          </Link>
      </div>
  )
};

export default SPHNavBar;