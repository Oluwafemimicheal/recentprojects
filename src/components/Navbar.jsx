import cotton1 from "../assets/cotton-1.jpg";
import cotton2 from "../assets/cotton-2.jpg";
import cotton3 from "../assets/cotton-3.jpg";
import cotton4 from "../assets/cotton-4.jpg";

export const Navbar = () => {
  return (
    <nav className="w-full p-3 shadow-sm">
      <div className="w-[1200px] mx-auto flex justify-between items-center p-2">
        <div>
          <h1>Ugobest</h1>
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
    <div className="grid grid-cols-2 w-[1200px] mx-auto items-center py-10">
      <div className="text-left">
        <h1 className="text-6xl font-semibold mb-3">
          Modern furniture for minimalist lovers
        </h1>
        <p className="text-2xl text-gray-500">
          Experience the ultimate relaxation with our collection of serene and
          tranquil spa-inspired designs
        </p>
        <div className="flex justify-start items-center mt-10 gap-5">
          <button className="bg-yellow-200 p-2 rounded-md px-4">
            Shop now
          </button>
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
      <div className="flex justify-between items-start gap-5">
        <h1 className="text-5xl font-semibold">
          Our new exclusive collections
        </h1>
        <p className="text-2xl text-gray-600">
          Elevate your interiors with our curated section of premium furniture
          and accessories
        </p>
      </div>
      <div className="flex justify-start items-center mt-10 gap-5">
        <button className="bg-gray-100 font-semibold px-5 py-2 hover:bg-yellow-200 rounded-full">
          Dinning
        </button>
        <button className="bg-gray-100 font-semibold px-5 py-2 hover:bg-yellow-200 rounded-full">
          Chair
        </button>
        <button className="bg-gray-100 font-semibold px-5 py-2 hover:bg-yellow-200 rounded-full">
          Bedroom
        </button>
        <button className="bg-gray-100 font-semibold px-5 py-2 hover:bg-yellow-200 rounded-full">
          Kitchen
        </button>
        <button className="bg-gray-100 font-semibold px-5 py-2 hover:bg-yellow-200 rounded-full">
          Shelves
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
        <div className="text-right">
          <h1 className="text-4xl font-semibold mb-4">
            New experience is going unlock
          </h1>
          <p className="text-2xl text-gray-500">
            Indulge in comfort and style with our range of plush furniture and
            cozy accents
          </p>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export const Functionality = () => {
  return (
    <div className="bg-gray-100 mt-10 h-[500px] flex overflow-hidden relative">
      <div className="w-[1200px] mx-auto grid grid-cols-2 items-center">
        <div className="text-left">
          <h1 className="text-5xl font-semibold mb-3">
            meets the <br /> functionality
          </h1>
          <p className="text-2xl text-gray-500">
            Experience the ultimate relaxation with our collection of serene and
            tranquil spa-inspired designs
          </p>
          <div className="flex justify-start items-center mt-10 gap-5">
            <button className="bg-yellow-200 p-2 rounded-md px-4">
              Shop now
            </button>
          </div>
        </div>
        <div className="w-5/12 h-full absolute right-0 bg-gray-500 overflow-hidden">
          <img src={cotton3} alt="" width={"100%"} />
        </div>
      </div>
    </div>
  );
};
export const Passion = () => {
  return (
    <div className="py-10">
      <h1 className="text-center text-4xl font-semibold w-3/12 mx-auto py-10 leading-[3rem]">
        Inspiring interiors crafted with passion
      </h1>
      <div className="grid grid-cols-2 grid-rows-2 w-[900px] mx-auto gap-4">
        <div className="row-span-2 w-full h-[83vh] bg-slate-500 overflow-hidden rounded-lg">
          <img src={cotton4} alt="" />
        </div>
        <div className="w-full h-[40vh] bg-slate-500 overflow-hidden rounded-lg">
          <img src={cotton1} alt="" className="scale-150" />
        </div>
        <div className=" w-full h-[40vh]  bg-slate-500 overflow-hidden rounded-lg">
          <img src={cotton2} alt="" className="scale-150" />
        </div>
      </div>
    </div>
  );
};

export const Experience2 = () => {
  return (
    <div className="w-[1200px] mx-auto py-10">
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
            New experience is going
            <div className="w-[260px] h-[5px] bg-yellow-200 "></div> unlock
          </h1>
          <p className="text-2xl text-gray-600">
            Indulge in comfort and style with our range of plush furniture and
            cozy accents
          </p>
          <button className="bg-yellow-200 p-2 rounded-md px-4">
            Shop now
          </button>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export const Footer = () => {
    return <div className="bg-gray-200 p-10">
      <p>All </p>
  </div>;
};
