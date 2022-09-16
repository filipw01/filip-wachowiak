import React from "react";
import BaseHeading from "../base/BaseHeading";
import WorkComponent from "../Work";
import { Work } from "../../pages";

type Props = {
  work: Work[];
};

export default function WorkSection({ work }: Props) {
  return (
    <div className="max-w-4xl mx-auto">
      <BaseHeading className="mb-16 text-center">
        Professional experience
      </BaseHeading>
      <div className="work-section-grid sm:grid gap-8 items-start">
        {work.map((job) => {
          return <WorkComponent key={job.name} {...job} />;
        })}
      </div>
      <style jsx>{`
        @media (max-width: 639px) {
          .work-section-grid > :global(*:nth-child(odd)) {
            margin-top: 24px;
          }

          .work-section-grid > :global(*:nth-child(even)) {
            margin-bottom: 24px;
          }
        }

        @media (min-width: 640px) {
          .work-section-grid {
            grid-template-columns: 185px 1fr;
          }
        }
      `}</style>
    </div>
  );
}
