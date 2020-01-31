import React from "react";
import PropTypes from "prop-types";
​
const Statistic = ({ statistic }) => {
  console.log("statistic", statistic);
  return (
    <section className="statistics">
      <h2 className="title">Upload stats</h2>
      <ul className="stat-list">
        {statistic.map(({ id, label, percentage }) => (
          <li className="item" key={id}>
            <span className="label"> {label}</span>
            <span className="percentage"> {percentage}</span>
          </li>
        ))}
      </ul>
    </section>
  );
};
​
export default Statistic;
