import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import Navigation, { indexSections } from "../../components/Navigation";
import Head from "next/head";
import Link from "next/link";

export default function TestPage({
  mdxSource,
  minutesToRead,
}: {
  mdxSource: MDXRemoteSerializeResult;
  minutesToRead: number;
}) {
  return (
    <>
      <Head>
        <title>{`${mdxSource.frontmatter.title} | Filip Wachowiak`}</title>
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
          content={mdxSource.frontmatter.subtitle as string}
        />
      </Head>
      <Navigation />
      <main className="blog-post-page font-light font-body pt-14 lg:pt-28 max-w-screen-md mx-auto px-4 pb-10">
        <div className="my-9">
          <div className="headline wrapper flex gap-2 items-center justify-center">
            <p
              className="text-sm text-gray"
              // Uses locale which is not available on the server
              suppressHydrationWarning
            >
              {new Date(
                mdxSource.frontmatter.date as string
              ).toLocaleDateString()}
            </p>
            <div className="w-1 h-1 bg-gray rounded-full" />
            <p className="text-sm text-gray">{minutesToRead} min read</p>
          </div>
          <h1>{mdxSource.frontmatter.title}</h1>
        </div>
        <div className="blog-post-wrapper">
          <MDXRemote {...mdxSource} />
        </div>
      </main>
      <footer className="flex gap-4 px-4 py-8 max-w-screen-md mx-auto justify-between items-center text-sm">
        <p className="text-gray">
          © {new Date().getFullYear()} Filip Wachowiak
        </p>
        <div className="flex gap-3">
          {[
            { name: "About me", id: indexSections.about, url: "/" },
            { name: "Projects", id: indexSections.project, url: "/" },
            { name: "Work experience", id: indexSections.work, url: "/" },
            { name: "Blog", url: "/blog" },
          ].map((link) => {
            return (
              <Link
                key={link.name}
                href={`${link.url}${link.id ? `#${link.id}` : ""}`}
              >
                <a className="text-red underline font-bold">{link.name}</a>
              </Link>
            );
          })}
        </div>
      </footer>
    </>
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
  const minutesToRead = Math.round(post.split(" ").length / 250);
  const mdxSource = await serialize(post, { parseFrontmatter: true });

  return {
    props: {
      mdxSource,
      minutesToRead,
    },
  };
};

export const getStaticPaths = async () => {
  const fs = require("node:fs");
  const path = require("node:path");

  const postsDirectory = path.join(process.cwd(), "data/posts");
  const files = fs.readdirSync(postsDirectory);

  return {
    paths: files.map((file: string) => ({
      params: { slug: file.replace(".md", "") },
    })),
    fallback: false,
  };
};
