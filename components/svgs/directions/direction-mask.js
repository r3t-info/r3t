import React, { useEffect, useState } from "react";

export default function DirectionMask(props) {
  const [classNames, setClassNames] = useState("");
  const [isPainted, setIsPainted] = useState(false);

  const stroke = isPainted ? "inherit" : "white";
  const strokeWidth = "5";
  const strokeMiterlimit = "5";

  useEffect(() => {
    if (props.className.includes("dark-arrow")) {
      setClassNames(`${props.className} direction-dark`);
      setIsPainted(true);
    }
    if (props.className.includes("light-arrow")) {
      setClassNames(`${props.className} direction-light`);
      setIsPainted(true);
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
      <g className="fill-bg">
        <path
          stroke={stroke}
          strokeWidth={strokeWidth}
          strokeMiterlimit={strokeMiterlimit}
          d="M.1 63.4V.1l1305.7 63.3z"
        />
        <path
          stroke={stroke}
          strokeWidth={strokeWidth}
          strokeMiterlimit={strokeMiterlimit}
          d="M.2.3l1300.4 63H.2V.3M0 0v63.5h1311L0 0z"
        />
        <g>
          <path
            fill={isPainted ? "inherit" : "white"}
            stroke={stroke}
            strokeWidth={strokeWidth}
            strokeMiterlimit={strokeMiterlimit}
            d="M1316.2 63.4L2621.9.1v63.3z"
          />
          <path
            fill={isPainted ? "inherit" : "white"}
            stroke={stroke}
            strokeWidth={strokeWidth}
            strokeMiterlimit={strokeMiterlimit}
            d="M2621.8.3v63H1321.3L2621.8.3m.2-.3L1311 63.5h1311V0z"
          />
        </g>
      </g>
    </svg>
  );
}
