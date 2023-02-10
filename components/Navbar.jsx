import React, { useState } from "react";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <>
      <nav className="bg-white w-full fixed rounded-b-lg p-3">
        <div className="flex md:w-3/4 m-auto justify-between items-center">
          <div className="logo">
            <h3>Aidani</h3>
          </div>
          <div className={`links flex  ${toggle ? "flex-col w-2/3 right-0 text-center fixed top-16 bg-slate-100" : "max-md:hidden"}`}>
            <p className="md:mx-5 my-1">Grace Villa</p>
            <p className="md:mx-5 my-1">Greek Glory</p>
          </div>
            <div className="hamburger md:hidden mr-5" onClick={()=>setToggle(!toggle)}>
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
