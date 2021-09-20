import * as React from "react"
import DefaultLayout from "./layouts/DefaultLayout";
import SPHTitleBar from "../components/SPHTitleBar";

const IndexPage = () => (
    <>
        <DefaultLayout title="HOME" description="Home page of SurPathHub" hasHero>
            <SPHTitleBar icon={<i className='bx bx-info-circle'></i>} title="About Us" />
            <p>An organization that aims to put every Filipino student, career shifter, or aspiring developer into an open-source environment regardless of their position in life and receive equal treatment.</p>
        </DefaultLayout>
    </>
)

export default IndexPage
