"use client";

import React from "react";
import { motion } from "framer-motion";

const skillsData = [
  {
    title: "Frontend Development",
    skills: [
      "React.js", "Next.js", "Tailwind CSS", "Framer Motion",
      "HTML5", "CSS3", "JavaScript (ES6+)", "TypeScript", "Angular",
    ],
  },
  {
    title: "Backend & Database",
    skills: [
      "Node.js", "Express.js", "Spring Boot", "Java",
      "PostgreSQL", "MongoDB", "Oracle DB", "REST APIs", "GraphQL",
    ],
  },
  {
    title: "AI & Data Science",
    skills: [
      "Python", "PyTorch", "Pandas", "NumPy",
      "NLP (Stanza)", "Generative AI", "Data Mining", "Streamlit",
    ],
  },
  {
    title: "Tools & DevOps",
    skills: [
      "Git & GitHub", "Docker", "Kubernetes", "AWS",
      "CI/CD Pipelines", "Postman", "VS Code", "Jira",
    ],
  },
  {
    title: "Soft Skills",
    skills: [
      "Project Management", "Team Leadership", "Problem Solving",
      "Effective Communication", "Mentorship", "Agile Methodology",
    ],
  },
];

const SkillPill = ({ text }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="px-4 py-2 md:px-3 md:py-1 border border-dark rounded-full bg-light text-dark text-xs md:text-xs font-semibold cursor-pointer dark:bg-dark dark:text-light dark:border-light hover:bg-dark hover:text-light dark:hover:bg-light dark:hover:text-dark transition-colors duration-200"
    >
      {text}
    </motion.div>
  );
};

const SkillCard = ({ title, skills }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="w-full p-6 md:p-4 bg-white border border-solid border-dark rounded-3xl shadow-xl dark:bg-dark dark:border-light dark:shadow-light/20"
    >
      <h3 className="font-bold text-lg md:text-xl text-primary mb-4 text-center dark:text-primaryDark">        {title}
      </h3>
      <div className="flex flex-wrap justify-center gap-3 md:gap-2">
        {skills.map((skill, index) => (
          <SkillPill key={index} text={skill} />
        ))}
      </div>
    </motion.div>
  );
};

export default function Skills() {
  return (
    <div className="mt-32 md:mt-16 w-full flex flex-col items-center justify-center">
      <h2 className="font-bold text-8xl md:text-4xl mt-32 md:mt-16 w-full text-center text-dark dark:text-light">
        Skills
      </h2>

      <div className="grid grid-cols-2 lg:grid-cols-1 gap-8 md:gap-4 w-full max-w-[1200px] mt-16 md:mt-8 px-8 md:px-0">
        {skillsData.map((category, index) => (
          <div
            key={index}
            className={`${index === skillsData.length - 1 ? "col-span-2 lg:col-span-1" : "col-span-1"
              }`}
          >
            <SkillCard title={category.title} skills={category.skills} />
          </div>
        ))}
      </div>
    </div>
  );
}