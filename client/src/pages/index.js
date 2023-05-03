import React from "react";
import { Link, Route } from "wouter";

function Home() {
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

                <li>
                  <div className="discover-card card">
                    <div
                      className="card-banner img-holder"
                      style={{ width: "500", height: "500" }}
                    >
                      <img
                        src="./images/showcase-7.jpg"
                        width="500"
                        height="500"
                        loading="lazy"
                        alt="Windchime #768/"
                        className="img-cover"
                      />

                      <button className="btn btn-primary">
                        <ion-icon name="flash" aria-hidden="true"></ion-icon>

                        <span className="span">Place Bid</span>
                      </button>

                      <div className="countdown">
                        <ion-icon
                          name="time-outline"
                          aria-hidden="true"
                        ></ion-icon>

                        <span className="span">5d 04h 18m 04s</span>
                      </div>
                    </div>

                    <div className="card-profile">
                      <img
                        src="./images/avatar-7.jpg"
                        width="32"
                        height="32"
                        loading="lazy"
                        alt="CutieGirl profile/"
                        className="img"
                      />

                      <a href="#" className="link:hover">
                        @CutieGirl
                      </a>
                    </div>

                    <h3 className="title-sm card-title">
                      <a href="#" className="link:hover">
                        Windchime #768
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

                <li>
                  <div className="discover-card card">
                    <div
                      className="card-banner img-holder"
                      style={{ width: "500", height: "500" }}
                    >
                      <img
                        src="./images/showcase-6.gif"
                        width="500"
                        height="500"
                        loading="lazy"
                        alt="Probably A Label #3277"
                        className="img-cover"
                      />

                      <button className="btn btn-primary">
                        <ion-icon name="flash" aria-hidden="true"></ion-icon>

                        <span className="span">Place Bid</span>
                      </button>
                    </div>

                    <div className="card-profile">
                      <img
                        src="./images/avatar-6.gif"
                        width="32"
                        height="32"
                        loading="lazy"
                        alt="ButterFly profile/"
                        className="img"
                      />

                      <a href="#" className="link:hover">
                        @ButterFly
                      </a>
                    </div>

                    <h3 className="title-sm card-title">
                      <a href="#" className="link:hover">
                        Probably A Label #3277
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

                <li>
                  <div className="discover-card card">
                    <div
                      className="card-banner img-holder"
                      style={{ width: "500", height: "500" }}
                    >
                      <img
                        src="./images/showcase-5.jpg"
                        width="500"
                        height="500"
                        loading="lazy"
                        alt="Probably A Label #1711"
                        className="img-cover"
                      />

                      <button className="btn btn-primary">
                        <ion-icon name="flash" aria-hidden="true"></ion-icon>

                        <span className="span">Place Bid</span>
                      </button>
                    </div>

                    <div className="card-profile">
                      <img
                        src="./images/avatar-5.jpg"
                        width="32"
                        height="32"
                        loading="lazy"
                        alt="NorseQueen profile/"
                        className="img"
                      />

                      <a href="#" className="link:hover">
                        @NorseQueen
                      </a>
                    </div>

                    <h3 className="title-sm card-title">
                      <a href="#" className="link:hover">
                        Probably A Label #1711
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

                <li>
                  <div className="discover-card card">
                    <div
                      className="card-banner img-holder"
                      style={{ width: "500", height: "500" }}
                    >
                      <img
                        src="./images/showcase-4.jpg"
                        width="500"
                        height="500"
                        loading="lazy"
                        alt="Shibuya Scramble Punks"
                        className="img-cover"
                      />

                      <button className="btn btn-primary">
                        <ion-icon name="flash" aria-hidden="true"></ion-icon>

                        <span className="span">Place Bid</span>
                      </button>
                    </div>

                    <div className="card-profile">
                      <img
                        src="./images/avatar-4.jpg"
                        width="32"
                        height="32"
                        loading="lazy"
                        alt="BigBull profile"
                        className="img"
                      />

                      <a href="#" className="link:hover">
                        @BigBull
                      </a>
                    </div>

                    <h3 className="title-sm card-title">
                      <a href="#" className="link:hover">
                        Shibuya Scramble Punks
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

                <li>
                  <div className="discover-card card">
                    <div
                      className="card-banner img-holder"
                      style={{ width: "500", height: "500" }}
                    >
                      <img
                        src="./images/showcase-3.jpg"
                        width="500"
                        height="500"
                        loading="lazy"
                        alt="Probably A Label #650"
                        className="img-cover"
                      />

                      <button className="btn btn-primary">
                        <ion-icon name="flash" aria-hidden="true"></ion-icon>

                        <span className="span">Place Bid</span>
                      </button>
                    </div>

                    <div className="card-profile">
                      <img
                        src="./images/avatar-3.jpg"
                        width="32"
                        height="32"
                        loading="lazy"
                        alt="Angel profile"
                        className="img"
                      />

                      <a href="#" className="link:hover">
                        @Angel
                      </a>
                    </div>

                    <h3 className="title-sm card-title">
                      <a href="#" className="link:hover">
                        Probably A Label #650
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

                <li>
                  <div className="discover-card card">
                    <div
                      className="card-banner img-holder"
                      style={{ width: "500", height: "500" }}
                    >
                      <img
                        src="./images/showcase-2.jpg"
                        width="500"
                        height="500"
                        loading="lazy"
                        alt="Looki #0147/"
                        className="img-cover"
                      />

                      <button className="btn btn-primary">
                        <ion-icon name="flash" aria-hidden="true"></ion-icon>

                        <span className="span">Place Bid</span>
                      </button>

                      <div className="countdown">
                        <ion-icon
                          name="time-outline"
                          aria-hidden="true"
                        ></ion-icon>

                        <span className="span">10d 23h 24m 10s</span>
                      </div>
                    </div>

                    <div className="card-profile">
                      <img
                        src="./images/avatar-2.jpg"
                        width="32"
                        height="32"
                        loading="lazy"
                        alt="CrazyAnyone profile"
                        className="img"
                      />

                      <a href="#" className="link:hover">
                        @CrazyAnyone
                      </a>
                    </div>

                    <h3 className="title-sm card-title">
                      <a href="#" className="link:hover">
                        Looki #0147
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

                <li>
                  <div className="discover-card card">
                    <div
                      className="card-banner img-holder"
                      style={{ width: "500", height: "500" }}
                    >
                      <img
                        src="./images/showcase-1.jpg"
                        width="500"
                        height="500"
                        loading="lazy"
                        alt="Poob #285/"
                        className="img-cover"
                      />

                      <button className="btn btn-primary">
                        <ion-icon name="flash" aria-hidden="true"></ion-icon>

                        <span className="span">Place Bid</span>
                      </button>
                    </div>

                    <div className="card-profile">
                      <img
                        src="./images/avatar-1.jpg"
                        width="32"
                        height="32"
                        loading="lazy"
                        alt="Princess profile/"
                        className="img"
                      />

                      <a href="#" className="link:hover">
                        @Princess
                      </a>
                    </div>

                    <h3 className="title-sm card-title">
                      <a href="#" className="link:hover">
                        Poob #285
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

              {/* <Link to="/events"> */}
              <div className="w-full mx-auto text-purple-600 text-center mt-4 important">
                <h1 className="text-purple-600"> Explore More</h1>

                <ion-icon name="arrow-forward" aria-hidden="true"></ion-icon>
              </div>
              {/* </Link> */}
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
