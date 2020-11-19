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
      {/* <g className="fill-arrow stroke-arrow">
        <path fill="inherit" d="M2.6.1h2616.8L1311 126.9z" />
        <path
          stroke="inherit"
          strokeWidth="5"
          strokeMiterlimit="5"
          d="M2616.8.2L1311 126.8 5.2.2h2611.6m5.2-.2H0l1311 127L2622 0z"
        />
      </g> */}
    </svg>
  );

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      overflow="visible"
      viewBox="0 0 2622 127"
      className={classNames}
      preserveAspectRatio="none"
    >
      <g>
        <path className="fill-bg" fill="inherit" d="M.1.1h2621.8v126.8H.1z" />
        <path className="fill-bg" fill="inherit" d="M2621.8.2v126.5H.2V.2h2621.6m.2-.2H0v127h2622V0z" />
      </g>
      <path className="fill-arrow" fill="inherit" d="M2.6.1h2616.8L1311 126.9z" />
      <path
        className="stroke-arrow"
        stroke="inherit"
        strokeWidth="5"
        strokeMiterlimit="5"
        d="M2616.8.2L1311 126.8 5.2.2h2611.6m5.2-.2H0l1311 127L2622 0z"
      />
    </svg>
  );

  return (
    <svg xmlns="http://www.w3.org/2000/svg" overflow="visible" viewBox="0 0 2623 131.5" className={classNames}>
      <path fill="direction" stroke="none" d="M1311.7 130.5L5.4 1H.5v130h2622V1h-4.4z" />
      <path fill="direction" stroke="none" d="M.8.5l1310.9 130L2622.6.5z" />
    </svg>
  );

  return (
    <svg xmlns="http://www.w3.org/2000/svg" overflow="visible" viewBox="0 0 2622.1 130.5" className={classNames}>
      <path fill="transparent" d="M1311.2 130L4.9.5H0v130h2622V.5h-4.4z" />
      <path date-name="direction" d="M.3 0l1310.9 130L2622.1 0z" />
    </svg>
  );
  return (
    <svg xmlns="http://www.w3.org/2000/svg" overflow="visible" viewBox="0 0 2621.8 130" className={props.className}>
      <path id="direction" d="M0 0l1310.9 130L2621.8 0z" />
    </svg>
  );
}
