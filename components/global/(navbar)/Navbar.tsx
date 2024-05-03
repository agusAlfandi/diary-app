import React from "react";
import Link from "next/link";
import NavbarButton from "./NavbarButton";

const Navbar = () => {
  return (
    <div className="navbar bg-base-300">
      <div className="container flex mx-auto justify-between p-4">
        <Link href="/" className="btn btn-ghost text-xl">
          OpenDairy
        </Link>
        <NavbarButton />
      </div>
    </div>
  );
};

export default Navbar;
