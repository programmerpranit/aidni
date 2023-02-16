import Navbar from "@/components/Navbar";
import Slider from "@/components/Slider";
import Image from "next/image";
import React from "react";
import { BiSwim } from "react-icons/bi";
import Facility from "@/components/Facility";
import Review from "@/components/Review";
import Room from "@/components/Room";
import { GiHills } from "react-icons/gi";
import {
  MdOutlineBedroomChild,
  MdOutlineBedroomParent,
  MdFastfood,
  MdOutlineSportsCricket,
  MdWifi,
  MdOutlineStore,
} from "react-icons/md";

import {BsInstagram, BsWhatsapp} from 'react-icons/bs';

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
          className="md:w-1/2 md:p-5 md:rounded-3xl rounded-lg"
          src={"/images/greek-glory.jpg"}
          width={700}
          height={700}
          alt={"grace villa"}
        />

        <div className="md:w-1/2 flex flex-wrap">
          <Image
            className="w-1/2 md:p-5 max-md:my-2 pr-1 md:rounded-3xl rounded-lg"
            src={"/images/gg2.jpg"}
            width={700}
            height={700}
            alt={"grace villa"}
          />
          <Image
            className="w-1/2 md:p-5  max-md:my-2 pl-1 md:rounded-3xl rounded-lg"
            src={"/images/gg1.jpg"}
            width={700}
            height={700}
            alt={"grace villa"}
          />
          <Image
            className="w-1/2 md:p-5  max-md:pr-1 md:rounded-3xl rounded-lg"
            src={"/images/gg3.jpg"}
            width={700}
            height={700}
            alt={"grace villa"}
          />
          <Image
            className="w-1/2 md:p-5  max-md:pl-1 md:rounded-3xl rounded-lg"
            src={"/images/gg4.jpg"}
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
          you are looking for adventure, relaxation, or a touch of whimsy, a
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
        <h2 className="text-center mb-10">Rooms</h2>

        <Room
          name={"Barbie Pink Room"}
          image={"/images/barbie-room.jpg"}
          desc={
            "Ultimate girly-girl experience, you won't want to miss the Barbie Pink room! The Barbie Pink room is a whimsical, playful, and oh-so-pink escape that is perfect for anyone who loves all things Barbie. From the moment you step inside, you'll be transported to a world of pink and glamour, surrounded by playful accents and whimsical details."
          }
        />
        <Room
          name={"Rainbow theme room"}
          image={"/images/rainbow-room.jpg"}
          desc={
            "We offer a vibrant and cheerful Rainbow Themed Room, perfect for guests seeking a lively and playful ambiance. The room in a gradient of rainbow colors, creating a mesmerizing visual effect. The bed is adorned with rainbow-striped linens, adding to the playful vibe."
          }
        />
        <Room
          name={"Frozen princess room"}
          image={"/images/frozen-princes-room.jpg"}
          desc={
            "At our resort, we offer a magical Frozen Princess Theme Room, perfect for guests who are fans of Disney's Frozen. The room is decorated in shades of blue and silver, creating a winter wonderland atmosphere. The walls feature murals of Elsa and Anna, the beloved Frozen princesses. Guests can imagine themselves as princesses in their own winter wonderland in this enchanting room, making their stay at our resort a fairy tale experience."
          }
        />
        <Room
          name={"Super car theme room"}
          image={"/images/car-room.jpg"}
          desc={
            "we offer a thrilling Supercar Theme Room, perfect for guests who are fans of high-speed, luxury vehicles. The room is decorated with posters and murals of the world's most popular supercars, such as Lamborghinis, Ferraris. One can imagine themselves behind the wheel of a luxury supercar in this exciting room, making their stay at our resort a high-speed adventure."
          }
        />
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
          <Facility
            icon={<MdOutlineStore size={50} />}
            title={"Fantasy store"}
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
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Reprehenderit, dolorem.
            </p>

            <h3 className="mt-5">Phone Number</h3>
            <a href="tel:+917769963473">
              <p>77699 63473</p>
            </a>
            <a href="tel:+917666084072">
              <p>76660 84072</p>
            </a>

            <div className="flex my-5">

              <a href="https://wa.me/917769963473" className="mr-5">
                <BsWhatsapp size={30}/>
              </a>
              <a href="https://instagram.com/aidniinternational?igshid=YmMyMTA2M2Y=">
                <BsInstagram size={30}/>
              </a>

            </div>

          </div>
        </div>
      </div>
    </>
  );
};

export default GreekGlory;
