import React from "react";
import Image from "next/image";
import Thing from "@/components/Thing";

const ThingsToDo = () => {
  return (
    <>
      <div className="things-to-do text-center my-20">
        <h2>Things to do Near us</h2>
        <p className="max-w-3xl m-auto my-5">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos
          nobis officia autem quod a vel rem facere porro possimus cum!
        </p>

        <div className="things-container max-w-5xl m-auto justify-between ">
          <Thing
            title={"Venna Lake"}
            subtitle={"Ride A Shikara"}
            image={"/things/venna-lake.jpg"}
          />
          <Thing
            title={"Tapola"}
            subtitle={"Taste The Thrill Of Jungle Trekking"}
            image={"/things/tapola.jpg"}

          />
          <Thing
            title={"Pratapgarh Fort"}
            subtitle={"Unveil The Secrets Of This Mysterious Spot"}
            image={"/things/Pratapgad-fort.jpg"}
          />
          <Thing title={"Lingmala Falls"} subtitle={"Take A Dip"} 
            image={"/things/lingmala.jpg"}
            />
          <Thing
            title={"Mahabaleshwar Temple"}
            subtitle={"Seek The Blessings Of Lord Shiva"}
            image={"/things/mahabaleshwar-temple.jpg"}
          />

          <Thing
            title={"Mapro Garden"}
            subtitle={"Treat Yourself With Strawberries & Cream"}
            image={"/things/mapro-garden.jpg"}
          />
          <Thing
            title={"Wilson Point"}
            subtitle={"Gaze At The Colourful Sunset"}
            image={"/things/wilson-point.jpg"}
          />
          <Thing title={"Babington Point"} subtitle={"Go Birdwatching"} 
            image={"/things/babington-point.jpg"}
            />
          <Thing title={"Connaught Peak"} subtitle={"Have A Picnic"} 
            image={"/things/connaught-peak.jpg"}
            />
          <Thing
            title={"Rajpuri"}
            subtitle={"Wander In The Historical Caves"}
            image={"/things/rajpuri-waterfall.jpg"}
          />
          <Thing
            title={"Arthur's Seat"}
            subtitle={"Admire The Sweeping View Of Mahabaleshwar"}
            image={"/things/arthurs-seat.jpg"}
          />
          <Thing
            title={"Rock Climbing"}
            subtitle={"Indulge In Exciting Activities"}
            image={"/things/rock-climbing.jpg"}
          />
          <Thing
            title={"Horse Riding"}
            subtitle={"Explore The Hill Station On A Horseback"}
            image={"/things/horse-riding.jpg"}
          />
          <Thing title={"Town Bazaar"} subtitle={"Indulge In Shopping"} 
            image={"/things/town-bazar.jpg"}
            />
          <Thing
            title={"Elephant's Head Point"}
            subtitle={"Catch The Bird's Eye View"}
            image={"/things/elephants-head-point.jpg"}
          />
        </div>
      </div>
    </>
  );
};

export default ThingsToDo;
