import React from "react";

const Facility = ({ icon, title }) => {
  return (
    <div className="p-2 flex rounded-lg justify-center flex-col items-center text-center md:m-5 m-2 bg-white md:w-1/5 w-2/5">
      <div className="text-[#383a4e] ">{icon}</div>
      <h4 className="py-2">{title}</h4>
    </div>
  );
};

export default Facility;
