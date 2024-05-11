"use client";
import React, { useState } from "react";
import dynamic from "next/dynamic";
const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });

const Home = () => {
  const [userStream, setUserStream] = useState<any>();

  const callStream = async () => {
    const stream = await navigator.mediaDevices.getUserMedia({
      audio: true,
      video: true,
    });
    setUserStream(stream);
  };

  const stopStream = async () => {
    setUserStream(null);
  };

  return (
    <div>
      <div className="m-10">
        <ReactPlayer
          width="1280px"
          height="720px"
          url={
            "https://www.youtube.com/watch?v=Q9wXgdxJq48&list=PLgUwDviBIf0pMFMWuuvDNMAkoQFi-h0ZF&index=29"
          }
          controls={true}
        />
      </div>
      <button
        type="button"
        onClick={callStream}
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 m-10"
      >
        Stream
      </button>
      <button
        type="button"
        onClick={stopStream}
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 m-10"
      >
        Close Stream
      </button>
      <div className="m-10">
        <ReactPlayer
          width="1280px"
          height="720px"
          url={userStream}
          controls={true}
        />
      </div>
    </div>
  );
};

export default Home;
