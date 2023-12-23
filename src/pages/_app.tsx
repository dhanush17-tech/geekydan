import { AppProps } from "next/app";
import "../styles/globals.css";
import "../styles/typewritter.css";
import BlurredBackground from "../components/blurredBack";
import NavBar from "../components/navbar";
import HomePage from "../components/home";
import AboutMe from "../components/aboutme";
import Experience from "../components/experience";
import MyProjects from "../components/projects";

import { Rubik } from "next/font/google";
import Mentorship from "../components/mentorship";
import Contact from "../components/contactMe";
import Footer from "../components/footer";
import Blogs from "../components/blogs";

const rubik = Rubik({ subsets: ["latin"] });

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className={`relative min-h-screen bg-backgroundColor ${rubik.style}`}>
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
  );
}

export default MyApp;
