import axios from "axios";
import Avvvatars from "avvvatars-react";
import { AiFillCalendar } from "react-icons/ai";
import { HiLocationMarker } from "react-icons/hi";
import { MdAccessTimeFilled } from "react-icons/md";
import { BsGithub } from "react-icons/bs";
import React, { useEffect } from "react";
import { ImTicket } from "react-icons/im";
import { useAccount } from "wagmi";
import { useRoute } from "wouter";
import supabase from "../services/supabase";
import EventCard from "../components/EventCard";
import Spinner from "../components/Spinner";
import { toast } from "react-hot-toast";

function Event() {
  const { address, isConnected } = useAccount();
  const [match, params] = useRoute("/event/:id");
  console.log({ param: params.id });
  const [event, setEvent] = React.useState([]);
  const [readMore, setReadMore] = React.useState(false);
  const [auth, setAuth] = React.useState(null);
  const [proof, setProof] = React.useState(null);
  const [eligiblity, setEligiblity] = React.useState(false);
  const fetchEvent = async () => {
    const { data: authData } = await supabase.auth.getUser();
    setAuth(authData);
    const { data, error } = await supabase
      .from("Events")
      .select("*")
      .eq("id", params.id);
    console.log({ error, data });
    setEvent(data?.[0]);
  };
  useEffect(() => {
    fetchEvent();
  }, []);
  async function signInGithub() {
    const redirectTo = window.location.href;
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: "github",
      options: {
        redirectTo: redirectTo,
      },
    });

    return data;
  }
  const githubZk = async () => {
    if (!auth) return await signInGithub();
    const user_name = auth.user.user_metadata.user_name;
    const { data } = await axios.get(
      `https://api.github.com/users/${user_name}/repos`
    );
    const repo_total = data.length;
    const res = await axios.get(
      `http://localhost:8080/api/twitter/generate-proof?followers=201&threshold=200`
    );
    setProof(JSON.stringify(res.data));

    const { data: zkProof } = await axios.post(
      `http://localhost:8080/api/twitter/verify-proof`,
      JSON.parse(proof)
    );
    if (zkProof.result) {
      toast.success("Yay! Eligiblity proved", {
        icon: "🚀",
        style: {
          borderRadius: "10px",
          background: "#333",
          color: "#fff",
        },
      });
    } else {
      toast.error("Sorry you are not eligible", {
        icon: "🚀",
        style: {
          borderRadius: "10px",
          background: "#333",
          color: "#fff",
        },
      });
    }
    console.log({ zkProof });
    setEligiblity(true);
  };

  if (event?.host === address) return <h1>Host controls </h1>;
  else if (event?.allowlist?.includes(address))
    return <h1>User with watch access </h1>;
  else if (event?.applicants?.includes(address))
    return <h1>Your on event waitlist</h1>;
  else
    return (
      <div className="w-[100vw]  p-4">
        {!event ? (
          <div className="w-full h-[800px] flex items-center justify-center">
            <Spinner size="4rem" />
          </div>
        ) : (
          <div className="bg-[#0E1729] min-h-[90vh] pb-[20px] z-0 pt-[250px] relative rounded-xl  border border-slate-800 w-[1001px] mx-auto">
            {event.cover_image ? (
              <img
                src={`${event.cover_image}`}
                alt={event.name}
                className="absolute top-0 z-0 w-[1000px] rounded-xl  h-[300px]"
              />
            ) : null}
            <div
              class="absolute top-0 z-0 w-[1000px]  h-[300px] "
              style={{
                background: "linear-gradient(to bottom, transparent, #0E1729)",
              }}
            ></div>

            <div className="absolute top-[240px] left-5 text-[18px] text-gray-400  flex items-center justify-between w-[980px] ">
              <h1 className="text-[35px] text-white   font-semibold mr-[20px]">
                {event?.name}
              </h1>
              <div className="text-[13px] flex items-center">
                {" "}
                <h2 className="mr-2"> hosted by </h2>{" "}
                <Avvvatars
                  size={25}
                  value={event?.host}
                  style={"shape"}
                  className="ml-2"
                />
                <h2 className="mx-2 text-gray-300"> {event?.host} </h2>
              </div>
            </div>
            <div className="mt-[100px]"></div>
            {
              event?.description?.length > 40 ? (
                <div className="m-4  ">
                  {readMore ? (
                    event.description
                  ) : (
                    <>
                      {event.description.slice(40)}{" "}
                      <span
                        className="text-purple-400 cursor-pointer"
                        onClick={setReadMore(true)}
                      >
                        read more ...
                      </span>
                    </>
                  )}
                </div>
              ) : null
              // <div className="m-4 mt-[60px] ">{event?.description}</div>
            }
            <div className="rounded-xl bg-[#1D2839] p-3 gap-y-3 grid grid-cols-2 place-content-center w-[500px] m-2 mx-auto mb-10">
              <div className="flex items-center ml-20">
                <AiFillCalendar />
                <span className="mx-2">{event?.on?.slice(0, 10)}</span>
              </div>
              <div className="flex items-center ml-20">
                <MdAccessTimeFilled />
                <span className="mx-2">{event?.on?.slice(11, 16)}</span>
              </div>
              <div className="flex items-center ml-20">
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
              <div className="flex items-center ml-20">
                <HiLocationMarker />
                <span className="mx-2"> Online</span>
              </div>
            </div>
            <div className="bg-[#0E1729]  mt-5 mx-auto p-4 w-[500px]    relative group rounded-xl  pt-3  border border-slate-800 ">
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

              {/* <h1 className="text-gray-300 text-[18px] pt-3">Age Proof</h1>
              <h2 className="text-[15px] mb-3">
                Event requires minimum age of {event.age_req} years
              </h2>
              <div className=" bg-[#0E1829]  border-[1px] border-gray-600 flex p-2 items-center justify-center rounded-full text-gray-100">
                {" "}
                <BsGithub className="mr-3" />
                Prove with
              </div> */}

              <h1 className="text-gray-300 text-[18px]  pt-3">
                Budiler's Proof
              </h1>
              <h2 className="text-[15px] mb-3 flex justify-between">
                Event requires {event.git_req} repositories{" "}
                {proof && (
                  <span
                    className="text-purple-500 text-[13px] cursor-pointer"
                    onClick={() => {
                      navigator.clipboard.writeText(proof);
                      toast.success("Copied!", {
                        style: {
                          borderRadius: "10px",
                          background: "#333",
                          color: "#fff",
                        },
                      });
                    }}
                  >
                    copy verifiable claim
                  </span>
                )}
              </h2>

              <div
                onClick={githubZk}
                className="mb-5 cursor-pointer bg-[#0E1829] border-[1px] border-gray-600 flex p-2 items-center justify-center rounded-full text-gray-100"
              >
                {" "}
                <BsGithub className="mr-3" />
                {"Prove with Github"}
              </div>

              {/* <h1 className="text-gray-300 text-[18px]  ">Twitter Proof</h1>
              <h2 className="text-[15px] mb-3">
                Event requires minimum {event.git_req} followers
              </h2>
              <div className="mb-10 bg-[#0E1829] border-[1px] border-gray-600 flex p-2 items-center justify-center rounded-full text-gray-100">
                {" "}
                <BsGithub className="mr-3" />
                Prove with Github
              </div> */}
            </div>
            {eligiblity && (
              <div
                className="bg-[#1D2839] cursor-pointer flex  px-3 w-[500px]   items-center justify-center py-3 mt-10 rounded-full text-white mx-auto"
                onClick={async () => {
                  const { data, error } = await supabase
                    .from("Events")
                    .update({ allowlist: [address, ...event.allowlist] })
                    .match({ id: params.id });
                  console.log({ data });
                }}
              >
                <ImTicket /> <h1 className="ml-2">Enter Event</h1>
              </div>
            )}
          </div>
        )}
      </div>
    );
}

export default Event;
