import AnimatedText from '@/components/AnimatedText'
import Layout from '@/components/Layout'
import Head from 'next/head'
import React from 'react'
import ContextSkills from '@/components/ContextSkills'
import Experience from '@/components/Experience'
import TransitionEffect from '@/components/TransitionEffect'
import Link from 'next/link'

export default function About() {
    return (
        <>
            <Head>
                <title>Muskan Arora | About Page</title>
                <meta name="description" content="About Muskan Arora" />
            </Head>
            <TransitionEffect />
            <main className='flex w-full flex-col items-center justify-center dark:text-light dark:bg-dark'>
                <Layout className='pt-8 dark:bg-dark'>
                    <AnimatedText
                        text="Code. Create. Innovate!"
                        className='mb-5 text-xl lg:!text-7xl sm:text-md xs:text-md sm:mb-8'
                    />
                    <div className='grid w-full grid-cols-8 gap-16 sm:gap-8'>

                        <div className='col-span-6 xl:col-span-4 relative h-auto rounded-2xl border-2 border-solid border-dark bg-light p-8 dark:bg-dark dark:border-light md:order-1'>
                            <div className='absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark dark:bg-light' />

                            <div className="w-full h-auto rounded-2xl flex items-center justify-center">
                                <div className='flex flex-col items-start justify-start'>
                                    <h2 className='mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light/75'>Overview</h2>
                                    <p className='font-medium'>
                                        Hi, I'm Muskan Arora, a Software Development Engineer with a passion for transforming complex logic into seamless digital experiences.
                                        With a Master’s degree in Computer Science and specialized experience in both FinTech and AI,
                                        I thrive on building systems that are robust, scalable, and intelligent.
                                    </p>
                                    <p className='my-4 font-medium'>
                                        I believe that engineering is about more than just writing code, it’s about crafting efficient solutions that solve real human problems.
                                        From architecting high traffic financial platforms to developing accessible AI learning tools,
                                        I am always looking for the most impactful way to apply technology.
                                    </p>
                                    <p className='font-medium'>
                                        Whether I’m optimizing backend microservices or fine tuning NLP models, I bring a commitment to precision and performance to every project.
                                        I am eager to apply my Full-Stack expertise to build the next generation of innovative software.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <Link href="/experience" className='col-span-6 xl:col-span-4 relative h-auto rounded-2xl border-2 border-solid border-dark bg-light p-8 dark:bg-dark dark:border-light md:order-2 hover:border-primary dark:hover:border-primaryDark transition-colors'>
                            <div className='absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark dark:bg-light' />

                            <div className="w-full h-auto rounded-2xl flex flex-col items-start justify-start">
                                <h2 className='mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light/75'>Experience</h2>
                                <div className="w-full">
                                    <Experience />
                                </div>
                                <div className="w-full text-center mt-4 text-primary dark:text-primaryDark font-bold underline">
                                    View Full Timeline
                                </div>
                            </div>
                        </Link>
                    </div>

                    <div className="mt-10 w-full">
                        <ContextSkills />
                    </div>
                </Layout>
            </main>
        </>
    )
}