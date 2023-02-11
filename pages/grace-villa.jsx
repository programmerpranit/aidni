import Facility from "@/components/Facility";
import Navbar from "@/components/Navbar";
import Review from "@/components/Review";
import Image from "next/image";
import React from "react";

const GraceVilla = () => {
  return (
    <>
      <Navbar />
      <div className="h-[60vh] flex justify-center flex-col bg-blue-50 items-center">
        <h1 className="text-center">Grace Villa</h1>
        <button className="bg-blue-500 my-5 -mb-10">Luxury Villa</button>
      </div>

      <div className="md:max-w-6xl m-auto flex max-md:flex-col p-5">
        <Image
          className="md:w-1/2 md:p-5 "
          src={"/images/top-background.jpg"}
          width={700}
          height={700}
          alt={"grace villa"}
        />

        <div className="md:w-1/2 flex flex-wrap">
          <Image
            className="w-1/2 md:p-5 max-md:my-2 pr-1"
            src={"/images/top-background.jpg"}
            width={700}
            height={700}
            alt={"grace villa"}
          />
          <Image
            className="w-1/2 md:p-5  max-md:my-2 pl-1"
            src={"/images/top-background.jpg"}
            width={700}
            height={700}
            alt={"grace villa"}
          />
          <Image
            className="w-1/2 md:p-5  max-md:pr-1"
            src={"/images/top-background.jpg"}
            width={700}
            height={700}
            alt={"grace villa"}
          />
          <Image
            className="w-1/2 md:p-5  max-md:pl-1"
            src={"/images/top-background.jpg"}
            width={700}
            height={700}
            alt={"grace villa"}
          />
        </div>
      </div>

      <div className="">
        <p className="md:max-w-6xl m-auto p-5 mt-10 text-center">
          Nestled in the foothills of Sahyadri, between the enchanting
          Panchgani-Mahabaleshwar twin hill stations, Greace Villa is one of its
          kind luxury villas for dream vacations and business too! a complete
          standout luxury villa cum holiday home for you, your family, and
          friends to enjoy a memorable dream vacation that will always remain
          close to your heart! Mahabaleshwar, a popular hill station in
          Maharashtra, is home to our luxurious resort villa. Our villa offers
          guests a serene and peaceful escape from the hustle and bustle of
          everyday life.{" "}
        </p>
        <p className="md:max-w-6xl m-auto p-5 text-center">
          The villa is surrounded by lush greenery, and its large windows offer
          breathtaking views of the majestic Western Ghats. The interior of the
          villa is tastefully decorated, with elegant furnishings and modern
          amenities. Guests can lounge in the spacious living room, or relax in
          the comfortable bedrooms. Our resort villa in Mahabaleshwar is the
          perfect retreat for those seeking a peaceful, nature-filled getaway.{" "}
        </p>
      </div>

      <div className="md:max-w-6xl m-auto my-10">
        <h2 className="text-center">Facilities</h2>

        <div className="card rounded-lg mt-5 m-auto flex justify-center flex-wrap bg-blue-50 md:p-20">
          <Facility />
        </div>
      </div>

      <div className="md:max-w-6xl m-auto my-20">
        <h2 className="text-center">Reviews</h2>

        <div className="card rounded-lg mt-5 m-auto flex justify-center flex-wrap md:p-10 p-5">
          <Review />
        </div>
      </div>

      <div className="md:max-w-6xl m-auto pt-10 bg-blue-50 rounded-lg">
        <h2 className="text-center mb-5">Contact</h2>

        <div className="flex w-full p-5  max-md:flex-col">
          <div className="md:w-1/2 p-5">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15184.385081362681!2d73.7663853!3d17.9276632!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc26788129b6071%3A0xfdd6a96e13c2ae68!2sGRACE%20VILLA!5e0!3m2!1sen!2sin!4v1676065568217!5m2!1sen!2sin"
              width="100%"
              height="300"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <div className="md:w-1/2 p-5 ">
            <h3 className="mt-5">Location</h3>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Reprehenderit, dolorem.
            </p>

            <h3 className="mt-5">Phone Number</h3>
            <p>7769963473</p>
            <p>7769963473</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default GraceVilla;
