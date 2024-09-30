import Card from "./Card";
import SoulData from "../db/Soul";
import { NavLink } from "react-router-dom";
const Main = () => {
  return (
    <div className="w-10/12 p-5 mt-20">
      <div className="w-3/12">
        <Card>
          <h2 className="font-semibold mb-4">
            Numbers of Soul onboard are <span className="px-2 bg-green-600 text-white font-bold rounded-md text-[13px]">{SoulData.length}</span>
          </h2>
          <NavLink
            to={"/all-soul"}
            className="bg-green-500 rounded-md px-4 py-1 w-[max-content] font-semibold"
          >
            View List
          </NavLink>
        </Card>
      </div>
    </div>
  );
};

export default Main;
