import React, { FC } from "react";

const Footer: FC = () => (
  <footer className="w-full dark:bg-gray-800 md:flex md:items-center md:justify-between rounded-none bg-gray-50 pb-8 pt-16 shadow-none">
    <div className="mx-auto w-full max-w-8xl px-4 lg:px-20">
      <hr className="w-full my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
      <div className="w-full text-center sm:flex sm:items-center sm:justify-center">
        <div className="text-gray-500 dark:text-gray-400 sm:text-center text-base">
          © 2024 All Rights Reserved. Microfrontend ReactJS, Vue JS
        </div>
      </div>
    </div>
  </footer>
)

export default Footer;