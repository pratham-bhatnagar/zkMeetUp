import Avvvatars from "avvvatars-react";
import { HiLocationMarker } from "react-icons/hi";
import { MdAccessTimeFilled } from "react-icons/md";
import { AiFillCalendar } from "react-icons/ai";
import { useEffect } from "react";
import React from "react";
import { useAccount } from "wagmi";
import { useRoute } from "wouter";
import supabase from "../services/supabase";

function Event() {
  const { address, isConnected } = useAccount();
  const [match, params] = useRoute("/event/:id");
  console.log({ param: params.id });
  const [event, setEvent] = React.useState([]);
  const fetchEvent = async () => {
    const { data, error } = await supabase.from("Events").eq("id", params.id);
    console.log({ error, data });
    setEvent(data);
  };
  useEffect(() => {
    fetchEvent();
  }, []);

  if (isConnected) {
    if (event?.host === address) return <h1>Host controls </h1>;
    if (event?.allowlist?.includes(address))
      return <h1>User with watch access </h1>;
    if (event?.applicants?.includes(address))
      return <h1>In Review User , host action pending </h1>;
  }
  return (
    <div className=" mt-[55px] p-10">
      <div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.5, opacity: 0 }}
        transition={{ type: "spring" }}
        whileHover={{ scale: 0.95 }}
        className="bg-[#0E1729] min-w-[360px] relative group rounded-xl p-3 pt-3 w-fit border border-slate-800 "
      >
        <img
          src="https://loremflickr.com/800/360"
          alt="event"
          className="w-[360px] h-[180px] object-fill rounded-lg mb-2"
        />
        <div className="flex items-center mt-3">
          <Avvvatars size={25} value={event?.host} style={"shape"} />

          <h1 className="ml-3 text-[#94A3B8]">{`${event?.host?.slice(
            0,
            6
          )}...${event?.host?.slice(-6)}`}</h1>
        </div>
        <h1 className="m-2 mt-4 font-bold text-white text-[18px]">
          {event?.name}
        </h1>
        <div className="rounded-xl bg-[#1D2839] p-3 gap-y-3 grid grid-cols-2 ">
          <div className="flex items-center">
            <AiFillCalendar />
            <span className="mx-2">{event?.on?.slice(0, 10)}</span>
          </div>
          <div className="flex items-center">
            <MdAccessTimeFilled />
            <span className="mx-2">{event?.on?.slice(11, 16)}</span>
          </div>
          <div className="flex items-center">
            <div className="flex items-center -space-x-5 pointer-events-none">
              <Avvvatars
                className="w-10 h-10 border-2 border-white rounded-full dark:border-gray-800 pointer-events-none"
                value={`${event?.allowlist?.[0]}random`}
                style={"shape"}
                size={25}
              />{" "}
              <Avvvatars
                className="w-10 h-10 border-2 border-white rounded-full dark:border-gray-800 pointer-events-none"
                value={`${event?.allowlist?.[0]}addr`}
                style={"shape"}
                size={25}
              />{" "}
              <Avvvatars
                className="w-10 h-10 border-2 border-white rounded-full dark:border-gray-800 pointer-events-none"
                value={event?.host}
                size={25}
                style={"shape"}
              />
              <a
                className="flex items-center justify-center w-[30px] h-[30px] text-lg font-medium text-white bg-gray-700 border-2 border-white rounded-full hover:bg-gray-600 dark:border-gray-800"
                href="#"
              >
                + {event?.allowlist?.length + 1}
              </a>
            </div>
          </div>
          <div className="flex items-center">
            <HiLocationMarker />
            <span className="mx-2"> Online</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Event;
