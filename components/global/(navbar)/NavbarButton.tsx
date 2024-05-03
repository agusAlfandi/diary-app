"use client";
import React, { useState } from "react";
import { useUser } from "@clerk/nextjs";
import { UserButton } from "@clerk/nextjs";
import Link from "next/link";

const NavbarButton = () => {
  const { isLoaded, isSignedIn } = useUser();
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  if (!isLoaded) return <p>please wait...</p>;

  return (
    <div>
      {isSignedIn ? (
        <div>
          <div className="flex items-center gap-4 md:hidden">
            <button className="btn btn-ghost lg:hidden" onClick={toggleMenu}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </button>
          </div>
          {showMenu && (
            <div className="md:hidden absolute top-20 right-0 p-4 shasow-md bg-base-300 rounded-lg z-10">
              <ul>
                <li className="pb-4">
                  <Link href="/dashboard">Create Diary</Link>
                </li>
                <li className="pb-4">
                  <Link href="/dashboard/my-diary">My Diary</Link>
                </li>
                <li className="pb-4">
                  <Link href="/dashboard/my-comment">My Comment</Link>
                </li>
                <li>
                  <UserButton afterSignOutUrl="/" />
                </li>
              </ul>
            </div>
          )}
          <div className="hidden md:flex gap-4">
            <Link href="/dashboard">Create Diary</Link>
            <Link href="/dashboard/my-diary">My Diary</Link>
            <Link href="/dashboard/my-comment">My Comment</Link>
            <UserButton afterSignOutUrl="/" />
          </div>
        </div>
      ) : (
        <Link href="/sign-in">Sign In</Link>
      )}
    </div>
  );
};

export default NavbarButton;
