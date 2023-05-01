import React from "react";
import EventCard from "../components/eventCard";

function events() {
const  DATA = [
    {
      image: "./logo192.png",
      eventName: "dfd",
      venue: "remote",
      date:'12/12/10',
      time: "1244",
    },
    {
      image: "./logo192.png",
      eventName: "dfdf",
      venue: "remote",
      date:'12/12/10',
      time: "1244",
    },
    {
      image: "./logo192.png",
      eventName: "feregv",
      venue: "remote",
      date:'12/12/10',
      time: "1244",
    },
    {
      image: "./logo192.png",
      eventName: "wecdgd",
      venue: "remote",
      date:'12/12/10',
      time: "1244",
    },
  ];
  return (
    <div>
      {" "}
      <section className="section discover" aria-labelledby="discover-label">
        {/* <div className="container">
          <h2
            className="headline-md section-title text-center"
            id="discover-label"
          >
            Discover Items
          </h2>

          <ul className="grid-list">
            <li>
              <div className="discover-card card">
                <div
                  className="card-banner img-holder"
                  style={{ width: "500", height: "500" }}
                >
                  <img
                    src="./images/showcase-8.gif"
                    width="500"
                    height="500"
                    loading="lazy"
                    alt="Genuine Undead #3902"
                    className="img-cover"
                  />

                  <button className="btn btn-primary">
                    <ion-icon name="flash" aria-hidden="true"></ion-icon>

                    <span className="span">Place Bid</span>
                  </button>
                </div>

                <div className="card-profile">
                  <img
                    src="./images/avatar-8.jpg"
                    width="32"
                    height="32"
                    loading="lazy"
                    alt="StreetBoy profile/"
                    className="img"
                  />

                  <a href="#" className="link:hover">
                    @StreetBoy
                  </a>
                </div>

                <h3 className="title-sm card-title">
                  <a href="#" className="link:hover">
                    Genuine Undead #3902
                  </a>
                </h3>

                <div className="card-meta">
                  <div>
                    <p>Price</p>

                    <div className="card-price">
                      <img
                        src="./images/ethereum.svg"
                        width="16"
                        height="24"
                        loading="lazy"
                        alt="ethereum icon"
                      />

                      <span className="span">3.5 ETH</span>
                    </div>
                  </div>

                  <div>
                    <p>Highest Bid</p>

                    <div className="card-price">
                      <img
                        src="./images/ethereum.svg"
                        width="16"
                        height="24"
                        loading="lazy"
                        alt="ethereum icon"
                      />

                      <span className="span">3.55 ETH</span>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          </ul>

          <a href="#" className="btn-link link:hover">
            <span className="span">Explore More</span>

            <ion-icon name="arrow-forward" aria-hidden="true"></ion-icon>
          </a>
        </div> */}
        {/* <EventCard image='./logo192.png' eventName='ass' venue='online' date='12/23/23' time='10.12' /> */}
    <div className= " justify-center w-full flex gap-4 flex-wrap"> {DATA.map((i)=>{
          return  <EventCard image={i.image} eventName={i.eventName} venue={i.venue} date={i.date} time={i.time} />
        })}</div>
       
      </section>
    </div>
  );
}

export default events;
