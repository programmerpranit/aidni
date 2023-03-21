import Facility from "@/components/Facility";
import Navbar from "@/components/Navbar";
import Review from "@/components/Review";
import Image from "next/image";
import React from "react";
import { BsInstagram, BsWhatsapp } from "react-icons/bs";
import { GiHills } from "react-icons/gi";
import {
  MdOutlineBedroomChild,
  MdOutlineBedroomParent,
  MdFastfood,
  MdOutlineSportsCricket,
  MdWifi,
  MdOutlineStore,
} from "react-icons/md";

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
            src={"/images/grace-villa2.jpeg"}
            width={700}
            height={700}
            alt={"grace villa"}
          />
          <Image
            className="w-1/2 md:p-5  max-md:my-2 pl-1"
            src={"/images/grace-villa3.jpeg"}
            width={700}
            height={700}
            alt={"grace villa"}
          />
          <Image
            className="w-1/2 md:p-5  max-md:pr-1"
            src={"/images/grace-villa4.jpeg"}
            width={700}
            height={700}
            alt={"grace villa"}
          />
          <Image
            className="w-1/2 md:p-5  max-md:pl-1"
            src={"/images/grace-villa5.jpeg"}
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
          <Facility
            icon={<GiHills size={50} />}
            title={"Valley view from each room"}
          />
          <Facility
            icon={<MdOutlineBedroomChild size={50} />}
            title={"Triple occupancy theme based family rooms"}
          />
          <Facility
            icon={<MdOutlineBedroomParent size={50} />}
            title={"Cozy Couple rooms"}
          />
          <Facility
            icon={<MdFastfood size={50} />}
            title={"Rooftop cafeteria (Pure Veg)"}
          />
          <Facility
            icon={<MdOutlineSportsCricket size={50} />}
            title={"Childrens play area"}
          />
          <Facility icon={<MdWifi size={50} />} title={"Free Wi-Fi"} />
        </div>
      </div>

      <div className="md:max-w-6xl m-auto my-20">
        <h2 className="text-center">Reviews</h2>

        <div className="card rounded-lg mt-5 m-auto flex justify-center flex-wrap md:p-10 p-5">
          <Review
            owner={"Fatima Kazi"}
            review={
              "Great location, really pleasant and clean rooms.. Each and every room has its own unique theme which is eye appealing.. Greek Glory would be a perfect stay for kids too as they have activities and an outdoor play area for kids. The thing that makes this such a good place to stay are the staff. All of the people are incredibly helpful and generous. We had a good time at Greek Glory Highly recommended"
            }
          />
          <Review
            owner={"Shivam Raj"}
            review={
              "Awesome place to stay with all the amenities you need & definitely not to miss out the food .. quality & taste is awesome. I stayed for 4 days with family and guys this resort has everything your need for yourself to relax. They have amazing play area / view'/ cafe/ spacious rooms , you will just love it. Staff were very welcoming . In totality you will love this place in every way."
            }
          />
          <Review
            owner={"Yashraj Sisode"}
            review={
              "Our stay at Greek Glory Belong Mahabaleshwar Was magical beyond all expectations. The ambiences were impeccable and simply beautiful. The Staff were friendly and amazing accommodating. The food! Oh my god, the food was totally delicious. We could not have wanted for single thing. If we come back to Mahabaleshwar we would not consider staying anywhere other than here. Absolutely perfect! Thank You so much Team"
            }
          />
          <Review
            owner={"Shriranga Bhat"}
            review={
              "Nice, Small .. Themes based hotel bang on the highway! Staff is super friendly and Manager Omkar is quick with his response and arrangement. Rooms are clean and theme based. Food options are few, however they arrange all your food / deit requests. The view of Sahyadri mountain is wonderful from the restaurant and few rooms"
            }
          />
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
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <div className="md:w-1/2 p-5 ">
            <h3 className="mt-5">Location</h3>
            <p>Pune</p>

            <h3 className="mt-5">Phone Number</h3>
            <a href="tel:+919356565665">
              <p>+91 93565 65665</p>
            </a>

            <div className="flex my-5">
              <a href="https://wa.me/919356565665" className="mr-5">
                <BsWhatsapp size={30} />
              </a>
              <a href="https://instagram.com/aidniinternational?igshid=YmMyMTA2M2Y=">
                <BsInstagram size={30} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default GraceVilla;
