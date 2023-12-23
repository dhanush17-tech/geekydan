import React, { useState, useEffect } from "react";

const titles = ["Mobile App Dev", "Programmer", "UI/UX Designer"];

const Typewriter = () => {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [blink, setBlink] = useState(true);
  const [reverse, setReverse] = useState(false);

  // Typing effect
  useEffect(() => {
    if (subIndex === titles[index].length + 1 && !reverse) {
      setReverse(true);
      return;
    }

    if (subIndex === 0 && reverse) {
      setReverse(false);
      setIndex((prev) => (prev + 1) % titles.length);
      return;
    }

    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (reverse ? -1 : 1));
    }, Math.max(reverse ? 75 : subIndex === titles[index].length ? 1000 : 150, parseInt((Math.random() * 350).toString())));

    return () => clearTimeout(timeout);
  }, [subIndex, index, reverse]);

  // Blinking cursor effect
  useEffect(() => {
    const timeout2 = setTimeout(() => {
      setBlink((prev) => !prev);
    }, 500);
    return () => clearTimeout(timeout2);
  }, [blink]);

  return (
    <span className="typewriter-text  text-4xl md:text-6xl lg:text-[4.4rem] font-extra-bold text-white leading-none relative before:absolute before:inset-x-0 before:bottom-0 md:before:bottom-2 lg:before:bottom-2  before:block before:w-[90%] before:h-[14px] before:bg-blue before:bg-opacity-60 ">
      {`${titles[index].substring(0, subIndex)}`}
      <span className="typewriter-cursor">{blink ? "|" : " "}</span>
    </span>
  );
};

export default Typewriter;
