import React from "react";
import BaseHeading from "../base/BaseHeading";
import Project from "../Project";

export default function ProjectsSection({ projects }) {
  return (
    <div>
      <BaseHeading className="mb-16 text-center">Personal projects</BaseHeading>
      <div className="grid items-start grid-cols-1 gap-12 xl:grid-cols-2">
        {projects.map((project) => {
          const {
            video_url,
            poster_url,
            name,
            description,
            technologies,
            github,
            link,
          } = project;
          return (
            <Project
              key={name}
              video={video_url}
              poster={poster_url}
              name={name}
              description={description}
              technologies={technologies}
              github={github}
              link={link}
            />
          );
        })}
      </div>
    </div>
  );
}
