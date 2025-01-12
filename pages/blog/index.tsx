import Head from "next/head";
import Navigation from "../../components/Navigation";
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
        <h1 className="text-4xl font-display font-bold text-center mt-4">
          Blog
        </h1>
        <div className="flex flex-col gap-4 px-4 py-12 max-w-screen-md mx-auto">
          {props.posts.map((post) => {
            return (
              <Link href={`/blog/${post.slug}`} key={post.slug}>
                <a className="block rounded-lg p-4 bg-lightSeashell shadow-lg flex flex-col gap-1 border border-red">
                  <div className="flex gap-2 items-center">
                    <p
                      className="text-sm text-gray"
                      // Uses locale which is not available on the server
                      suppressHydrationWarning
                    >
                      {new Date(post.date).toLocaleDateString()}
                    </p>
                    <div className="w-1 h-1 bg-gray rounded-full" />
                    <p className="text-sm text-gray">
                      {post.minutesToRead} min read
                    </p>
                  </div>
                  <h2 className="text-xl font-bold">{post.title}</h2>
                  <p className="text-gray">{post.subtitle}</p>
                  <p className="font-bold text-red mt-2 text-right">
                    Read more
                  </p>
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

  const posts = files
    .filter((fileName: string) => fileName.endsWith(".md"))
    .map((fileName: string) => {
      const slug = fileName.replace(".md", "");
      const filePath = path.join(postsDirectory, fileName);
      const fileContents = fs.readFileSync(filePath, "utf8");
      // ---
      // title: Position absolute overflow
      // subtitle: How to make an element scrollable when it has position absolute and overflow hidden
      // date: 2025-01-11
      // ---
      const title = fileContents.split("\n")[1].replace("title: ", "");
      const subtitle = fileContents.split("\n")[2].replace("subtitle: ", "");
      const date = fileContents.split("\n")[3].replace("date: ", "");
      const content = fileContents.split("\n").slice(4).join("\n");
      const minutesToRead = Math.round(content.split(" ").length / 250);

      return {
        slug,
        title,
        subtitle,
        date,
        minutesToRead,
      };
    });
  return {
    props: {
      posts,
    },
  };
};
