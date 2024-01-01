import React from "react";

const RollingLetters = ({ text }: any) => {
  // Split the text into words, then map each word
  const words = text.split(" ").map((word: any, wordIndex: any) => (
    <React.Fragment key={wordIndex}>
      {/* Split each word into letters */}
      {word.split("").map((letter: any, letterIndex: any) => (
        <span
          key={letterIndex}
          className="letter"
          style={{ animationDelay: `${wordIndex * 0.5 + letterIndex * 0.1}s` }}
        >
          {letter}
        </span>
      ))}
      {/* Add a space after each word, except the last one */}
      {wordIndex < text.split(" ").length - 1 && (
        <span className="pl-1"> </span>
      )}
    </React.Fragment>
  ));

  return <div className="rolling-letters-container">{words}</div>;
};

export default RollingLetters;
