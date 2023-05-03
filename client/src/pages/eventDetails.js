import * as React from "react";
import { useLocation } from "wouter";

export const EventDetails = () => {
    const [location, setLocation] = useLocation();
    const EventId = location.split('/')[2]

    const fetchData = ()=>{

    }
  


  return (
    <div classname="w-full m-8">
      <h1 className="text-xl">Event Name</h1>
      <p>eventId</p>
      <div>
      {`${location}`}
      
    </div>

      <img src="https://s.fotorama.io/1.jpg" alt="" />

      <p>Details:</p>

      <span> Date, Time </span>
      <span> Venue </span>
      <div>
        <span> Description </span>
        ....
      </div>
      <div>
        <label for="Event">Tell us why do you want to attend this event:</label>
        <input type="text" id="Event" name="Event" minlength="50" />
        <button>Submit</button>{" "}
      </div>
    </div>
  );
};
