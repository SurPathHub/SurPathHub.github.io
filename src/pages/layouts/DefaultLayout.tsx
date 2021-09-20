import * as React from 'react';
import Seo from "../../components/Seo";
// import useObserver from "../../hooks/useObserver";

import '../../scss/main.scss';
import SPHHeader from "../../components/SPHHeader";
import SPHHero from "../../components/SPHHero";

interface DefaultLayoutProps {
    title?: string;
    description?: string;
    hasHero?: boolean;
}

const DefaultLayout: React.FC<DefaultLayoutProps> = ({title, description, hasHero, children}) => {

    return (
        <>
            <Seo
                title={title}
                description={description}
            />
            <SPHHeader />
            { hasHero ? <SPHHero /> : null }
            <main className="content-wrap">
                { children }
            </main>
        </>
    );
};

export default DefaultLayout;