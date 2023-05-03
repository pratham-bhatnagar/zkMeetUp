import React, { useEffect } from "react";
import Hosting from "../components/dashboard/hosting";
import Attending from "../components/dashboard/attending";
import Attended from "../components/dashboard/attended";
import Applied from "../components/dashboard/applied";
import supabase from "../services/supabase";
import Spinner from "../components/Spinner";

function Dashboard() {
  const [events, setEvents] = React.useState([]);

  const fetchEvents = async () => {
    const { data, error } = await supabase.from("Events").select("*");
    console.log(error);
    setEvents(data);
  };
  useEffect(() => {
    fetchEvents();
  }, []);
  return (
    <div className="mt-[80px] mx-10">
      <h1 className="text-[34px] font-bold text-gray-200 mb-2">Dashboard</h1>
      <div className="flex h-[1000px] justify-between gap-20 flex-col">
        {events?.length === 0 ? (
          <div className="w-full h-[80vh] flex items-center justify-center">
            <Spinner size="50px" />
          </div>
        ) : (
          <>
            {" "}
            <Hosting events={events} />
            <Attending events={events} />
            <Attended events={events} />
            <Applied events={events} />
          </>
        )}
      </div>
    </div>
  );
}

export default Dashboard;
