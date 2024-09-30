import React from "react";
import { FaLongArrowAltLeft } from "react-icons/fa";
import { NavLink } from "react-router-dom";
const Form = () => {
  return (
    <div className="mt-10">
      <div className="flex justify-between items-center px-5">
        <NavLink
          to="/"
          className="flex items-center gap-2 text-green-700/25 hover:text-green-700 transition"
        >
          <FaLongArrowAltLeft />
          <span className="text-[14px] font-semibold">back to homepage</span>
        </NavLink>
        <h1 className="text-2xl font-bold text-center">New Soul Form</h1>
      </div>
      <form className="flex justify-center items-center flex-col py-5 m-16">
        <div className="flex w-8/12 mb-6 gap-5">
          <label htmlFor="soul-name"></label>
          <input
            className="w-10/12 m-auto bg-gray-200 border-2 border-gray-400 rounded-md px-3 py-2 text-[18px]"
            type="text"
            name="soul-name"
            placeholder="Name"
          />
          <label htmlFor="soul-number"></label>
          <input
            className="w-10/12 m-auto bg-gray-200 border-2 border-gray-400 rounded-md px-3 py-2 text-[18px]"
            type="text"
            name="soul-number"
            placeholder="Phone Number"
          />
        </div>

        <div className="flex w-8/12 mb-6 gap-5">
          <label htmlFor="soul-location"></label>
          <input
            className="w-10/12 m-auto bg-gray-200 border-2 border-gray-400 rounded-md px-3 py-2 text-[18px]"
            type="text"
            name="soul-location"
            placeholder="Address"
          />
          <label htmlFor="soul-status"></label>
          <input
            className="w-10/12 m-auto bg-gray-200 border-2 border-gray-400 rounded-md px-3 py-2 text-[18px]"
            type="text"
            name="soul-status"
            placeholder="Status"
          />
        </div>

        <div className="flex w-8/12 mb-6 gap-5">
          <label htmlFor="soul-date"></label>
          <input
            className="w-10/12 m-auto bg-gray-200 border-2 border-gray-400 rounded-md px-3 py-2 text-[18px]"
            type="Date"
            name="soul-date"
            placeholder="Date"
          />
          <label htmlFor="soul-save-by"></label>
          <input
            className="w-10/12 m-auto bg-gray-200 border-2 border-gray-400 rounded-md px-3 py-2 text-[18px]"
            type="text"
            name="soul-save-by"
            placeholder="Save By"
          />
        </div>

        <div className="flex w-8/12 mb-6 gap-5">
          <label htmlFor="soul-follow-up"></label>
          <input
            className="w-10/12 m-auto bg-gray-200 border-2 border-gray-400 rounded-md px-3 py-2 text-[18px]"
            type="text"
            name="soul-follow-up"
            placeholder="Follow Up"
          />
          <label htmlFor="soul-response"></label>
          <input
            className="w-10/12 m-auto bg-gray-200 border-2 border-gray-400 rounded-md px-3 py-2 text-[18px]"
            type="text"
            name="soul-response"
            placeholder="Response"
          />
        </div>
          <button className="bg-green-700 text-white px-5 py-2 rounded-md mt-10 hover:shadow-md hover:bg-green-700/85">
            Add To List
          </button>
      </form>
    </div>
  );
};

export default Form;
