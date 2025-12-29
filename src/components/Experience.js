import React, { useRef } from 'react'
import { motion, useScroll } from 'framer-motion'
import LiIcon from './LiIcon'

const Details = ({ position, company, time, address, work }) => {
    const ref = useRef(null);
    return (
        <li ref={ref} className='my-4 first:mt-0 last:mb-0 w-[80%] mx-auto flex flex-col items-center justify-between md:w-[80%]'>
            <LiIcon reference={ref} />
            <motion.div initial={{ y: 50 }} whileInView={{ y: 0 }} transition={{ duration: 0.5, type: "spring" }}>
                <h3 className='capitalize font-bold text-2xl sm:text-xl xs:text-lg'>
                    {position}&nbsp;<span className='text-primary dark:text-primaryDark capitalize'>@{company}</span>
                </h3>
                <span className='capitalize font-medium text-dark/75 dark:text-light/75 xs:text-sm'>
                    {time} | {address}
                </span>
                <p className='font-medium w-full md:text-sm'>
                    {work}
                </p>
            </motion.div>
        </li>
    );
}

const Experience = () => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "center start"]
    })

    return (
        <div className='w-full'>
            <div ref={ref} className='w-full mx-auto relative'>
                <motion.div
                    style={{ scaleY: scrollYProgress }}
                    className="absolute left-9 top-0 w-[4px] h-full bg-dark origin-top dark:bg-light md:w-[2px] md:left-[30px] xs:left-[20px]"
                />
                <ul className='w-full flex flex-col items-start justify-between ml-4 xs:ml-2'>
                    <Details
                        position="AI Platform Developer"
                        company="University of Texas at Arlington"
                        time="Aug 2023 – Present"
                        address="Remote US"
                    />
                    <Details
                        position="Software Development Engineer"
                        company="Bitxia Tech"
                        time="Aug 2021 – Aug 2023"
                        address="Gurgaon, India"
                    />
                    <Details
                        position="Software Developer"
                        company="Evren Global Solutions"
                        time="Jun 2021 – Aug 2021"
                        address="Remote"
                    />
                    <Details
                        position="Flutter Developer"
                        company="Blondwaves - ILMURO"
                        time="May 2020 – Aug 2020"
                        address="Remote"
                    />
                </ul>
            </div>
        </div>
    )
}
export default Experience