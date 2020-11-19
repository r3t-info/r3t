import React, { useEffect, useState } from "react";

export default function DirectionMask(props) {
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
      <g className="fill-bg stroke-bg">
        <path stroke="inherit" strokeWidth="5" strokeMiterlimit="5" d="M.1 126.9V.1l1308.3 126.8z" />
        <path stroke="inherit" strokeWidth="5" strokeMiterlimit="5" d="M.2.3l1305.6 126.5H.2V.3M0 0v127h1311L0 0z" />
        <g>
          <path fill="inherit" d="M1313.6 126.9L2621.9.1v126.8z" />
          <path fill="inherit" d="M2621.8.3v126.5H1316.2L2621.8.3m.2-.3L1311 127h1311V0z" />
        </g>
      </g>
    </svg>
  );
}
