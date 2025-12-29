import Link from 'next/link';
import React, { useState } from 'react';
import Logo from './Logo';
import { useRouter } from 'next/router';
import { TwitterIcon, GithubIcon, LinkedInIcon, SunIcon, MoonIcon } from './Icons';
import { motion } from "framer-motion";
import useThemeSwitcher from './hooks/useThemeSwitcher';

const CustomLink = ({ href, title, className = "" }) => {
  const router = useRouter();
  return (
    <Link href={href} className={`${className} relative group`}>
      {title}
      <span className={`h-[1px] inline-block bg-dark absolute left-0 -bottom-0.5 
        group-hover:w-full transition-[width] ease duration-300 dark:bg-light ${router.asPath === href ? 'w-full' : 'w-0'}`}>
        &nbsp;</span>
    </Link>
  );
};

const CustomMobileLink = ({ href, title, className = "", toggle }) => {
  const router = useRouter();
  const handleClick = () => {
    toggle();
    router.push(href);
  }
  return (
    <button href={href} className={`${className} relative group text-light dark:text-dark my-2`} onClick={handleClick}>
      {title}
      <span className={`h-[1px] inline-block bg-light absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300 dark:bg-dark ${router.asPath === href ? 'w-full' : 'w-0'}`}>&nbsp;</span>
    </button>
  );
};

const NavBar = () => {
  const [mode, setMode] = useThemeSwitcher();
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  }

  return (
    <header className='w-full px-32 py-8 font-medium flex items-center justify-between dark:text-light relative z-10 lg:px-16 md:px-12 sm:px-8'>
      <div className="w-full flex justify-between items-center">
        <nav>
          <CustomLink href="/" title="Home" className='mr-4' />
          <CustomLink href="/about" title="About" className='mx-4' />
          <CustomLink href="/experience" title="Experience" className='ml-4' />
          <CustomLink href="/projects" title="Projects" className='mx-4' />
        </nav>
        <nav className="flex items-center justify-center flex-wrap">
          <motion.a href="https://github.com/muskan10-code" target={"_blank"} whileHover={{ y: -2 }} whileTap={{ scale: 0.9 }} className="w-6 mx-3"><GithubIcon /></motion.a>
          <motion.a href="https://www.linkedin.com/in/muskan-arora-swe/" target={"_blank"} whileHover={{ y: -2 }} whileTap={{ scale: 0.9 }} className="w-6 mx-3"><LinkedInIcon /></motion.a>

          <button onClick={() => setMode(mode === "light" ? "dark" : "light")} className={`w-6 mx-3 ml-3 flex items-center justify-center rounded-full p-1 ${mode === "light" ? "bg-dark text-light" : "bg-light text-dark"}`}>
            {mode === "dark" ? <SunIcon className={"fill-dark"} /> : <MoonIcon className={"fill-light"} />}
          </button>
        </nav>
      </div>
      <div className='absolute left-[50%] top-2 translate-x-[-50%]'>
        <Logo />
      </div>
    </header>
  );
};
export default NavBar;
