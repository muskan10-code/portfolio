"use client";

import React from "react";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { GithubIcon } from '../components/Icons';
import RestaurantMS from '../../public/images/projects/RestaurantMS.png'
import CMS from '../../public/images/projects/cms.png'
import DistributesSystem from '../../public/images/projects/distributedsystems.png'
import RewardMS from '../../public/images/projects/rewardMS.png'

const FramerImage = motion(Image);

const FeaturedProject = ({ type, title, summary, img, link, github }) => {
    return (
        <article className="w-full flex flex-col lg:flex-row items-center justify-between relative rounded-3xl border border-solid border-dark bg-light shadow-2xl p-6 rounded-br-2xl dark:bg-dark dark:border-light xs:rounded-2xl xs:rounded-br-3xl xs:p-4">
            <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark dark:bg-light rounded-br-3xl md:-right-2 md:w-[101%] xs:h-[102%] xs:rounded-[1.5rem]" />

            <Link
                href={github}
                target="_blank"
                className="w-full lg:w-1/2 cursor-pointer overflow-hidden rounded-lg"
            >
                <FramerImage
                    className="w-full h-auto "
                    src={img}
                    alt={title}
                    width={1200}
                    height={700}
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                    priority
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
                />
            </Link>

            <div className="w-full lg:w-1/2 flex flex-col items-start justify-between pl-0 lg:pl-6 pt-6 lg:pt-0">
                <span className="text-primary font-medium text-xl dark:text-primaryDark xs:text-base">
                    {type}
                </span>
                <h2 className="my-2 w-full text-left text-4xl font-bold dark:text-light sm:text-3xl">
                    {title}
                </h2>
                <p className="my-2 font-medium text-dark dark:text-light sm:text-sm">
                    {summary}
                </p>
                <div className="mt-2 flex items-center">
                    <Link href={github} target="_blank" className="w-10">
                        <GithubIcon className="!w-10 !h-10 text-dark dark:text-light" />
                    </Link>
                    {link && link !== "/" && (
                        <Link
                            href={link}
                            target="_blank"
                            className="ml-4 rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold hover:bg-light hover:text-dark border border-solid border-transparent hover:border-dark dark:bg-light dark:text-dark dark:hover:bg-dark dark:hover:text-light dark:hover:border-light sm:px-4 sm:text-base"
                        >
                            Visit Project
                        </Link>
                    )}
                </div>
            </div>
        </article>
    );
};

const Project = ({ title, type, img, link, github }) => {
    return (
        <article className="w-full flex flex-col items-center justify-center rounded-2xl border border-solid border-dark bg-light p-6 relative dark:bg-dark dark:border-light xs:p-4 h-full">
            <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark dark:bg-light rounded-br-3xl md:-right-2 md:w-[101%] xs:h-[102%] xs:rounded-[1.5rem]" />

            <Link href={link} target="_blank" className="w-full cursor-pointer overflow-hidden rounded-lg">
                <FramerImage
                    src={img}
                    alt={title}
                    width={600}
                    height={400}
                    className="w-full h-auto"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                />
            </Link>

            <div className="w-full flex flex-col items-start justify-between mt-4">
                <span className="text-primary font-medium text-xl dark:text-primaryDark lg:text-lg md:text-base">
                    {type}
                </span>
                <Link href={link} target="_blank" className="hover:underline underline-offset-2">
                    <h2 className="my-2 w-full text-left text-3xl font-bold dark:text-light lg:text-2xl">
                        {title}
                    </h2>
                </Link>
                <div className="w-full flex items-center justify-between mt-2">
                    {link && link !== "/" ? (
                        <Link href={link} target="_blank" className="text-lg font-semibold underline md:text-base text-dark dark:text-light">
                            Visit
                        </Link>
                    ) : (
                        <span className="hidden"></span>
                    )}
                    <Link href={github} target="_blank" className="w-8">
                        <GithubIcon className="w-8 h-8 text-dark dark:text-light" />
                    </Link>
                </div>
            </div>
        </article>
    );
};

const Projects = () => {
    return (
        <>
            <Head>
                <title>Muskan Arora | Projects Page</title>
                <meta name="description" content="any description" />
            </Head>

            <main className="w-full mb-16 flex flex-col items-center justify-center dark:text-light">
                <div className="pt-16 w-full max-w-[1200px] px-8 lg:px-16 md:px-8 sm:px-2">

                    <motion.h1
                        className="font-bold text-5xl mb-10 w-full text-center lg:text-7xl sm:text-6xl xs:text-4xl text-dark dark:text-light"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                    >
                        Where Logic Meets Art!
                    </motion.h1>

                    <div className="grid grid-cols-12 gap-y-16 md:gap-y-16 gap-x-0 md:gap-x-12 xl:gap-x-16 lg:gap-x-12 sm:gap-x-0">                        <div className="col-span-12">
                        <FeaturedProject
                            title="Distributed Consensus Engine"
                            img={DistributesSystem}
                            summary=" A fault-tolerant distributed system implementing the Raft Consensus Algorithm and Two-Phase Commit (2PC)
                                            protocol to ensure data consistency across node clusters.
                                            Log Replication module implemented using Go, enabling leaders to synchronize entries with follower nodes via gRPC
                                            AppendEntries calls.
                                            Leader Election logic implemented in Python, utilizing randomized timeouts and heartbeat mechanisms to handle node failures and
                                            maintain cluster stability
                                            "
                            link="/"
                            github="https://github.com/muskan10-code/Distributed-Consensus-Engine"
                            type="Featured Project"
                        />
                    </div>

                        <div className="col-span-12 md:col-span-6">
                            <Project
                                title="Restaurant Management System"
                                img={RestaurantMS}
                                link=""
                                github="https://github.com/muskan10-code/RestaurantManagementSystem"
                                type="Project"
                            />
                        </div>

                        <div className="col-span-12 md:col-span-6">
                            <Project
                                title="Reward Management System"
                                img={RewardMS}
                                link="/"
                                github="https://github.com/muskan10-code/RewardManagemnetSystem"
                                type="Website"
                            />
                        </div>
                        <div className="col-span-12">
                            <FeaturedProject
                                title="Conference Management System"
                                img={CMS}
                                summary="A full-stack application for managing academic paper submissions using React for the user interface and Express.js for
                                        the backend API layer and implemented secure JWT authentication and dynamic data handling to support live conferencing features.
                                        A paper management system is essential for managing academic or
                                        research papers during a conference, including submission, review, and approval workflows."
                                link=""
                                github="https://github.com/muskan10-code/ConferenceManagementSystem"
                                type="Featured Project"
                            />
                        </div>


                    </div>
                </div>
            </main>
        </>
    );
};

export default Projects;