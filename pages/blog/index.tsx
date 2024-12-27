import Head from "next/head";
import Navigation from "../../components/Navigation";
import Markdown from "react-markdown";
import Link from "next/link";

export default function Blog(props: { posts: any[] }) {
  return (
    <div>
      <Head>
        <title>Filip Wachowiak</title>
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/images/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/images/favicon-16x16.png"
        />
        <meta
          name="description"
          content="Filip Wachowiak portfolio website with quick overview of skills, projects and work experience."
        />
      </Head>
      <Navigation />
      <main className="font-light font-body pt-14 lg:pt-28">
        <h1 className="text-4xl font-display font-bold text-center">Blog</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 px-4 py-12">
          {props.posts.map((post) => {
            return (
              <Link href={`/blog/${post.slug}`} key={post.slug}>
                <a className="block rounded-lg p-4 bg-seashell shadow-md">
                  <h2>{post.title}</h2>
                  <p>{post.subtitle}</p>
                </a>
              </Link>
            );
          })}
        </div>
      </main>
    </div>
  );
}

export const getStaticProps = async () => {
  const fs = require("node:fs");
  const path = require("node:path");

  const postsDirectory = path.join(process.cwd(), "data/posts");
  const files = fs.readdirSync(postsDirectory);

  const posts = files.map((fileName) => {
    const slug = fileName.replace(".md", "");
    const filePath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(filePath, "utf8");
    // ---
    // title: Position absolute overflow
    // subtitle: How to make an element scrollable when it has position absolute and overflow hidden
    // ---
    const title = fileContents.split("\n")[1].replace("title: ", "");
    const subtitle = fileContents.split("\n")[2].replace("subtitle: ", "");

    return {
      slug,
      title,
      subtitle,
    };
  });
  return {
    props: {
      posts,
    },
  };
};
