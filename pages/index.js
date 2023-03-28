import Image from "next/image";
import ThingsToDo from "@/sections/ThingsToDo";
import Navbar from "@/components/Navbar";
import Link from "next/link";
import Facility from "@/components/Facility";
import { AiOutlineWifi } from "react-icons/ai";
import { CiLocationOn } from "react-icons/ci";
import { CiParking1 } from "react-icons/ci";
import { GiCctvCamera } from "react-icons/gi";
import { MdAir } from "react-icons/md";
import { BsWhatsapp, BsInstagram, BsMap } from "react-icons/bs";

export default function Home() {
  return (
    <>
      <Navbar />

      <div className="h-screen flex flex-col justify-center items-center bg-cover bg-fixed bg-[url('../public/images/top-background.png')]">
        <h1 className="text-center text-white ">Welcome to Aidni</h1>
        <p className="text-center text-white px-5 max-w-lg">
        An emerging global enterprise brand with diverse businesses.
        </p>
      </div>

      <div className="">
        <div className="card rounded-lg flex flex-wrap justify-between w-10/12 mt-[-50px] m-auto bg-blue-50  p-5">
          {/* <Facility icon={<BsWhatsapp size={50} />} title={"WhatsApp"} />
          <Facility icon={<BsInstagram size={50} />} title={"Instagram"} />
          <Facility icon={<CiLocationOn size={50} />} title={"Location"} />
          <Facility icon={<BsMap size={50} />} title={"Property Map"} /> */}
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
        <a href="#things-to-do">
          <button className="bg-blue-500">Explore</button>
        </a>
      </div>

      <div className="rooms my-20 max-w-5xl mx-auto p-5">
        <div className="flex w-full max-md:flex-col">
          <Image
            className="md:w-1/2 max-md:rounded-lg"
            src={"/images/top-background.jpg"}
            alt={"grace villa"}
            width={1000}
            height={1000}
          />

          <div className="md:px-10 p-5">
            <h2>Grace Villa</h2>
            <p className="my-3">
              Nestled in the foothills of Sahyadri, between the enchanting
              Panchgani-Mahabaleshwar twin hill stations, Grace Villa is one of
              its kind luxury villas for dream vacations and business too! a
              complete standout luxury villa cum holiday home for you.
            </p>
            <Link href={"/grace-villa"}>
              <button className="bg-blue-500 mt-2 hover:bg-blue-600">
                Explore
              </button>
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
              green surroundings and fresh air it is a one of a kind experience.
            </p>
            <Link href={"/greek-glory"}>
              <button className="bg-blue-500 mt-2 hover:bg-blue-600">
                Explore
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div className="" id="things-to-do"></div>
      <ThingsToDo />


      <a href="https://wa.me/919356565665" className="fixed bottom-3 right-3">

          <Image src={'/images/whatsapp.png'} width={50} height={50} alt={"whatsapp"} />

      </a>


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
              Pune
            </p>

            <h3 className="mt-5">Phone Number</h3>
            <a href="tel:+919356565665">
              <p>+91 93565 65665</p>
            </a>

            <div className="flex my-5">

              <a href="https://wa.me/919356565665" className="mr-5">
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
}
