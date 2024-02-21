import React from "react";

export default function Footer() {
  return (
    <div>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t  bg-slate-900">
        <p className=" ml-20 text-xs text-gray-500 dark:text-gray-400 ">
          © 2024 Developer Portfolio. All rights reserved.
        </p>
        <nav className=" mr-18 sm:ml-auto flex gap-4 sm:gap-6">
          <a
            className="text-xs hover:underline underline-offset-4  text-gray-500 dark:text-gray-400"
            href="#"
          >
            Terms of Service
          </a>
          <a
            className="text-xs hover:underline underline-offset-4  text-gray-500 dark:text-gray-400"
            href="#"
          >
            Privacy
          </a>
        </nav>
      </footer>
    </div>
  );
}
