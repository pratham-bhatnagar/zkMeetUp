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
    const { data, error } = await supabase.from("event").eq("id", params.id);
    console.log(error);
    setEvent(data);
  };
  useEffect(() => {
    fetchEvent();
  }, []);

  if (isConnected) {
    if (event.host === address) return <h1>Host controls </h1>;
    if (event.allowlist.includes(address))
      return <h1>User with watch access </h1>;
    if (event.applicants.includes(address))
      return <h1>In Review User , host action pending </h1>;
  }
  return (
    <div>
      <h1>No Logged In Default Event Detail Page</h1>
      <button>Apply</button>
    </div>
  );
}

export default Event;
