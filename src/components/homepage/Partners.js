import Image from "next/image";

const communityPrograms = [
  {
    name: "Platinum",
    imgSrc: "/img/icons/stars.svg",
  },
  {
    name: "Gold",
    imgSrc: "/img/icons/file.svg",
  },
  {
    name: "Silver",
    imgSrc: "/img/icons/globe.svg",
  },
];

const Partners = () => {
  return (
    <>
      <div className="mx-auto mt-4 max-w-7xl px-4 sm:mt-10 sm:px-6 ">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-home__title sm:text-5xl md:text-4xl ">
            <span className="block">Some of our partners and friends</span>
          </h2>
          <p className="mx-auto mt-3 max-w-md text-base text-home__text sm:text-md md:mt-5 md:max-w-3xl md:text-lg">
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit anim id est laborum — semper quis lectus
            nulla at volutpat diam ut venenatis.
          </p>
        </div>
      </div>
      <div className="w-full mb-12 justify-center">
        <div className="mt-8 grid grid-cols-2 gap-8 md:grid-cols-6 lg:grid-cols-5">
          <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
            <img className="h-12" src="/img/partners/spotify.png" alt="Tuple" />
          </div>
          <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
            <img className="h-12" src="/img/partners/google.png" alt="Google" />
          </div>
          <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
            <img className="h-12" src="/img/partners/stripe.png" alt="Stripe" />
          </div>
          <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
            <img
              className="h-16"
              src="/img/partners/youtube.png"
              alt="Youtube"
            />
          </div>
          <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
            <img
              className="h-16"
              src="/img/partners/microsoft.png"
              alt="Microsoft"
            />
          </div>
          <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
            <img className="h-12" src="/img/partners/medium.png" alt="Medium" />
          </div>
          <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
            <img className="h-12" src="/img/partners/zoom.png" alt="Zoom" />
          </div>
          <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
            <img className="h-12" src="/img/partners/uber.png" alt="Uber" />
          </div>
          <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
            <img className="h-12" src="/img/partners/grab.png" alt="Grab" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Partners;
