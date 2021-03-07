import React from "react";
import Container from "../base/Container";
import BaseHeading from "../base/BaseHeading";

const AboutSection = React.forwardRef(({ skills, languages }, ref) => (
  <Container ref={ref}>
    <BaseHeading className="mb-8 text-center md:mb-16">About me</BaseHeading>
    <div className="flex flex-col md:flex-row">
      <div className="mr-6 md:w-1/2">
        <BaseHeading level={3} className="mb-8">
          Skills
        </BaseHeading>
        {skills.map((skill) => (
          <div key={skill.name}>
            <BaseHeading level={5} className="mb-2">
              {skill.name} - <i>{skill.level}</i>
            </BaseHeading>
            <p className="mb-4">{skill.content}</p>
          </div>
        ))}
      </div>
      <div className="md:w-1/2">
        <div className="md:ml-12">
          <BaseHeading level={3} className="mb-8">
            Languages
          </BaseHeading>
          {languages.map((language) => (
            <div key={language.name}>
              <BaseHeading level={5} className="mb-4">
                {language.name} - <i>{language.level}</i>
              </BaseHeading>
            </div>
          ))}
          <BaseHeading level={3} className="mt-16 mb-6">
            Contact
          </BaseHeading>
          <div className="text-xl lg:text-2xl">
            <div className="flex items-center mb-2">
              <img src="/images/email.svg" alt="" className="w-10 mr-4" />
              <a href="mailto:wachowiakf@gmail.com">wachowiakf@gmail.com</a>
            </div>
            <div className="flex items-center">
              <img src="/images/phone.svg" alt="" className="w-10 mr-4" />
              <a href="tel:+48784010488">+48 784 010 488</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Container>
));

export default AboutSection;
