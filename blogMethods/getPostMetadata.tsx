import fs from "fs";
import matter from "gray-matter";
import path from "path";

import { PostMetadata } from "./blogType";

const getPostMetadata = (): PostMetadata[] => {
 const postsDirectory = path.join(process.cwd(), "posts");
 const filenames = fs.readdirSync(postsDirectory);
 const posts = filenames
   .filter((file) => file.endsWith(".md"))
   .map((fileName) => {
     const filePath = path.join(postsDirectory, fileName);
     const fileContents = fs.readFileSync(filePath, "utf8");
     const matterResult = matter(fileContents);

     return {
       title: matterResult.data.title,
       date: matterResult.data.date,
       subtitle: matterResult.data.subtitle,
       slug: fileName.replace(".md", ""),
       imgUrl: matterResult.data.imgUrl,
     };
   });

  return posts;
};

export default getPostMetadata;
