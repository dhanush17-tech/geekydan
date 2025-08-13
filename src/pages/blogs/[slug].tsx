// pages/posts/[slug].tsx
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Markdown from "markdown-to-jsx";
import { GetStaticProps, GetStaticPaths } from "next";
import { PostMetadata } from "../../../blogMethods/blogType"; // Adjust the import path as necessary
import { faShare, faPlay, faPause } from "@fortawesome/free-solid-svg-icons";
import {
  faInstagram,
  faGithub,
  faLinkedin,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import Head from "next/head";
import BlurredBackground from "../../components/elements/blurredBack";
import { useState, useRef, useEffect } from "react";
import SEO from "../../components/seo";
// Assume getPostMetadata is a synchronous function. If it's async, you should await it.

 
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
      subtitle: string;
      slug: string;
      // add other frontmatter data as needed
    };
  };
};

const PostPage: React.FC<PostPageProps> = ({ post }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const audioRef = useRef<HTMLAudioElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);

  const togglePlayPause = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, "0")}`;
  };

  const handleTimeUpdate = () => {
    if (audioRef.current) {
      setCurrentTime(audioRef.current.currentTime);
      setDuration(audioRef.current.duration);
    }
  };

  const handleProgressClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (audioRef.current && progressRef.current) {
      const rect = progressRef.current.getBoundingClientRect();
      const percent = (e.clientX - rect.left) / rect.width;
      audioRef.current.currentTime = percent * duration;
    }
  };

  useEffect(() => {
    const audio = audioRef.current;
    if (audio) {
      audio.addEventListener("timeupdate", handleTimeUpdate);
      audio.addEventListener("loadedmetadata", handleTimeUpdate);
      return () => {
        audio.removeEventListener("timeupdate", handleTimeUpdate);
        audio.removeEventListener("loadedmetadata", handleTimeUpdate);
      };
    }
  }, []);

  return (
    <>
      <SEO
        title={post.data.title}
        description={post.data.subtitle}
        canonicalUrl={`http://www.geekydan.dev/blogs/${post.data.slug}`}
        ogImageUrl={`https://dhanush.wtf/media/n1tpa1xnye.png`}
      />
      <Head>
        <title>{post.data.title} | Dhanush Vardhan</title>
        <meta name="description" content={post.data.subtitle} />
      </Head>
      <div className="relative min-h-screen">
        <BlurredBackground />
        <div className="w-fulll relative z-10">
          <div className="flex flex-col space-y-5 w-full px-12 md:px-24 z-20 pt-10 md:pt-20">
            <div className="flex flex-col space-y-2">
              <h1 className="text-[40px] mt-2 font-bold text-blue">
                {post.data.title}
              </h1>
              <p className="text-white/60 text-lg">{post.data.subtitle}</p>
            </div>
            <div className="flex flex-col md:flex-row w-full space-y-5 md:space-y-0 justify-between mb-1">
              <div className="text-xs text-slate-500 uppercase space-x-5">
                <span className="text-sky-500">—</span>
                <time dateTime="2023-11-16T00:00:00.000Z">Nov 16, 2023</time>
                <span className="text-slate-400 dark:text-slate-600"> </span>4
                Min read
              </div>
              <ul className="inline-flex space-x-5 md:space-x-10">
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

            {post.data.title === "The Story of Devlabs 😎" && (
              <>
                <div className="flex items-center space-x-4 bg-white/5 backdrop-blur-sm p-2 rounded-lg w-fit">
                  <div className="flex-col items-center justify-center">
                    <button
                      onClick={togglePlayPause}
                      className="flex items-center justify-center w-6 h-6 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                    >
                      <FontAwesomeIcon
                        icon={isPlaying ? faPause : faPlay}
                        className="text-white text-2xl w-2"
                      />
                    </button>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-white/60 text-xs">
                      {formatTime(currentTime)}
                    </span>
                    <div
                      ref={progressRef}
                      onClick={handleProgressClick}
                      className="w-32 h-1 bg-white/20 rounded-full cursor-pointer"
                    >
                      <div
                        className="h-full bg-white/60 rounded-full transition-all"
                        style={{ width: `${(currentTime / duration) * 100}%` }}
                      />
                    </div>
                    <span className="text-white/60 text-xs">
                      {formatTime(duration)}
                    </span>
                  </div>
                </div>
                <audio ref={audioRef} src={`/audio/5.mp3`} className="hidden" />
              </>
            )}

            <article className="prose prose-a:text-white text-white/60 prose-headings:text-white prose-h3:text-slate-400 prose-img:rounded-lg prose-strong:text-white prose-code:text-white prose-code:before:inset-0 prose-code:before:bg-white/50 [&>p:first-child>img]:mt-0 [&>p:first-child>img]:mb-0">
              <Markdown>{post.content}</Markdown>
            </article>
          </div>
        </div>
      </div>
    </>
  );
};

export default PostPage;
