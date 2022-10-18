import Image from 'next/image'

const incentives = [
  {
    name: 'Grow network',
    imgSrc: '/img/icons/stars.svg',
  },
  {
    name: 'Accelerate your career',
    imgSrc: '/img/icons/file.svg',
  },
  {
    name: 'Mentorship',
    imgSrc: '/img/icons/globe.svg',
  },
  {
    name: 'Access Event',
    imgSrc: '/img/icons/ear.svg',
  },
  {
    name: 'Internship',
    imgSrc: '/img/icons/thumb.svg',
  },
  {
    name: 'SWAG Rewards',
    imgSrc: '/img/icons/chat.svg',
  },
]

const Incentive = () => {
  return (
    <>
      <div className='mx-auto mt-16 max-w-7xl px-4 sm:mt-24 sm:px-6 '>
        <div className='text-center'>
          <h2 className='text-3xl font-bold tracking-tight text-home__title sm:text-5xl md:text-4xl '>
            <span className='block'>Why be part of SurPath Hub?</span>
          </h2>
          <p className='mx-auto mt-3 max-w-md text-base text-home__text sm:text-md md:mt-5 md:max-w-3xl md:text-lg'>
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit anim id est laborum — semper quis lectus
            nulla at volutpat diam ut venenatis.
          </p>
        </div>
      </div>
      <div className='mx-auto max-w-7xl py-16 px-4 sm:py-24 sm:px-6 lg:px-8'>
        <div className='mt-8 grid grid-cols-2 gap-8 sm:grid-cols-2  lg:grid-cols-3'>
          {incentives.map((incentive) => (
            <div
              key={incentive.name}
              className='hover:cursor-pointer block text-center transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110'
            >
              <div className='sm:flex-shrink-0 '>
                <div className='flow-root '>
                  <div className='rounded-lg flex items-center justify-center  '>
                    <div className=' p-4 '>
                      <div className='bg-home__btn-green rounded-full p-1 h-24 w-24 flex items-center justify-center '>
                        {/* {Array.from(incentive.name)[0]} */}
                        <Image
                          src={incentive.imgSrc}
                          alt={incentive.name}
                          width={28}
                          height={28}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='mt-3 sm:mt-0 lg:mt-3 '>
                <h3 className='text-xl font-medium text-home__title '>
                  {incentive.name}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default Incentive
