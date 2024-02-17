import React, { FC } from "react";
import { useLocation } from "react-router-dom";

const Header: FC = () => {
  const location = useLocation();
  const { pathname } = location;
  console.log(pathname)
  return (
    <nav className="sticky top-0 z-40 bg-white dark:bg-gray-800 text-gray-500 dark:text-gray-400 border-b border-gray-200 dark:border-gray-700 flex items-center justify-between w-full mx-auto py-0">
      <div className="mx-auto flex flex-wrap justify-between items-center w-full xl:max-w-8xl px-4 py-2.5 xl:px-20 max-w-none container">
        <div className="flex items-center gap-3">
          <a href="#" className="flex items-center gap-3 text-2xl font-semibold text-gray-900 dark:text-white">Microfrontend ReactJS, Vue JS</a>
        </div>
        <div className="flex items-center">
          <div className="hidden items-center gap-1 lg:flex">
            <a href="/" className={`rounded-lg p-2.5 text-sm font-medium text-gray-900 hover:text-cyan-700 dark:text-gray-300 dark:hover:text-cyan-500 ${pathname === '/' ? 'text-red-500' : ''}`}>Home</a>
            <a href="/about" className={`rounded-lg p-2.5 text-sm font-medium text-gray-900 hover:text-cyan-700 dark:text-gray-300 dark:hover:text-cyan-500 ${pathname === '/about' ? 'text-red-500' : ''}`}>About</a>
            <a href="/photos" className={`rounded-lg p-2.5 text-sm font-medium text-gray-900 hover:text-cyan-700 dark:text-gray-300 dark:hover:text-cyan-500 ${pathname === '/photos' ? 'text-red-500' : ''}`}>Photos</a>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Header;