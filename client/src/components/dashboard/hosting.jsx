import { useLocation } from "wouter";
import EventCard from "../EventCard";
import { useAccount } from "wagmi";
function Hosting({ events }) {
  const [location, setLocation] = useLocation();
  const { address } = useAccount();
  return (
    <div className="">
      <h1 className="text-[25px] text-gray-300 m-3 font-semibold">Hosting</h1>
      <div className="flex gap-[45px] w-[90vw] overflow-x-scroll scrollbar-hide">
        {events?.length === 0 ? (
          <h1>No event</h1>
        ) : (
          <>
            {events?.map((event) => {
              if (event.host === address) {
                return (
                  <EventCard
                    event={event}
                    buttonText="See Applicants"
                    buttonOnClick={() => {
                      console.log("click");
                      setLocation(`/event/${event.id}`);
                    }}
                  />
                );
              }
            })}
          </>
        )}
      </div>
    </div>
  );
}

export default Hosting;
