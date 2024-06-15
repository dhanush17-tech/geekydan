import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnglesRight } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";

export default function AboutMe() {
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

    const links = document.querySelectorAll(".photo, .about-us");
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
    <>
      <div
        id="aboutme"
        className=" mt-10 flex flex-col-reverse md:grid  md:grid-cols-[40%_60%] md:gap-10 items-center justify-center md:pl-14 md:pr-24"
      >
        <div className="flex justify-center items-center h-full pr-10 md:pr-0">
          <div className="photo relative left-[5%] md:left-0 h-[40vh] w-[30vh] md:w-[50vh] md:h-[55vh] mt-5 md:mt-0 self-center text-center rounded-lg border-7 border-blue bg-white before:before-absolute before:rounded-lg before:border-blue before:border-[5px] object-cover">
            <div className="relative w-full h-full rounded-lg overflow-hidden border-[5px] border-blue">
              <Image
                fill={true}
                className="object-cover"
                src="/assets/me.jpg"
                alt="Photo of Dhanush Vardhan"
              />
            </div>
            <Image
              fill={true}
              className="w-full object-contain p-5 rounded-lg bg-clip-border  border-[5px] backdrop-blur-sm bg-white/0 border-blue"
              src="/assets/me.jpg"
              alt="Photo of Dhanush Vardhan"
            />
          </div>
        </div>

        <div className=" about-us flex flex-col justify-center items-center px-10 my-5 ">
          <div className="">
            {"  "}
            {/* Adjust max width as needed */}
            <div className="flex justify-start space-x-5 md:w-[85%]">
              <h1 className="text-2xl  md:text-md lg:text-4xl text-white flex  ">
                {"01.  "}
                <span className="text-blue ml-2"> About Me </span>
              </h1>
              <div className="h-[3px] bg-gradient-to-tr from-slate-600 to-transparent w-[40%] self-center"></div>
            </div>
            <div className="flex flex-col items-center justify-center text-white text-md mt-10 font-normal">
              <p>
                Hi there! I'm Dhanush Vardhan, a{" "}
                <span className="text-blue">software engineer</span> who loves
                diving into mobile app development. My toolbox is packed with
                cool stuff like Flutter, Node.js, Redis, and more... <br />
                <br />
                I've also had some awesome times speaking at{" "}
                <a
                  aria-label="Google IO Extended"
                  href="https://gdg.community.dev/gdg-coimbatore/"
                  className="text-blue"
                >
                  Google IO Extended 2022
                </a>
                {", "}
                <span className="text-blue"> Sunhacks 2023</span> and{" "}
                <a
                  aria-label="Coders Evoke"
                  href="https://www.youtube.com/watch?v=s4VScWsR5OY"
                  className="text-blue px-1"
                >
                  Coders Evoke
                </a>
                , where I talked about Flutter 3.0 and Firebase. Sharing what I
                know and learning from others is something I really enjoy.
                <br />
                <br />
                Oh, and hackathons? Totally my thing. I've snagged wins at{" "}
                <a
                  aria-label="CalHacks"
                  href="https://www.calhacks.io/"
                  className="text-blue"
                >
                  CalHacks
                </a>{" "}
                and{" "}
                <a
                  href="https://www.hackprinceton.com/"
                  className="text-blue pl-1 "
                >
                  HackPrinceton
                </a>
                , which were both super exciting and challenging. <br />
                <br />
                In a nutshell, I'm all about building neat apps, sharing tech
                insights, and always up for a good coding challenge!{" "}
              </p>
              <ul className=" hidden text-white text-lg mt-5 md:grid grid-cols-2 gap-5 w-[100%] self-center  md:w-[100%]">
                <li className="flex flex-row h-5 justify-center w-min align-center">
                  <FontAwesomeIcon
                    className="text-blue pt-1"
                    icon={faAnglesRight}
                  />
                  <span className="pl-2 text-center ">Flutter</span>
                </li>
                <li className="flex flex-row h-5  justify-center w-min align-center">
                  <FontAwesomeIcon
                    className="text-blue pt-1"
                    icon={faAnglesRight}
                  />
                  <span className="pl-2">Kotlin</span>
                </li>{" "}
                <li className="flex flex-row h-5  justify-center w-min align-center">
                  <FontAwesomeIcon
                    className="text-blue pt-1"
                    icon={faAnglesRight}
                  />
                  <span className="pl-2">NodeJS</span>
                </li>{" "}
                <li className="flex flex-row h-5  justify-center w-min align-center">
                  <FontAwesomeIcon
                    className="text-blue pt-1"
                    icon={faAnglesRight}
                  />
                  <span className="pl-2">Redis</span>
                </li>{" "}
                <li className="flex flex-row h-5  justify-center w-min align-center">
                  <FontAwesomeIcon
                    className="text-blue pt-1"
                    icon={faAnglesRight}
                  />
                  <span className="pl-2">MySQL</span>
                </li>
                <li className="flex flex-row h-5  justify-center w-min align-center">
                  <FontAwesomeIcon
                    className="text-blue pt-1 "
                    icon={faAnglesRight}
                  />
                  <span className="pl-2 pr-[13%] md:pr-0">Postgres</span>
                </li>
              </ul>{" "}
            </div>
          </div>
        </div>
        {/* Right column contents */}
      </div>
    </>
  );
}
