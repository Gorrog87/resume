import React, { useState, useEffect } from "react";

export default function DateTime() {
  let [date, setDate] = useState(new Date());

  useEffect(() => {
    let timer = setInterval(() => setDate(new Date()), 1000);
    return function cleanup() {
      clearInterval(timer);
    };
  });

  return (
    <>
      <div className="date-time">
        <span>{date.toLocaleDateString()}</span>
        <span>{date.toLocaleTimeString()}</span>
      </div>
    </>
  );
}
