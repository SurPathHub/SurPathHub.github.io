import * as React from 'react';

import '../scss/modules/SPHTitleBar.scss';

interface SPHTitleBarProps {
    title?: string;
    icon?: string|any;
}

const SPHTitleBar: React.FC<SPHTitleBarProps> = ({ title, icon }) => {
    return (
        <div className="sph-title-bar">
            { icon ? icon : null }
            <h2>{ title }</h2>
        </div>
    );
};

export default SPHTitleBar;