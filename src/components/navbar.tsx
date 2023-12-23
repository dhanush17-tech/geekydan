import Link from "next/link";
import React, { useEffect, useState } from "react";
export default function NavBar() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (
        entries: IntersectionObserverEntry[],
        observer: IntersectionObserver
      ) => {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add("in-view");
            }, 300 * index); // 300ms delay multiplied by the index
          }
        });
      },
      { threshold: 0.1 } // Adjust threshold as needed
    );

    const links = document.querySelectorAll(".navbar");
    links.forEach((link) => {
      observer.observe(link as Element);
    });

    // Cleanup function
    return () => {
      links.forEach((link) => {
        observer.unobserve(link as Element);
      });
    };
  }, []); // Empty dependency array ensures this runs once after the initial render
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className=" navbar relative flex px-5 my-5 md:px-10 md:my-8 justify-between items-center z-10  w-full ">
      <div className="flex   " >
        {/* <img src="assets/nav_logo.png" className="h-5 md:h-8 pl-2" alt="Logo" /> */}
        <h1 className="text-3xl lg:text-4xl font-[600]  text-blue">
          {"<DV/>"}
        </h1>
      </div>{" "}
      <button
        data-collapse-toggle="navbar-default"
        type="button"
        className="inline-flex items-center p-2 text-sm text-white rounded-lg md:hidden hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-300"
        aria-controls="navbar-default"
        aria-expanded="false"
        onClick={toggleMenu}
      >
        <span className="sr-only">Open main menu</span>
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16m-7 6h7"
          />
        </svg>
      </button>
      <div
        className={`navbar-transition ${
          isMenuOpen ? "navbar-visible" : ""
        } absolute md:hidden w-[80%] right-[11%] top-16 backdrop-filter backdrop-blur-lg bg-opacity-30 text-white bg-gray-500/5 border-4 border-white/50 rounded-lg md:w-auto`}
        id="navbar-default"
      >
        <ul className="font-medium flex flex-col p-4 md:p-0    rounded-lg  md:flex-row md:space-x-8 rtl:space-x-reverse    ">
          <li key="aboutme">
            <a
              href="#aboutme"
              className="block py-2 px-3  text-white/50  font-[600] rounded-md hover:bg-gray-100/10  md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white  "
            >
              About Me
            </a>
          </li>
          <li key={"experience"}>
            <a
              href="#experience"
              className="block py-2 px-3  text-white/50  font-[600] rounded-md hover:bg-gray-100/10  hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
            >
              Experience
            </a>
          </li>
          <li key="projects">
            <a
              href="#projects"
              className="block py-2 px-3  text-white/50 font-[600]  rounded-md hover:bg-gray-100/10 bg-blue-700   md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500"
              aria-current="page"
            >
              Cool Projects
            </a>
          </li>
          <li key="blogs">
            <a
              href="#blogs"
              className="block py-2 px-3   text-white/50  font-[600] rounded-md hover:bg-gray-100/10  hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
            >
              Blogs
            </a>
          </li>

          <li key="mentorship">
            <a
              href="#mentorship"
              className="block py-2 px-3  text-white/50 font-[600] rounded-md hover:bg-gray-100/10  hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
            >
              Mentorship
            </a>
          </li>
        </ul>
      </div>
      <div className="hidden nav-hidden:flex max-w-screen-xl mx-auto flex-wrap items-center justify-between px-6 py-3 bg-gray-500 rounded-lg bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-[0.2] border-[3px] border-blue/50 text-[20px] font-[600] ">
        <div className=" w-full md:block md:w-auto" id="navbar-default">
          <ul className="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0">
            <li>
              <a
                href="#"
                className="block py-2 pr-4 pl-3 text-white rounded hover:bg-blue-800 md:hover:bg-transparent md:border-0 md:hover:text-blue-300 md:p-0"
                aria-current="page"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#aboutme"
                className="block py-2 pr-4 pl-3 text-white rounded hover:bg-blue-800 md:hover:bg-transparent md:border-0 md:hover:text-blue-300 md:p-0"
              >
                About Me
              </a>
            </li>
            <li>
              <a
                href="#experience"
                className="block py-2 pr-4 pl-3 text-white rounded hover:bg-blue-800 md:hover:bg-transparent md:border-0 md:hover:text-blue-300 md:p-0"
              >
                Experience
              </a>
            </li>
            <li>
              <a
                href="#blogs"
                className="block py-2 pr-4 pl-3 text-white rounded hover:bg-blue-800 md:hover:bg-transparent md:border-0 md:hover:text-blue-300 md:p-0"
              >
                Blogs
              </a>
            </li>
            <li>
              <a
                href="#mentorship"
                className="block py-2 pr-4 pl-3 text-white rounded hover:bg-blue-800 md:hover:bg-transparent md:border-0 md:hover:text-blue-300 md:p-0"
              >
                Mentorship
              </a>
            </li>
          </ul>
        </div>
      </div>
      <a
        href="#contact"
        className="hidden nav-hidden:flex border-4 border-blue font-[600] text-[21px] rounded-lg text-white px-3 py-1 "
      >
        Contact Me
      </a>
    </nav>
  );
}
