import Head from 'next/head'
import TransitionEffect from '@/components/TransitionEffect'

import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";

const timelineData = [
    {
        type: "work",
        title: "AI Platform Developer",
        org: "University of Texas at Arlington",
        date: "Aug 2025 - Present",
        location: "Arlington, Tx",
        description: [
            "Developed a Streamlit-based web app using Python, integrating NLP (Stanza) and text to speech (gTTS) to analyze grammar and generate real - time pronunciation feedback.",
            "Implemented comic builder, glossary generator, and exercise engine modules with dynamic JSON workflows enabling students to create personalized Latin portfolios with AI assistance.",
            "Leveraged usage data analytics to measure student engagement, automated content export workflows using ReportLab for PDF generation and optimized feedback models, enhancing comprehension for beginners by 25%."
        ]
    },
    {
        type: "education",
        title: "Master of Computer Science",
        org: "University of Texas at Arlington",
        date: "2023 - 2025",
        location: "Arlington, Tx",
        description: [
            "GPA: 3.67/4.0",
            "Coursework: Distributed Systems, Advanced Software Engineering, AI, Data Mining, Project Management, Web Data Management"
        ]
    },
    {
        type: "work",
        title: "Software Development Engineer",
        org: "Bitxia Tech Private Limited",
        date: "Aug 2021 - Jul 2023",
        location: "Gurgaon, HR",
        description: [
            "Developed 30+ interactive KPI dashboards with Angular and AG Grid, cutting load times by 30% and accelerating funding cisions for startup clients.",
            "Delivered real time financial data to Angular based UI by designing and deploying Spring Boot REST APIs seamlessly connected with Oracle databases, using Git for version control.",
            "Built SQL pipelines to automate KYC, credit scoring, and loan approvals by integrating Digio, Karza, and Mifos APIs, reducing onboarding time from days to hours and incorporated JUnit to reduce resolution time by 38 %.",
            "Reduced post release downtime by 56 % through a robust Docker based recovery process and designed data pipelines integrating APIs and databases, ensuring data quality, lineage, and real time synchronization for financial reporting.",
            "Scaled Stride One’s(FinTech) platform to handle $5B in annual startup financing and 150,000 + invoices, processing multi dimensional transactional datasets with load balancing, and fine tuning database indexing."
        ]
    },
    {
        type: "work",
        title: "Software Developer",
        org: "Evren Global Solutions ",
        date: "Jul 2021 - Aug 2021",
        location: "Gurgaon, HR",
        description: [
            "Developed a scalable Directory Platform using Node.js, focusing on responsive UI implementation and CI/CD integration which improved client onboarding time by 22 %.",
            "Designed and launched a user friendly matrimonial platform with reporting capabilities, achieving a 98 % customer satisfaction rate through intuitive UX design and built an internal employee management system using HTML, CSS, and Node.js.",
            "Streamlined HR processes by building an internal employee management system using HTML, CSS, and Node.js."
        ]
    },
    {
        type: "work",
        title: "Flutter Developer",
        org: "Blondwaves-ILMURO",
        date: "May 2020 - Aug 2020",
        location: "Remote",
        description: [
            "Designed and developed two mobile applications using Flutter, focusing on component reusability and cross-platform consistency.",
            "Collaborated with UX/UI designers to deliver cohesive user experiences, resulting in an 18% increase in user retention and a 23% reduction in bounce rates.",
            "Developed key features for a mobile application that enhanced user satisfaction, leading to a 30% increase in app ratings and 17% rise in daily active users."
        ]
    },
    {
        type: "education",
        title: "B.S. in Computer Science",
        org: "The NorthCap University",
        date: "2018- 2022",
        location: "Gurgaon, HR",
        description: [
            "GPA: 3.67/4.0",
            "Coursework: Database Management Systems, Design and Analysis of Algorithms, Software Engineering"
        ]
    },
];

