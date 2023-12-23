import { AppProps } from "next/app";
import "../styles/globals.css";
import "../styles/typewritter.css";
import BlurredBackground from "../components/blurredBack";
import NavBar from "../components/navbar";
import HomePage from "../components/home";
import AboutMe from "../components/aboutme";
import Experience from "../components/experience";
import MyProjects from "../components/projects";
import { Analytics } from "@vercel/analytics/react";

import { Rubik } from "next/font/google";
import Mentorship from "../components/mentorship";
import Contact from "../components/contactMe";
import Footer from "../components/footer";
import Blogs from "../components/blogs";
import { Head } from "next/document";

const rubik = Rubik({ subsets: ["latin"] });

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      {" "}
      <Head>
        <title>Dhanush Vardhan</title>{" "}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@geeky_dan" />
        <meta name="twitter:title" content="Dhanush Vardhan" />
        <meta
          name="twitter:description"
          content="18 y/o self taught flutter dev • full time indie hacker 👨‍💻•  freelancer(helping startups soar) 🚀🚀."
        />
        <meta
          name="twitter:image"
          content="https://www.geekydan.dev/assets/memoji.png"
        />
        <meta
          name="description"
          content="Dhanush Vardhan - Mobile App Developer, 5+ Hackathon Winner, and Tech Enthusiast. Discover my journey in programming, networking, and continuous learning."
        />
        <meta
          name="keywords"
          content="Dhanush Vardhan, Mobile App Development, Hackathon, Programming, Technology, Learning, Networking"
        />
        <link rel="canonical" href="http://www.geekydan.dev/" />
      </Head>
      <Analytics />
      <div
        className={`relative min-h-screen bg-backgroundColor ${rubik.style}`}
      >
        {/* BlurredBackground as the base layer for the entire application */}
        <BlurredBackground />
        {/* The main content of the app */}
        <main className="relative z-10">
          {/* Your page content */}
          <Component {...pageProps} />
        </main>

        {/* Other components like NavBar, Footer, etc. */}
        {/* Make sure they have a higher z-index if needed */}
      </div>
    </>
  );
}

export default MyApp;
