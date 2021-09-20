import * as React from 'react';
import { Link } from "gatsby";
// @ts-ignore
import SPHLogo from '../images/sph-logo.png';
import SPHNavBar from "./SPHNavBar";
import { useState } from "react";

const SPHHeader = () => {
    return (
        <header className="sph-header">
            <div className="sph-header__wrap">
                <Link to="/">
                    <div className="sph-header__mast">
                        <img className="sph-header__logo" src={SPHLogo} alt="SPH Logo" />
                        <h1 className="sph-header__text">SurPath Hub</h1>
                    </div>
                </Link>
                <div className="sph-header__actions">
                    <SPHNavBarTrigger />
                    <SPHNavBar />
                </div>
            </div>
        </header>
    );
};

const SPHNavBarTrigger = () => {
    const [isTriggered, setIsTriggered] = useState(false);
    return (
        <button onClick={() => setIsTriggered(!isTriggered)} className={`sph-navbar__trigger`}>
            { isTriggered ? <i className="bx bx-x" /> : <i className="bx bx-x" /> }
        </button>
    );
};

export default SPHHeader;