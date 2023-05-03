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
                <div className="flex text-xl text-gray-400">
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

      <footer className="footer">
        <div className="section footer-top">
          <div className="container">
            <div className="footer-brand">
              <a href="#">
                <img
                  src="./images/logo.svg"
                  width="126"
                  height="28"
                  loading="lazy"
                  alt="Metalink home"
                />
              </a>

              <p className="body-md footer-text">
                Buy, sell and discover exclusive digital assets by the top
                artists of NFTs world.
              </p>
            </div>

            <ul className="footer-list">
              <li>
                <p className="title-lg footer-list-title">Metalink</p>
              </li>

              <li>
                <a href="#" className="footer-link">
                  <ion-icon name="chevron-forward"></ion-icon>

                  <span className="span">Explore Item</span>
                </a>
              </li>

              <li>
                <a href="#" className="footer-link">
                  <ion-icon name="chevron-forward"></ion-icon>

                  <span className="span">Live Auction</span>
                </a>
              </li>

              <li>
                <a href="#" className="footer-link">
                  <ion-icon name="chevron-forward"></ion-icon>

                  <span className="span">Activities</span>
                </a>
              </li>

              <li>
                <a href="#" className="footer-link">
                  <ion-icon name="chevron-forward"></ion-icon>

                  <span className="span">Wallets</span>
                </a>
              </li>

              <li>
                <a href="#" className="footer-link">
                  <ion-icon name="chevron-forward"></ion-icon>

                  <span className="span">Creators</span>
                </a>
              </li>
            </ul>

            <ul className="footer-list">
              <li>
                <p className="title-lg footer-list-title">Useful Links</p>
              </li>

              <li>
                <a href="#" className="footer-link">
                  <ion-icon name="chevron-forward"></ion-icon>

                  <span className="span">About Us</span>
                </a>
              </li>

              <li>
                <a href="#" className="footer-link">
                  <ion-icon name="chevron-forward"></ion-icon>

                  <span className="span">Blog & News</span>
                </a>
              </li>

              <li>
                <a href="#" className="footer-link">
                  <ion-icon name="chevron-forward"></ion-icon>

                  <span className="span">Terms & Condition</span>
                </a>
              </li>

              <li>
                <a href="#" className="footer-link">
                  <ion-icon name="chevron-forward"></ion-icon>

                  <span className="span">Privacy policy</span>
                </a>
              </li>

              <li>
                <a href="#" className="footer-link">
                  <ion-icon name="chevron-forward"></ion-icon>

                  <span className="span">Login</span>
                </a>
              </li>

              <li>
                <a href="#" className="footer-link">
                  <ion-icon name="chevron-forward"></ion-icon>

                  <span className="span">Contact Us</span>
                </a>
              </li>
            </ul>

            <div className="footer-list">
              <ul>
                <li>
                  <p className="title-lg footer-list-title">
                    Download the Metalink app
                  </p>
                </li>

                <li className="footer-list-item">
                  <a href="#">
                    <img
                      src="./images/appstore.png"
                      width="134"
                      height="40"
                      loading="lazy"
                      alt="Download Metalink app from AppStore"
                    />
                  </a>

                  <a href="#">
                    <img
                      src="./images/playstore.png"
                      width="134"
                      height="40"
                      loading="lazy"
                      alt="Download Metalink app from PlayStore"
                    />
                  </a>
                </li>
              </ul>

              <ul>
                <li>
                  <p className="title-lg footer-list-title">Contact Details</p>
                </li>

                <li className="footer-list-item">
                  <ion-icon name="mail-outline" aria-hidden="true"></ion-icon>

                  <a href="mailto:metalink@nft.com" className="footer-link">
                    metalink@nft.com
                  </a>
                </li>

                <li className="footer-list-item">
                  <ion-icon name="call-outline" aria-hidden="true"></ion-icon>

                  <a href="tel:+111 234-567-891" className="footer-link">
                    +111 234-567-891
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="container">
            <p className="body-md text-center copyright">
              &copy; 2022 Metalink. Developed with{" "}
              <span className="span">❤</span> by codewithsadee.
            </p>
          </div>
        </div>
      </footer>

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
