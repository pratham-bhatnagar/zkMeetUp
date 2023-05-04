import Avvvatars from "avvvatars-react";
import { HiLocationMarker } from "react-icons/hi";
import { MdAccessTimeFilled } from "react-icons/md";
import { BsGithub } from "react-icons/bs";
import { useEffect } from "react";
import React from "react";
import { useAccount } from "wagmi";
import { useRoute } from "wouter";
import supabase from "../services/supabase";
import EventCard from "../components/EventCard";
import Spinner from "../components/Spinner";

function Event() {
  const { address, isConnected } = useAccount();
  const [match, params] = useRoute("/event/:id");
  console.log({ param: params.id });
  const [event, setEvent] = React.useState([]);
  const fetchEvent = async () => {
    const { data, error } = await supabase
      .from("Events")
      .select("*")
      .eq("id", params.id);
    console.log({ error, data });
    setEvent(data?.[0]);
  };
  useEffect(() => {
    console.log("a");
    fetchEvent();
    console.log("b");
  }, []);
  console.log({ event });
  if (event?.host === address) return <h1>Host controls </h1>;
  else if (event?.allowlist?.includes(address))
    return <h1>User with watch access </h1>;
  else if (event?.applicants?.includes(address))
    return <h1>In Review User , host action pending </h1>;
  else
    return (
      <div className="w-[100vw]  p-4">
        {!event ? (
          <div className="w-full h-[800px] flex items-center justify-center">
            <Spinner size="4rem" />
          </div>
        ) : (
          <div className=" ">
            <div className="bg-[#0E1729]  relative group rounded-xl p-3 pt-3 w-fit border border-slate-800 ">
              <h1 className="text-[28px] text-gray-100 font-semibold">
                {event.name}
              </h1>
            </div>

            <div className="flex gap-5">
              <EventCard event={event} buttonOnClick={null} />
              <div className="m-4 ">{event?.description}</div>
            </div>
            <div className="bg-[#0E1729] mt-5 mx-auto p-4 w-[500px]    relative group rounded-xl  pt-3  border border-slate-800 ">
              <div className="flex w-full justify-between items-center mb-[30px]">
                <h1 className="font-semibold m-2 text-3xl text-gray-200">
                  Eligibility Checks{" "}
                </h1>
                <div className="border-[1px] rounded-full border-slate-600">
                  <div className="text-xl h-fit mx-1 gradient text-gray-200  px-3  w-fit rounded-full">
                    powered by ZK{" "}
                  </div>
                </div>
              </div>

              <div className="text-gray-300 text-[18px]">Budiler's Proof</div>
              <h2 className="text-[15px] mb-3">
                Event requires {event.git_req} repositories
              </h2>
              <div className=" bg-[#0E1829] mb-5 border-[1px] border-gray-600 flex p-2 items-center justify-center rounded-full text-gray-100">
                {" "}
                <BsGithub className="mr-3" />
                Prove with Github
              </div>
              <h2 className="text-[15px] mb-3">
                Event requires {event.git_req} repositories
              </h2>
              <div className="mb-4 bg-[#0E1829] border-[1px] border-gray-600 flex p-2 items-center justify-center rounded-full text-gray-100">
                {" "}
                <BsGithub className="mr-3" />
                Prove with Github
              </div>
              <h2 className="text-[15px] mb-3">
                Event requires {event.git_req} repositories
              </h2>
              <div className="mb-10 bg-[#0E1829] border-[1px] border-gray-600 flex p-2 items-center justify-center rounded-full text-gray-100">
                {" "}
                <BsGithub className="mr-3" />
                Prove with Github
              </div>
            </div>
          </div>
        )}
      </div>
    );
}

export default Event;
