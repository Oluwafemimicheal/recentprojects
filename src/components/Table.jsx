import SoulList from "./SoulList";
import SoulData from "../db/Soul";

const Table = () => {
  return (
    <table className="c-table ">
      <caption className="font-bold text-2xl mb-5">
        Soul Attendance Table
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
        {SoulData.map((soul) => {
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
  );
};

export default Table;
