import React, { useState, useRef } from "react";
import Tabs from "./tabs";
import { toast } from "react-hot-toast";
import { useAccount } from "wagmi";
import supabase from "../services/supabase";

function HostForm({ scrollRef }) {
  const { address: hostAddress } = useAccount();
  const [gating, setGating] = useState("allowlist");
  const [csvData, setCsvData] = useState([hostAddress]);
  const [addToCsv, setAddToCsv] = useState(null);
  const [ageReq, setAgeReq] = useState(null);
  const [gitReq, setGitReq] = useState(null);
  const [twitterReq, setTwitterReq] = useState(null);
  const fileInput = useRef(null);
  const fileInputHandler = (event) => {
    setCsvData([hostAddress]);
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = () => {
      const lines = reader.result.split("\n");
      const data = lines
        .map((line) => line.replace(/"/g, "").trim())
        .filter((line) => line !== "");
      setCsvData([hostAddress, ...data]);
    };

    reader.readAsText(file);
    fileInput.current.value = "";
  };
  const addStringToEnd = () => {
    if (addToCsv) {
      const newData = csvData.concat(addToCsv);
      setCsvData(newData);
      toast.success(`${addToCsv} added to allow-list`, {
        icon: "🚀",
        style: {
          borderRadius: "10px",
          background: "#333",
          color: "#fff",
        },
      });
    }
  };

  const submitEvent = async (e) => {
    e.preventDefault();
    const event_data = {
      name: e.target.elements.name.value,
      description: e.target.elements.description.value,
      host: hostAddress,
      allowlist: csvData,
      applicants: [],
      is_event_over: false,
      recording: null,
      cover_image: null,
      age_req: ageReq,
      git_req: gitReq,
      twitter_req: twitterReq,
      on: e.target.elements.date.value,
    };
    console.log({ event_data });
    const { data, error } = await supabase
      .from("Events")
      .insert([{ ...event_data }]);
    if (error) {
      console.log("Error creating event", error);
      toast.error("Something went wrong!", {
        icon: "🚧",
        style: {
          borderRadius: "10px",
          background: "#333",
          color: "#fff",
        },
      });
    }
    console.log({ data });
  };
  return (
    <section className="mt-2 max-w-[800px] mx-auto">
      <div className="flex items-center justify-center w-full">
        <label
          htmlFor="dropzone-file"
          className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-700 border-dashed rounded-lg cursor-pointer hover:bg-gray-900 bg-[#1E293B] "
        >
          <div className="flex flex-col items-center justify-center pt-5 pb-6">
            <svg
              aria-hidden="true"
              className="w-[60px] h-[60px] mb-3 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
              ></path>
            </svg>
            <p className="mb-2 text-3xl text-gray-500 dark:text-gray-400 flex">
              <span className="font-semibold mx-2">Click to upload</span> event
              cover image
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              SVG, PNG, JPG
            </p>
          </div>
          <input id="dropzone-file" type="file" className="hidden" />
        </label>
      </div>

      <form className="mt-[30px] text-lg" onSubmit={submitEvent}>
        <div className="grid gap-8 mb-6 md:grid-cols-2">
          <div>
            <label
              htmlFor="name"
              className="block m-2 text-2xl font-medium text-gray-900 dark:text-white"
            >
              Event Name <sup className="text-purple-400 text-2xl">*</sup>
            </label>
            <input
              type="text"
              id="name"
              className="bg-slate-800 text-2xl border-[1px] placeholder:text-gray-500 border-gray-500 text-gray-900 py-3 rounded-lg px-3 focus:ring-blue-500 focus:border-blue-500 block w-full   dark:border-gray-400  dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Budiler's Hangout"
              required
            />
          </div>
          <div>
            <label
              htmlFor="date"
              className="block m-2 text-2xl font-medium text-gray-900 dark:text-white"
            >
              Select Date<sup className="text-purple-400 text-2xl">*</sup>
            </label>
            <input
              type="datetime-local"
              id="date"
              placeholder={"DD/MM/YYYY, HH:MM am"}
              className="bg-slate-800 text-2xl border-[1px] placeholder:text-gray-500 border-gray-500 text-gray-900 py-3 rounded-lg px-3 focus:ring-blue-500 focus:border-blue-500 block w-full   dark:border-gray-400  dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required
            />
          </div>
          <div className="rounded-lg h-fit text-lg border-slate-700 border bg-[#1a2645] m-1 mt-2 my-0 p-3">
            <h1 className="text-2xl text-gray-300 mb-[15px] m-2">
              ZK Requirement Proofs
            </h1>
            <div className="flex flex-col gap-3 mb-5 text-gray-300">
              <div
                className={`flex items-center bg-slate-800 p-2 border rounded-full w-full justify-between ${
                  ageReq ? "border-[#306845]" : "border-gray-500"
                }`}
              >
                <div className="flex items-center">
                  <span
                    className="w-10  h-10 rounded-full bg-slate-100 cursor-pointer"
                    onClick={() => {
                      if (ageReq) setAgeReq(null);
                      else setAgeReq(18);
                    }}
                  />{" "}
                  <h1 className="text-2xl ml-5">Age Check</h1>
                </div>

                {ageReq != null && (
                  <div className="flex text-2xl text-gray-400 w-fit items-center">
                    <span className="w-[20px]  pl-2.5 text-gray-700 font-black text-3xl flex items-center justify-center rounded-full rounded-r-none  h-10 bg-slate-100">
                      <img src="/greater.svg" alt="greater or equal" />
                    </span>
                    <input
                      className="bg-slate-100 text-3xl  h-10 w-[40px] rounded-l-none flex items-center justify-center rounded-full text-center text-gray-800"
                      type="number"
                      value={ageReq}
                      onChange={(e) => setAgeReq(e.target.value)}
                    />{" "}
                  </div>
                )}
              </div>

              <div
                className={`flex items-center bg-slate-800 p-2 border rounded-full w-full justify-between ${
                  gitReq ? "border-[#306845]" : "border-gray-500"
                }`}
              >
                <div className="flex items-center">
                  <span
                    className="w-10  h-10 rounded-full bg-slate-100 cursor-pointer"
                    onClick={() => {
                      if (gitReq) setGitReq(null);
                      else setGitReq(1);
                    }}
                  />{" "}
                  <h1 className="text-2xl ml-5">Github Check</h1>
                </div>

                {gitReq != null && (
                  <div className="flex text-2xl text-gray-400 w-fit items-center">
                    <span className="w-[20px]  pl-2.5 text-gray-700 font-black text-3xl flex items-center justify-center rounded-full rounded-r-none  h-10 bg-slate-100">
                      <img src="/greater.svg" alt="greater or equal" />
                    </span>
                    <input
                      className="bg-slate-100 text-3xl  h-10 w-[40px] rounded-l-none flex items-center justify-center rounded-full text-center text-gray-800"
                      type="number"
                      value={gitReq}
                      onChange={(e) => setGitReq(e.target.value)}
                    />{" "}
                  </div>
                )}
              </div>

              <div
                className={`flex items-center bg-slate-800 p-2 border rounded-full w-full justify-between ${
                  twitterReq ? "border-[#306845]" : "border-gray-500"
                }`}
              >
                <div className="flex items-center">
                  <span
                    className="w-10  h-10 rounded-full bg-slate-100 cursor-pointer"
                    onClick={() => {
                      if (twitterReq) setTwitterReq(null);
                      else setTwitterReq(100);
                    }}
                  />{" "}
                  <h1 className="text-2xl ml-5">Twitter Check</h1>
                </div>

                {twitterReq != null && (
                  <div className="flex text-2xl text-gray-400 w-fit items-center">
                    <span className="w-[20px]  pl-2.5 text-gray-700 font-black text-3xl flex items-center justify-center rounded-full rounded-r-none  h-10 bg-slate-100">
                      <img src="/greater.svg" alt="gretaer or equal" />
                    </span>
                    <input
                      className="bg-slate-100 text-3xl  h-10 w-[40px] rounded-l-none flex items-center justify-center rounded-full text-center text-gray-800"
                      type="number"
                      value={twitterReq}
                      onChange={(e) => setTwitterReq(e.target.value)}
                    />{" "}
                  </div>
                )}
              </div>
            </div>
          </div>
          <div className=" p-3">
            <label
              htmlFor="description"
              className="block mb-2 text-2xl font-medium text-gray-900 dark:text-white"
            >
              Event Description
            </label>
            <textarea
              id={"description"}
              className="h-[168px] bg-slate-800 text-2xl border-[1px] placeholder:text-gray-500   text-gray-900 py-3 rounded-lg px-3 focus:ring-blue-500 focus:border-blue-500 block w-full   border-gray-800  dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
          </div>
          <div>
            {/* <Tabs
              activeTab={gating}
              setActiveTab={setGating}
              tabs={[
                { value: "allowlist", title: "Allow Listing" },
                { value: "nftgating", title: "NFT Gating" },
              ]}
            /> */}
            <div className="bg-[#1a2645] border flex justify-center items-center  border-slate-700 w-fit rounded-xl py-[2px] px-[2px]">
              <span
                className={` bg-slate-900 text-gray-200  py-2  px-[10px]  rounded-lg font-semibold  text-lg  cursor-pointer`}
                // onClick={() => tab.setActiveTab(tab.value)}
              >
                Allow Listing
              </span>
              <span
                className={`text-gray-200 py-2  px-[10px]  rounded-lg font-semibold  text-lg  cursor-pointer`}
                onClick={() =>
                  toast.error("NFT Gating coming soom", {
                    icon: "🚧",
                    style: {
                      borderRadius: "10px",
                      background: "#333",
                      color: "#fff",
                    },
                  })
                }
              >
                NFT Gating
              </span>
            </div>

            <div className="rounded-lg text-lg border-slate-700 border mt-2 bg-[#1a2645] m-1 p-3">
              <h1 className="text-2xl text-gray-300 mb-4 m-2">
                Allow-list users
              </h1>

              <label
                htmlFor="dropzone"
                className="my-6 flex flex-col items-center justify-center w-full  border-gray-700 hover:bg-gray-900 bg-[#1E293B] border-dashed rounded-lg cursor-pointer border "
              >
                <div className="flex flex-col items-center justify-center pt-5  pb-6 p-3">
                  <svg
                    aria-hidden="true"
                    className="w-[30px] h-[30px] mb-3 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                    ></path>
                  </svg>
                  <p className="mb-2 text-2xl text-gray-300  flex">
                    <span className="font-semibold mx-2">Upload CSV File</span>
                  </p>
                  <p className="text-lg text-gray-500 dark:text-gray-400">
                    {"Upload CSV( Comma-Separted Values )"} <br /> of wallet
                    addresses you want to allow list"
                  </p>
                </div>

                <input
                  id="dropzone"
                  type="file"
                  className="hidden"
                  accept="text/csv"
                  ref={fileInput}
                  onChange={(e) => {
                    fileInputHandler(e);
                  }}
                ></input>
              </label>
            </div>
          </div>{" "}
          <div>
            {csvData.length > 0 && (
              <div className="rounded-lg  flex justify-between flex-col px-0   text-lg border-slate-700 border mt-2 bg-[#1a2645] m-1 p-3">
                <ul className="overflow-y-auto scrollbar-hide h-[180px] px-3">
                  {csvData.map((line, index) => (
                    <li
                      className="flex  justify-between items-center border bg-slate-800 border-slate-700 text-gray-300 p-2 my-4 text-2xl rounded-lg"
                      key={index}
                    >
                      <h1>{line} </h1>
                      <button
                        className="text-xl"
                        onClick={() => {
                          const newData = [...csvData];
                          newData.splice(index, 1);
                          setCsvData(newData);
                        }}
                      >
                        &#x2715;
                      </button>
                    </li>
                  ))}
                </ul>
                <div className=" pt-2 flex items-center justify-center">
                  <div className="flex-row flex bg-slate-100 rounded-xl  text-2xl mx-4 w-[360px]  text-gray-900  ">
                    <input
                      type="text"
                      className="px-2 py-2 rounded-l-lg"
                      value={addToCsv}
                      onChange={(e) => setAddToCsv(e.target.value)}
                    />
                    <div
                      onClick={addStringToEnd}
                      className="cursor-pointer text-3xl px-5 py-2  bg-neutral-700 text-slate-300 border-0 rounded-r-lg "
                    >
                      +
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        <button
          type="submit"
          ref={scrollRef}
          className="bg-purple-600 rounded-full px-5 py-3 text-white text-2xl mx-auto"
        >
          Make Public
        </button>
      </form>
    </section>
  );
}

export default HostForm;
