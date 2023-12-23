import { faAnglesRight, faPlay } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useHasMounted } from "@react-hooks-library/core";

import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons"; // Make sure to import the icon
import { useEffect } from "react";
import Link from "next/link";

export default function MyProjects() {
  const hasMounted = useHasMounted();

  return (
    <>
      {hasMounted && (
        <>
          {" "}
          <div className="   w-screen items-start justify-center  px-10  my-24 md:px-24">
            <div className="">
              {"  "}
              {/* Adjust max width as needed */}
              <div className="flex justify-start space-x-5 md:w-[85%] mb-10 md:mb-0">
                <h1 className="text-2xl  md:text-md lg:text-4xl text-white flex  ">
                  {"03.  "}
                  <span className="text-blue font-[500] ml-2">
                    {" "}
                    Cool Projects{" "}
                  </span>
                </h1>
                <div className="h-[3px] bg-gradient-to-tr from-slate-600 to-transparent w-[30%] self-center"></div>
              </div>
              <div className="flex flex-col w-full   items-center justify-center text-white text-md mt-5 font-normal md:mt-10">
                <ProjectList />
              </div>
            </div>
          </div>
          <div className="hidden md:flex justify-center items-center  text-blue md:pr-0"></div>
          {/* Right column contents */}
        </>
      )}
    </>
  );
}

