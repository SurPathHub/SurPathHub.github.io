const incentives = [
  {
    name: "Grow network",
    imgSrc: "",
  },
  {
    name: "Accelerate your career",
    imgSrc: "",
  },
  {
    name: "Mentorship",
    imgSrc: "",
  },
  {
    name: "Access Event",
    imgSrc: "",
  },
  {
    name: "Internship",
    imgSrc: "",
  },
  {
    name: "SWAG Rewards",
    imgSrc: "",
  },
];

const Incentive = () => {
  return (
    <>
      <div className="mx-auto mt-16 max-w-7xl px-4 sm:mt-24 sm:px-6">
        <div className="text-center">
          <h2 className="text-xl font-bold tracking-tight text-home__title sm:text-5xl md:text-4xl">
            <span className="block">Why be part of SurPath Hub?</span>
            {/* <span className="block text-indigo-600">online business</span> */}
          </h2>
          <p className="mx-auto mt-3 max-w-md text-base text-home__text sm:text-md md:mt-5 md:max-w-3xl md:text-lg">
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit anim id est laborum — semper quis lectus
            nulla at volutpat diam ut venenatis.
          </p>
        </div>
      </div>
      <div className="bg-gray-subpath">
        <div className="mx-auto max-w-7xl py-24 sm:px-2 sm:py-32 lg:px-4">
          <div className="mx-auto grid max-w-2xl place-items-center grid-cols-1 gap-y-10 gap-x-8 px-4 lg:max-w-none lg:grid-cols-3">
            {incentives.map((incentive) => (
              <div
                key={incentive.name}
                className="text-center sm:flex sm:text-left lg:block lg:text-center "
              >
                <div className="sm:flex-shrink-0 ">
                  <div className="flow-root ">
                    <div className="bg-home__btn-green rounded-full p-1 h-24">
                      {Array.from(incentive.name)[0]}
                    </div>
                  </div>
                </div>
                <div className="mt-3 sm:mt-0 sm:ml-3 lg:mt-3 lg:ml-0">
                  <h3 className="text-lg font-medium text-home__title">
                    {incentive.name}
                  </h3>
                  {/* <p className="mt-2 text-sm text-gray-500">
              {incentive.description}
            </p> */}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="mx-auto max-w-7xl py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
          <h2 className="text-center text-base font-semibold text-gray-400">
            Trusted by over 26,000 forward-thinking companies
          </h2>
          <div className="mt-8 grid grid-cols-2 gap-8 md:grid-cols-6 lg:grid-cols-5">
            <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
              <img
                className="h-12"
                src="https://tailwindui.com/img/logos/tuple-logo-gray-400.svg"
                alt="Tuple"
              />
            </div>
            <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
              <img
                className="h-12"
                src="https://tailwindui.com/img/logos/mirage-logo-gray-400.svg"
                alt="Mirage"
              />
            </div>
            <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
              <img
                className="h-12"
                src="https://tailwindui.com/img/logos/statickit-logo-gray-400.svg"
                alt="StaticKit"
              />
            </div>
            <div className="col-span-1 flex justify-center md:col-span-3 lg:col-span-1">
              <img
                className="h-12"
                src="https://tailwindui.com/img/logos/transistor-logo-gray-400.svg"
                alt="Transistor"
              />
            </div>
            <div className="col-span-2 flex justify-center md:col-span-3 lg:col-span-1">
              <img
                className="h-12"
                src="https://tailwindui.com/img/logos/workcation-logo-gray-400.svg"
                alt="Workcation"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Incentive;
