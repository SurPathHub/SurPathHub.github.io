import * as React from 'react';
import SPHButton from "./SPHButton";

import '../scss/modules/SPHHero.scss';

const SPHHero = (props: any) => {
    return (
        <div className="sph-hero" ref={props.ref}>
            <div className="sph-hero__text">
                <h1>SurPathHub</h1>
                <p>An inclusive open-source community for Filipino students</p>
            </div>
            <div className="sph-hero__actions">
                <SPHButton link="#about-us" label="Read More" type="filled" />
            </div>
        </div>
    );
};

export default SPHHero;