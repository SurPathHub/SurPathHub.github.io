import * as React from 'react';
import { Link } from "gatsby";

interface SPHButtonProps {
    label?: string;
    link?: string;
    type?: string;
}

const SPHButton: React.FC<SPHButtonProps> = ({label, link, type = 'default'}) => {
    if (!link) {
        if (type == 'default' || type == 'text') {
            return (
                <button className="sph-button">
                    <span className="sph-button__label">{label}</span>
                </button>
            );
        } else if (type == 'outlined') {
            return (
                <button className="sph-button sph-button--outlined">
                    <span className="sph-button__label">{label}</span>
                </button>
            );
        } else if (type == 'filled') {
            return (
                <button className="sph-button sph-button--filled">
                    <span className="sph-button__label">{label}</span>
                </button>
            );
        }
    } else {
        if (type == 'default' || type == 'text') {
            return (
                <Link to={link}>
                    <button className="sph-button">
                        <span className="sph-button__label">{label}</span>
                    </button>
                </Link>
            );
        } else if (type == 'outlined') {
            return (
                <Link to={link}>
                    <button className="sph-button sph-button--outlined">
                        <span className="sph-button__label">{label}</span>
                    </button>
                </Link>
            );
        } else if (type == 'filled') {
            return (
                <Link to={link}>
                    <button className="sph-button sph-button--filled">
                        <span className="sph-button__label">{label}</span>
                    </button>
                </Link>
            );
        }
    }
};

export default SPHButton;