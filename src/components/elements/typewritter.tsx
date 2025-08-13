import React from "react";
import RotatingText from "./RotatingText";

const titles = ["Mobile App Dev", "Programmer", "UI/UX Designer"];

const Typewriter = () => {
  return (
    <RotatingText
      texts={titles}
      mainClassName="inline-block text-3xl md:text-4xl lg:text-5xl font-extra-bold text-white leading-tight px-2 py-1 bg-blue bg-opacity-20 rounded-lg"
      staggerFrom="last"
      initial={{ y: "100%" }}
      animate={{ y: 0 }}
      exit={{ y: "-120%" }}
      staggerDuration={0.025}
      splitLevelClassName="overflow-hidden"
      transition={{ type: "spring", damping: 30, stiffness: 400 }}
      rotationInterval={2000}
    />
  );
};

export default Typewriter;
