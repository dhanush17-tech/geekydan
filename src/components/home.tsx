import React, { useEffect, useState } from "react";
import BlurredBackground from "./blurredBack";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faGithub,
  faLinkedin,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons"; // Make sure to import the icon
import NavBar from "./navbar";
import Typewriter from "./typewritter";
import { BackgroundBeams } from "./backgroundBeams";
import Link from "next/link";
export default function HomePage() {
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

    const links = document.querySelectorAll(".home-left");
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

  return (
    <section className="w-screen h-screen flex flex-col items-center z-20 relative overflow-hidden antialiased">
      <NavBar />
      {/* <BackgroundBeams /> */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden lg:block">
        <div className="absolute left-[-25%] top-[20%] bottom-[15%] w-[150%] rotate-12 border-y border-white/5">
          <div className="absolute top-[-1.5px] right-[calc(40%+26rem)] mr-6 h-[2px] w-28 rounded-full bg-gradient-to-l from-blue ani-div-first"></div>
          <div className="absolute bottom-[-1.5px] right-[calc(20%+10rem)] h-[2px] w-28 rounded-full bg-gradient-to-l from-sky-400 ani-div-second"></div>
        </div>
        <div className="absolute left-[-25%] top-[60%] h-px w-[150%] rotate-12 bg-white/5">
          <div className=" absolute top-[-0.5px] left-[calc(5%+29rem)] h-[2px] w-28 rounded-full bg-gradient-to-l from-violet-400 ani-div-third xl:left-[calc(50%+31rem)]"></div>
          {/* <div className="absolute top-[-0.5px] left-[calc(50%+29rem)] h-[2px] w-28 rounded-full bg-gradient-to-l from-violet-400 xl:left-[calc(50%+31rem)]"></div> */}
        </div>
        <div className="absolute left-[calc(50%+26rem)] top-[-25%] h-[150%] w-px rotate-12 bg-white/5"></div>
        <div className="absolute right-[calc(50%+26rem)] top-[-25%] h-[150%] w-px rotate-12 bg-white/5"></div>
      </div>
      <div className="hidden md:flex flex-col items-center absolute left-5 bottom-5 space-y-8 z-20">
        {/* Social Icons Column */}
        <Link
          target="_blank"
          href="https://github.com/dhanush17-tech"
          legacyBehavior
        >
          <a aria-label="Dhanush Vardhan Github">
            <FontAwesomeIcon
              icon={faGithub}
              className="text-white/50 text-2xl"
            />
          </a>
        </Link>
        <Link
          target="_blank"
          href="https://www.linkedin.com/in/dhanush-vardhan-30bb881b0/"
          legacyBehavior
        >
          <a aria-label="Dhanush Vardhan LinkedIn">
            <FontAwesomeIcon
              icon={faLinkedin}
              className="text-white/50 text-2xl"
            />
          </a>
        </Link>
        <Link
          target="_blank"
          href="https://twitter.com/geeky_dan"
          legacyBehavior
        >
          <a aria-label="Dhanush Vardhan Twitter">
            <FontAwesomeIcon
              icon={faXTwitter} // Assuming you have a Twitter icon, replace faLinkedin with faTwitter
              className="text-white/50 text-2xl"
            />
          </a>
        </Link>
        <Link
          target="_blank"
          href="https://www.instagram.com/dhanu_sh.17/"
          legacyBehavior
        >
          <a aria-label="Dhanush Vardhan Instagram">
            <FontAwesomeIcon
              icon={faInstagram}
              className="text-white/50 text-2xl"
            />
          </a>
        </Link>
        <div className="w-3 bg-white/10  h-36"></div>
      </div>

      {/* Main content grid */}
      <div className="relative  grid grid-cols-1 md:grid-cols-2 items-center h-full w-full px-10 md:px-32">
        {/* Left Column for Content */}
        <div className=" home-left flex flex-col justify-center space-y-5 ">
          {/* Content */}
          {/* <p className="text-[3.5vw]  md:text-md lg:text-2xl  text-blue font-normal">
            Hello there 👋
          </p>
          <h1
            style={{ lineHeight: 1 }}
            className="  text-[10vw]  md:text-4xl lg:text-7xl font-bold text-white custom-line-height  "
          >
            I'm{" "}
            <span className=" relative before:absolute before:inset-x-0 before:bottom-0 md:before:bottom-2 lg:before:bottom-2  before:block before:w-[100%] before:h-[14px] before:bg-blue before:bg-opacity-60 ">
              Dhanush
            </span>
          </h1>
          <h1
            style={{ lineHeight: 1 }}
            className=" text-[10vw]  md:text-4xl lg:text-7xl font-bold text-white custom-line-height "
          >
            a
            <span className="ml-3">
              <Typewriter />
            </span>
          </h1>
          <p className="mt-10 text-[3vw]  lg:text-lg font-normal md:font-bold text-white md:mt-20 margin-top">
            Mobile App Developer | Winner of 5+ Hackathons | Helping Startups
            Soar 🚀 | FOSS Contributor | Fulltime Indie Hacker
          </p>
          <button className="margin-button w-1/2 md:w-1/3 lg:w-1/4 transition duration-300 ease-in-out bg-transparent hover:bg-blue text-white font-bold py-2 px-4 border-2 border-white hover:border-transparent rounded-lg">
            Resume
          </button> */}

          <p className="text-xl md:text-2xl  text-blue ">Hello there 👋</p>
          <h1 className="text-4xl md:text-6xl lg:text-7xl   text-white leading-none my-4">
            I'm{" "}
            <span className="relative before:absolute before:inset-x-0 before:bottom-0 leading-none md:before:bottom-2 lg:before:bottom-2  before:block before:w-[100%] before:h-[14px] before:bg-blue before:bg-opacity-60">
              Dhanush
            </span>
          </h1>
          <h2 className="text-4xl md:text-6xl lg:text-7xl  text-white leading-none">
            a <Typewriter />
          </h2>
          <p className="text-sm md:text-xl lg:text-xl font-normal margin-top    text-white mt-10 md:mt-14">
            Mobile App Developer | Winner of 5+ Hackathons | Helping Startups
            Soar 🚀 | FOSS Contributor | Fulltime Indie Hacker
          </p>
          <Link href="/assets/resume/Dhanush's Resume.pdf">
            <div className=" md:mt-10 md:w-1/3 margin-top text-center  transition duration-300 ease-in-out bg-blue hover:bg-blue-500 text-white font-[600] py-3 md:py-2 px-4 text-xl  hover:border-transparent rounded-lg">
              Resume
            </div>
          </Link>
        </div>

        {/* Right Column for the Avatar */}
        <div className="hidden md:flex justify-end items-center">
          <div className="rounded-full bg-blue-500/50 border-8 border-blue-500 p-2 bg-blue/50 max-w-[400px] w-full relative">
            {/* Icons around the avatar */}
            <img
              className="top-[-10px] right-0 rotate-12 w-1/5 md:w-1/4 absolute"
              src="assets/icons/firebase.png"
              alt="Firebase"
            />
            <img
              className="top-10 left-[-10px] rotate-12 w-1/5 md:w-1/4 absolute"
              src="assets/icons/flutter.png"
              alt="Flutter"
            />
            <img
              className="bottom-[-10px] right-0 rotate-5 w-1/5 md:w-1/4 absolute"
              src="assets/icons/python.png"
              alt="Python"
            />
            <img
              className="bottom-[-10px] left-0 rotate-12 w-1/5 md:w-1/4 absolute"
              src="assets/icons/nodejs.png"
              alt="Node.js"
            />
            {/* Main avatar image */}
            <img
              className="w-full h-auto object-cover rounded-full"
              src="assets/memoji.png"
              alt="Avatar"
            />
          </div>
        </div>
        <div className="visible md:collapse border-white absolute mouse translate-x-[50%] "></div>
      </div>
    </section>
  );
}
