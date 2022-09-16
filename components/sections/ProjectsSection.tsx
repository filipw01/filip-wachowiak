import React from "react";
import BaseHeading from "../base/BaseHeading";
import ProjectComponent from "../Project";
import { Project } from "../../pages";

type Props = {
  projects: Project[];
  professionalProjects: Project[];
};

export default function ProjectsSection({
  projects,
  professionalProjects,
}: Props) {
  return (
    <div>
      <SingleSection
        className="mb-12"
        title="Professional Projects"
        projects={professionalProjects}
      />
      <SingleSection title="Personal Projects" projects={projects} />
    </div>
  );
}

const SingleSection = ({
  title,
  projects,
  className,
}: {
  title: string;
  projects: Project[];
  className?: string;
}) => {
  return (
    <div className={className}>
      <BaseHeading className="mb-16 text-center">{title}</BaseHeading>
      <div className="grid items-start grid-cols-1 gap-12 xl:grid-cols-2">
        {projects.map((project) => (
          <ProjectComponent key={project.name} {...project} />
        ))}
      </div>
    </div>
  );
};
