import { useRef } from "react";
import Head from "next/head";
import Navigation from "../components/Navigation";
import HeroSection from "../components/sections/HeroSection";
import AboutSection from "../components/sections/AboutSection";
import ProjectsSection from "../components/sections/ProjectsSection";
import WorkSection from "../components/sections/WorkSection";
import TearDown from "../components/TearDown";
import TearUp from "../components/TearUp";
import Container from "../components/base/Container";

export type Technology = {
  name: string;
  icon: string;
};

export type Skill = { name: string; level: string; content: string };

export type Language = { name: string; level: string };

export type Project = {
  video_url: string;
  poster_url: string;
  name: string;
  description: string;
  technologies: Technology[];
  github: string;
  link: string;
};

export type Work = {
  name: string;
  logo: string;
  position: string;
  startDate: string;
  endDate: string;
  description: string;
  technologies: Technology[];
  company_url: string;
};

type Props = {
  skills: Skill[];
  languages: Language[];
  projects: Project[];
  work: Work[];
};

export default function Home(props: Props) {
  const about = useRef(null);
  const project = useRef(null);
  const work = useRef(null);

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
      <Navigation
        navigationElements={[
          { name: "About me", ref: about },
          { name: "Projects", ref: project },
          { name: "Work experience", ref: work },
        ]}
      />
      <main className="overflow-hidden font-light font-body">
        <TearDown>
          <HeroSection nextSectionRef={about} />
          <AboutSection
            ref={about}
            skills={props.skills}
            languages={props.languages}
          />
        </TearDown>
        <div className="pt-48 pb-64 -my-32 bg-white ">
          <Container ref={project}>
            <ProjectsSection projects={props.projects} />
          </Container>
        </div>
        <TearUp>
          <Container className="pt-16">
            <WorkSection work={props.work} />
          </Container>
        </TearUp>
        <div ref={work} />
      </main>

      <footer className="relative z-10 bg-seashell">
        <Container>
          <div className="flex flex-wrap justify-center py-16 text-xl" />
        </Container>
      </footer>
    </div>
  );
}

export async function getStaticProps() {
  const { skills, languages, projects, work } = await import(
    `../data/config.json`
  );
  return {
    props: {
      skills,
      languages,
      projects,
      work,
    },
  };
}
