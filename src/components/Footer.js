import Link from 'next/link';
import React from 'react';
import Layout from './Layout';

const Footer = () => {
  return (
    <footer className='w-full border-t-2 border-solid border-dark font-medium text-lg dark:text-light dark:border-light sm:text-base'>
      <Layout className='py-2 flex items-center justify-between dark:bg-dark lg:!py-8'>
        <span>{new Date().getFullYear()} &copy; All Rights Reserved.</span>
        <div className='flex items-center lg:py-2'>
          Build With <span className='text-primary text-2xl px-1'>&#9825;</span> by&nbsp;<Link href="https://github.com/muskan10-code" className='underline underline-offset-2'>Muskan Arora</Link>
        </div>
      </Layout>
    </footer>
  );
};
export default Footer;
