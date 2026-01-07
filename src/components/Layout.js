import React from 'react'

const Layout = ({ children, className = "" }) => {
  return (
    <div className={`w-full h-full inline-block z-0 bg-light dark:bg-dark 
    p-6 md:p-12 lg:p-32 xl:p-24 ${className}`}>
      {children}
    </div>
  )
}
export default Layout
