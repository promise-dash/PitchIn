import { SignOutButton } from "@clerk/nextjs";
import Link from "next/link";
import React from "react";
import { AiFillPushpin } from "react-icons/ai";
import { FaLinkedin } from "react-icons/fa";

const Navbar = () => {
  return (
    <header className="px-5 py-3 bg-white shadow-sm font-work-sans">
      <nav className="flex justify-between items-center">
        <Link href="/">
          <p className="text-2xl text-black font-semibold flex items-center">
            <AiFillPushpin className="text-[#fb601e]"/>
            PitchIn
          </p>
        </Link>

        <div className="flex items-center gap-5 text-black">
          <Link href="/startup/create">
            <span className="max-sm:hidden">Create</span>
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
