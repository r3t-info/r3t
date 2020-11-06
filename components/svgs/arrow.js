import React, { useEffect, useRef, useState } from "react";
import { useInView } from "react-intersection-observer";

// @refresh reset

export default function Arrow(props) {
  const pathRef = useRef(null);
  const [length, setLength] = useState(0);
  const [svgRef, inView] = useInView({ triggerOnce: false, rootMargin: "-100px 0px" });

  useEffect(() => {
    setLength(pathRef.current.getTotalLength());
  }, [pathRef]);

  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 600" ref={svgRef}>
        <path
          d="M118.5 107.5c46-24 76-29 140-8s151 42 168 97 71 110 71 171 5 93-52 116-158 34-200 10-37-68-61-114-14-24-82-56-95-74-78-119 48-73 94-97z"
          clipRule="evenodd"
          className="path"
          fill="none"
          stroke="#000"
          strokeWidth="9"
          strokeMiterlimit="10"
          ref={pathRef}
        />
        <style jsx>{`
          .path {
            stroke-dasharray: ${length};
            stroke-dashoffset: ${length};
            animation: dash 1.5s ease-in-out ${inView ? "running" : "paused"} forwards;
          }
          @keyframes dash {
            to {
              stroke-dashoffset: 0;
            }
          }
        `}</style>
      </svg>
  );
}
