"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faGithub,
  faLinkedin,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons"; // Make sure to import the icon
import {
  GlowingStarsBackgroundCard,
  GlowingStarsDescription,
  GlowingStarsTitle,
} from "./glowing-stars";

export default function BlurredBackground() {
  return (
    <div className="fixed inset-0 w-full h-full backdrop-filter backdrop-blur-lg bg-opacity-30 z-[-1]">
      <GlowingStarsBackgroundCard className="collapse md:visible  "></GlowingStarsBackgroundCard>
      <div className="shadow-glow rounded-full w-0 h-0 place-self-center absolute left-[50vw] top-[0vw]"></div>
      <div className="shadow-glow opacity-50 rounded-full w-0 h-0 place-self-center absolute left-[0vw] bottom-[0vw]"></div>
      <div className="shadow-glow opacity-50 rounded-full w-0 h-0 place-self-center absolute right-[-14vw] top-[40vw]"></div>

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
    </div>
  );
}
