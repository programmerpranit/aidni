import React from "react";
import Image from "next/image";

const ThingsToDo = () => {
  return (
    <>
      <div className="things-to-do text-center my-20">
        <h2>Things to do Near us</h2>
        <p className="max-w-3xl m-auto my-5">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos
          nobis officia autem quod a vel rem facere porro possimus cum!
        </p>

        <div className=" flex flex-wrap justify-between">
          <div className="p-10 bg-red-500">
            <p>Psp</p>
          </div>

          {/* <div className="!w-1/3 border m-1 p-3">
            <Image
              className=" rounded-lg m-auto "
              src={"/images/top-background.jpg"}
              alt={"greek gloary"}
              width={500}
              height={500}
            />

            <div className="p-2 bg-white text-center ">
              <h3>Venna Lake</h3>
              <p>Ride A Shikara</p>
            </div>

          </div> */}
        </div>
      </div>
    </>
  );
};

export default ThingsToDo;
