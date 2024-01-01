import React, { useState, useEffect } from "react";
import RollingLetters from "./rollingLetter";

const RollingTextAnimation = () => {
  const [showSecondText, setShowSecondText] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSecondText(!showSecondText);
    }, 4000); // Duration of the first text's animation

    return () => clearTimeout(timer);
  }, [showSecondText]);

  return (
    <div className="rolling-text-container   w-full pl-3">
      <div className="animate-roll   top-0 text-4xl md:text-6xl lg:text-[4.4rem] font-extra-bold text-white leading-none relative before:absolute before:inset-x-0 before:bottom-0 md:before:bottom-2 lg:before:bottom-2  before:block before:w-[100%] before:h-[14px] before:bg-blue before:bg-opacity-60 ">
        {!showSecondText && <RollingLetters text="Mobile App Dev" />}
      </div>
      {showSecondText && (
        <div className="animate-roll-second   top-0 text-4xl md:text-6xl lg:text-[4.4rem] font-extra-bold text-white leading-none relative before:absolute before:inset-x-0 before:bottom-0 md:before:bottom-2 lg:before:bottom-2  before:block before:w-[100%] before:h-[14px] before:bg-blue before:bg-opacity-60 ">
          <RollingLetters text="UI/UX Desginer" />
        </div>
      )}
    </div>
  );
};

export default RollingTextAnimation;
