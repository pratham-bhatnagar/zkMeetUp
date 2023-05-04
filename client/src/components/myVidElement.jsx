import { useHuddleStore } from "@huddle01/huddle01-client/store";
import React, { useEffect, useRef } from "react";

const MeVideoElem = ({ webcam }) => {
  const stream = useHuddleStore((state) => state.stream);
  const isCamPaused = useHuddleStore((state) => state.isCamPaused);

  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.srcObject = stream;
    }
    console.log({ stream });
  }, [stream]);
  return (
    <div className="mx-1 h-[176px] w-[306px] flex items-center border-2 rounded bg-grey border-main">
      {webcam ? (
        <img
          src="./person.svg"
          alt="comments"
          className="mx-auto w-full h-20 bg-grey"
        />
      ) : (
        <video
          className="w-[306px] h-[176px]"
          ref={videoRef}
          autoPlay
          muted
          playsInline
        ></video>
      )}
    </div>
  );
};

export default MeVideoElem;