import { useHuddle01 } from "@huddle01/react";
import { useLobby, useAudio, useVideo, useRoom } from '@huddle01/react/hooks';
import { useEffect } from "react";

export const Meet = () => {
  const { initialize, isInitialized } = useHuddle01();
  const { joinLobby } = useLobby();
  const { fetchAudioStream, stopAudioStream, error: micError } = useAudio();
  const { fetchVideoStream, stopVideoStream, error: camError } = useVideo();
  const { joinRoom, leaveRoom } = useRoom();

  useEffect(() => {
    // its preferable to use env vars to store projectId
    initialize("KL1r3E1yHfcrRbXsT4mcE");
  }, []);

  return (
    <div>
      {isInitialized ? "Hello World!" : "Please initialize"}
      <button
        disabled={joinLobby.isCallable}
        onClick={() => joinLobby("YOUR_ROOM_ID")}
      >
        Join Lobby
      </button>

      {/* Mic */}
      <button
        disabled={!fetchAudioStream.isCallable}
        onClick={fetchAudioStream}
      >
        FETCH_AUDIO_STREAM
      </button>

      {/* Webcam */}
      <button
        disabled={!fetchVideoStream.isCallable}
        onClick={fetchVideoStream}
      >
        FETCH_VIDEO_STREAM
      </button>

      <button disabled={!joinRoom.isCallable} onClick={joinRoom}>
        JOIN_ROOM
      </button>

      <button disabled={!leaveRoom.isCallable} onClick={leaveRoom}>
        LEAVE_ROOM
      </button>
    </div>
  );
};
