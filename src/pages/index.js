import Head from 'next/head'
import Image from 'next/image'
import Blog from '../components/homepage/Blog'
import Hero from '../components/homepage/Hero'
import Incentive from '../components/homepage/Incentive'
import JoinCommunity from '../components/homepage/JoinCommunity'
import SupportOurProgram from '../components/homepage/SupportOurProgram'
import Partners from '../components/homepage/Partners'

export default function Home() {
  return (
    <>
      <Head>
        <title>SurPath Hub - Opensource Community</title>
        <link rel='icon' href='/favicon.ico' />
        <meta
          name='description'
          content='SurPath Hub is a welcoming and inclusive open-source community that helps every aspiring developer or career shifter in the Asia region.'
        />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <meta name='author' content='SurPath Hub community' />

        {/*  SEO */}
        <meta property='og:title' content='SurPath Hub' />
        <meta property='og:type' content='website' />
        <meta
          property='og:description'
          content='SurPath Hub is a welcoming and inclusive open-source community that helps every aspiring developer or career shifter in the Asia region.'
        />
        <meta property='og:url' content='https://surpathhub.org' />
        <meta property='og:locale' content='en_US' />
        <meta
          property='og:image'
          content='/assets/img/SurPathHub_preview_thumbnail.JPG'
        />
      </Head>
      <main className='text-center mx-auto'>
        <Hero />
        <Incentive />
        <div className='mt-12 border-t border-gray-200/10 pt-8'></div>
        <JoinCommunity />
        <SupportOurProgram />
        <Blog />
        <Partners />
      </main>
    </>
  )
}
