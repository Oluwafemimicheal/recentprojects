import { NavLink } from "react-router-dom";

const Navbar = () => {
  const activeNav = ({ isActive }) =>
    isActive
      ? "bg-white text-green-700 hover:hover:bg-gray-900 hover:text-white rounded-md px-3 py-2 "
      : " text-white hover:hover:bg-white hover:text-green-700 rounded-md px-3 py-2 ";

  return (
    <div className="w-10/12 px-5 p-3 bg-green-600 text-white flex items-center">
        <NavLink to={"/"}>
          <h1 className=" flex justify-center items-center w-[50px] h-[50px] rounded-full bg-white text-green-700 font-semibold text-2xl">E/G</h1>
        </NavLink>
      <div className="flex justify-between items-center gap-5 w-6/12 m-auto">
        <NavLink to={"/all-soul"} className={activeNav}>
          View Souls
        </NavLink>
        <NavLink to={"/recent-soul"} className={activeNav}>
          Recent Soul
        </NavLink>
        <NavLink to={"/add-soul"} className={activeNav}>
          Add New Soul
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;
