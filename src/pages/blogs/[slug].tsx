// pages/posts/[slug].tsx
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Markdown from "markdown-to-jsx";
import { GetStaticProps, GetStaticPaths } from "next";
import { PostMetadata } from "../../../blogMethods/blogType"; // Adjust the import path as necessary
import { CustomH1 } from "../../components/customH1";
import { faShare } from "@fortawesome/free-solid-svg-icons";
import {
  faInstagram,
  faGithub,
  faLinkedin,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import BlurredBackground from "../../components/blurredBack";
import Link from "next/link";
// Assume getPostMetadata is a synchronous function. If it's async, you should await it.

export const getStaticPaths: GetStaticPaths = async () => {
  const { getPostMetadata } = await import("../../../blogMethods/readFile");

  const posts = getPostMetadata();
  const paths = posts.map((post: { slug: any }) => ({
    params: { slug: post.slug },
  }));

  return {
    paths,
    fallback: false, // can also be true or 'blocking'
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const slug = params?.slug as string;
  const filePath = path.join(process.cwd(), "posts/", `${slug}.md`);
  const content = fs.readFileSync(filePath, "utf8");
  const matterResult = matter(content);

  return {
    props: {
      post: {
        content: matterResult.content,
        data: matterResult.data,
      },
    },
  };
};

type PostPageProps = {
  post: {
    content: string;
    data: {
      title: string;
      date: string;
      // add other frontmatter data as needed
    };
  };
};

const PostPage: React.FC<PostPageProps> = ({ post }) => {
  return (
    <div className="relative min-h-screen">
      <BlurredBackground />

      <div className="w-fulll relative z-10">
        <div className=" flex flex-col space-y-5  w-full px-12 md:px-24    z-20  pt-10 md:pt-20">
          <h1 className="text-[40px] mt-2 font-bold text-blue ">
            {post.data.title}
          </h1>{" "}
          <div className="flex flex-col md:flex-row  w-full space-y-5 md:space-y-0 justify-between mb-1 ">
            <div className="text-xs text-slate-500 uppercase space-x-5">
              <span className="text-sky-500">—</span>
              <time dateTime="2023-11-16T00:00:00.000Z">Nov 16, 2023</time>
              <span className="text-slate-400 dark:text-slate-600">·</span>4 Min
              read
            </div>
            <ul className=" inline-flex space-x-5 md:space-x-10">
              {/* Twitter */}

              {/* Facebook */}
              <li>
                <Link
                  aria-label="Dhanush Vardhan Github"
                  href={"https://github.com/dhanush17-tech"}
                >
                  <FontAwesomeIcon
                    icon={faGithub}
                    className="text-white/50 text-xl"
                  />
                </Link>
              </li>
              {/* Share */}
              <li>
                <Link href={"https://twitter.com/geeky_dan"}>
                  {" "}
                  <FontAwesomeIcon
                    icon={faXTwitter}
                    className="text-white/50 text-xl"
                  />{" "}
                </Link>
              </li>
              <button>
                {" "}
                <li>
                  <FontAwesomeIcon
                    icon={faShare}
                    className="text-white/50 text-xl"
                  />
                </li>
              </button>
            </ul>
          </div>
          <div className="my-12 text-start "></div>
          <article className="prose  prose-a:text-white  text-white/60 prose-headings:text-blue prose-h3:text-slate-400 prose-img:rounded-lg prose-strong:text-white  prose-code:text-white prose-code:before:inset-0 prose-code:before:bg-white/50">
            <Markdown>{post.content}</Markdown>
          </article>
        </div>
      </div>
    </div>
  );
};

export default PostPage;
