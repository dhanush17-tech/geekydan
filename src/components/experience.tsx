import React, { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleRight,
  faAnglesRight,
  faPlay,
} from "@fortawesome/free-solid-svg-icons";
import TagCloud from "TagCloud";
import Link from "next/link";
import Image from "next/image";

export default function Experience() {
  const containerRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    // Only attempt to use TagCloud if the ref is current
    if (containerRef.current) {
      const texts = [
        "Flutter",
        "Firebase",
        "JavaScript",
        "MySQL",
        "Kotlin",
        "Redis",
        "Postgres",
        "Docker",
        "NodeJS",
        "Express",
        "MongoDB",
        "Python",
        "Java",
        "Git",
        "Dart",
        "Compose",
        "FastAPI",
        "Flutter",
        "Firebase",
        "JavaScript",
        "MySQL",
        "Kotlin",
        "Redis",
        "Postgres",
        "Docker",
        "NodeJS",
        "Express",
        "MongoDB",
        "Python",
        "Java",
        "Git",
        "Dart",
        "Compose",
        "FastAPI",
      ];

      const size = containerRef.current.offsetWidth;
      const radius = size / 2.5; // or any other factor that fits your design

      const options = {
        radius: radius,
        // ... (any other options you want to include)
      };

      // Initialize TagCloud here
      TagCloud(containerRef.current, texts, options);

      // Return a cleanup function
      return () => {
        // Clean up the TagCloud instance
        // This assumes TagCloud does not provide a dedicated cleanup method
        // and depends on removing all child nodes from the container
        if (containerRef.current) {
          while (containerRef.current.firstChild) {
            containerRef.current.removeChild(containerRef.current.firstChild);
          }
        }
      };
    }
  }, []); // Empty dependency array means this effect will only run once after initial render

  return (
    <>
      <div className=" grid grid-cols-1 md:grid-cols-[60%_40%] items-start justify-center my-24 md:px-24">
        <div className="flex flex-col justify-center items-center px-10 md:px-0 my-5 ">
          <div className="">
            {"  "}
            {/* Adjust max width as needed */}
            <div className="flex justify-start items-center space-x-5 md:w-[85%]">
              <h1 className="text-2xl md:text-md lg:text-4xl text-white flex">
                {"02.  "}
                <span className="text-blue ml-2"> My Experience </span>
              </h1>
              <div className="h-[3px] bg-gradient-to-tr from-slate-600 to-transparent w-[30%]"></div>
            </div>

            <div className="flex flex-col items-center justify-center text-white text-md mt-5 font-normal md:mt-10">
              <MyExperience />
            </div>
          </div>
        </div>
        <div
          className="hidden md:flex h-20  text-blue md:pr-0"
          ref={containerRef}
        ></div>
        {/* Right column contents */}
      </div>
    </>
  );
}
function MyExperience() {
  const [activeTab, setTab] = useState<String>("Cloudflare");
  const [isVisible, setIsVisible] = useState(true);

  function setActiveTab(tab: string) {
    setIsVisible(false);
    setTab(tab);
    setTimeout(() => {
      setIsVisible(true);
    }, 500);
  }
  return (
    <div id="experience" className=" flex flex-col">
      <div className="grid grid-cols-1 md:grid-cols-[20%_70%] gap-4 items-start justify-start text-white text-lg mt-0 font-normal">
        <div className="grid grid-cols-2 md:grid-cols-1 items-center    ">
          {/* Experience blocks */}
          <div
            onClick={() => setActiveTab("Cloudflare")}
            className={`w-full md:w-32 h-14  md:rounded-none    md: transparent md:text-blue  ${
              activeTab == "Cloudflare"
                ? "border-b-4 md:border-b-0 md:border-l-4 border-blue"
                : "md:border-l-4 md:border-blue/20 "
            } flex items-center justify-center text-md text-white`}
          >
            <p>Cloudflare</p>
          </div>
          <div
            onClick={() => setActiveTab("Freelancer")}
            className={`w-full md:w-32 h-14  md:rounded-none    md: transparent md:text-blue  ${
              activeTab == "Freelancer"
                ? "border-b-4 md:border-b-0 md:border-l-4 border-blue"
                : "md:border-l-4 md:border-blue/20 "
            } flex items-center justify-center text-md text-white`}
          >
            <p>Freelancer</p>
          </div>
        </div>
        <div
          className={` ${
            isVisible ? "in-view" : ""
          } job-description flex flex-col mt-5`}
        >
          {activeTab === "Cloudflare" ? (
            <div className="flex items-start  ">
              <div className="flex mt-2">
                <div className="w-12 h-12 rounded-lg  bg-blue-500 bg-opacity-50 flex items-center justify-center overflow-hidden">
                  <img
                    src="https://static-00.iconduck.com/assets.00/cloudflare-icon-2048x2048-k5hf9ugn.png"
                    alt=""
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="flex flex-col ml-4">
                <h1 className="text-2xl text-white font-bold">
                  Software Engineering Intern
                </h1>
                <h1 className="text-xl text-blue font-bold">@Cloudflare</h1>
              </div>
            </div>
          ) : (
            <div className="flex items-start  ">
              <div className="flex mt-2">
                <div className="w-12 h-12 rounded-lg text-3xl bg-blue bg-opacity-20 flex items-center justify-center overflow-hidden">
                  😎
                </div>
              </div>
              <div className="flex flex-col ml-4">
                <h1 className="text-2xl text-white font-bold">
                  Mobile App Developer
                </h1>
                <h1 className="text-xl text-blue font-bold">@Freelancer</h1>
              </div>
            </div>
          )}
          <ul className="text-gray-400 text-sm font-normal mt-5">
            {/* List items */}
            {activeTab === "Cloudflare" ? (
              <>
                <li className="flex flex-row items-start gap-2 ">
                  <FontAwesomeIcon
                    className="mt-1  md:mt-1/2 w-[10%] max-w-[0.6rem]  "
                    icon={faAngleRight}
                  />
                  <span>
                    Developed the Zero Trust Desktop Client in Flutter and
                    optimized the Rust daemon for the client, ensuring secure
                    and efficient data transfer.
                  </span>
                </li>
              </>
            ) : (
              <li className="flex items-start gap-2">
                <FontAwesomeIcon
                  className="mt-1  md:mt-1/2 w-[10%] max-w-[0.6rem] "
                  icon={faAngleRight}
                />
                <span>
                  Successfully collaborated with over 12 clients, demonstrating
                  expertise in building mobile applications. Proficient in REST
                  APIs, MySQL, Node.js, and Firebase, I've delivered robust and
                  scalable solutions, ensuring seamless data integration and
                  real-time functionality.
                </span>
              </li>
            )}
          </ul>
        </div>
      </div>

      <div className=" flex flex-col justify-center items-center md:grid grid-cols-2 gap-10 mt-10 relative md:w-[90%] p-0 ">
        <Link href="https://x.com/DhravyaShah/status/1727344157839020041?s=20">
          <div className="relative aspect-video rounded-lg shadow-xl md:-rotate-1">
            <img
              src="assets/hackathons/hackprinceton.png"
              className=" object-cover aspect-video inset-0 opacity-50 transition duration-300 ease-in-out rounded-lg"
              alt="Winner of HackPrinceton "
            />
            <div className="absolute top-5 left-5 right-5 h-full">
              {" "}
              <h1 className=" text-xl text-white font-bold">
                #1 Winner at Princeton (Vibewire Track)
              </h1>
              <div className="absolute flex justify-center items-center  bottom-10 right-0 rounded-full h-8 w-8  bg-white">
                <FontAwesomeIcon icon={faPlay} className="text-blue w-3  " />
              </div>
            </div>
          </div>{" "}
        </Link>
        <Link
          href={"https://x.com/DhravyaShah/status/1719719235264602256?s=20"}
        >
          {" "}
          <div className="relative w-full h-full aspect-video rounded-lg shadow-xl md:rotate-1">
            <img
              src="assets/hackathons/calhacks1.png"
              className=" object-cover aspect-video inset-0 opacity-50 transition duration-300 ease-in-out rounded-lg "
              alt="Winner of CalHacks"
            />
            <div className="absolute top-5 left-5 right-5 h-full">
              {" "}
              <h1 className=" text-xl text-white font-bold">
                #3 Winner at Calhacks (MindsDB)
              </h1>
              <div className="absolute flex justify-center items-center  bottom-10 right-0 rounded-full h-8 w-8  bg-white">
                <FontAwesomeIcon icon={faPlay} className="text-blue  w-3  " />
              </div>
            </div>
          </div>
        </Link>
        <Link href={"https://devpost.com/software/flow-tz1nhp"}>
          {" "}
          <div className="relative aspect-video rounded-lg shadow-xl md:-rotate-1">
            <img
              src="assets/hackathons/masseyhacks.png"
              className=" object-cover aspect-video inset-0 opacity-50 transition duration-300 ease-in-out rounded-lg"
              alt="Winner of Massey Hacks"
            />
            <div className="absolute top-5 left-5 right-5 h-full">
              {" "}
              <h1 className=" text-xl text-white font-bold">
                #1 Winner at Massey Hacks
              </h1>
              <div className="absolute flex justify-center items-center  bottom-10 right-0 rounded-full h-8 w-8  bg-white">
                <FontAwesomeIcon icon={faPlay} className="text-blue  w-3  " />
              </div>
            </div>
          </div>{" "}
        </Link>
        <Link
          href={
            "https://www.linkedin.com/posts/dhanush-vardhan-30bb881b0_hackathons-pinnacle-activity-6819683743624642560-d2ga?utm_source=share&utm_medium=member_desktop"
          }
        >
          <div className="relative aspect-video rounded-lg shadow-xl md:rotate-1">
            <img
              src="assets/hackathons/pinnacle.png"
              className=" object-cover aspect-video inset-0 opacity-50 transition duration-300 ease-in-out rounded-lg"
              alt="Participant Pinnacle 2023"
            />
            <div className="absolute top-5 left-5 right-5 h-full">
              {" "}
              <h1 className=" text-xl text-white font-bold">
                Invited to Pinnacle (Olympics of Hackathons)
              </h1>
              <div className="absolute flex justify-center items-center  bottom-10 right-0 rounded-full h-8 w-8  bg-white">
                <FontAwesomeIcon icon={faPlay} className="text-blue w-3   " />
              </div>
            </div>
          </div>{" "}
        </Link>
      </div>
    </div>
  );
}
