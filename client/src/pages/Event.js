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
  else return <h1>Apply to Event</h1>;
}

export default Event;
