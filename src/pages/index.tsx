// Assuming Main is in a file like components/Main.tsx

import AboutMe from "../components/aboutme";
import Experience from "../components/experience";
import MyProjects from "../components/projects";
import HomePage from "../components/home";
import BlurredBackground from "../components/blurredBack";
import Mentorship from "../components/mentorship";
import Contact from "../components/contactMe";
import { PostMetadata } from "../../blogMethods/blogType"; // Adjust the import path as necessary
import Blogs from "../components/blogs";
import { GetServerSideProps } from "next";

export const getServerSideProps: GetServerSideProps = async () => {
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
    <div className="flex flex-col min-h-screen">
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
