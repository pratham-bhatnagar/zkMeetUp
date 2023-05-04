import React, { useEffect } from "react";
import Spinner from "../components/Spinner";
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
              {!events ? (
                <div className="w-full h-[800px] flex items-center justify-center">
                  <Spinner size="4rem" />
                </div>
              ) : (
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
              )}
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