const TimelineItem = ({ data, index }) => {
    const isEven = index % 2 === 0;

    return (
        <div className="flex flex-col lg:flex-row justify-between items-center w-full mb-4 relative">
            <div className={`w-full lg:w-[45%] flex flex-col z-10 pl-12 lg:pl-0 mb-2 lg:mb-0 
                ${isEven ? 'lg:items-end lg:text-right text-left' : 'lg:items-end lg:text-right text-left'}`}>

                <div className="hidden lg:block w-full">
                    {isEven ? (
                        <TimelineCard data={data} align="right" />
                    ) : (
                        <TimelineDate date={data.date} align="right" />
                    )}
                </div>

                <div className="block lg:hidden w-full">
                    <TimelineDate date={data.date} align="left" mobile={true} />
                    <TimelineCard data={data} align="left" />
                </div>
            </div>

            <div className="absolute left-[20px] lg:left-1/2 top-0 lg:top-1/2 -translate-y-0 lg:-translate-y-1/2 -translate-x-1/2 flex items-center justify-center w-12 h-12 rounded-full bg-light text-white border-4 border-dark shadow-lg z-20 dark:bg-light dark:text-dark dark:border-dark">
                <span className="text-lg">{data.type === "work" ? "💼" : "🎓"}</span>
            </div>

            <div className={`w-full lg:w-[45%] hidden lg:flex flex-col z-10 
                ${isEven ? 'items-start text-left' : 'items-start text-left'}`}>
                {isEven ? (
                    <TimelineDate date={data.date} align="left" />
                ) : (
                    <TimelineCard data={data} align="left" />
                )}
            </div>

        </div>
    );
};

const TimelineCard = ({ data, align }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, type: "spring" }}
            viewport={{ once: true }}
            className="w-full p-6 bg-white border border-solid border-dark rounded-2xl shadow-xl dark:bg-dark dark:border-light dark:shadow-light/20"
        >
            <div className={`flex flex-col ${align === 'right' ? 'items-end text-right' : 'items-start text-left'}`}>
                <h3 className="font-bold text-xl text-primary dark:text-primaryDark">
                    {data.title}
                </h3>
                <h4 className="font-semibold text-base text-dark/75 dark:text-light/75 mb-2">
                    @{data.org} | {data.location}
                </h4>
            </div>

            <ul className="list-disc ml-5 space-y-1 text-sm font-medium text-dark/90 dark:text-light/90 text-left">
                {data.description.map((point, i) => (
                    <li key={i} className="pl-1">
                        {point}
                    </li>
                ))}
            </ul>
        </motion.div>
    );
};

const TimelineDate = ({ date, align, mobile }) => {
    return (
        <motion.div
            initial={{ opacity: 0, x: align === 'left' ? 50 : -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className={`mb-2 w-full ${mobile ? 'text-left pl-1' : (align === 'right' ? 'text-right pr-6' : 'text-left pl-6')}`}
        >
            <h3 className="font-bold text-2xl text-dark/50 dark:text-light/50 lg:text-xl">
                {date}
            </h3>
        </motion.div>
    );
};

export default function Experience() {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "center start"],
    });

    return (
        <>
            <Head>
                <title>Muskan Arora | Experience Page</title>
                <meta name="description" content="any description" />
            </Head>
            <TransitionEffect />
            <main className="w-full min-h-screen mb-10 flex flex-col items-center justify-center dark:text-light overflow-hidden">
                <div className="pt-10 w-full text-center mb-12 lg:mb-20">
                    <motion.h1
                        className="font-bold text-7xl w-full text-center text-dark dark:text-light lg:text-7xl sm:text-6xl xs:text-4xl"
                        initial={{ opacity: 0, y: -50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                    >
                        Building My Legacy
                    </motion.h1>
                </div>

                <div ref={ref} className="relative w-full max-w-[1200px] mx-auto px-4 lg:px-0">
                    <div className="absolute left-[38px] lg:left-1/2 top-0 w-[4px] h-full bg-dark origin-top dark:bg-light -translate-x-1/2" />

                    <div className="w-full flex flex-col items-center justify-center">
                        {timelineData.map((item, index) => (
                            <TimelineItem key={index} data={item} index={index} />
                        ))}
                    </div>

                </div>
            </main>
        </>
    );
}