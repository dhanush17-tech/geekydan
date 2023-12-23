import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import Contact from "../components/contactMe";
import BlurredBackground from "../components/blurredBack";
import HomePage from "../components/home";

import AboutMe from "../components/aboutme";
import Experience from "../components/experience";
import MyProjects from "../components/projects";
import Mentorship from "../components/mentorship";
import Blogs from "../components/blogs";
import { PostMetadata } from "../../blogMethods/blogType";

export const getStaticProps = async () => {
  const { getPostMetadata } = await import("../../blogMethods/readFile");

  const posts: PostMetadata[] = getPostMetadata(); // Call your server-side function here
  return {
    props: {
      posts,
    },
  };
};

type MainProps = {
  posts: PostMetadata[];
};

declare global {
  interface Window {
    dataLayer: any[];
    gtag: (...args: any[]) => void;
  }
}

useEffect(() => {
  window.dataLayer = window.dataLayer || [];
  window.gtag = function () {
    window.dataLayer.push(arguments);
  };
  window.gtag("js", new Date());
  window.gtag("config", "G-EW1YXYND70");
}, []);

const Main = ({ posts }: MainProps) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Helmet>
        <title>Dhanush Vardhan</title>
        <meta
          name="description"
          content="Dhanush Vardhan - Mobile App Developer, 5+ Hackathon Winner, and Tech Enthusiast. Discover my journey in programming, networking, and continuous learning."
        />
        <meta
          name="keywords"
          content="Dhanush Vardhan, Mobile App Development, Hackathon, Programming, Technology, Learning, Networking"
        />
        <link rel="canonical" href="http://www.yourdomain.com/" />
      </Helmet>

      <main className="flex-grow">
        <BlurredBackground />
        <div className="flex-grow z-10 relative">
          <HomePage />
          <AboutMe />
          <Experience />
          <MyProjects />
          <Blogs posts={posts} />
          <Mentorship />
          <Contact />
        </div>
      </main>
    </div>
  );
};

export default Main;
