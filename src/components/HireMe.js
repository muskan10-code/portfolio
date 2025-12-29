import React from 'react';
import Link from 'next/link';
import { CircularText } from './Icons';

const HireMe = () => {
    return (
        <div className="fixed left-4 bottom-4 z-50">
            <div className="relative w-40 h-40 flex items-center justify-center">
                <CircularText className="absolute inset-0 text-dark" />
                <a
                    href="mailto:muskan1999arora10@gmail.com"
                    className="relative z-10 w-20 h-20 rounded-full
                    bg-dark text-light font-semibold
                    flex items-center justify-center
                    hover:bg-light hover:text-dark transition"
                >
                    Hire Me
                    {/* Start a Conversation */}
                    {/* Let's Work Together */}
                </a>
            </div>
        </div>
    )
}

export default HireMe