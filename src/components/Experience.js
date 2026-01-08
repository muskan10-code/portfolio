import React, { useRef } from 'react'
import { motion, useScroll } from 'framer-motion'
import LiIcon from './LiIcon'

const Details = ({ position, company, time, address, work }) => {
    const ref = useRef(null);
    return (
        <li ref={ref} className='my-8 first:mt-0 last:mb-0 w-full flex flex-col items-start justify-between pl-16 md:pl-16'>

            <LiIcon reference={ref} />

            <motion.div
                initial={{ y: 50 }}
                whileInView={{ y: 0 }}
                transition={{ duration: 0.5, type: "spring" }}
            >
                <h3 className='capitalize font-bold text-lg sm:text-xl xs:text-lg'>
                    {position}&nbsp;
                    <span className='text-primary dark:text-primaryDark capitalize'>
                        @{company}
                    </span>
                </h3>
                <span className='capitalize font-medium text-dark/75 dark:text-light/75 xs:text-sm'>
                    {time} | {address}
                </span>
                <p className='font-medium w-full md:text-sm mt-2'>
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
        <div className='w-full text-left'>
            <div ref={ref} className='w-full mx-auto relative lg:w-full md:w-full'>
                <motion.div
                    style={{ scaleY: scrollYProgress }}
                    className="absolute left-[23px] top-0 w-[4px] h-full bg-dark origin-top dark:bg-light md:left-9"
                />

                <ul className='w-full flex flex-col items-start justify-between xs:ml-2'>
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
                </ul>
            </div>
        </div>
    )
}

export default Experience