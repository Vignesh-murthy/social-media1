import React from "react";
import '../index.css';

const Stats = ({ data }) => {
  return (
    <div className="stats">
      <p><span>Total Stories:</span> {data.totalStories}</p>
      <p><span>Total Follows:</span> {data.totalFollows}</p>
      <p><span>Total Saves:</span> {data.totalSaves}</p>
      <p><span>Total Comments:</span> {data.totalComments}</p>
      <p><span>Total Shares:</span> {data.totalShares}</p>
    </div>
  );
}

export default Stats;
