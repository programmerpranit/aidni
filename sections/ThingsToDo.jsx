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
          <Thing title={"Venna Lake"} subtitle={"Ride A Shikara"} />
          <Thing
            title={"Tapola"}
            subtitle={"Taste The Thrill Of Jungle Trekking"}
          />
          <Thing
            title={"Pratapgarh Fort"}
            subtitle={"Unveil The Secrets Of This Mysterious Spot"}
          />
          <Thing title={"Lingmala Falls"} subtitle={"Take A Dip"} />
          <Thing
            title={"Mahabaleshwar Temple"}
            subtitle={"Seek The Blessings Of Lord Shiva"}
          />

          <Thing
            title={"Mapro Garden"}
            subtitle={"Treat Yourself With Strawberries & Cream"}
          />
          <Thing
            title={"Wilson Point"}
            subtitle={"Gaze At The Colourful Sunset"}
          />
          <Thing
            title={"Babington Point"}
            subtitle={"Go Birdwatching"}
          />
          <Thing
            title={"Connaught Peak"}
            subtitle={"Have A Picnic"}
          />
          <Thing
            title={"Rajpuri"}
            subtitle={"Wander In The Historical Caves"}
          />
          <Thing
            title={"Arthur's Seat"}
            subtitle={"Admire The Sweeping View Of Mahabaleshwar"}
          />
          <Thing
            title={"Rock Climbing"}
            subtitle={"Indulge In Exciting Activities"}
          />
          <Thing
            title={"Horse Riding"}
            subtitle={"Explore The Hill Station On A Horseback"}
          />
          <Thing
            title={"Town Bazaar"}
            subtitle={"Indulge In Shopping"}
          />
          <Thing
            title={"Elephant’s Head Point "}
            subtitle={"Catch The Bird’s Eye View"}
          />




        </div>
      </div>
    </>
  );
};

export default ThingsToDo;
