import SoulList from "./SoulList";
import Spinner from "./Spinner";
import { NavLink } from "react-router-dom";
import { FaLongArrowAltLeft } from "react-icons/fa";
import BackToTop from "./BackToTop";
import { useEffect, useState } from "react";

const Table = ({ isAll = true, backToTop=true }) => {
  const [soul, setSoul] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:8000/soul");
        const data = await response.json();
        setSoul(data);
      } catch (error) {
        console.error(
          "Some functionality went wrong, Please try again!",
          error
        );
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

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
            {isAll ? "Recent Souls List" : "All Souls List"}
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
          {loading ? (
            <Spinner loading={loading} />
          ) : (
            <>
              {soul.map((soul) => {
                return (
                  <SoulList
                    key={soul.id}
                    SoulName={soul.name}
                    SoulNumber={soul.phone}
                    SoulLocation={soul.address}
                    SoulStatus={soul.Status}
                    MeetBy={soul.SoulDate}
                    SoulFirstMeetingDayDate={soul.SaveBy}
                    SoulFollowUp={soul.FollowUp}
                    SoulResponse={soul.SoulResponse}
                  />
                );
              })}
            </>
          )}
        </tbody>
      </table>
      {
        backToTop && soul.length > 10 ? <BackToTop top={top} /> : null
      }
      
    </>
  );
};

export default Table;
