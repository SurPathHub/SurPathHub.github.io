import Image from "next/image";

const communityPrograms = [
  {
    name: "Content Ceator",
    imgSrc: "/img/icons/collection.svg",
  },
  {
    name: "Community Volunteer",
    imgSrc: "/img/icons/collection.svg",
  },
];

const JoinCommunity = () => {
  return (
    <>
      <div className="mx-auto mt-16 max-w-7xl px-4 sm:mt-24 sm:px-6 ">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-home__title sm:text-5xl md:text-4xl ">
            <span className="block">Join our Community Program</span>
          </h2>
          <p className="mx-auto mt-3 max-w-md text-base text-home__text sm:text-md md:mt-5 md:max-w-3xl md:text-lg">
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit anim id est laborum — semper quis lectus
            nulla at volutpat diam ut venenatis.
          </p>
        </div>
      </div>
      <div className="mx-auto max-w-7xl py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2  lg:grid-cols-2">
          {communityPrograms.map((program) => (
            <div
              key={program.name}
              className="block text-center bg-gray-subpath-light p-12 m-2 md:m-8 rounded-md"
            >
              <div className="sm:flex-shrink-0">
                <div className="flow-root">
                  <div className="rounded-lg flex items-center justify-center">
                    <div className="p-4">
                      {/* {Array.from(program.name)[0]} */}
                      <Image
                        src={program.imgSrc}
                        alt={program.name}
                        width={54}
                        height={54}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-3 sm:mt-0 lg:mt-3 ">
                <h3 className="text-xl font-medium text-home__title">
                  {program.name}
                </h3>
                <p className="text-base text-home__text">
                  Duis aute irure dolor in reprehenderit in voluptate velit esse
                  cillum dolore eu fugiat nulla pariatur. Excepteur sint
                  occaecat cupidatat.
                </p>
              </div>
              <div className="mx-auto mt-5 max-w-md sm:flex sm:justify-center md:mt-8">
                <div className="rounded-sm shadow">
                  <a
                    href="#"
                    className="flex w-full items-center justify-center rounded-sm border border-transparent bg-home__btn-green px-8 py-2 text-base font-medium text-white hover:bg-lime-700 md:py-2 md:px-10 md:text-lg transition duration-500 ease-in-out transform hover:-translate-y-0.5 hover:scale-500"
                  >
                    Apply now!
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default JoinCommunity;
