import React, { useEffect } from "react";
import { Link, Route, useRouter } from "wouter";
import supabase from "../services/supabase";
import EventCard from "../components/EventCard";
import { useAccount } from "wagmi";
import useLocation from "wouter/use-location";

function Home() {
  const [events, setEvents] = React.useState([]);
  const { address, isConnected } = useAccount();
  const fetchEvents = async () => {
    const { data, error } = await supabase.from("Events").select("*");
    console.log(error);
    setEvents(data);
  };
  const [location, setLocation] = useLocation();
  useEffect(() => {
    fetchEvents();
  }, []);
  return (
    <>
      <main>
        <article>
          <section className="section hero" aria-label="home">
            <div className="container">
              <h1 className="headline-lg hero-title">
                Privacy Focused & Gated <span className="span">Meetups</span>
              </h1>

              <p className="section-text body-lg">
                Host and Attend virtual or physical meetups the web3 way.
              </p>

              <a href="#" className="btn">
                Events near me
              </a>
            </div>
          </section>

          <section
            className="section discover"
            aria-labelledby="discover-label"
          >
            <div className="container">
              <h2
                className="headline-md section-title text-center"
                id="discover-label"
              >
                Discover Events
              </h2>
              <div className="grid grid-cols-3 gap-10">
                {events.map((event) => {
                  if (isConnected) {
                    if (
                      event.allowlist.includes(address) ||
                      event.host === address ||
                      event.applicants.includes(address)
                    ) {
                      return null;
                    }
                  }
                  return (
                    <EventCard
                      event={event}
                      buttonOnClick={() => {
                        setLocation(`/event/${event.id}`);
                      }}
                      buttonText={"Apply to attend"}
                    />
                  );
                })}
              </div>
            </div>
          </section>

          <section className="section newsletter" aria-label="newsletter">
            <div className="container">
              <div className="newsletter-card">
                <div className="flex text-xl text-gray-400 align-bottom">
                  Built with{" "}
                  <img
                    src="https://framerusercontent.com/images/dlqsM0SvK4pSeaVTmb4OCJcky0.png"
                    alt="huddle01xFVM"
                  />
                </div>
              </div>
            </div>
          </section>
        </article>
      </main>

      
      <a
        href="#top"
        className="back-to-top btn-icon"
        aria-label="back to top"
        data-back-top-btn
      >
        <ion-icon name="arrow-up" aria-hidden="true"></ion-icon>
      </a>
    </>
  );
}

export default Home;
