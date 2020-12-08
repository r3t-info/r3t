import React, { useEffect, useState } from "react";

export default function Direction(props) {
  const [classNames, setClassNames] = useState("");

  useEffect(() => {
    if (props.className.includes("dark-arrow")) {
      setClassNames(`${props.className} direction-dark`);
    }
    if (props.className.includes("light-arrow")) {
      setClassNames(`${props.className} direction-light`);
    }
  }, []);

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      overflow="visible"
      viewBox="0 0 2622 63.5"
      className={classNames}
      preserveAspectRatio="none"
    >
      <g className="fill-arrow">
        <path fill="inherit" d="M5.2.1h2611.6L1311 63.4z" />
        <path
          stroke="inherit"
          strokeWidth="5"
          strokeMiterlimit="5"
          d="M2611.7.2L1311 63.3 10.3.2h2601.4M2622 0H0l1311 63.5L2622 0z"
        />
      </g>
    </svg>
  );
}
