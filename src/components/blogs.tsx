import Link from "next/link";
import { GetServerSideProps } from "next";
import { PostMetadata } from "../../blogMethods/blogType";
import { useEffect } from "react";
import Image from "next/image";

type Props = {
  posts: PostMetadata[];
};

export default function Blogs({ posts }: Props) {
  // No useEffect needed here as we're doing server-side rendering

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

    const links = document.querySelectorAll(".blogs");
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
      {/* Container for the blog section */}
      <div id="blogs" className=" mx-auto my- px-10 md:px-24">
        <div className="flex justify-start space-x-5 md:w-[85%]">
          <h1 className="text-2xl  md:text-md lg:text-4xl text-white flex  ">
            {"04.  "}
            <span className="text-blue ml-2">Blogs</span>
          </h1>
          <div className="h-[3px] bg-gradient-to-tr from-slate-600 to-transparent w-[30%] self-center"></div>
        </div>
        {/* Blog list */}
        <BlogList posts={posts} />
      </div>
    </>
  );
}

export function BlogList({ posts }: { posts: PostMetadata[] }) {
  return (
    <div className="space-y-10 mt-10">
      {posts.map((post, index) => (
        <div
          key={post.imgUrl + index + index}
          className="flex flex-col space-y-5"
        >
          <BlogCard key={post.imgUrl + index} post={post} />
          {index === posts.length - 1 ? null : (
            <div
              key={post.subtitle + index}
              className="width-full h-[1px] rounded-lg  custom-radial-gradient"
            ></div>
          )}{" "}
        </div>
      ))}
    </div>
  );
}
export function BlogCard({ post }: { post: PostMetadata }) {
  return (
    <Link key={post.slug + post.title} href={`/blogs/${post.slug}`}>
      <div className="blogs flex flex-row md:flex-row md:items-center w-full rounded-lg overflow-hidden ">
        <div className="max-w-[100px]"></div>
        <Image
          width={100}
          height={100}
          src={post.imgUrl}
          alt={post.title}
          className="object-cover h-full w-20 md:w-36 rounded-lg"
        />
        {/* Right side with text content */}
        <div className="flex-1 ml-5 w-full text-blue">
          <p className="text-xs font-semibold uppercase tracking-wide">
            {post.date}
          </p>
          <h3 className="text-lg sm:text-base md:text-xl mt-2 font-bold text-white">
            {post.title}
          </h3>
          <p className="mt-2 text-gray-400 text-xs  ">{post.subtitle}</p>
          <span className="inline-flex text-xs items-center mt-2 text-blue/50 hover:text-blue-500">
            Read more
            {/* SVG icon */}
          </span>
        </div>
      </div>
    </Link>
  );
}
