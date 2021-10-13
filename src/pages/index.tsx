import * as React from "react"
import DefaultLayout from "./layouts/DefaultLayout";
import SPHTitleBar from "../components/SPHTitleBar";
import SPHCard from "../components/SPHCard";
import SPHButton from "../components/SPHButton";

import { projects } from '../constants/project-constants';

const IndexPage = () => {
    return (
        <DefaultLayout title="HOME" description="Home page of SurPathHub" hasHero>
            <section id="about-us">
                <SPHTitleBar icon={<i className='bx bx-info-circle'></i>} title="About Us" isCentered />
                <p>SurPath Hub is a welcoming and inclusive open-source community that helps every aspiring developer or career shifter in the Philippines. We are here to learn, to follow your passion, and know your expertise in the field. Members of the community are able to get a chance to get swag, join some events, get access to the learning platforms, and more!</p>
            </section>
            <section id="our-projects">
                <SPHTitleBar icon={<i className="bx bx-list-ul"></i>} title="Our Projects" isCentered />
                <div className="grid">
                    {projects.map((data, key) => {
                        return (
                            <SPHCard
                                key={key}
                                title={data.name}
                                description={data.description}
                                media={data.media}
                                hasAction
                            >
                                <SPHButton label="View project" link={data.link} />
                            </SPHCard>
                        );
                    })}
                </div>
            </section>
        </DefaultLayout>
    );
}

export default IndexPage
