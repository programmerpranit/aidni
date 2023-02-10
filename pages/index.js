import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import ThingsToDo from '@/sections/ThingsToDo'
import Navbar from '@/components/Navbar'

export default function Home() {
  return (
    <>
    <>
      <Navbar/>

      <div className="h-screen flex flex-col justify-center items-center bg-cover bg-fixed bg-[url('../public/images/top-background.webp')]">
        <h1 className="text-center text-white ">Welcome to Aidni</h1>
        <p className="text-center text-white px-5 max-w-lg">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam
        </p>
      </div>

      <div className="">
        <div className="card rounded-lg w-10/12 mt-[-50px] m-auto bg-blue-50 h-20 p-20"></div>
      </div>
      <div className="about my-20 text-center">
        <h2 className="px-5 text-center">We have 17+ years of Experience</h2>
        <p className="text-center max-w-3xl m-auto my-5 px-4">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Assumenda,
          quibusdam iusto consectetur non porro, illo saepe facere quod suscipit
          autem ab inventore, quisquam voluptates possimus? Animi officiis
          veniam nesciunt nihil?
        </p>
        <button className="bg-blue-500">Explore</button>
      </div>

      <div className="rooms my-20 max-w-5xl mx-auto p-5">
        <div className="flex w-full max-md:flex-col">
          <Image
            className="md:w-1/2"
            src={"/images/top-background.jpg"}
            alt={"greek gloary"}
            width={1000}
            height={1000}
          />

          <div className="md:px-10 p-5">
            <h2>Greek Glory</h2>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Voluptate eos eligendi soluta beatae assumenda excepturi sit
              recusandae blanditiis voluptatem cumque? Debitis, atque aut
              suscipit eius architecto assumenda neque totam non?
            </p>
            <button className="bg-blue-500 mt-5">Explore</button>
          </div>
        </div>
        <div className="flex w-full flex-col md:flex-row-reverse">
          <Image
            className="md:w-1/2"
            src={"/images/top-background.jpg"}
            alt={"greek gloary"}
            width={1000}
            height={1000}
          />

          <div className="md:px-10 p-5">
            <h2>Greek Glory</h2>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Voluptate eos eligendi soluta beatae assumenda excepturi sit
              recusandae blanditiis voluptatem cumque? Debitis, atque aut
              suscipit eius architecto assumenda neque totam non?
            </p>
            <button className="bg-blue-500 mt-5">Explore</button>
          </div>
        </div>
      </div>
<ThingsToDo/>
      
    </>
      
    </>
  )
}
