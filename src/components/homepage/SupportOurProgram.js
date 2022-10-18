import Image from 'next/image'

const communityPrograms = [
  {
    name: 'Platinum',
    imgSrc: '/img/icons/stars.svg',
  },
  {
    name: 'Gold',
    imgSrc: '/img/icons/file.svg',
  },
  {
    name: 'Silver',
    imgSrc: '/img/icons/globe.svg',
  },
]

const SupportOurProgram = () => {
  return (
    <>
      <div className='mx-auto mt-4 max-w-7xl px-4 sm:mt-10 sm:px-6 '>
        <div className='text-center'>
          <h2 className='text-3xl font-bold tracking-tight text-home__title sm:text-5xl md:text-4xl '>
            <span className='block'>Support our Program</span>
          </h2>
          <p className='mx-auto mt-3 max-w-md text-base text-home__text sm:text-md md:mt-5 md:max-w-3xl md:text-lg'>
            We like to continue what we are doing, joining our sponsorship
            program will help us to continue our mission and provide perks to
            our community program.
          </p>
        </div>
      </div>
      <div className='mx-auto max-w-7xl py-16 px-4 sm:py-24 sm:px-6 lg:px-8'>
        <div className='grid grid-cols-1 gap-8 sm:grid-cols-1  lg:grid-cols-3'>
          {communityPrograms.map((program) => (
            <div
              key={program.name}
              className=' block text-center bg-gray-subpath-light p-12 m-2 rounded-md'
            >
              <div className='sm:flex-shrink-0 '>
                <div className='flow-root '>
                  <div className='rounded-lg flex items-center justify-center  '>
                    <div className=' p-4 '>
                      <div className='bg-home__btn-green rounded-full p-1 h-24 w-24 flex items-center justify-center '>
                        {/* {Array.from(program.name)[0]} */}
                        <Image
                          src={program.imgSrc}
                          alt={program.name}
                          width={28}
                          height={28}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='mt-3 sm:mt-0 lg:mt-3 '>
                <h3 className='text-xl font-medium text-home__title'>
                  {program.name}
                </h3>
                <p className='text-base text-home__text'>
                  Duis aute irure dolor in reprehenderit in voluptate velit esse
                  cillum dolore eu fugiat nulla pariatur. Excepteur sint
                  occaecat cupidatat.
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default SupportOurProgram
