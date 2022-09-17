import React from "react";
import Container from "../base/Container";
import BaseHeading from "../base/BaseHeading";
import { Language, Skill } from "../../pages";

type Props = {
  skills: Skill[];
  languages: Language[];
};

const AboutSection = React.forwardRef<HTMLDivElement, Props>(
  ({ skills, languages }, ref) => (
    <Container ref={ref}>
      <BaseHeading className="mb-8 text-center md:mb-16">About me</BaseHeading>
      <div className="flex flex-col max-w-3xl mx-auto">
        <div>
          <BaseHeading as="h3" level={4} className="mb-6">
            Skills
          </BaseHeading>
          {skills.map((skill) => (
            <div key={skill.name}>
              <BaseHeading as="p" level={6} className="mb-2">
                {skill.name}
                {skill.level ? (
                  <>
                    {" "}
                    - <i>{skill.level}</i>
                  </>
                ) : null}
              </BaseHeading>
              <p className="mb-4">{skill.content}</p>
            </div>
          ))}
        </div>
        <div className="flex gap-4 justify-between flex-wrap mt-6 w-full">
          <div className="max-w-xs">
            <BaseHeading as="h3" level={4} className="mb-4">
              Languages
            </BaseHeading>
            {languages.map((language) => (
              <div key={language.name}>
                <BaseHeading
                  as="p"
                  level={6}
                  className="mb-3 flex items-center"
                >
                  <img
                    src={`/images/${language.code}.svg`}
                    alt=""
                    className="w-8 mr-3 shadow-black shadow-sm"
                  />
                  {language.name} - <i className="ml-1">{language.level}</i>
                </BaseHeading>
              </div>
            ))}
            <BaseHeading as="h4" className="mt-6 mb-2" level={6}>
              Other languages
            </BaseHeading>
            <p>
              I know some German, Italian, and Spanish. I'm currently learning
              Korean
            </p>
          </div>
          <div>
            <BaseHeading as="h3" level={4} className="mb-4">
              Contact
            </BaseHeading>
            <div className="text-lg lg:text-xl">
              <a
                href="mailto:wachowiakf@gmail.com"
                className="flex items-center mb-3"
              >
                <img src="/images/email.svg" alt="" className="w-6 mr-3 mt-1" />
                wachowiakf@gmail.com
              </a>
              <a href="tel:+48784010488" className="flex items-center">
                <img src="/images/phone.svg" alt="" className="w-6 mr-3" />
                +48 784 010 488
              </a>
            </div>
          </div>
        </div>
      </div>
    </Container>
  )
);

export default AboutSection;
