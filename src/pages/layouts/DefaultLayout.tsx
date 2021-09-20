import * as React from 'react';
import Seo from "../../components/Seo";

import '../../scss/main.scss';
import SPHHeader from "../../components/SPHHeader";

interface DefaultLayoutProps {
    title?: string;
    description?: string;
}

const DefaultLayout: React.FC<DefaultLayoutProps> = ({title, description}) => {
    return (
        <>
            <Seo
                title={title}
                description={description}
            />
            <SPHHeader />
            <main className="content-wrap">
                //
            </main>
        </>
    );
};

export default DefaultLayout;