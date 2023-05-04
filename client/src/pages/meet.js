import React, { useEffect, useState, useRef } from "react";
import {
  BsFillCameraVideoOffFill,
  BsFillMicMuteFill,
  BsFillMicFill,
  BsFillCameraVideoFill,
} from "react-icons/bs";
import { MdExitToApp } from "react-icons/md";
import { useEventListener, useHuddle01 } from "@huddle01/react";
import { Audio, Video } from "@huddle01/react/components";
import axios from "axios";
import QRCode from "qrcode";
import {
  useAudio,
  useLobby,
  useMeetingMachine,
  usePeers,
  useRoom,
  useVideo,
} from "@huddle01/react/hooks";

import Button from "../components/Button";

export default function Meet() {
  const videoRef = useRef(null);
  const [base64, setBase64] = useState(null);
  const handleQR = async () => {
    try {
      const response = await axios.get(
        "http://localhost:8080/api/age/generate-proof?age=20"
      );
      const img = await QRCode.toDataURL(JSON.stringify(response.data));
      console.log(img);
      setBase64(img);
    } catch (err) {}
  };
  const { state, send } = useMeetingMachine();
  // Event Listner
  useEventListener("lobby:cam-on", () => {
    if (state.context.camStream && videoRef.current)
      videoRef.current.srcObject = state.context.camStream;
  });

  const { initialize, isInitialized } = useHuddle01();
  const { joinLobby } = useLobby();
  const {
    fetchAudioStream,
    produceAudio,
    stopAudioStream,
    stopProducingAudio,
    stream: micStream,
  } = useAudio();
  const {
    fetchVideoStream,
    produceVideo,
    stopVideoStream,
    stopProducingVideo,
    stream: camStream,
  } = useVideo();
  const { joinRoom, leaveRoom } = useRoom();
  const { peers } = usePeers();

  useEffect(() => {
    initialize("KL1r3E1yHfcrRbXsT4mcE-3mK60Yc3YR");
  }, []);

  return (
    <div className="w-[100vw]">
      {leaveRoom.isCallable && (
        <h2 className="text-3xl text-green-600 font-extrabold">Room</h2>
      )}
      <div className="mt-[20vh] p-10">
        <br />
        {leaveRoom.isCallable && (
          <>
            {" "}
            <h2 className="text-3xl text-green-600 font-extrabold">Room</h2>
            <div className="flex gap-4 flex-wrap">
              {produceAudio.isCallable ? (
                <button
                  className="flex px-2 py-1 items-center"
                  // disabled={!produceAudio.isCallable}
                  onClick={() => produceAudio(micStream)}
                >
                  <BsFillMicFill className="mx-2" /> Unmute
                </button>
              ) : (
                <button
                  className="flex px-2 py-1 items-center"
                  // disabled={!stopProducingAudio.isCallable}
                  onClick={() => stopProducingAudio()}
                >
                  <BsFillMicMuteFill className="mx-2" /> Mute
                </button>
              )}
              {produceVideo.isCallable && !stopProducingVideo.isCallable && (
                <div className=" w-[300px] h-[200px] bg-slate-600 mx-auto "></div>
              )}

              {/* <Button disabled={!leaveRoom.isCallable} onClick={leaveRoom}>
                LEAVE_ROOM
              </Button> */}
            </div>
            <div>
              {" "}
              {produceVideo.isCallable ? (
                <button
                  className="flex px-2 py-1 items-center"
                  // disabled={!produceVideo.isCallable}
                  onClick={() => produceVideo(camStream)}
                >
                  <BsFillCameraVideoFill /> Turn On Cam
                </button>
              ) : (
                <button
                  className="flex px-2 py-1 items-center"
                  // disabled={!stopProducingVideo.isCallable}
                  onClick={() => stopProducingVideo()}
                >
                  <BsFillCameraVideoOffFill className="mx-2" /> Turn Cam Off
                </button>
              )}
            </div>
          </>
        )}
      </div>
      <div>
        {!produceVideo.isCallable ? (
          <video
            className=" h-[200px] mx-auto border-purple-600 rounded border-2 w-fit hidden  bg-slate-700"
            ref={videoRef}
            autoPlay
            muted
          />
        ) : null}
        {joinLobby.isCallable && (
          <button
            className="rounded-full flex  items-center px-3 py-2 mt-2 bg-gray-800 text-gray-200 cursor-pointer disabled:hidden mx-auto"
            disabled={!joinLobby.isCallable}
            onClick={() => {
              joinLobby("rrz-zamc-ppe");
            }}
          >
            <span className="font-bold text-[20px] mx-2"> +</span> Join Lobby
          </button>
        )}
        <div className="flex  justify-center items-center gap-4 flex-wrap w-[600px] mx-auto">
          <button
            className=" flex  items-center rounded-full px-3 py-2 bg-gray-800 text-gray-200 cursor-pointer disabled:hidden"
            disabled={!fetchVideoStream.isCallable}
            onClick={fetchVideoStream}
          >
            <BsFillCameraVideoFill className="mx-2 " /> video access
          </button>

          <button
            className="flex  items-center rounded-full px-3 py-2 bg-gray-800 text-gray-200 cursor-pointer disabled:hidden"
            disabled={!fetchAudioStream.isCallable}
            onClick={fetchAudioStream}
          >
            <BsFillMicFill className="mx-2 " /> audio access
          </button>

          <button
            className="rounded-full flex items-center px-3 py-2 bg-gray-800 text-gray-200 cursor-pointer disabled:hidden"
            disabled={!joinRoom.isCallable}
            onClick={joinRoom}
          >
            <span className="font-bold text-[20px] mx-2"> +</span> Join Room
          </button>

          <button
            className="rounded-full px-3 py-2 bg-gray-800 text-gray-200 cursor-pointer disabled:hidden flex items-center"
            disabled={!state.matches("Initialized.JoinedLobby")}
            onClick={() => send("LEAVE_LOBBY")}
          >
            Leave Lobby <MdExitToApp className="mx-2" />
          </button>

          {/* <button className="rounded-full px-3 py-2 bg-gray-800 text-gray-200 cursor-pointer disabled:hidden"
            disabled={!stopVideoStream.isCallable}
            onClick={stopVideoStream}
          >
            <BsFillCameraVideoOffFill/>
          </button> */}
          {/* <button className="rounded-full px-3 py-2 bg-gray-800 text-gray-200 cursor-pointer disabled:hidden"
            disabled={!stopAudioStream.isCallable}
            onClick={stopAudioStream}
          >
              <BsFillMicMuteFill/>
          </button>*/}
        </div>
        <div className="grid grid-cols-4">
          {Object.values(peers)
            .filter((peer) => peer.cam)
            .map((peer) => (
              <>
                {" "}
                <Video
                  key={peer.peerId}
                  peerId={peer.peerId}
                  track={peer.cam}
                  debug
                />
                <Video
                  key={peer.peerId}
                  peerId={peer.peerId}
                  track={peer.cam}
                  debug
                />
              </>
            ))}
          {Object.values(peers)
            .filter((peer) => peer.mic)
            .map((peer) => (
              <Audio key={peer.peerId} peerId={peer.peerId} track={peer.mic} />
            ))}
        </div>
      </div>
      <button
        onClick={handleQR}
        className={"px-4 py-2 text-white rounded-lg font-bold bg-purple-400"}
      >
        Generate Proof of Attendance
      </button>

      {base64 && <img src={base64} />}
    </div>
  );
}
