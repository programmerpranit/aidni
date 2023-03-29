import Facility from "@/components/Facility";
import Navbar from "@/components/Navbar";
import Review from "@/components/Review";
import Image from "next/image";
import React from "react";
import { BsInstagram, BsWhatsapp } from "react-icons/bs";
import { GiChessQueen, GiBarbecue } from "react-icons/gi";
import { MdOutlineSportsCricket, MdWifi } from "react-icons/md";
import { BiSwim } from "react-icons/bi";
import { CiForkAndKnife } from "react-icons/ci";
import {FaFortAwesome} from 'react-icons/fa';
import {IoMdBonfire} from 'react-icons/io';

const GraceVilla = () => {
  return (
    <>
      <Navbar />
      <div className="h-[60vh] flex justify-center flex-col bg-blue-50 items-center">
        <h1 className="text-center">Grace Villa</h1>
        <p className="text-center px-5 max-w-lg">
          5 BHK villa spread in 16000 sq ft with Pool!
        </p>
        <button className="bg-blue-500 my-5 -mb-10">Luxury Villa</button>
      </div>

      <div className="md:max-w-6xl m-auto flex max-md:flex-col p-5">
        <Image
          className=" md:w-1/2 object-cover md:p-5 "
          src={"/images/grace-villa3.jpeg"}
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
            className="w-1/2 md:p-5 object-contain  max-md:pl-1"
            src={"/images/grace-villa4.jpeg"}
            width={700}
            height={700}
            alt={"grace villa"}
          />
          <Image
            className="w-1/2 md:p-5 object-contain max-md:pr-1"
            src={"/images/grace-villa.jpeg"}
            width={700}
            height={700}
            alt={"grace villa"}
          />
          <Image
            className="w-1/2 md:p-5 object-contain max-md:my-2 pl-1"
            src={"/images/grace-villa1.jpeg"}
            width={700}
            height={700}
            alt={"grace villa"}
          />
        </div>
      </div>

      <div className="">
        <p className="md:max-w-6xl m-auto p-5 mt-10 text-center">
          Nestled in the foothills of Sahyadris, between the enchanting
          Panchgani - Mahabaleshwar twin hill stations, Grace Villa is one of
          its kind luxury villas for dream vacations! A complete standout luxury
          property for your family and friends to enjoy a memorable dream
          vacation! The villa is surrounded by lush greenery and its large
          windows bring in fresh cool air to rejuvenate you. The interior is
          tastefully decorated, with elegant furnishings and modern amenities.
          Guests can lounge in the spacious living room, or relax in the
          comfortable bedrooms. Our resort villa in Panchgani, Mahabaleshwar is
          the perfect retreat for those seeking a peaceful, nature-filled
          getaway, offering guests a serene and peaceful escape from the hustle
          and bustle of everyday life.
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
          <Facility icon={<BiSwim size={50} />} title={"Swimming Pool"} />
          <Facility icon={<FaFortAwesome size={50} />}  title={"Kids Sandpit"} />
          <Facility icon={<GiBarbecue size={50} />}  title={"BBQ"} />
          <Facility icon={<IoMdBonfire size={50} />}  title={"Bonfire"} />
          <Facility icon={<MdWifi size={50} />}  title={"Free Wi-Fi"} />
          <Facility
            icon={<MdOutlineSportsCricket size={50} />}
            title={"Outdoor games"}
          />
          <Facility icon={<GiChessQueen size={50} />} title={"Indoor Games"} />
          <Facility icon={<CiForkAndKnife size={50} />} title={"Home Cooked Food"} />
        </div>
      </div>

      <div className="md:max-w-6xl m-auto my-20">
        <h2 className="text-center">Reviews</h2>

        <div className="card rounded-lg mt-5 m-auto flex justify-center flex-wrap md:p-10 p-5">
          <Review
            owner={"Chetan Bhansali"}
            review={
              "Really nice property. Had super fun during the stay with family and friends. The best part is the sandpit for kids. The dinning area is also nice. Enjoyed the bonfire every night. Overall super experience. \n The staff is really co-operative. I have forget my watch at the property, for which I have received the call within a hour and later on received my watch through courier. Really pleased with the honesty and follow service."
            }
          />
          <Review
            owner={"Umesha"}
            review={
              " We've just got back from staying in the AIDNI Grace Villa which was a lovely home. Best place for family /friends.Such nice decor and plenty of space.The pool is ok in size and a big hit with the kids! It's rare to stay somewhere which is clean and actually clean.. this place is just that- CLEAN - no dirt or dust anywhere! Caretakers behavior is nice & very supportive. We enjoyed alot. Would like to visit again."
            }
          />
          <Review
            owner={"Aditya Diwan"}
            review={
              "A fantastic place! Worked from there for more than a week and the experience was superb. It is a perfect blend of a quiet getaway or hosting friends and family for those weekend gala times, worked well for both over the course of my stay! The host is extremely cordial and ready to help you out at the beck of a call. Highly recommend!"
            }
          />
          <Review
            owner={"Shruti Sivanandam"}
            review={
              "I recently read a quote that went 'people can definitely fall in love with a place at first sight'. As someone who loves to visit new places and enjoy quality time with loved ones, Grace Villa does justice to its name. If you need a home away from home but still want to feel like it's a vacation, this is the place to go. It has everything you would ever need to just chill with your loved ones. The host is lovely and gracious. I can assure you that the memories you make here will linger for a long time even after you've left."
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
