import React from "react";

const SoulList = ({
  SoulName,
  SoulNumber,
  SoulLocation,
  SoulStatus,
  SoulFirstMeetingDayDate,
  MeetBy,
  SoulFollowUp,
  SoulResponse,
}) => {
  return <tr>
      <td>{SoulName}</td>
      <td>{SoulNumber}</td>
      <td>{SoulLocation}</td>
      <td>{SoulStatus}</td>
      <td>{SoulFirstMeetingDayDate}</td>
      <td>{MeetBy}</td>
      <td>{SoulFollowUp}</td>
      <td>{SoulResponse}</td>
    </tr>
};

export default SoulList;
