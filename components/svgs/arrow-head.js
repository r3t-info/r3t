import React, { useEffect, useRef, useState } from "react";
import { useInView } from "react-intersection-observer";

// @refresh reset

export default function ArrowHead(props) {
  const pathRef = useRef(null);
  const [length, setLength] = useState(0);
  const [svgRef, inView] = useInView({ triggerOnce: false, rootMargin: "-100px 0px" });

  useEffect(() => {
    setLength(pathRef.current.getTotalLength());
  }, [pathRef]);

  return (
    <>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 517 542" ref={svgRef}>
        <path
          d="M263.5 39.5c19.53-3.1 65.51 15.68 111 87 12.77 20 97 91 97 91s-69.64-11.74-69 61c.69 79.26 45 100 45 138 0 29.7-33.49 74.23-76 80-74.16 10.06-174.84 6.75-231-27-85-51.08-97.41-154.18-101-184-4.08-33.91-12.57-104.41 34-161a164.69 164.69 0 0148.44-39.72"
          className="path"
          fill="none"
          stroke="#000"
          strokeMiterlimit="10"
          strokeWidth="5"
          ref={pathRef}
        />
        <path className="head" d="M149.5 72.5c-10.72 10.7-23 26.21-29 39.41l-2.08-25.2-17.71-18c13.93 4.07 33.69 4.91 48.79 3.79z" />
        <style jsx>{`
          .path {
            stroke-dasharray: ${length};
            stroke-dashoffset: ${length};
            animation: dash 1.25s ease-in-out ${inView ? "running" : "paused"} forwards;
          }
          .head {
            opacity: 0;
            animation: fadeIn 0.05s linear 1.2s ${inView ? "running" : "paused"} forwards;
          }
          @keyframes dash {
            to {
              stroke-dashoffset: 0;
            }
          }
          @keyframes fadeIn {
            to {
              opacity: 1;
            }
          }
        `}</style>
      </svg>
    </>
  );
}
