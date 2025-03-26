"use client";

import Link from "next/link";
import Image from "next/image";
const date = new Date();
let year = date.getFullYear();

function Footer() {
  return (
    <footer className="w-full pt-5 p-2  bg-slate-100 dark:bg-[#020617] sticky top-[100vh]">
      {/* <hr className="my-4" /> */}
      <div className="mx-auto max-w-7xl items-center lg:justify-between px-4 md:flex lg:px-0 w-11/12 md:w-11/12 lg:w-11/12  xl:container">
        <Link href={"/"}>
          <div className="lg:inline-flex items-center hidden">
            <Image src="/logo.png" alt="Logo" width={32} height={32} />
          </div>
        </Link>
        <div className="md:mt-0 text-center lg:space-y-0 space-y-5">
          <p>
            © {year}
            <a
              href="/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Ruis Sander Github Profile"
            >
              <span className="font-bold text-indigo-500 hover:underline ml-1 mr-1">
                Ruis Sander
              </span>
            </a>
            All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
