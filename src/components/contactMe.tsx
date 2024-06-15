import { useEffect } from "react";
import Footer from "./footer";
import Link from "next/link";
import { BackgroundBeams } from "./elements/backgroundBeams";

// components/Footer.js
export default function Contact() {
  const year = new Date().getFullYear(); // Dynamic year for the copyright notice
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

    const links = document.querySelectorAll(".contact");
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
      <div id="contact" className="  contact relative items-start justify-center px-10 mt-4 md:mt-20 mb-10 md:px-36 space-y-5  overflow-hidden-container ">
        <BackgroundBeams className="absolute h-screen w-screen" />
        <Link href="mailto:dhanush.kalaiselvan@gmail.com">
        
 
          <div className="w-full mt-10 flex relative flex-row justify-between bg-[radial-gradient(145.05%_100%_at_50%_0%,#1D2B41_0%,#0B1627_57.38%,#142133_88.16%)] p-6 ring-1 ring-white/[0.15]  shadow-xl rounded-lg px-10 md:px-20  py-10">
            <div className="">
              <p className="text-sm font-normal tracking-wide text-white">
                What's Next?
              </p>
              <h3 className="text-xl sm:text-xl md:text-2xl mt-2 font-bold text-white">
                Get In Touch
              </h3>
              <p className="mt-2 text-gray-400">
                Whether you have a question or just want to say hi, I’ll try my
                <br /> best to get back to you
              </p>
            </div>
            <p className="text-4xl sm:text-xl md:text-6xl absolute  top-10 right-10 md:right-24 text-end">
              🤝
            </p>
          </div>
        </Link>
        <Footer />
      </div>

      {"  "}
      {/* Adjust max width as needed */}

      {/* Right column contents */}
    </>
  );
}
