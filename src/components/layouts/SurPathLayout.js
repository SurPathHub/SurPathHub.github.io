import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Incentive from "../homepage/Incentive";
import Link from "next/link";
import Footer from "../navigation/Footer";

const navigation = [
  { name: "About", href: "/about" },
  { name: "Events", href: "/events" },
  { name: "Projects", href: "/projects" },
  { name: "Partners", href: "/partners" },
  { name: "Team", href: "/team" },
];

const SurPathLayout = ({ children }) => {
  return (
    <>
      <div className="bg-gray-subpath h-full flex flex-col">
        <div className="flex overflow-hidden">
          <div className="w-full">
            {/* START: shape corner top-right */}
            <div className="absolute right-0 top-0 h-16">
              <Image
                className="absolute right-0 top-0 h-full w-full"
                src={"/img/corner-shape.svg"}
                width={445}
                height={326}
              />
            </div>
            {/* END: shape corner top-right */}

            {/* START: navigation */}
            <div className="pt-6 pb-6">
              <Popover>
                <div className="mx-auto max-w-7xl px-4 sm:px-6">
                  <nav
                    className="relative flex items-center justify-between sm:h-10 md:justify-end"
                    aria-label="Global"
                  >
                    <div className="flex flex-1 items-center md:absolute md:inset-y-0 md:left-0">
                      <div className="flex w-full items-center justify-between md:w-auto cursor-pointer">
                        <span className="sr-only">SurPath Community</span>
                        <Link href="/">
                          <img
                            className="h-12 w-auto sm:h-14"
                            src="/img/surpath_logo.png"
                            alt=""
                          />
                        </Link>
                        <div className="-mr-2 flex items-center md:hidden">
                          <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white/10 p-2 text-gray-300 hover:bg-gray-100/30 hover:text-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-home__btn-green">
                            <span className="sr-only">Open main menu</span>
                            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                          </Popover.Button>
                        </div>
                      </div>
                    </div>
                    <div className="hidden md:flex md:space-x-10">
                      {navigation.map((item) => (
                        <Link key={item.name} href={item.href}>
                          <span className="font-medium text-gray-500 hover:text-gray-100 cursor-pointer">
                            {item.name}
                          </span>
                        </Link>
                      ))}
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
                    className="absolute inset-x-0 top-0 z-50 origin-top-right transform p-2 transition md:hidden"
                  >
                    <div className="overflow-hidden rounded-lg bg-gray-subpath shadow-md ring-1 ring-black ring-opacity-5">
                      <div className="flex items-center justify-between px-5 pt-4">
                        <div>
                          <img
                            className="h-8 w-auto"
                            src="/img/surpath_logo.png"
                            alt=""
                          />
                        </div>
                        <div className="-mr-2">
                          <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white/10 p-2 text-gray-300 hover:bg-gray-100/30 hover:text-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-home__btn-green">
                            <span className="sr-only">Close main menu</span>
                            <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                          </Popover.Button>
                        </div>
                      </div>
                      <div className="space-y-1 px-2 pt-2 pb-3">
                        {navigation.map((item) => (
                          <Link key={item.name} href={item.href}>
                            <span className="block rounded-md px-3 py-2 text-base font-medium text-home__text hover:bg-gray-50/10 hover:text-white/90">
                              {item.name}
                            </span>
                          </Link>
                        ))}
                      </div>
                      <a
                        href="#"
                        className="block w-full bg-gray-50/10 px-5 py-3 text-center font-medium text-footer__btn-green hover:bg-gradient-to-r hover:from-green-700 hover:via-green-800 hover:to-lime-500 hover:text-white"
                      >
                        Go to GitHub Organization
                      </a>
                    </div>
                  </Popover.Panel>
                </Transition>
              </Popover>
            </div>
            {/* END: navigation */}
          </div>
        </div>
        <div className="flex flex-col w-full ">
          <div className="max-w-7xl mx-auto flex flex-col w-full">
            {children}
          </div>
          <Footer></Footer>
        </div>
      </div>
    </>
  );
};

export default SurPathLayout;
