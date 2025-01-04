/* eslint-disable react/prop-types */
import cotton1 from "../assets/cotton-1.jpg";
import cotton2 from "../assets/cotton-2.jpg";
import cotton3 from "../assets/cotton-3.jpg";
import cotton4 from "../assets/cotton-4.jpg";
import logo from "../assets/ugobest-black-logo.png";
import logow from "../assets/ugobest-white-logo.png";
import { Button } from "./Button";

export const Navbar = () => {
  return (
    <nav className="w-full py-1 shadow-sm fixed top-0 left-0 bg-white/50 backdrop-blur-md z-50">
      <div className="w-[1200px] mx-auto flex justify-between items-center p-2">
        <div>
          <img src={logo} alt="" width={150} />
        </div>
        <div className="flex gap-10">
          <ul className="flex items-center gap-14">
            <li>Shop</li>
            <li>Browse</li>
            <li>FAQ</li>
            <li>Contact</li>
          </ul>
          <div className="flex items-center gap-2">
            <button className="flex justify-center items-center w-[20px] h-[20px] p-3 rounded-full border-2 border-gray-400">
              P
            </button>
            <button className="flex justify-center items-center w-[20px] h-[20px] p-3 rounded-full border-2 border-yellow-200 bg-yellow-200">
              C
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export const Hero = () => {
  return (
    <div className="grid grid-cols-2 w-[1200px] mx-auto items-center py-10 pt-32">
      <div className="text-left">
        <h1 className="text-5xl font-semibold mb-3 leading-[3.5rem]">
          Interior design and decoration, tailored to transform your spaces
        </h1>
        <p className="text-2xl text-gray-500">
          Experience the ultimate relaxation with our collection of serene and
          tranquil spa-inspired designs
        </p>
        <div className="flex justify-start items-center mt-10 gap-5">
          <Button text="Show Now" />
          <button className="p-2 rounded-md px-4 underline hover:text-blue-700">
            See more
          </button>
        </div>
      </div>
      <div className="flex justify-end items-center rounded-2xl overflow-hidden">
        <img src={cotton1} alt="" width={"80%"} />
      </div>
    </div>
  );
};

export const Collection = () => {
  return (
    <div className="w-[1200px] mx-auto py-10">
      <div className="flex justify-between items-end gap-5">
        <h1 className="text-5xl font-semibold">
          Our new exclusive collections
        </h1>
        <p className="text-2xl w-10/12 mx-auto text-gray-600">
          Whether for residential or commercial properties, we blend creativity
          with practicality to reflect your taste and lifestyle.
        </p>
      </div>
      <div className="flex justify-start items-center mt-16 gap-5">
        <button className="bg-gray-100 font-semibold px-5 py-2 hover:bg-yellow-200 rounded-full">
          Curtain
        </button>
        <button className="bg-gray-100 font-semibold px-5 py-2 hover:bg-yellow-200 rounded-full">
          Rugs
        </button>
        <button className="bg-gray-100 font-semibold px-5 py-2 hover:bg-yellow-200 rounded-full">
          Cushion
        </button>
        <button className="bg-gray-100 font-semibold px-5 py-2 hover:bg-yellow-200 rounded-full">
          Wallpaper
        </button>
        <button className="bg-gray-100 font-semibold px-5 py-2 hover:bg-yellow-200 rounded-full">
          Paneling
        </button>
        <button className="bg-gray-100 font-semibold px-5 py-2 hover:bg-yellow-200 rounded-full">
          Painting
        </button>
      </div>
      <div className="mt-10 flex justify-between flex-wrap text-center">
        <div>
          <div className="w-[280px] h-[300px] relative bg-slate-300 overflow-hidden ">
            <span className="absolute top-5 right-5 bg-red-600 text-white font-semibold rounded-2xl px-2 z-10">
              order
            </span>
            <img src={cotton2} className="scale-150" />
          </div>
          <h1>Wooden Cotton</h1>
        </div>
        <div>
          <div className="w-[280px] h-[300px] relative bg-slate-300 overflow-hidden ">
            <span className="absolute top-5 right-5 bg-red-600 text-white font-semibold rounded-2xl px-2 z-10">
              order
            </span>
            <img src={cotton1} className="scale-150" />
          </div>
          <h1>High Cotton</h1>
        </div>
        <div>
          <div className="w-[280px] h-[300px] relative bg-slate-300 overflow-hidden ">
            <span className="absolute top-5 right-5 bg-red-600 text-white font-semibold rounded-2xl px-2 z-10">
              order
            </span>
            <img src={cotton3} className="scale-150" />
          </div>
          <h1>Bedroom Interior</h1>
        </div>
        <div>
          <div className="w-[280px] h-[300px] relative bg-slate-300 overflow-hidden ">
            <span className="absolute top-5 right-5 bg-red-600 text-white font-semibold rounded-2xl px-2 z-10">
              order
            </span>
            <img src={cotton4} className="scale-150" />
          </div>
          <h1>Sitting Room</h1>
        </div>
      </div>
    </div>
  );
};

export const Experience = () => {
  return (
    <div className="w-[1000px] mx-auto py-10">
      <div className="grid grid-cols-2 items-end py-10">
        <div className="w-80 h-80 bg-yellow-200 rounded-2xl relative">
          <img
            src={cotton4}
            alt=""
            className="absolute top-10 -right-10 w-80 h-80"
          />
        </div>
        <div className="text-right flex flex-col items-end gap-5">
          <h1 className="text-4xl font-semibold">
            Soft Furnishings and Accessories
          </h1>
          <p className="text-2xl text-gray-600">
            Selecting curtains, rugs, cushions, and upholstery that enhance the
            overall design
          </p>
          <Button text="Check Products" />
        </div>
        <div></div>
      </div>
    </div>
  );
};

export const Functionality = ({ text, paragraph, image, btn }) => {
  return (
    <div className="bg-gray-100 mt-10 h-[500px] flex overflow-hidden relative">
      <div className="w-[1200px] mx-auto grid grid-cols-2 gap-30 items-center">
        <div className="text-left">
          <h1 className="text-5xl font-semibold mb-3 leading-[3.5rem]">
            {text}
          </h1>
          <p className="text-2xl text-gray-500">{paragraph}</p>
          <div className="flex justify-start items-center mt-10 gap-5">
            <Button text={btn} />
          </div>
        </div>
        <div className="w-5/12 h-full absolute right-0 bg-gray-500 overflow-hidden">
          <img src={image} alt="" width={"100%"} />
        </div>
      </div>
    </div>
  );
};
export const Passion = () => {
  return (
    <div className="py-10">
      <h1 className="text-center text-4xl font-semibold w-4/12 mx-auto py-10 leading-[3rem]">
        Furniture Selection and Arrangement
      </h1>
      <div className="grid grid-cols-2 grid-rows-2 w-[1000px] mx-auto gap-4">
        <div className="row-span-2 w-full h-[37rem] bg-slate-500 overflow-hidden rounded-lg">
          <img src={cotton4} alt="" />
        </div>
        <div className="w-full h-[18rem] bg-slate-500 overflow-hidden rounded-lg">
          <img src={cotton1} alt="" className="scale-150" />
        </div>
        <div className=" w-full h-[18rem]  bg-slate-500 overflow-hidden rounded-lg">
          <img src={cotton2} alt="" className="scale-150" />
        </div>
      </div>
    </div>
  );
};

export const Experience2 = () => {
  return (
    <div className="w-[1100px] mx-auto py-10">
      <div className="grid grid-cols-2 items-end py-10">
        <div className="w-80 h-80 bg-yellow-200 rounded-2xl relative">
          <img
            src={cotton4}
            alt=""
            className="absolute top-10 -right-10 w-80 h-80"
          />
        </div>
        <div className="text-right flex flex-col items-end gap-4">
          <h1 className="text-4xl font-semibold">
            Customizing designs to match
            <div className="w-[340px] h-[5px] bg-yellow-200 "></div>your desired
            style
          </h1>
          <p className="text-2xl text-gray-600">
            Indulge in comfort and style whether modern, traditional,
            minimalist, or eclectic.
          </p>
          <Button text="Show Now" />
        </div>
        <div></div>
      </div>
    </div>
  );
};
export const Dream = () => {
  return (
    <div className="dream w-full h-[500px] mx-auto flex flex-col justify-center items-center mt-10">
      <div className="bg-black/45 w-[1200px] h-[500px] text-center mx-auto flex flex-col justify-center items-center">
        <h1 className="text-6xl w-9/12 font-semibold leading-[5rem] text-white mb-10">
          Create your Dream Space with Our Interior Design Expert
        </h1>
        <Button text={"Contact Us"} />
      </div>
    </div>
  );
};

export const Footer = () => {
  return (
    <div className="bg-yellow-900 mt-10">
      <div className="flex  justify-between items-center p-5 text-center w-[1200px] mx-auto">
        <div>
          <img src={logow} alt="" width={150} />
        </div>
        <p>
          {new Date().getFullYear()} © Copyright Ugobest. All Rights Reserved.
        </p>
      </div>
    </div>
  );
};
