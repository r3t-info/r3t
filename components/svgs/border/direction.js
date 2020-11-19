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
      viewBox="0 0 2622 127"
      className={classNames}
      preserveAspectRatio="none"
    >
      <g className="fill-arrow stroke-arrow">
        <path fill="inherit" d="M2.6.1h2616.8L1311 126.9z" />
        <path
          stroke="inherit"
          strokeWidth="5"
          strokeMiterlimit="5"
          d="M2616.8.2L1311 126.8 5.2.2h2611.6m5.2-.2H0l1311 127L2622 0z"
        />
      </g>
    </svg>
  );
}
