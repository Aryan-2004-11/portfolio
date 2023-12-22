import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";

import "react-vertical-timeline-component/style.min.css";

import { styles } from "../styles";
// import { experiences } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";

const experiences = [
  {
    title: "Full Stack Developer(Intern)",
    company_name: "Saaarp Metaverse",
    icon: "/creator.png",
    iconBg: "#E6DEDD",
    date: "December 2023 - Now",
    points: [
      "Developing and maintaining web applications using Next.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Full stack Developer",
    company_name: "Pandaje Web Services",
    icon: "/saaarp.jpg",
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
    points: [
      "Elevated the visual appeal and user experience of the website through the implementation of React.js .",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Actively collaborated with cross-functional teams to troubleshoot issues, implement new features, and achieve project milestones.",
    ],
  },
  {
    title: "Back End Developer(Intern)",
    company_name: "WEU EcoSystem",
    icon: "/mobile.png",
    iconBg: "#E6DEDD",
    date: "Feb 2021 - Apr 2021",
    points: [
      "Developing and maintaining backend of web applications using Node.js and database using mongoDb.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring the backend connectivity.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  }  
];


const ExperienceCard = ({ experience }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "#1d1836",
        color: "#fff",
      }}
      contentArrowStyle={{ borderRight: "7px solid  #232631" }}
      date={experience.date}
      iconStyle={{ background: experience.iconBg }}
      icon={
        <div className='flex justify-center items-center w-full h-full'>
          <img
            src={experience.icon}
            alt={experience.company_name}
            className='w-[60%] h-[60%] object-contain'
          />
        </div>
      }
    >
      <div>
        <h3 className='text-white text-[24px] font-bold'>{experience.title}</h3>
        <p
          className='text-secondary text-[16px] font-semibold'
          style={{ margin: 0 }}
        >
          {experience.company_name}
        </p>
      </div>

      <ul className='mt-5 list-disc ml-5 space-y-2'>
        {experience.points.map((point, index) => (
          <li
            key={`experience-point-${index}`}
            className='text-white-100 text-[14px] pl-1 tracking-wider'
          >
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};

const Experience = () => {
  return (
    <>
    <section className={`relative w-full h-auto mx-auto mb-32`}>
      <motion.div variants={textVariant()}>
        <p className={`sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider `}>
          What I have done so far
        </p>
        <h2 className={`text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px] `}>
          Work Experience.
        </h2>
      </motion.div>

      <div className='mt-20 flex flex-col'>
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={`experience-${index}`}
              experience={experience}
            />
          ))}
        </VerticalTimeline>
      </div>
      </section>
    </>
  );
};

export default SectionWrapper(Experience, "work");
