const EventCard = (props) => {

  return (
    <ul className="grid-list">
      <li>
        <div className="discover-card card">
          <div
            className="card-banner img-holder"
            style={{ width: "500", height: "500" }}
          >
            <img
              src={props.image}
              width="500"
              height="500"
              loading="lazy"
              alt="Genuine Undead #3902"
              className="img-cover"
            />
            <button className="btn btn-primary">
              <ion-icon name="flash" aria-hidden="true"></ion-icon>

              <span className="span"> Attend Event </span>
            </button>
          </div>
          <h3 className="title-sm card-title">
            <a href="#" className="link:hover">
              {props.eventName}
            </a>
          </h3>
          <div className="card-meta">
            <div>
              <p> {props.venue} </p>

              <div className="card-price">
                <span className="span"> {props.date} </span>
              </div>
            </div>

            <div>
              <p>Time</p>

              <div className="card-price">
                <span className="span"> {props.time} </span>
              </div>
            </div>
          </div>
        </div>
      </li>
    </ul>
  );
};
export default EventCard;
