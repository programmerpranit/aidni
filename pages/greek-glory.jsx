import Navbar from "@/components/Navbar";
import Slider from "@/components/Slider";
import Image from "next/image";
import React from "react";
import { BiSwim } from "react-icons/bi";
import Facility from "@/components/Facility";
import Review from "@/components/Review";
import Room from "@/components/Room";

const GreekGlory = () => {
  return (
    <>
      <Navbar />
      <div className="h-[60vh] flex justify-center flex-col bg-blue-50 items-center">
        <h1 className="text-center">Greek Glory</h1>
        <button className="bg-blue-500 my-5 -mb-10">Theme Resort</button>
      </div>

      <div className="md:max-w-6xl m-auto flex max-md:flex-col p-5">
        <Image
          className="md:w-1/2 md:p-5 rounded-3xl "
          src={"/images/top-background.jpg"}
          width={700}
          height={700}
          alt={"grace villa"}
        />

        <div className="md:w-1/2 flex flex-wrap">
          <Image
            className="w-1/2 md:p-5 max-md:my-2 pr-1 rounded-3xl"
            src={"/images/top-background.jpg"}
            width={700}
            height={700}
            alt={"grace villa"}
          />
          <Image
            className="w-1/2 md:p-5  max-md:my-2 pl-1 rounded-3xl"
            src={"/images/top-background.jpg"}
            width={700}
            height={700}
            alt={"grace villa"}
          />
          <Image
            className="w-1/2 md:p-5  max-md:pr-1 rounded-3xl"
            src={"/images/top-background.jpg"}
            width={700}
            height={700}
            alt={"grace villa"}
          />
          <Image
            className="w-1/2 md:p-5  max-md:pl-1 rounded-3xl"
            src={"/images/top-background.jpg"}
            width={700}
            height={700}
            alt={"grace villa"}
          />
        </div>
      </div>

      <div className="">
        <p className="md:max-w-6xl m-auto p-5 mt-10 text-center">
          The purpose of a thematic resort is to offer our guests a truly unique
          experience, one that is far removed from the everyday world. Whether
          youre looking for adventure, relaxation, or a touch of whimsy, a
          AIDNIs Theme resort is the perfect escape from the mundane. Nestled in
          the picturesque hills of Mahabaleshwar, our resort offers a
          one-of-a-kind getaway experience with its unique theme rooms. Each
          room is a feast for the senses, with its own unique decor, lighting,
          and soundscapes. Guests can immerse themselves in a world of fantasy,
          surrounded by the beauty of nature. Our resort is not just a place to
          stay, but a journey of the imagination, where every corner holds a new
          adventure. Come and discover the magic of our first theme resort in
          Mahabaleshwar!
        </p>
        <p className="md:max-w-6xl m-auto p-5 text-center">
          The property is located on the main road. Park your vehicle and enter
          downstairs into the valley. The mesmerizing view of the lush green
          surroundings and fresh air is a one of a kind experience. The rooftop
          is designed inspired by the sprawling beauty of GREECE, yes that’s
          where the name comes from HOTEL GREEK GLORY!
        </p>
      </div>

      <div className="md:max-w-6xl m-auto my-10">
        <h2 className="text-center">Rooms</h2>

        <Room />
        <Room />
        <Room />
        <Room />
      </div>
      <div className="md:max-w-6xl m-auto my-10">
        <h2 className="text-center">Facilities</h2>

        <div className="card rounded-lg mt-5 m-auto flex justify-center flex-wrap bg-blue-50 md:p-20">
          <Facility />
          <Facility />
          <Facility />
          <Facility />
          <Facility />
          <Facility />
        </div>
      </div>

      <div className="md:max-w-6xl m-auto my-20">
        <h2 className="text-center">Reviews</h2>

        <div className="card rounded-lg mt-5 m-auto flex justify-center flex-wrap md:p-10 p-5">
          <Review />
          <Review />
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

export default GreekGlory;
