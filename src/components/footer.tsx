import { Roboto_Mono } from "next/font/google";
const roboto = Roboto_Mono({ subsets: ["latin"] });

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faGithub,
  faLinkedin,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons"; // components/Footer.js
import { GlowingStarsBackgroundCard } from "./glowing-stars";
import { BackgroundBeams } from "./backgroundBeams";
export default function Footer() {
  const year = new Date().getFullYear(); // Dynamic year for the copyright notice

  return (
    // <>
    //   {" "}
    //   <BackgroundBeams className="h-full" />
    //   <BackgroundBeams className="h-full" />{" "}
    //   <BackgroundBeams className="h-full" />
    //   <div className="relative w-screen flex flex-col items-center justify-center px-10 my-24 md:px-36 space-y-5 antialiased">
    //     <div
    //       className={`w-full relative space-y-5 text text-center text-white ${roboto.className} font-bold text-xl sm:text-xl md:text-2xl `}
    //     >
    //       Dhanush Vardhan
    //     </div>
    //     <div className="flex flex-row space-x-10">
    //       <FontAwesomeIcon icon={faGithub} className="text-slate-400 text-xl" />
    //       <FontAwesomeIcon
    //         icon={faLinkedin}
    //         className="text-slate-400 text-xl"
    //       />
    //       <FontAwesomeIcon
    //         icon={faXTwitter}
    //         className="text-slate-400 text-xl"
    //       />
    //       <FontAwesomeIcon
    //         icon={faInstagram}
    //         className="text-slate-400 text-xl"
    //       />
    //     </div>
    //     <BackgroundBeams />
    //   </div>
    //   {"  "}
    //   {/* Adjust max width as needed */}
    //   {/* Right column contents */}
    // </>

    <div className="w-full relative flex flex-col items-center justify-center antialiased overflow-hidden-container ">
      <div className="max-w-2xl mx-auto p-4">
        <h1 className="relative z-10   text-xl sm:text-xl md:text-2xl text-white  bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  text-center font-bold">
          Dhanush Vardhan
        </h1>
        <div className="flex flex-row space-x-10 mt-5">
        
          <FontAwesomeIcon icon={faGithub} className="text-slate-400 text-xl" />
 
          <FontAwesomeIcon
            icon={faLinkedin}
            className="text-slate-400 text-xl"
          />
          <FontAwesomeIcon
            icon={faXTwitter}
            className="text-slate-400 text-xl"
          />
          <FontAwesomeIcon
            icon={faInstagram}
            className="text-slate-400 text-xl"
          />
        </div>
      </div>
      {/* <GlowingStarsBackgroundCard className="w-full h-full"></GlowingStarsBackgroundCard> */}
    </div>
  );
}
