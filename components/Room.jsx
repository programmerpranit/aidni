import Image from "next/image";

const Room = () => {
  return (
    <>
      <div className="p-5 rounded-lg shadow-md flex max-md:flex-col border md:m-5 m-2 mb-5 w-full">
        <div className="md:w-1/2">
          {/* <Slider/> */}
          <Image
            className=" md:p-5  max-md:pr-1"
            src={"/images/top-background.jpg"}
            width={700}
            height={700}
            alt={"grace villa"}
          />
        </div>

        <div className="md:w-1/2 p-5">
          <h3 className="py-5">Barbie pink room</h3>

          <p>
            Ultimate girly-girl experience, you wont want to miss the Barbie
            Pink room! The Barbie Pink room is a whimsical, playful, and
            oh-so-pink escape that is perfect for anyone who loves all things
            Barbie. From the moment you step inside, you will be transported to
            a world of pink and glamour, surrounded by playful accents and
            whimsical details.
          </p>
          <button className="bg-blue-500 mt-5">Book Now</button>
        </div>
      </div>
    </>
  );
};

export default Room;
