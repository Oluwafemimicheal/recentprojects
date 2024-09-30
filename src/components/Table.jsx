import SoulList from "./SoulList";
import SoulData from "../db/Soul";
import { NavLink } from "react-router-dom";
import { FaLongArrowAltLeft} from "react-icons/fa";
import BackToTop from "./BackToTop";
const Table = ({isAll = true}) => {

  let soulData = isAll? SoulData.slice(0,5) : SoulData

  return (
    <>
      <table className="c-table mt-20" id={`${top}`}>
        <caption className="font-bold text-2xl my-3">
          <div className="flex justify-between items-center px-5">
            <NavLink
              to="/"
              className="flex items-center gap-2 text-green-700/25 hover:text-green-700 transition"
            >
              <FaLongArrowAltLeft />
              <span className="text-[14px]">back to homepage</span>
            </NavLink>
            {isAll? "Recent Souls List" : "All Souls List"}
          </div>
        </caption>
        <thead>
          <tr>
            <th>Name</th>
            <th>Number</th>
            <th>Location</th>
            <th>Status</th>
            <th>Date</th>
            <th>Save by</th>
            <th>Follow-up</th>
            <th>Response</th>
          </tr>
        </thead>
        <tbody>
          {soulData.map((soul) => {
            return (
              <SoulList
                key={soul.id}
                SoulName={soul.Name}
                SoulNumber={soul.PhoneNumber}
                SoulLocation={soul.SoulLocation}
                SoulStatus={soul.Status}
                MeetBy={soul.SoulDate}
                SoulFirstMeetingDayDate={soul.SaveBy}
                SoulFollowUp={soul.FollowUp}
                SoulResponse={soul.SoulResponse}
              />
            );
          })}
        </tbody>
      </table>
      <BackToTop top={top}/>
    </>
  );
};

export default Table;
