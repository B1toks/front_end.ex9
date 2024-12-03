import React, { useState, useEffect } from "react";
import CurrentDate from "./CurrentDate";
import CurrentTime from "./CurrentTime";
import "./DateTime.css";

const DateTime = () => {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setDate(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="datetime">
      <CurrentDate date={date} />
      <CurrentTime date={date} />
    </div>
  );
};

export default DateTime;
