import React from 'react'
import { motion } from 'framer-motion'

const skillsData = [
  {
    title: "Frontend Development",
    skills: [
      "Angular",
      "React.js",
      "Next.js",
      "Tailwind CSS",
      "HTML5",
      "CSS3",
      "JavaScript (ES6+)",
      "TypeScript",
    ],
  },
  {
    title: "Backend & Database",
    skills: [
      "Java",
      "Spring Boot",
      "MySQL",
      "REST APIs",
      "GraphQL",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Oracle DB",
    ],
  },
  {
    title: "AI & Data Science",
    skills: [
      "Python",
      "PyTorch",
      "Pandas",
      "NumPy",
      "NLP (Stanza)",
      "Generative AI",
      "Data Mining",
      "Streamlit",
    ],
  },
  {
    title: "Tools & DevOps",
    skills: [
      "Git & GitHub",
      "Docker",
      "Kubernetes",
      "AWS",
      "CI/CD Pipelines",
      "Postman",
      "VS Code",
      "Jira",
    ],
  },
  {
    title: "Soft Skills",
    skills: [
      "Project Management",
      "Team Leadership",
      "Problem Solving",
      "Effective Communication",
      "Mentorship",
      "Agile Methodology",
    ],
  },
];

const SkillPill = ({ text }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="px-4 py-2 border border-dark rounded-full bg-light text-dark text-sm font-semibold cursor-pointer dark:bg-dark dark:text-light dark:border-light hover:bg-dark hover:text-light dark:hover:bg-light dark:hover:text-dark transition-colors duration-200"
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
      className="w-full p-8 bg-white border border-solid border-dark rounded-3xl shadow-xl dark:bg-dark dark:border-light dark:shadow-light/20"
    >
      <h3 className="font-bold text-2xl text-primary mb-6 text-center dark:text-primaryDark">
        {title}
      </h3>
      <div className="flex flex-wrap justify-center gap-3">
        {skills.map((skill, index) => (
          <SkillPill key={index} text={skill} />
        ))}
      </div>
    </motion.div>
  );
};


const Skills = () => {
  return (
    <>
      <div className="mt-5 w-full flex flex-col items-center justify-center">
        <h2 className="font-bold text-8xl mt-20 w-full text-center text-dark dark:text-light md:text-6xl md:mt-16">
          Skills
        </h2>
        <div className="grid grid-cols-2 gap-8 w-full max-w-[1200px] mt-16 px-8 lg:grid-cols-1 md:px-4">
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
    </>
  )
}
export default Skills