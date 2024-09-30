const Table = ({
  SoulName,
  SoulNumber,
  SoulLocation,
  SoulStatus,
  SoulFirstMeetingDayDate,
  MeetBy,
  SoulFollowUp,
  SoulResponse,
}) => {
  return (
    <table className="c-table">
      <caption className="font-bold text-2xl mb-5">
        Soul Attendance Table
      </caption>
      <tr className="">
        <th>Name</th>
        <th>Number</th>
        <th>Location</th>
        <th>Status</th>
        <th>Date</th>
        <th>Save by</th>
        <th>Follow-up</th>
        <th>Response</th>
      </tr>
      <tr>
        <td>{SoulName}</td>
        <td>{SoulNumber}</td>
        <td>{SoulLocation}</td>
        <td>{SoulStatus}</td>
        <td>{SoulFirstMeetingDayDate}</td>
        <td>{MeetBy}</td>
        <td>{SoulFollowUp}</td>
        <td>{SoulResponse}</td>
      </tr>
    </table>
  );
};

export default Table;
