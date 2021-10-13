import * as React from 'react';

import '../scss/modules/SPHTitleBar.scss';

interface SPHTitleBarProps {
    title?: string;
    icon?: string|any;
    isCentered?: boolean;
}

const SPHTitleBar: React.FC<SPHTitleBarProps> = ({ title, icon, isCentered  }) => {
    return (
        <div className={`sph-title-bar${isCentered ? ' centered' : ''}`}>
            { icon ? icon : null }
            <h2>{ title }</h2>
        </div>
    );
};

export default SPHTitleBar;