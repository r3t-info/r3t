import React, { useEffect, useState } from "react";

export default function Direction(props) {

  const [classNames, setClassNames] = useState("");

  useEffect(() => {
    if (props.className.includes("text-dark")) {
      setClassNames(`${props.className} direction-dark`)
    } else {
      setClassNames(`${props.className} direction-light`)
    }
  }, []);

  return (
    <svg xmlns="http://www.w3.org/2000/svg" overflow="visible" viewBox="0 0 2623 131.5" className={classNames}><path fill="#FFFAF0" strokeWidth="5" stroke="#FFFAF0" strokeMiterlimit="10" d="M1311.7 130.5L5.4 1H.5v130h2622V1h-4.4z"/><path strokeWidth="1" strokeMiterlimit="10" d="M.8.5l1310.9 130L2622.6.5z"/></svg>
  )

  return (
    <svg xmlns="http://www.w3.org/2000/svg" overflow="visible" viewBox="0 0 2622.1 130.5" className={classNames}><path fill="transparent" d="M1311.2 130L4.9.5H0v130h2622V.5h-4.4z"/><path date-name="direction" d="M.3 0l1310.9 130L2622.1 0z"/></svg>
  )
  return (
    <svg xmlns="http://www.w3.org/2000/svg" overflow="visible" viewBox="0 0 2621.8 130" className={props.className}>
      <path id="direction" d="M0 0l1310.9 130L2621.8 0z" />
    </svg>
  );
}
