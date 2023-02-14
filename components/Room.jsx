import Image from "next/image";

const Room = ({ name, image, desc }) => {
  return (
    <>
      <div className="p-5 rounded-lg shadow-md flex max-md:flex-col border md:m-5 my-2 m-auto mb-5 w-full max-md:w-11/12">
        <div className="md:w-1/2">
          {/* <Slider/> */}
          <Image
            className=" md:p-5  max-md:pr-1 md:rounded-3xl rounded-lg"
            src={image ? image : "/images/top-background.jpg"}
            width={700}
            height={700}
            alt={"grace villa"}
          />
        </div>

        <div className="md:w-1/2 p-5">
          <h3 className="py-5">{name}</h3>

          <p>
            {desc}
          </p>
          <button className="bg-blue-500 mt-5">Book Now</button>
        </div>
      </div>
    </>
  );
};

export default Room;
