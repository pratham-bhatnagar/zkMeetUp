import React, { useState, useRef } from "react";
import Tabs from "./tabs";
import { toast } from "react-hot-toast";

function HostForm({ scrollRef }) {
  const [gating, setGating] = useState("allowlist");
  const [csvData, setCsvData] = useState([]);
  const [addToCsv, setAddToCsv] = useState(null);
  const fileInput = useRef(null);
  const fileInputHandler = (event) => {
    setCsvData([]);
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = () => {
      const lines = reader.result.split("\n");
      const data = lines
        .map((line) => line.replace(/"/g, "").trim())
        .filter((line) => line !== "");
      setCsvData(data);
    };

    reader.readAsText(file);
    fileInput.current.value = "";
  };
  console.log({ csvData });
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
  return (
    <section className="mt-2 max-w-[800px] mx-auto">
      <div className="flex items-center justify-center w-full">
        <label
          for="dropzone-file"
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

      <form className="mt-[30px] text-lg">
        <div className="grid gap-6 mb-6 md:grid-cols-2">
          <div>
            <label
              for="event_name"
              className="block mb-2 text-2xl font-medium text-gray-900 dark:text-white"
            >
              Event Name <sup className="text-purple-400 text-2xl">*</sup>
            </label>
            <input
              type="text"
              id="first_name"
              className="bg-gray-50 text-2xl border-[1px] border-gray-500 text-gray-900 py-3 rounded-lg px-3 focus:ring-blue-500 focus:border-blue-500 block w-full  dark:bg-gray-700 dark:border-gray-400 dark:placeholder-gray-300 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Huddle01 Video Jam"
              required
            />
          </div>
          <div></div>
          <div>
            <Tabs
              activeTab={gating}
              setActiveTab={setGating}
              tabs={[
                { value: "allowlist", title: "Allow Listing" },
                { value: "nftgating", title: "NFT Gating" },
              ]}
            />
            <div className="rounded-lg text-lg border-slate-700 border mt-2 bg-[#1a2645] m-1 p-3">
              <h1 className="text-3xl text-gray-300 mb-4 m-2">
                Allow-list users
              </h1>

              <label
                for="dropzone"
                className="flex flex-col items-center justify-center w-full  border-gray-700 hover:bg-gray-900 bg-[#1E293B] border-dashed rounded-lg cursor-pointer border "
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
              <div class="flex items-center mt-3">
                <input
                  id="default-checkbox"
                  type="checkbox"
                  value=""
                  class="w-6 h-6 m-2 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label
                  for="default-checkbox"
                  class="ml-2  text-xl font-medium text-gray-900 dark:text-gray-300"
                >
                  Close event for the not allow-listed
                </label>
              </div>
            </div>
          </div>{" "}
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
              <div className=" border-t-[1px] border-slate-400 pt-2 flex items-center justify-center">
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
        <button
          type="submit"
          ref={scrollRef}
          className="bg-purple-600 rounded-full px-5 py-3 text-white text-xl"
        >
          Make Public
        </button>
      </form>
    </section>
  );
}

export default HostForm;
