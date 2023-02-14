import React from "react";
import Image from "next/image";

const Thing = ({image, title, subtitle}) => {
  return (
    <div className="thing border m-auto rounded-lg text-center my-5">
      <Image
        className=" rounded-lg m-auto flex scale-100 hover:scale-105 md:h-40 ease-in-out duration-500"
        src={image ? image: "/images/top-background.jpg"}
        alt={"greek gloary"}
        width={500}
        height={500}
      />

      <div className="p-2 py-3 text-center ">
        <h3>{title}</h3>
        <p>{subtitle}</p>
      </div>
    </div>
  );
};

export default Thing;
