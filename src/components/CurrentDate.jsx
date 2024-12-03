import React from "react";

const CurrentDate = ({ date }) => {
  const days = ["НД", "ПН", "ВТ", "СР", "ЧТ", "ПТ", "СБ"];
  const months = [
    "січня", "лютого", "березня", "квітня", "травня", "червня",
    "липня", "серпня", "вересня", "жовтня", "листопада", "грудня"
  ];

  const dayName = days[date.getDay()];
  const day = date.getDate();
  const month = months[date.getMonth()];
  const year = date.getFullYear().toString().slice(-2);

  return (
    <span>
      {`${dayName}, ${day} ${month}, ${year}р`}
    </span>
  );
};

export default CurrentDate;
