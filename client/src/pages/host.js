import React, { useEffect, useState, useRef } from "react";
import { useAccount } from "wagmi";
import toast from "react-hot-toast";
import HostForm from "../components/HostForm";

function Host() {
  const { address, isConnected } = useAccount();
  const [showForm, setShowForm] = React.useState(false);

  const scrollRef = useRef(null);
  useEffect(() => {
    if (showForm) scrollRef.current.scrollIntoView({ behavior: "smooth" });
  }, [showForm]);

  return (
    <div className="section host" aria-labelledby="discover-label mt-5">
      <section className="section hero" aria-label="home">
        <div className="container flex items-center flex-col">
          <h1 className="headline-lg hero-title flex flex-row">
            Host your gated meetup the <span className="span mx-3">web3</span>{" "}
            way
          </h1>

          <div className="grid grid-cols-3 my-5 mb-12 ">
            <div className="p-2 text-gray-200 rounded-lg bg-slate-800 mx-2 px-4">
              ZK based eligiblity check
            </div>
            <div className="p-2 text-gray-200 rounded-lg bg-slate-800 mx-2 px-4">
              {" "}
              NFT Gating and Allow Listing
            </div>
            <div className="p-2 text-gray-200 rounded-lg bg-slate-800 mx-2 px-4">
              {" "}
              Virtual event support using HuddleO1
            </div>
          </div>
          <button
            className="bg-purple-600 rounded-full px-5 py-3 text-white text-3xl"
            onClick={() => {
              if (!isConnected) {
                toast("Connect wallet to host!", {
                  icon: "⚙️",
                  style: {
                    borderRadius: "10px",
                    background: "#333",
                    color: "#fff",
                  },
                });
              } else setShowForm(true);
            }}
          >
            Host Event
          </button>
        </div>
      </section>

      {showForm && <HostForm scrollRef={scrollRef} />}
    </div>
  );
}

export default Host;
