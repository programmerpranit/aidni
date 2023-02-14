import React from "react";

const Review = ({owner, review}) => {
    return (
      <div className="p-5 rounded-lg shadow-md flex justify-center border flex-col items-center text-center md:m-5 m-2 mb-5 bg-white md:w-2/5 w-full">
        <p>
          {review}
        </p>
        <h3 className="py-5">{owner}</h3>
      </div>
    );
  };
  export default Review;