import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import ThingsToDo from "@/sections/ThingsToDo";
import Navbar from "@/components/Navbar";
import Link from "next/link";
import Facility from "@/components/Facility";
import { AiOutlineWifi } from "react-icons/ai";
import { CiParking1 } from "react-icons/ci";
import { GiCctvCamera } from "react-icons/gi";
import { MdAir } from "react-icons/md";

export default function Home() {
  return (
    <>
      <Navbar />

      <div className="h-screen flex flex-col justify-center items-center bg-cover bg-fixed bg-[url('../public/images/top-background.png')]">
        <h1 className="text-center text-white ">Welcome to Aidni</h1>
        <p className="text-center text-white px-5 max-w-lg">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam
        </p>
      </div>

      <div className="">
        <div className="card rounded-lg flex flex-wrap justify-between w-10/12 mt-[-50px] m-auto bg-blue-50  p-5">
          <Facility icon={<AiOutlineWifi size={50} />} title={"Free Wifi"} />
          <Facility icon={<CiParking1 size={50} />} title={"Free Parking"} />
          <Facility
            icon={<GiCctvCamera size={50} />}
            title={"Under Protection"}
          />
          <Facility icon={<MdAir size={50} />} title={"Air Conditioned"} />
        </div>
      </div>
      <div className="about my-20 text-center">
        <h2 className="px-5 text-center">We have 17+ years of Experience</h2>
        <p className="text-center max-w-3xl m-auto my-5 px-4">
          Aidni International is an emerging global enterprise brand with
          diverse businesses, founded as an Indian arm of Air o Sea
          International a leading import-export company headquartered in Hong
          Kong. With over 13 years of global business and industry experience
          under its belt
        </p>
        <button className="bg-blue-500">Explore</button>
      </div>

      <div className="rooms my-20 max-w-5xl mx-auto p-5">
        <div className="flex w-full max-md:flex-col">
          <Image
            className="md:w-1/2 max-md:rounded-lg"
            src={"/images/top-background.jpg"}
            alt={"greek gloary"}
            width={1000}
            height={1000}
          />

          <div className="md:px-10 p-5">
            <h2>Grace Villa</h2>
            <p className="my-3">
              Nestled in the foothills of Sahyadri, between the enchanting
              Panchgani-Mahabaleshwar twin hill stations, Greace Villa is one of
              its kind luxury villas for dream vacations and business too! a
              complete standout luxury villa cum holiday home for you.
            </p>
            <Link href={"/grace-villa"}>
              <button className="bg-blue-500 mt-2 hover:bg-blue-600">Explore</button>
            </Link>
          </div>
        </div>
        <div className="flex w-full flex-col md:flex-row-reverse ">
          <Image
            className="md:w-1/2 max-md:rounded-lg"
            src={"/images/greek-glory.jpg"}
            alt={"greek gloary"}
            width={1000}
            height={1000}
          />

          <div className="md:px-10 p-5">
            <h2>Greek Glory</h2>
            <p className="my-3">
              The property is located on the main road. Park your vehicle and
              enter downstairs into the valley. The mesmerizing view of the lush
              green surroundings and fresh air is a one of a kind experience.
            </p>
            <Link href={"/greek-glory"}>
              <button className="bg-blue-500 mt-2 hover:bg-blue-600">Explore</button>
            </Link>
          </div>
        </div>
      </div>
      <ThingsToDo />
    </>
  );
}
