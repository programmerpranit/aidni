import React from "react";
import Image from "next/image";
import Thing from "@/components/Thing";

const ThingsToDo = () => {
  return (
    <>
      <div className="things-to-do text-center my-20">
        <h2>Things to do Near us</h2>
        <p className="max-w-3xl m-auto my-5">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos
          nobis officia autem quod a vel rem facere porro possimus cum!
        </p>

        <div className="things-container max-w-5xl m-auto justify-between ">

          <Thing/>
          <Thing/>
          <Thing/>
          <Thing/>
          <Thing/>
          <Thing/>
          
        </div>

      </div>
    </>
  );
};

export default ThingsToDo;
