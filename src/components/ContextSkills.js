import React from "react";
import { motion } from "framer-motion";

const skillsData = [
    {
        title: "Frontend Development",
        skills: [
            { name: "React.js", note: "Academic paper submission UI" },
            { name: "Next.js", note: "Portfolio & SSR applications" },
            { name: "Angular", note: "30+ FinTech KPI dashboards" },
            { name: "JavaScript (ES6+)", note: "Interactive financial UI logic" },
            { name: "TypeScript", note: "Scalable frontend architecture" },
            { name: "Tailwind CSS", note: "Rapid responsive UI design" },
            { name: "HTML5", note: "Employee management system UI" },
            { name: "CSS3", note: "Matrimonial platform styling" },
        ],
    },
    {
        title: "Backend & Databases",
        skills: [
            { name: "Java", note: "High-performance FinTech logic" },
            { name: "Spring Boot", note: "REST APIs for financial data" },
            { name: "REST APIs", note: "Integrated Digio, Karza & Mifos" },
            { name: "MySQL", note: "Structured data pipelines" },
            { name: "Oracle DB", note: "Real-time financial syncing" },
            { name: "Node.js", note: "Scalable directory platforms" },
            { name: "Express.js", note: "Conference system backend" },
            { name: "MongoDB", note: "Document-based data handling" },
        ],
    },
    {
        title: "AI & Data",
        skills: [
            { name: "Python", note: "NLP apps & consensus logic" },
            { name: "NLP (Stanza)", note: "Grammar & feedback engines" },
            { name: "Generative AI", note: "Latin portfolio assistant" },
            { name: "Streamlit", note: "Educational web app UI" },
            { name: "Pandas", note: "Student usage analytics" },
            { name: "NumPy", note: "Numerical data processing" },
        ],
    },
    {
        title: "Tools & DevOps",
        skills: [
            { name: "Git & GitHub", note: "Version control for teams" },
            { name: "Docker", note: "Reduced downtime by 56%" },
            { name: "Kubernetes", note: "Cluster orchestration" },
            { name: "AWS", note: "Cloud-native deployments" },
            { name: "CI/CD", note: "Automated onboarding flows" },
            { name: "Postman", note: "API testing & validation" },
        ],
    },
    {
        title: "Soft Skills",
        skills: [
            { name: "Problem Solving", note: "Optimized load times by 30%" },
            { name: "Project Management", note: "Google Certified & Agile lead" },
            { name: "Team Collaboration", note: "Cross-functional FinTech teams" },
            { name: "Communication", note: "Stakeholder & mentor alignment" },
            { name: "Mentorship", note: "Guided academic peers" },
        ],
    },
];

const SkillPill = ({ skill }) => {
    return (
        <motion.div
            whileHover={{ scale: 1.08 }}
            className="
        relative group px-4 py-2 rounded-full border
        bg-light text-dark border-dark/60
        dark:bg-dark dark:text-light dark:border-light/60
        font-medium cursor-pointer
        transition-all duration-200
      "
        >
            {skill.name}

            <div
                className="
          pointer-events-none absolute bottom-full left-1/2 -translate-x-1/2 mb-2
          opacity-0 group-hover:opacity-100 scale-95 group-hover:scale-100
          transition-all duration-200
        "
            >
                <div className="bg-dark text-light dark:bg-light dark:text-dark text-xs px-3 py-2 rounded-md shadow-lg whitespace-nowrap">
                    {skill.note}
                </div>
            </div>
        </motion.div>
    );
};

const SkillCard = ({ title, skills }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
            viewport={{ once: true }}
            className="
        w-full p-8 bg-white border border-dark rounded-3xl shadow-lg
        dark:bg-dark dark:border-light dark:shadow-light/20
      "
        >
            <h3
                className="
          font-bold text-2xl mb-6 text-center
          text-primary dark:text-primaryDark
        "
            >
                {title}
            </h3>

            <div className="flex flex-wrap justify-center gap-3">
                {skills.map((skill, index) => (
                    <SkillPill key={index} skill={skill} />
                ))}
            </div>
        </motion.div>
    );
};

const ContextSkills = () => {
    return (
        <section className="mt-5 w-full flex flex-col items-center justify-center">
            <h2
                className="
          font-bold text-8xl mt-20 w-full text-center
          text-dark dark:text-light
          md:text-6xl md:mt-16
        "
            >
                Skills
            </h2>

            <div
                className="
          grid grid-cols-2 gap-8 w-full max-w-[1200px]
          mt-16 px-8 lg:grid-cols-1 md:px-4
        "
            >
                {skillsData.map((category, index) => (
                    <div
                        key={index}
                        className={
                            index === skillsData.length - 1
                                ? "col-span-2 lg:col-span-1"
                                : "col-span-1"
                        }
                    >
                        <SkillCard title={category.title} skills={category.skills} />
                    </div>
                ))}
            </div>
        </section>
    );
};

export default ContextSkills;