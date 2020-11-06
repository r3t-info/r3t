import React, { useEffect, useRef, useState } from "react";
import { useInView } from "react-intersection-observer";

// @refresh reset

export default function DataToAction(props) {
  const myPathRef = useRef(null);
  const [length, setLength] = useState(0);
  const [svgRef, inView] = useInView({ triggerOnce: false, rootMargin: "-150px 0px" });

  useEffect(() => {
    setLength(myPathRef.current.getTotalLength());
  }, [myPathRef]);

  return (
    <>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1367.15 1369.59" ref={svgRef}>
        <path
          d="M199.41 201.84c266.33-266.34 701.92-262.56 964.49 0 266.34 266.34 266.34 698.16 0 964.5s-698.16 266.33-964.49 0c-263.83-263.83-258.68-697.67.32-964.7"
          className="myPath"
          fill="none"
          stroke="#000"
          strokeMiterlimit="10"
          strokeWidth="7px"
          ref={myPathRef}
        />
        <path className="head" d="M206.58 252.92l-9.81-.1.51-48.32-48.23 3.02-.6-9.79 58.74-3.66-.61 58.85z" />
        <path d="M682.65 51.09a249.06 249.06 0 0196.92 478.43A249.07 249.07 0 01585.73 70.65a247.52 247.52 0 0196.92-19.56m0-7c-141.38 0-256 114.61-256 256s114.62 256 256 256 256-114.62 256-256-114.61-256-256-256z" />
        <path d="M485.31 316.47a1.72 1.72 0 01-1.7-1.7v-40.7a1.71 1.71 0 011.7-1.7h12.85a1.66 1.66 0 011.2.5 1.63 1.63 0 01.5 1.2v40.7a1.59 1.59 0 01-.5 1.19 1.63 1.63 0 01-1.2.51zM507.87 316.47a1.74 1.74 0 01-1.71-1.7v-29.36a1.72 1.72 0 011.71-1.7h11a1.71 1.71 0 011.7 1.7v2.08a12.68 12.68 0 014.35-3.12 14.29 14.29 0 016.11-1.29 12.24 12.24 0 016 1.51 11.4 11.4 0 014.51 4.66 16.84 16.84 0 011.73 8.13v17.39a1.72 1.72 0 01-1.7 1.7h-12a1.63 1.63 0 01-1.2-.51 1.59 1.59 0 01-.5-1.19v-16.95a3.7 3.7 0 00-.82-2.58 3.52 3.52 0 00-4.66 0 3.65 3.65 0 00-.82 2.58v16.95a1.74 1.74 0 01-1.7 1.7zM554.23 316.47a1.74 1.74 0 01-1.7-1.7v-20h-4.34a1.6 1.6 0 01-1.2-.5 1.63 1.63 0 01-.51-1.2v-7.62a1.72 1.72 0 011.71-1.7h4.34v-1.07c0-3.45.74-6.09 2.21-7.94a11.13 11.13 0 015.92-3.81 30.34 30.34 0 018.25-1h5.86a1.71 1.71 0 011.7 1.7v7.62a1.67 1.67 0 01-.5 1.2 1.63 1.63 0 01-1.2.5h-5.1a3.2 3.2 0 00-2 .54A1.87 1.87 0 00567 283v.76h7.18a1.71 1.71 0 011.7 1.7V293a1.66 1.66 0 01-.5 1.2 1.63 1.63 0 01-1.2.5H567v20a1.72 1.72 0 01-1.7 1.7zM596.51 317.1a26.59 26.59 0 01-9.77-1.58 12.71 12.71 0 01-6.08-4.72 15.54 15.54 0 01-2.42-7.75c0-1-.07-2-.07-3s0-2 .07-2.93a14.63 14.63 0 012.58-7.78 13.76 13.76 0 016.24-4.7 29.23 29.23 0 0118.9 0 13.78 13.78 0 016.23 4.7 14.72 14.72 0 012.59 7.78c.08.92.12 1.9.12 2.93s0 2-.12 3a15.65 15.65 0 01-2.43 7.75 12.71 12.71 0 01-6.08 4.72 26.57 26.57 0 01-9.76 1.58zm0-10.08c1.21 0 2-.35 2.26-1a10.06 10.06 0 00.57-3.25q.06-.94.06-2.64c0-1.14 0-2-.06-2.65a10.43 10.43 0 00-.57-3.18c-.29-.73-1-1.1-2.26-1.1s-1.93.37-2.24 1.1a9.74 9.74 0 00-.6 3.18c0 .63-.06 1.51-.06 2.65s0 2 .06 2.64a9.4 9.4 0 00.6 3.25c.31.65 1.06.98 2.24.98zM621.26 316.47a1.74 1.74 0 01-1.7-1.7v-29.36a1.72 1.72 0 011.7-1.7h11a1.71 1.71 0 011.7 1.7v2.2a17.09 17.09 0 014.5-2.83 13.42 13.42 0 015.33-1.07h3a1.71 1.71 0 011.7 1.7v9.83a1.72 1.72 0 01-1.7 1.7h-8.12a3.33 3.33 0 00-3.78 3.78v14a1.6 1.6 0 01-.51 1.19 1.63 1.63 0 01-1.2.51zM653.9 316.47a1.63 1.63 0 01-1.2-.51 1.59 1.59 0 01-.5-1.19v-29.36a1.63 1.63 0 01.5-1.2 1.66 1.66 0 011.2-.5h10.39a1.67 1.67 0 011.2.5 1.63 1.63 0 01.5 1.2v2.08a12.06 12.06 0 013.37-2.87 11 11 0 015.39-1.54q7.44-.25 10 5.16a11.58 11.58 0 014.1-3.68 11.14 11.14 0 015.54-1.48 11.76 11.76 0 015.83 1.45 10.4 10.4 0 014.19 4.53 17.8 17.8 0 011.58 8.07v17.64a1.6 1.6 0 01-.51 1.19 1.63 1.63 0 01-1.2.51h-11.13A1.63 1.63 0 01692 316a1.59 1.59 0 01-.5-1.19v-17.37a4.09 4.09 0 00-.32-1.7 2.34 2.34 0 00-.85-1 2.46 2.46 0 00-1.35-.34 2.51 2.51 0 00-1.33.34 2.11 2.11 0 00-.85 1 4.48 4.48 0 00-.28 1.7v17.33a1.74 1.74 0 01-1.7 1.7h-11.14a1.72 1.72 0 01-1.7-1.7v-17.33a4.09 4.09 0 00-.32-1.7 2.34 2.34 0 00-.85-1 2.44 2.44 0 00-1.35-.34 2.3 2.3 0 00-1.32.37 2.58 2.58 0 00-.89 1 3.89 3.89 0 00-.31 1.67v17.33a1.74 1.74 0 01-1.7 1.7zM721.75 317.1a14.65 14.65 0 01-6.37-1.32 10.66 10.66 0 01-4.31-3.6 8.84 8.84 0 01-1.54-5.1 8.31 8.31 0 013.74-7.21 24.86 24.86 0 0110.05-3.69l6.68-1.07v-.06a7.43 7.43 0 00-.28-2.4c-.19-.5-.73-.75-1.61-.75a2.6 2.6 0 00-1.42.34 8.28 8.28 0 00-1.16 1 2.41 2.41 0 01-1.77.69h-10.71a1.49 1.49 0 01-1-.37 1.16 1.16 0 01-.34-1 6.55 6.55 0 011-2.81 11.1 11.1 0 012.93-3.11 17 17 0 015.11-2.52 24.42 24.42 0 017.53-1 27.15 27.15 0 017.46.91 14.15 14.15 0 015.26 2.65 10.68 10.68 0 013.12 4.28 15.22 15.22 0 011 5.77v18.08a1.72 1.72 0 01-1.7 1.7h-11a1.74 1.74 0 01-1.7-1.7V313a8.57 8.57 0 01-2.23 2.18 10.86 10.86 0 01-3.06 1.41 12.63 12.63 0 01-3.68.51zm4.34-9.33a4.42 4.42 0 002.18-.5 3.37 3.37 0 001.42-1.61 6.64 6.64 0 00.5-2.74v-.06l-3.72.82a4.29 4.29 0 00-2.2 1 2 2 0 00-.57 1.32 1.54 1.54 0 00.28.85 2.1 2.1 0 00.82.66 3 3 0 001.29.26zM770.51 316.47a24.75 24.75 0 01-8.1-1.23 11 11 0 01-5.6-4.19q-2.05-3-2-8.13v-8.19h-5a1.59 1.59 0 01-1.19-.5 1.63 1.63 0 01-.51-1.2v-7.62a1.72 1.72 0 011.7-1.7h5v-10.27a1.71 1.71 0 011.7-1.7h11a1.72 1.72 0 011.71 1.7v10.27h7.93a1.66 1.66 0 011.2.5 1.63 1.63 0 01.5 1.2V293a1.71 1.71 0 01-1.7 1.7h-7.93v6.93a3.64 3.64 0 00.66 2.3 2.41 2.41 0 002 .85h5.74a1.74 1.74 0 011.7 1.7v8.26a1.74 1.74 0 01-1.7 1.7zM785.44 316.47a1.72 1.72 0 01-1.7-1.7v-29.36a1.71 1.71 0 011.7-1.7h11.28a1.72 1.72 0 011.7 1.7v29.36a1.74 1.74 0 01-1.7 1.7zm.31-36.23a1.59 1.59 0 01-1.19-.5 1.64 1.64 0 01-.51-1.2v-7.62a1.72 1.72 0 011.7-1.7h10.65a1.71 1.71 0 011.7 1.7v7.62a1.67 1.67 0 01-.5 1.2 1.63 1.63 0 01-1.2.5zM821.47 317.1a26.57 26.57 0 01-9.76-1.58 12.71 12.71 0 01-6.08-4.72 15.54 15.54 0 01-2.42-7.75c-.05-1-.07-2-.07-3s0-2 .07-2.93a14.63 14.63 0 012.58-7.78 13.76 13.76 0 016.24-4.7 29.2 29.2 0 0118.89 0 13.76 13.76 0 016.24 4.7 14.72 14.72 0 012.59 7.78c.08.92.12 1.9.12 2.93s0 2-.12 3a15.65 15.65 0 01-2.43 7.75 12.71 12.71 0 01-6.08 4.72 26.59 26.59 0 01-9.77 1.58zm0-10.08c1.22 0 2-.35 2.27-1a10.06 10.06 0 00.57-3.25q.06-.94.06-2.64c0-1.14 0-2-.06-2.65a10.43 10.43 0 00-.57-3.18c-.29-.73-1-1.1-2.27-1.1s-1.92.37-2.23 1.1a9.74 9.74 0 00-.6 3.18c0 .63-.06 1.51-.06 2.65s0 2 .06 2.64a9.4 9.4 0 00.6 3.25c.31.65 1.06.98 2.23.98zM846.23 316.47a1.74 1.74 0 01-1.7-1.7v-29.36a1.72 1.72 0 011.7-1.7h11a1.71 1.71 0 011.7 1.7v2.08a12.68 12.68 0 014.35-3.12 14.29 14.29 0 016.11-1.29 12.27 12.27 0 016 1.51 11.4 11.4 0 014.51 4.66 16.84 16.84 0 011.73 8.13v17.39a1.72 1.72 0 01-1.7 1.7h-12a1.63 1.63 0 01-1.2-.51 1.59 1.59 0 01-.5-1.19v-16.95a3.7 3.7 0 00-.82-2.58 3.54 3.54 0 00-4.67 0 3.7 3.7 0 00-.81 2.58v16.95a1.6 1.6 0 01-.51 1.19 1.63 1.63 0 01-1.2.51zM1066.65 435.09a248.15 248.15 0 11-96.92 19.56 247.45 247.45 0 0196.92-19.56m0-7c-141.38 0-256 114.61-256 256s114.62 256 256 256 256-114.62 256-256-114.61-256-256-256z" />
        <path d="M889.28 700.47a1.74 1.74 0 01-1.7-1.7v-40.7a1.72 1.72 0 011.7-1.7h12a1.72 1.72 0 011.7 1.7v12.47l7.12-12.79a3.49 3.49 0 01.91-.94 2.67 2.67 0 011.61-.44h13.92a1.32 1.32 0 011 .41 1.34 1.34 0 01.41 1 1.38 1.38 0 01-.19.7l-11.34 19 12.41 20.92a1.18 1.18 0 01.19.69 1.34 1.34 0 01-.41 1 1.36 1.36 0 01-1 .41h-14.32a2.54 2.54 0 01-1.86-.6 4.61 4.61 0 01-.73-.85l-7.7-13.76v13.48a1.74 1.74 0 01-1.7 1.7zM933.7 700.47a1.72 1.72 0 01-1.7-1.7v-29.36a1.71 1.71 0 011.7-1.7h11a1.67 1.67 0 011.2.5 1.63 1.63 0 01.5 1.2v2.08a12.68 12.68 0 014.35-3.12 14.33 14.33 0 016.11-1.29 12.31 12.31 0 016 1.51 11.32 11.32 0 014.5 4.66 16.73 16.73 0 011.73 8.13v17.39a1.59 1.59 0 01-.5 1.19 1.64 1.64 0 01-1.2.51h-12a1.72 1.72 0 01-1.7-1.7v-16.95a3.65 3.65 0 00-.82-2.58 3.52 3.52 0 00-4.66 0 3.65 3.65 0 00-.82 2.58v16.95a1.72 1.72 0 01-1.7 1.7zM991.85 701.1a26.59 26.59 0 01-9.77-1.58 12.75 12.75 0 01-6.08-4.72 15.54 15.54 0 01-2.42-7.75c-.05-1-.07-2-.07-3s0-2 .07-2.93a14.63 14.63 0 012.58-7.78 13.76 13.76 0 016.24-4.7 29.23 29.23 0 0118.9 0 13.78 13.78 0 016.23 4.7 14.55 14.55 0 012.59 7.78c.08.92.12 1.9.12 2.93s0 2-.12 3a15.55 15.55 0 01-2.43 7.75 12.71 12.71 0 01-6.08 4.72 26.53 26.53 0 01-9.76 1.58zm0-10.08c1.21 0 2-.35 2.27-1a10.39 10.39 0 00.56-3.25c0-.63.07-1.51.07-2.64s0-2-.07-2.65a10.79 10.79 0 00-.56-3.18c-.3-.73-1.06-1.1-2.27-1.1s-1.93.37-2.24 1.1a10.3 10.3 0 00-.6 3.18c0 .63-.06 1.51-.06 2.65s0 2 .06 2.64a9.91 9.91 0 00.6 3.25c.31.65 1.06.98 2.24.98zM1023.35 700.47a1.85 1.85 0 01-1.42-.51 2.71 2.71 0 01-.66-1.07l-9.2-29.17a2.07 2.07 0 01-.06-.5 1.43 1.43 0 01.44-1.07 1.46 1.46 0 011.07-.44h9.7a2.12 2.12 0 012.14 1.51l3.85 13.1 4.09-13.1a2.12 2.12 0 012.14-1.51h5.86a2.12 2.12 0 012.14 1.51l4.1 13.1 3.84-13.1a2.25 2.25 0 01.66-1 2.1 2.1 0 011.48-.5h9.71a1.48 1.48 0 011.07.44 1.46 1.46 0 01.44 1.07 1.68 1.68 0 01-.07.5l-9.19 29.17a3 3 0 01-.66 1.07 1.85 1.85 0 01-1.42.51h-8.4a1.84 1.84 0 01-1.42-.51 2.71 2.71 0 01-.66-1.07l-4.48-12.72-4.53 12.72a3 3 0 01-.66 1.07 1.85 1.85 0 01-1.42.51zM1070.28 700.47a1.72 1.72 0 01-1.7-1.7v-41.33a1.71 1.71 0 011.7-1.7h11.28a1.71 1.71 0 011.7 1.7v41.33a1.72 1.72 0 01-1.7 1.7zM1105.88 701.1q-8.27 0-13.14-4.07t-4.88-12.88v-.44a18.21 18.21 0 012.36-9.13 14.15 14.15 0 016.24-5.61 21.64 21.64 0 019.35-1.89 19.68 19.68 0 0110.15 2.36 15 15 0 015.89 6.24 19 19 0 011.92 8.53v1.89a1.74 1.74 0 01-1.7 1.71h-18.78v.31a8.93 8.93 0 00.22 2.11 2.28 2.28 0 00.79 1.29 2.26 2.26 0 001.45.44 1.69 1.69 0 00.66-.12 2 2 0 00.57-.41l.6-.6a3.46 3.46 0 01.94-.73 3.25 3.25 0 011.14-.15h11.9a1.44 1.44 0 011 .38 1.11 1.11 0 01.35 1 6.34 6.34 0 01-1.1 2.87 12.73 12.73 0 01-3.12 3.24 17.77 17.77 0 01-5.29 2.62 24.8 24.8 0 01-7.52 1.04zm-2.59-21.17h5v-.06a7.54 7.54 0 00-.28-2.27 2.43 2.43 0 00-.85-1.29 2.33 2.33 0 00-1.39-.41 2.3 2.3 0 00-1.38.41 2.43 2.43 0 00-.85 1.29 7.5 7.5 0 00-.29 2.27zM1140.71 701.1a15.84 15.84 0 01-5.07-.79 10.81 10.81 0 01-4.16-2.52 12.26 12.26 0 01-2.86-4.5 21.35 21.35 0 01-1.26-6.74q-.06-1.45-.06-2.52t.06-2.46a19.58 19.58 0 011.19-6.46 12.62 12.62 0 012.87-4.5 11.63 11.63 0 014.19-2.65 14.62 14.62 0 015.1-.88 13.43 13.43 0 014.76.79 10.82 10.82 0 013.62 2.17v-12.6a1.72 1.72 0 011.7-1.7h11.66a1.71 1.71 0 011.7 1.7v41.33a1.72 1.72 0 01-1.7 1.7h-10.71a1.72 1.72 0 01-1.7-1.7v-1.45a11.3 11.3 0 01-3.78 2.74 13.31 13.31 0 01-5.55 1.04zm5.23-11.28a3.28 3.28 0 001.86-.44 2.4 2.4 0 001-1.26 7.18 7.18 0 00.34-2c.09-1 .13-1.76.13-2.37s0-1.37-.13-2.29a4.43 4.43 0 00-.41-1.71 2.52 2.52 0 00-1-1.07 3.54 3.54 0 00-1.74-.37 3.14 3.14 0 00-1.79.44 2.4 2.4 0 00-1 1.26 9.22 9.22 0 00-.41 2 24.08 24.08 0 000 4.16 9.51 9.51 0 00.41 2 2.4 2.4 0 001 1.26 3.14 3.14 0 001.74.39zM1188.28 714.33a25.17 25.17 0 01-8.92-1.36 18.11 18.11 0 01-5.7-3.27 13.34 13.34 0 01-3.08-3.78 8.2 8.2 0 01-1-2.87 1.41 1.41 0 01.47-1.2 1.78 1.78 0 011.23-.5h12.28a1.7 1.7 0 011.11.35 2.52 2.52 0 01.66.91 7.44 7.44 0 00.63.88 1.75 1.75 0 00.79.54 4.05 4.05 0 001.22.16 2.73 2.73 0 001.55-.41 2.42 2.42 0 00.88-1.23 6.45 6.45 0 00.28-2.08v-4.16a10.69 10.69 0 01-3.53 2 14.79 14.79 0 01-4.85.72 17.51 17.51 0 01-5.35-.76 10.09 10.09 0 01-4.1-2.42 11.88 11.88 0 01-2.71-4.38 22.27 22.27 0 01-1.19-6.68q-.06-1.63 0-3.21a22.59 22.59 0 011.16-6.46 12.09 12.09 0 012.71-4.5 11.07 11.07 0 014.13-2.65 15.32 15.32 0 015.35-.88 11.85 11.85 0 015.45 1.2 11.45 11.45 0 013.88 3.08v-2a1.71 1.71 0 011.7-1.7h11a1.67 1.67 0 011.2.5 1.63 1.63 0 01.5 1.2l.07 30a14.17 14.17 0 01-2.4 8.57 13.85 13.85 0 01-6.42 4.81 25 25 0 01-9 1.58zm-.76-26.27a3.53 3.53 0 001.74-.38 2.46 2.46 0 001-1.07 4.38 4.38 0 00.41-1.7 16.35 16.35 0 00.07-1.74 14.07 14.07 0 00-.07-1.66 4.43 4.43 0 00-.41-1.71 2.52 2.52 0 00-1-1.07 3.54 3.54 0 00-1.74-.37 3.14 3.14 0 00-1.79.44 2.4 2.4 0 00-1 1.26 9.22 9.22 0 00-.41 2 11.93 11.93 0 000 2.39 9.47 9.47 0 00.41 2 2.48 2.48 0 001 1.26 3.22 3.22 0 001.79.35zM1228.72 701.1q-8.25 0-13.13-4.07t-4.88-12.88v-.44a18.21 18.21 0 012.36-9.13 14.18 14.18 0 016.23-5.61 21.72 21.72 0 019.36-1.89 19.61 19.61 0 0110.14 2.36 14.84 14.84 0 015.89 6.24 19 19 0 011.93 8.53v1.89a1.74 1.74 0 01-1.71 1.71h-18.77v.31a8.43 8.43 0 00.22 2.11 2.28 2.28 0 00.79 1.29 2.26 2.26 0 001.45.44 1.69 1.69 0 00.66-.12 2 2 0 00.57-.41l.59-.6a3.47 3.47 0 01.95-.73 3.23 3.23 0 011.13-.15h11.91a1.44 1.44 0 011 .38 1.14 1.14 0 01.35 1 6.38 6.38 0 01-1.11 2.87 12.5 12.5 0 01-3.11 3.24 17.71 17.71 0 01-5.3 2.62 24.71 24.71 0 01-7.52 1.04zm-2.58-21.17h5v-.06a7.54 7.54 0 00-.28-2.27 2.48 2.48 0 00-.85-1.29 2.56 2.56 0 00-2.78 0 2.48 2.48 0 00-.85 1.29 7.87 7.87 0 00-.28 2.27zM682.65 819.09a248.15 248.15 0 11-96.92 19.56 247.45 247.45 0 0196.92-19.56m0-7c-141.38 0-256 114.61-256 256s114.62 256 256 256 256-114.62 256-256-114.61-256-256-256z" />
        <path d="M572 1084.47a1.4 1.4 0 01-1.39-1.39 1.2 1.2 0 01.07-.44l14-40.19a3.15 3.15 0 01.89-1.39 2.64 2.64 0 011.95-.69h13.67a2.64 2.64 0 011.95.69 3.15 3.15 0 01.89 1.39l14 40.19a1.2 1.2 0 01.07.44 1.34 1.34 0 01-.41 1 1.36 1.36 0 01-1 .41h-11.55a2.39 2.39 0 01-1.74-.54 3.06 3.06 0 01-.72-1l-1.51-4.16h-13.55l-1.51 4.16a3.24 3.24 0 01-.69 1 2.37 2.37 0 01-1.77.54zm18.84-18H598l-3.59-11.72zM637.27 1085.1a22 22 0 01-8.7-1.67 15.1 15.1 0 01-6.3-4.88 14.15 14.15 0 01-2.64-7.88c0-.67-.07-1.51-.07-2.52s0-1.87.07-2.58a14.41 14.41 0 012.61-7.91 14.76 14.76 0 016.3-4.91 22.2 22.2 0 018.73-1.67 22.47 22.47 0 018.47 1.42 18.09 18.09 0 015.67 3.46 15.49 15.49 0 013.21 4.06 8.73 8.73 0 011.11 3.28 1.42 1.42 0 01-.48 1.2 1.74 1.74 0 01-1.23.5h-12.28a1.6 1.6 0 01-1.1-.35 3.08 3.08 0 01-.73-.91 5.68 5.68 0 00-.91-1.38 1.85 1.85 0 00-1.42-.51 1.94 1.94 0 00-2 1.07 7.61 7.61 0 00-.57 3v4.48a8.45 8.45 0 00.6 3 2.49 2.49 0 003.47.47 6.15 6.15 0 00.78-1.38 2.33 2.33 0 01.7-.92 1.77 1.77 0 011.13-.34H654a1.7 1.7 0 011.23.5 1.41 1.41 0 01.48 1.2 8.89 8.89 0 01-.67 2.3 14.52 14.52 0 01-1.89 3.18 16 16 0 01-3.43 3.24 18.31 18.31 0 01-5.23 2.52 24.11 24.11 0 01-7.22.93zM680 1084.47a24.69 24.69 0 01-8.09-1.23 11 11 0 01-5.61-4.19c-1.36-2-2.05-4.68-2.05-8.13v-8.19h-5a1.6 1.6 0 01-1.2-.5 1.64 1.64 0 01-.51-1.2v-7.62a1.72 1.72 0 011.71-1.7h5v-10.27a1.72 1.72 0 011.7-1.7h11a1.71 1.71 0 011.7 1.7v10.27h7.94a1.72 1.72 0 011.7 1.7v7.59a1.64 1.64 0 01-.51 1.2 1.59 1.59 0 01-1.19.5h-7.94v6.93a3.64 3.64 0 00.66 2.3 2.42 2.42 0 002 .85h5.73a1.72 1.72 0 011.7 1.7v8.26a1.72 1.72 0 01-1.7 1.7zM695 1084.47a1.74 1.74 0 01-1.7-1.7v-29.36a1.72 1.72 0 011.7-1.7h11.28a1.71 1.71 0 011.7 1.7v29.36a1.72 1.72 0 01-1.7 1.7zm.32-36.23a1.63 1.63 0 01-1.2-.5 1.67 1.67 0 01-.5-1.2v-7.62a1.71 1.71 0 011.7-1.7h10.65a1.72 1.72 0 011.7 1.7v7.62a1.64 1.64 0 01-.51 1.2 1.59 1.59 0 01-1.19.5zM731 1085.1a26.59 26.59 0 01-9.77-1.58 12.68 12.68 0 01-6.07-4.72 15.55 15.55 0 01-2.43-7.75c0-1-.06-2-.06-3s0-2 .06-2.93a14.63 14.63 0 012.58-7.78 13.76 13.76 0 016.24-4.7 29.23 29.23 0 0118.9 0 13.81 13.81 0 016.24 4.7 14.63 14.63 0 012.58 7.78c.08.92.13 1.9.13 2.93s0 2-.13 3a15.55 15.55 0 01-2.43 7.75 12.66 12.66 0 01-6.08 4.72 26.53 26.53 0 01-9.76 1.58zm0-10.08c1.22 0 2-.35 2.27-1a10.39 10.39 0 00.56-3.25c0-.63.07-1.51.07-2.64s0-2-.07-2.65a10.79 10.79 0 00-.56-3.18c-.3-.73-1-1.1-2.27-1.1s-1.92.37-2.24 1.1a10.3 10.3 0 00-.6 3.18c0 .63-.06 1.51-.06 2.65s0 2 .06 2.64a9.91 9.91 0 00.6 3.25c.33.65 1.07.98 2.24.98zM755.77 1084.47a1.64 1.64 0 01-1.2-.51 1.59 1.59 0 01-.5-1.19v-29.36a1.63 1.63 0 01.5-1.2 1.67 1.67 0 011.2-.5h11a1.66 1.66 0 011.2.5 1.63 1.63 0 01.5 1.2v2.08a12.68 12.68 0 014.35-3.12 14.33 14.33 0 016.11-1.29 12.31 12.31 0 016 1.51 11.32 11.32 0 014.5 4.66 16.73 16.73 0 011.73 8.13v17.39a1.59 1.59 0 01-.5 1.19 1.63 1.63 0 01-1.2.51h-12a1.72 1.72 0 01-1.7-1.7v-17a3.65 3.65 0 00-.82-2.58 3.52 3.52 0 00-4.66 0 3.65 3.65 0 00-.82 2.58v17a1.72 1.72 0 01-1.7 1.7zM298.65 435.09a248.15 248.15 0 11-96.92 19.56 247.45 247.45 0 0196.92-19.56m0-7c-141.38 0-256 114.61-256 256s114.62 256 256 256 256-114.62 256-256-114.61-256-256-256z" />
        <path d="M224.19 700.47a1.74 1.74 0 01-1.7-1.7v-40.7a1.72 1.72 0 011.7-1.7h18.15a26.86 26.86 0 0110.58 2 17.59 17.59 0 017.47 5.83 16.77 16.77 0 013 9.51c.08 1.81.12 3.4.12 4.76s0 2.91-.12 4.63a18.51 18.51 0 01-2.9 9.8 15.66 15.66 0 01-7.21 5.73 28.05 28.05 0 01-10.62 1.86zm14.05-12.29h4.1a5.68 5.68 0 002.48-.53 4.31 4.31 0 001.8-1.67 6 6 0 00.76-2.9c.08-1.22.13-2.31.15-3.28s0-1.94 0-2.93-.07-2-.15-3.18a4.89 4.89 0 00-1.67-3.84 5.84 5.84 0 00-3.69-1.2h-3.78zM278.94 701.1a14.44 14.44 0 01-6.36-1.33 10.53 10.53 0 01-4.32-3.59 8.84 8.84 0 01-1.54-5.1 8.32 8.32 0 013.75-7.21 24.75 24.75 0 0110-3.69l6.68-1.07v-.06a7.43 7.43 0 00-.28-2.4c-.19-.5-.73-.75-1.61-.75a2.6 2.6 0 00-1.42.34 8.28 8.28 0 00-1.16 1 2.4 2.4 0 01-1.77.69h-10.67a1.45 1.45 0 01-1-.37 1.14 1.14 0 01-.35-1 6.46 6.46 0 011-2.81 11 11 0 012.93-3.11 16.85 16.85 0 015.1-2.52 24.42 24.42 0 017.53-1 27.15 27.15 0 017.46.91 14.15 14.15 0 015.26 2.65 10.68 10.68 0 013.12 4.28 15 15 0 011 5.77v18.08a1.72 1.72 0 01-1.7 1.7h-11a1.74 1.74 0 01-1.71-1.7V697a8.42 8.42 0 01-2.23 2.18 10.86 10.86 0 01-3.06 1.41 12.63 12.63 0 01-3.65.51zm4.35-9.33a4.38 4.38 0 002.17-.5 3.37 3.37 0 001.42-1.61 6.64 6.64 0 00.5-2.74v-.06l-3.72.82a4.29 4.29 0 00-2.2 1 2 2 0 00-.57 1.32 1.54 1.54 0 00.28.85 2.1 2.1 0 00.82.66 3 3 0 001.3.26zM327.7 700.47a24.79 24.79 0 01-8.1-1.23 11 11 0 01-5.6-4.19q-2.06-3-2.05-8.13v-8.19h-5a1.59 1.59 0 01-1.19-.5 1.63 1.63 0 01-.51-1.2v-7.62a1.72 1.72 0 011.7-1.7h5v-10.27a1.71 1.71 0 011.7-1.7h11a1.72 1.72 0 011.7 1.7v10.27h7.94a1.72 1.72 0 011.7 1.7V677a1.63 1.63 0 01-.51 1.2 1.59 1.59 0 01-1.19.5h-7.94v6.93A3.64 3.64 0 00327 688a2.42 2.42 0 002 .85h5.73a1.72 1.72 0 011.7 1.7v8.26a1.72 1.72 0 01-1.7 1.7zM351.39 701.1a14.51 14.51 0 01-6.37-1.33 10.56 10.56 0 01-4.31-3.59 8.84 8.84 0 01-1.54-5.1 8.33 8.33 0 013.74-7.21 24.86 24.86 0 0110-3.69l6.68-1.07v-.06a7.43 7.43 0 00-.28-2.4c-.19-.5-.73-.75-1.61-.75a2.6 2.6 0 00-1.42.34 8.28 8.28 0 00-1.16 1 2.4 2.4 0 01-1.77.69h-10.66a1.49 1.49 0 01-1-.37 1.16 1.16 0 01-.34-1 6.46 6.46 0 011-2.81 11 11 0 012.93-3.11 16.85 16.85 0 015.1-2.52 24.42 24.42 0 017.53-1 27.15 27.15 0 017.46.91 14.15 14.15 0 015.26 2.65 10.68 10.68 0 013.12 4.28 15.22 15.22 0 011 5.77v18.08a1.72 1.72 0 01-1.7 1.7H362a1.74 1.74 0 01-1.71-1.7V697a8.42 8.42 0 01-2.23 2.18 10.86 10.86 0 01-3.06 1.41 12.63 12.63 0 01-3.61.51zm4.34-9.33a4.42 4.42 0 002.18-.5 3.37 3.37 0 001.42-1.61 6.64 6.64 0 00.5-2.74v-.06l-3.72.82a4.29 4.29 0 00-2.2 1 2 2 0 00-.57 1.32 1.54 1.54 0 00.28.85 2.1 2.1 0 00.82.66 3 3 0 001.29.26z" />
        <path
          fill="none"
          stroke="#000"
          strokeMiterlimit="10"
          strokeWidth="7px"
          d="M299.15 428.59c0-70.75 56.81-128 127-128M938.55 300.64c70.75 0 128 56.8 128 127M426.55 1067.64c-70.75 0-128-56.81-128-127M1066.05 939.14c0 70.75-56.8 128-127 128"
        />
        <style jsx>{`
          .myPath {
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
