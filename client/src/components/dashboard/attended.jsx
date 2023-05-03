import EventCard from "../EventCard";
function Hosting({ events }) {
  return (
    <div className="">
      <h1 className="text-[25px] text-gray-300 m-3 font-semibold">Attended</h1>
      <div className="flex gap-[45px] w-[90vw] overflow-x-scroll scrollbar-hide">
        {events?.length === 0 ? (
          <h1>No event</h1>
        ) : (
          <>
            {events?.map((event) => {
              console.log(event);
              return (
                <EventCard
                  event={event}
                  buttonText="See recording"
                  buttonOnCLick={() => {}}
                />
              );
            })}
          </>
        )}
      </div>
    </div>
  );
}

export default Hosting;
