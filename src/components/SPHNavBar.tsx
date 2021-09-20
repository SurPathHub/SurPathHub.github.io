import * as React from 'react';
import { Link } from "gatsby";
import SPHButton from "./SPHButton";

interface SPHNavBarProps {
    trigger?: any;
}

interface SPHNavItemProps {
    label?: string;
    link?: string;
}

const SPHNavBar: React.FC<SPHNavBarProps> = ({ trigger }) => {
    return (
        <nav className="sph-navbar">
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
            <SPHButton
                label="Join Us!"
                link="/"
                type="filled"
            />
        </nav>
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