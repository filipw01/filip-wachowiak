import { useState, useRef } from "react";
import Head from "next/head";
import Navigation from "../components/Navigation";
import HeroSection from "../components/sections/HeroSection";
import AboutSection from "../components/sections/AboutSection";
import ProjectsSection from "../components/sections/ProjectsSection";
import WorkSection from "../components/sections/WorkSection";
import TearDown from "../components/TearDown";
import TearUp from "../components/TearUp";
import Container from "../components/base/Container";
import { useElementBoundingRect } from "../hooks/useElementBoundingRect";

export default function Home(props) {
  const about = useRef(null);
  const project = useRef(null);
  const work = useRef(null);
  const [tearBoundingRect, setTearBoundingRect] = useState({ y: 0 });
  const {
    elementRef,
    boundingRect,
    recalculateRect,
  } = useElementBoundingRect(() => setTearBoundingRect(boundingRect.current));
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
      </Head>
      <Navigation
        navigationElements={[
          { name: "About me", ref: about.current },
          { name: "Personal projects", ref: project.current },
          { name: "Work experience", ref: work.current },
        ]}
      />
      <main className="font-light font-body">
        <TearDown>
          <HeroSection nextSectionRef={about.current} />
          <AboutSection
            ref={about}
            skills={props.skills}
            languages={props.languages}
          />
        </TearDown>
        <div className="pt-48 pb-64 -my-32 bg-white " ref={elementRef}>
          <Container ref={project}>
            <ProjectsSection projects={props.projects} />
          </Container>
        </div>
        <TearUp
          tearBoundingRect={tearBoundingRect}
          recalculateRect={recalculateRect}
        >
          <Container className="pt-16">
            <WorkSection work={props.work} />
          </Container>
        </TearUp>
        <div ref={work}></div>
      </main>

      <footer className="relative z-10 bg-seashell">
        <Container>
          <div className="flex flex-wrap justify-center py-16 text-xl"></div>
        </Container>
      </footer>
    </div>
  );
}

export async function getStaticProps() {
  const { skills, languages, projects, work, timeline } = await import(
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
