import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Incentive from "./Incentive";

const navigation = [
  { name: "Product", href: "#" },
  { name: "Features", href: "#" },
  { name: "Marketplace", href: "#" },
  { name: "Company", href: "#" },
];

const Hero = () => {
  return (
    <div className="bg-gray-subpath">
      <div className="relative overflow-hidden">
        <div class="relative w-full h-28 bg-green-400/10">
          {/* START: shape corner top-right */}
          <div class="absolute right-0 top-0 h-16">
            <Image
              className="absolute right-0 top-0 h-full w-full"
              src={"/img/Shape.png"}
              width={445}
              height={326}
            />
          </div>
          {/* END: shape corner top-right */}

          {/* START: navigation */}
          <div className="static pt-6 pb-16 sm:pb-24">
            <Popover>
              <div className="mx-auto max-w-7xl px-4 sm:px-6">
                <nav
                  className="relative flex items-center justify-between sm:h-10 md:justify-center"
                  aria-label="Global"
                >
                  <div className="flex flex-1 items-center md:absolute md:inset-y-0 md:left-0">
                    <div className="flex w-full items-center justify-between md:w-auto">
                      <a href="#">
                        <span className="sr-only">Your Company</span>
                        <img
                          className="h-8 w-auto sm:h-10"
                          src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                          alt=""
                        />
                      </a>
                      <div className="-mr-2 flex items-center md:hidden">
                        <Popover.Button className="inline-flex items-center justify-center rounded-md bg-gray-50 p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                          <span className="sr-only">Open main menu</span>
                          <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                        </Popover.Button>
                      </div>
                    </div>
                  </div>
                  <div className="hidden md:flex md:space-x-10">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className="font-medium text-gray-500 hover:text-gray-900"
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                  <div className="hidden md:absolute md:inset-y-0 md:right-0 md:flex md:items-center md:justify-end">
                    <span className="inline-flex rounded-md shadow">
                      <a
                        href="#"
                        className="inline-flex items-center rounded-md border border-transparent bg-white px-4 py-2 text-base font-medium text-indigo-600 hover:text-indigo-500"
                      >
                        Log in
                      </a>
                    </span>
                  </div>
                </nav>
              </div>

              <Transition
                as={Fragment}
                enter="duration-150 ease-out"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="duration-100 ease-in"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Popover.Panel
                  focus
                  className="absolute inset-x-0 top-0 z-10 origin-top-right transform p-2 transition md:hidden"
                >
                  <div className="overflow-hidden rounded-lg bg-white shadow-md ring-1 ring-black ring-opacity-5">
                    <div className="flex items-center justify-between px-5 pt-4">
                      <div>
                        <img
                          className="h-8 w-auto"
                          src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                          alt=""
                        />
                      </div>
                      <div className="-mr-2">
                        <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                          <span className="sr-only">Close main menu</span>
                          <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                        </Popover.Button>
                      </div>
                    </div>
                    <div className="space-y-1 px-2 pt-2 pb-3">
                      {navigation.map((item) => (
                        <a
                          key={item.name}
                          href={item.href}
                          className="block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-gray-900"
                        >
                          {item.name}
                        </a>
                      ))}
                    </div>
                    <a
                      href="#"
                      className="block w-full bg-gray-50 px-5 py-3 text-center font-medium text-indigo-600 hover:bg-gray-100 hover:text-indigo-700"
                    >
                      Log in
                    </a>
                  </div>
                </Popover.Panel>
              </Transition>
            </Popover>
          </div>
          {/* END: navigation */}
        </div>

        <div className="mb-5">
          <div className="mx-auto mt-16 max-w-7xl px-4 sm:mt-24 sm:px-6">
            <div className="text-center">
              <h1 className="text-4xl font-bold tracking-tight text-home__title sm:text-5xl md:text-6xl">
                <span className="block">SurPath Hub</span>
                {/* <span className="block text-indigo-600">online business</span> */}
              </h1>
              <p className="mx-auto mt-3 max-w-md text-base text-home__text sm:text-lg md:mt-5 md:max-w-3xl md:text-xl">
                An inclusive community that brings Open Source closer to the
                Filipino student. We are here to explore every opportunity
                available on the internet.
              </p>
            </div>
          </div>
          <div className="mx-auto mt-5 max-w-md sm:flex sm:justify-center md:mt-8">
            <div className="rounded-sm shadow">
              <a
                href="#"
                className="flex w-full items-center justify-center rounded-sm border border-transparent bg-home__btn-green px-8 py-2 text-base font-medium text-white hover:bg-indigo-700 md:py-2 md:px-10 md:text-lg"
              >
                Join Discord
              </a>
            </div>
            <div className="mt-3 rounded-sm shadow sm:mt-0 sm:ml-3">
              <a
                href="#"
                className="flex w-full items-center justify-center rounded-sm border border-transparent bg-home__btn-gray px-8 py-2 text-base font-medium text-white hover:bg-gray-50 md:py-2 md:px-10 md:text-lg"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>

        {/* START: hero image */}
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
              src={"/img/hero-shape-circle.png"}
              width={562}
              height={555}
            />
          </div>
          {/* END: shape corner bottom-left */}
        </div>
        {/* END: hero image */}
      </div>
      <Incentive />
    </div>
  );
};

export default Hero;
