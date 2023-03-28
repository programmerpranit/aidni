import Link from "next/link";
import React, { useState } from "react";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <>
      <nav className="bg-white w-full fixed rounded-b-lg p-3 z-50">
        <div className="flex md:w-3/4 m-auto justify-between items-center">
          <div className="logo">
            <Link href={"/"}>
              <h3>Aidni</h3>
            </Link>
          </div>
          <div
            className={`links flex  ${
              toggle
                ? "flex-col w-2/3  right-0 text-center animate-fade fixed top-16 bg-white"
                : "max-md:hidden"
            }`}
          >
            <Link href={"/grace-villa"}>
              <p className="md:mx-5 my-1 cursor-pointer hover:text-blue-500">
                Grace Villa
              </p>
            </Link>
            <Link href={"/greek-glory"}>
              <p className="md:mx-5 my-1 cursor-pointer hover:text-blue-500">
                Greek Glory
              </p>
            </Link>
          </div>
          <div
            className="hamburger md:hidden mr-5"
            onClick={() => setToggle(!toggle)}
          >
            <div className="line w-5 mb-1 rounded bg-black h-0.5"></div>
            <div className="line w-5 mb-1 rounded bg-black h-0.5"></div>
            <div className="line w-5 mb-1 rounded bg-black h-0.5"></div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
