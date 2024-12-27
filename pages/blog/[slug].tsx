import Head from "next/head";
import Navigation from "../../components/Navigation";
import Markdown from "react-markdown";

export default function BlogPost(props: { title: string; content: string }) {
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
        <h1 className="text-4xl font-display font-bold text-center">
          {props.title}
        </h1>
        <Markdown>{props.content}</Markdown>
      </main>
    </div>
  );
}

export const getStaticProps = async ({
  params,
}: {
  params: { slug: string };
}) => {
  const fs = require("node:fs");
  const path = require("node:path");

  const postsDirectory = path.join(process.cwd(), "data/posts");
  const post = fs.readFileSync(
    path.join(postsDirectory, `${params.slug}.md`),
    "utf8"
  );

  const title = post.split("\n")[1].replace("title: ", "");
  const content = post.split("\n---")[1];

  return {
    props: {
      title,
      content,
    },
  };
};

export const getStaticPaths = async () => {
  const fs = require("node:fs");
  const path = require("node:path");

  const postsDirectory = path.join(process.cwd(), "data/posts");
  const files = fs.readdirSync(postsDirectory);

  return {
    paths: files.map((file) => ({
      params: { slug: file.replace(".md", "") },
    })),
    fallback: false,
  };
};
