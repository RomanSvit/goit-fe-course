import React from "react";
const Statistic = ({ statistic, title }) => {
  return (
    <section className="statistic">
      <h2 className="title">{title}</h2>
      <ul className="stat-list">
        {statistic.map((id, label, percentage) => (
          <li className="item" key={id}>
            <span className="label">{label}</span>
            <span className="percentage">{percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
};
export default Statistic;
