import React from "react";

function Nav({ connect }) {
  return (
    <header className="header" data-header>
      <div className="container">
        <img
          src="/images/logo.svg"
          alt=""
          height={40}
          width={40}
          className="mr-[10px] hidden sm:visible"
        />
        <h1 className=" gradient marginlogo"> zkMeetups</h1>

        <nav className="navbar" data-navbar>
          <ul className="navbar-list">
            <li>
              <a
                href="#"
                className="navbar-link label-lg link:hover cursor-pointer"
              >
                Events
              </a>
            </li>

            <li>
              <a
                href="#"
                className="navbar-link label-lg link:hover cursor-pointer"
              >
                Host
              </a>
            </li>
          </ul>
        </nav>

        <div className="header-action">
          <button className="btn-icon primary" aria-label="wallet">
            {connect}
          </button>

          <button
            className="nav-toggle-btn"
            aria-label="menu toggle"
            data-nav-toggler
          >
            <ion-icon
              name="menu-outline"
              aria-hidden="true"
              className="default-icon"
            ></ion-icon>

            <ion-icon
              name="close-outline"
              aria-hidden="true"
              className="active-icon"
            ></ion-icon>
          </button>
        </div>
      </div>
    </header>
  );
}

export default Nav;