function ProjectList() {
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

    const links = document.querySelectorAll(".projects");
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
    <div
      id="projects"
      className="flex flex-col md:grid md:gap-10 w-full   gap-y-10     "
    >
      <div className="flex flex-col   md:grid grid-cols-[60%_30%] gap-10  ">
        <div
          key={"shopwise"}
          className="projects bg-white rounded-lg shadow-xl relative"
        >
          <img
            src="assets/projects/shopwise.png"
            className="object-cover inset-0 transition duration-300 ease-in-out rounded-lg bg-gray-500 "
            alt=""
          />
          <div className=" rounded-lg"></div>
          <div className="absolute p-4 bottom-0 h-full rounded-lg  bg-gradient-to-t from-gray-800 to-transparent left-0 right-0">
            <div className="absolute p-4 bottom-0   rounded-lg  left-0 right-0">
              <div className="flex flex-row justify-between">
                <h2 className="text-xl font-sans font-[500] text-blue ">
                  Shopwise
                </h2>
                <div className="flex flex-row space-x-5">
                  <Link href="https://play.google.com/store/apps/details?id=com.priceTracker.shopwise&pcampaignid=web_share">
                    <FontAwesomeIcon
                      className="text-blue text-[15px] mt-1"
                      icon={faArrowUpRightFromSquare}
                    />
                  </Link>
                  <Link href="https://github.com/dhanush17-tech/Shopwise">
                    <FontAwesomeIcon
                      className="text-blue text-[15px] mt-1"
                      icon={faGithub}
                    />
                  </Link>
                </div>
              </div>
              <p className="text-gray-400 text-sm font-normal">
                Shop for the right deals at the right time!
              </p>
            </div>
          </div>
          {/* Add more content as needed */}
        </div>
        <div className="flex flex-col justify-between space-y-5">
          <div
            key={"heartpal"}
            className="projects bg-white rounded-lg shadow-xl relative md:aspect-[13/7.5]"
          >
            <div className=" rounded-lg bg-gradient-to-lr from-white to-black"></div>
            <img
              src="assets/projects/heartpal.png"
              className="object-cover  md:aspect-[13/7.5] inset-0 transition duration-300 ease-in-out rounded-lg"
              alt=""
            />
            <div className="absolute p-4 bottom-0 h-full rounded-lg flex flex-col justify-end bg-gradient-to-t from-gray-800 to-transparent left-0 right-0">
              <div className="absolute p-4 bottom-0 left-0 right-0">
                <div className="flex flex-row justify-between">
                  <h2 className="text-xl font-sans font-[500] text-blue ">
                    HeartPal
                  </h2>
                  <div className="flex flex-row space-x-5">
                    <Link
                      href={"https://github.com/orgs/HeartPal/repositories"}
                    >
                      <FontAwesomeIcon
                        className="text-blue text-[15px] mt-1"
                        icon={faGithub}
                      />
                    </Link>
                    <Link
                      href={
                        "https://devpost.com/software/ai-heart-arrhythmia-detection"
                      }
                    >
                      <FontAwesomeIcon
                        className="text-blue text-[15px] mt-1"
                        icon={faArrowUpRightFromSquare}
                      />
                    </Link>{" "}
                  </div>
                </div>
                <p className="text-gray-400 text-sm font-normal">
                  Monitor your heart arrythemias right from your home using AI!
                </p>
              </div>
            </div>
            {/* Add more content as needed */}
          </div>

          <div
            key={"medicon"}
            className="projects bg-white rounded-lg shadow-xl relative md:aspect-[13/6.5]"
          >
            <div className="relative rounded-lg md:aspect-[13/6.5]">
              <img
                src="assets/projects/medicon.png"
                className="object-cover inset-0 w-full h-full transition duration-300 ease-in-out rounded-lg"
                alt=""
              />
              {/* Overlay */}
              <div className="absolute p-4 bottom-0 rounded-lg flex flex-col justify-end  h-full  bg-gradient-to-t from-gray-800 to-transparent left-0 right-0">
                <div className="flex flex-row justify-between">
                  <h2 className="text-xl font-sans font-[500] text-blue ">
                    MedicOn
                  </h2>
                  <div className="flex flex-row space-x-5">
                    <Link href={"https://devpost.com/software/healthpal"}>
                      <FontAwesomeIcon
                        className="text-blue text-[15px] mt-1"
                        icon={faGithub}
                      />
                    </Link>
                    <Link href={"https://github.com/dhanush17-tech/MedicOn"}>
                      <FontAwesomeIcon
                        className="text-blue text-[15px] mt-1"
                        icon={faArrowUpRightFromSquare}
                      />
                    </Link>{" "}
                  </div>
                </div>
                <p className="text-gray-400 text-sm font-normal">
                  Medicon brings medical consultations to your home!
                </p>
              </div>
            </div>
            {/* Add more content as needed */}
          </div>
        </div>
      </div>
      <div className="flex flex-col md:grid grid-cols-[40%_50%] gap-10">
        <div
          key={"blik"}
          className="projects bg-white rounded-lg shadow-xl relative md:aspect-[13/6]"
        >
          <div className=" rounded-lg bg-gradient-to-lr from-white to-black"></div>
          <img
            src="assets/projects/blik.png"
            className="object-cover  md:aspect-[13/6] inset-0 transition w-full duration-300 ease-in-out rounded-lg"
            alt=""
          />
          <div className="absolute p-4 bottom-0 h-full rounded-lg bg-gradient-to-t from-gray-800 to-transparent left-0 right-0">
            <div className="absolute flex flex-col justify-end p-4 bottom-0 left-0 right-0">
              <div className="flex flex-row justify-between">
                <h2 className="text-xl font-sans font-[500] text-blue ">
                  Blik
                </h2>
                <div className="flex flex-row space-x-5">
                  <Link
                    href={"https://github.com/orgs/CalHacks-Blik/repositories"}
                  >
                    <FontAwesomeIcon
                      className="text-blue text-[15px] mt-1"
                      icon={faGithub}
                    />
                  </Link>{" "}
                  <Link href={"https://devpost.com/software/blik"}>
                    {" "}
                    <FontAwesomeIcon
                      className="text-blue text-[15px] mt-1"
                      icon={faArrowUpRightFromSquare}
                    />
                  </Link>
                </div>
              </div>
              <p className="text-gray-400 text-sm font-normal">
                An app that predicts crypto prices using AI!
              </p>
            </div>
          </div>
          {/* Add more content as needed */}
        </div>
        <div
          key={"edcomposer"}
          className="projects bg-white rounded-lg shadow-xl  relative md:aspect-[13/4.8]"
        >
          <div className="  "></div>
          <img
            src="assets/projects/edcomposer.png"
            className="object-cover bg-blend-multiply	 md:aspect-[13/4.8] h-[100%] inset-0 transition duration-300 ease-in-out rounded-lg"
            alt=""
          />

          <div className="absolute flex flex-col rounded-lg justify-end h-full p-4 bottom-0 bg-gradient-to-t from-gray-800 to-transparent left-0 right-0">
            <div className="flex flex-row  justify-between">
              <h2 className="text-xl font-sans font-[500] text-blue ">
                EdComposer
              </h2>
              <div className="flex flex-row space-x-5 ">
                <Link href={"https://github.com/EdComposer"}>
                  <FontAwesomeIcon
                    className="text-blue text-[15px] mt-1"
                    icon={faGithub}
                  />
                </Link>
                <Link href={"https://devpost.com/software/edcomposer"}>
                  <FontAwesomeIcon
                    className="text-blue text-[15px] mt-1"
                    icon={faArrowUpRightFromSquare}
                  />
                </Link>
              </div>
            </div>
            <p className="text-gray-400 text-sm font-normal">
              AI-powered video generation tool that creates personalized
              educational content in your own language.{" "}
            </p>
          </div>
          {/* Add more content as needed */}
        </div>
      </div>
    </div>
  );
}
