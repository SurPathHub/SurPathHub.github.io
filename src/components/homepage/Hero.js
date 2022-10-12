import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Incentive from "./Incentive";
import Link from "next/link";

const navigation = [
  { name: "About", href: "/about" },
  { name: "Events", href: "/events" },
  { name: "Projects", href: "/projects" },
  { name: "Partners", href: "/partners" },
  { name: "Team", href: "/team" },
];

const Hero = () => {
  return (
    <>
      <div className="mx-auto mt-16 max-w-7xl px-4 sm:mt-24 sm:px-6 mb-5">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-home__title sm:text-5xl md:text-6xl">
            <span className="block">SurPath Hub</span>
            {/* <span className="block text-indigo-600">online business</span> */}
          </h1>
          <p className="mx-auto mt-3 max-w-md text-base text-home__text sm:text-lg md:mt-5 md:max-w-3xl md:text-xl">
            An inclusive community that brings Open Source closer to the
            Filipino student. We are here to explore every opportunity available
            on the internet.
          </p>
        </div>
      </div>
      <div class="relative w-full pb-24 pt-12 bg-pink-400/0">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="flex justify-center ">
            <img
              className="rounded-lg shadow-lg z-50"
              src="/img/hero-video.png"
              alt="App screenshot"
            />
          </div>
        </div>

        {/* START: shape corner bottom-left */}
        <div class="absolute left-0 bottom-0  ">
          <Image
            className="absolute left-0 bottom-0 h-full w-full"
            src={"/img/hero-shape-circle.svg"}
            width={562}
            height={555}
          />
        </div>
        {/* END: shape corner bottom-left */}
      </div>
      <div className="px-2 mx-auto mt-5 max-w-md sm:flex sm:justify-center md:mt-8">
        <div className="rounded-sm shadow">
          <a
            href="#"
            className="flex w-full items-center justify-center rounded-sm border border-transparent bg-home__btn-green px-8 py-2 text-base font-medium text-white hover:bg-lime-700 md:py-2 md:px-10 md:text-lg transition duration-500 ease-in-out transform hover:-translate-y-0.5 hover:scale-500"
          >
            Join Discord
          </a>
        </div>
        <div className="mt-3 rounded-sm shadow sm:mt-0 sm:ml-3">
          <a
            href="#"
            className="flex w-full items-center justify-center rounded-sm border border-transparent bg-home__btn-gray px-8 py-2 text-base font-medium text-white hover:bg-gray-500/50 md:py-2 md:px-10 md:text-lg transition duration-500 ease-in-out transform hover:-translate-y-0.5 hover:scale-500"
          >
            Learn More
          </a>
        </div>
      </div>
    </>
  );
};

export default Hero;
