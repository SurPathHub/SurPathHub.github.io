import Image from 'next/image'

const BlogP = [
  {
    title: 'Website Downtime: Applicable Tips on How to Prevent It',
    imgSrc: '/img/blog/post-1.png',
    description:
      'User research is the reality check every project needs. Here’s our guide to why you should be doing it — and how to get started.',
    author: 'TOMAS LAURINAVICIUS',
    source: 'DEV.TO',
  },
  {
    title: 'Website Downtime: Applicable Tips on How to Prevent It',
    imgSrc: '/img/blog/post-2.png',
    description:
      'User research is the reality check every project needs. Here’s our guide to why you should be doing it — and how to get started.',
    author: 'TOMAS LAURINAVICIUS',
    source: 'DEV.TO',
  },
  {
    title: 'Website Downtime: Applicable Tips on How to Prevent It',
    imgSrc: '/img/blog/post-1.png',
    description:
      'User research is the reality check every project needs. Here’s our guide to why you should be doing it — and how to get started.',
    author: 'TOMAS LAURINAVICIUS',
    source: 'DEV.TO',
  },
]

const Blog = () => {
  return (
    <>
      <div className='mx-auto mt-16 max-w-7xl px-4 sm:mt-10 sm:px-6 '>
        <div className='text-center'>
          <h2 className='text-3xl font-bold tracking-tight text-home__title sm:text-5xl md:text-4xl '>
            <span className='block'>Read our Community Blog</span>
          </h2>
          <p className='mx-auto mt-3 max-w-md text-lg font-medium text-home__text sm:text-md md:mt-5 md:max-w-3xl md:text-lg'>
            View all the blog {'>'}
          </p>
        </div>
      </div>
      <div className='mx-auto max-w-7xl py-16 px-4 sm:py-24 sm:px-6 lg:px-8'>
        <div className='grid grid-cols-1 gap-8 sm:grid-cols-2  lg:grid-cols-3'>
          {BlogP.map((post) => (
            <div key={post.name} className='block text-left m-6 rounded-md'>
              <div className='sm:flex-shrink-0 rounded-lg '>
                <div className='flow-root  items-center justify-center'>
                  <Image
                    src={post.imgSrc}
                    alt={post.title}
                    width={500}
                    height={250}
                    className='rounded-lg'
                  />
                </div>
              </div>
              <div className='mt-3 sm:mt-0 lg:mt-3 '>
                <p className='text-base text-home__text'>
                  By{' '}
                  <span className='font-medium text-home__title hover:text-home__text cursor-pointer'>
                    {post.author}
                  </span>{' '}
                  IN{' '}
                  <span className='font-medium text-home__title hover:text-home__text cursor-pointer'>
                    {post.source}
                  </span>
                </p>
              </div>
              <div className='mt-3 sm:mt-2 lg:mt-3 '>
                <h3 className='text-xl font-medium text-home__title hover:text-home__text cursor-pointer'>
                  {post.title}
                </h3>
                <p className='text-base text-home__text'>{post.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default Blog
