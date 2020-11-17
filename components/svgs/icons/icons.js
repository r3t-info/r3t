import React, { useEffect, useState } from "react";

export default function Icons(props) {
  const [dValue, setDValue] = useState("");
  const growth = "M13 7h8m0 0v8m0-8l-8 8-4-4-6 6";
  const puzzle =
    "M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z";
  const repeat =
    "M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15";
  const team =
    "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z";

  useEffect(() => {
    props.title == "team" ? setDValue(team) : "";
    props.title == "puzzle" ? setDValue(puzzle) : "";
    props.title == "repeat" ? setDValue(repeat) : "";
    props.title == "growth" ? setDValue(growth) : "";
  }, []);

  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className={props.className}>
      <title>{props.title}</title>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={dValue} />
    </svg>
  );
}
