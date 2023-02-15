import fs from "fs";
import path from "path";
import matter from "gray-matter";
import LandingSection from "../components/LandingSection";
import PostView from "../components/PostView";
import { Button } from "flowbite-react";
import HomePageComponentLeft from "../components/HomePageComponentLeft";
import HomePageComponentRight from "../components/HomePageComponentRight";

export default function Home({ posts }) {
  return (
    <div className="bg-white">
      <LandingSection />

      <div className="w-full flex justify-center items-center text-center flex-col">
        <p className="text-xl w-3/4 mt-8 mb-3">
          Felu aims to teach coding in a more stimulating, fun way. Rather than
          watching courses, reading tutorials are skipping your lectures, we
          teach coding through stories here. See the demo blow for how we do
          things around here.
        </p>
        <Button className="w-32" href="/demo">
          See the demo{" "}
        </Button>
      </div>
      
      <div className="mx-auto w-full pl-14 pr-14 container mt-10">
        <div className="">
          <p className="sub-text text-gray-900">Read</p>
          <h2>The Blog</h2>
          <div className="border-top"></div>
        </div>

        <div className="">
          {posts.map((post, index) => (
            <PostView post={post} index={index} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
}

export const getStaticProps = async () => {
  const files = fs.readdirSync(path.join("posts"));
  const posts = files.map((filename) => {
    const markdownWithMeta = fs.readFileSync(
      path.join("posts", filename),
      "utf-8"
    );
    const { data: frontMatter } = matter(markdownWithMeta);
    return {
      frontMatter,
      slug: filename.split(".")[0],
    };
  });
  return {
    props: {
      posts,
    },
  };
};
