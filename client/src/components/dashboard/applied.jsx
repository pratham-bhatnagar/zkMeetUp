import { useLocation } from "wouter";
import EventCard from "../EventCard";
import { useAccount } from "wagmi";
function Applied({ events }) {
  const [location, setLocation] = useLocation();
  const { address } = useAccount();
  return (
    <div className="">
      <h1 className="text-[25px] text-gray-300 m-3 font-semibold">Applied</h1>
      <div className="flex gap-[45px] w-[90vw] overflow-x-scroll scrollbar-hide">
        {events?.length === 0 ? (
          <h1>No event</h1>
        ) : (
          <>
            {events?.map((event) => {
              if (event.applicants.includes(address))
                return (
                  <EventCard
                    event={event}
                    buttonText="Under review by host"
                    buttonOnCLick={() => {
                      setLocation(`/event/${event.id}`);
                    }}
                  />
                );
            })}
          </>
        )}
      </div>
    </div>
  );
}

export default Applied;
