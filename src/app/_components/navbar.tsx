"use client";

import { useState, Fragment } from "react";
import Link from "next/link";
import { Dialog, Transition } from "@headlessui/react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <nav className="flex items-center justify-between w-full p-4 md:p-8">
        {/* Left part of navbar, typically for logo or brand */}
        <div className="flex items-center">
          {/* Add your logo or brand here */}
        </div>

        {/* Center part of navbar for desktop */}
        <div className="hidden md:flex items-center space-x-4">
          <Link href="/posts/biography" className="text-gray-700 hover:text-gray-900">
            Biography
          </Link>
          <Link
            href="/posts/literature"
            className="text-gray-700 hover:text-gray-900"
          >
            Literature
          </Link>
          <Link href="/posts/interview" className="text-gray-700 hover:text-gray-900">
            Interview
          </Link>
        </div>

        {/* Hamburger button on mobile */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(true)}
            className="p-2 text-gray-400 hover:text-gray-500 focus:outline-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
              width="24"
              height="24"
            >
              <path
                fill="currentColor"
                d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"
              />
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile navigation menu as a fullscreen modal */}
      <Transition show={isMenuOpen} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-10"
          onClose={() => setIsMenuOpen(false)}
        >
          <div className="min-h-screen px-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-75" />
            </Transition.Child>

            {/* This element is to trick the browser into centering the modal contents. */}
            <span
              className="inline-block h-screen align-middle"
              aria-hidden="true"
            >
              &#8203;
            </span>

            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <div className="inline-block w-full h-full p-6 overflow-hidden text-left align-middle rounded-md transition-all transform bg-white">
                {/* Close (X) button */}
                <button
                  className="absolute top-0 right-0 m-6 text-gray-600 hover:text-gray-900 bg-transparent border-0 text-3xl leading-none font-semibold outline-none focus:outline-none"
                  onClick={() => setIsMenuOpen(false)}
                >
                  &#215;
                </button>

                {/* Mobile navigation links */}
                <div className="flex flex-col justify-center items-center h-full">
                  <Link
                    href="/posts/biography"
                    className="text-lg font-medium text-gray-900 hover:underline mb-4"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Biography
                  </Link>
                  <Link
                    href="/posts/literature"
                    className="text-lg font-medium text-gray-900 hover:underline mb-4"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Literature
                  </Link>
                  <Link
                    href="/posts/interview"
                    className="text-lg font-medium text-gray-900 hover:underline"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Interview
                  </Link>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
