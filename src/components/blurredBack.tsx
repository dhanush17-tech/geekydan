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
    </div>
  );
}
