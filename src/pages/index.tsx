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
import Head from "next/head";
import SEO from "../components/seo";

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

const Main = ({ posts }: MainProps) => {
  return (
    <>
      <SEO
        title="Dhanush Vardhan"
        description="Dhanush Vardhan - Mobile App Developer, 5+ Hackathon Winner, and Tech Enthusiast."
        canonicalUrl="http://www.geekydan.dev/"
        ogImageUrl="http://www.geekydan.dev/assets/me.jpg"
      />
      <div className="flex flex-col min-h-screen">
        <Head>
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
          <script
            async
            src="https://www.googletagmanager.com/gtag/js?id=G-EW1YXYND70"
          ></script>
          <script
            dangerouslySetInnerHTML={{
              __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-EW1YXYND70', {
            page_path: window.location.pathname,
          });
        `,
            }}
          />
        </Head>
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
    </>
  );
};

export default Main;
