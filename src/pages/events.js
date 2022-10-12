import Head from "next/head";
import Image from "next/image";
import Hero from "../components/homepage/Hero";
import Incentive from "../components/homepage/Incentive";
import Test from "../components/Test";

export default function Home() {
  return (
    <>
      <Head>
        <title>SurPath Hub - Events</title>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Events - SurPath Hub is a welcoming and inclusive open-source community that helps every aspiring developer or career shifter in the Asia region."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="author" content="SurPath Hub community" />

        {/*  SEO */}
        <meta property="og:title" content="SurPath Hub - Events" />
        <meta property="og:type" content="website" />
        <meta
          property="og:description"
          content="Events - SurPath Hub is a welcoming and inclusive open-source community that helps every aspiring developer or career shifter in the Asia region."
        />
        <meta property="og:url" content="https://surpathhub.org/events" />
        <meta property="og:locale" content="en_US" />
        <meta
          property="og:image"
          content="/assets/img/SurPathHub_preview_thumbnail.JPG"
        />
      </Head>
      <main>
        <Test />
      </main>
    </>
  );
}
