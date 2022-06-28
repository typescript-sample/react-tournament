import React from "react";
import "./style.css";

const TeamCard = () => {
  return (
    <a className="team__card-box">
      <div className="team__card-image">
        <span>
          <img
            className="team__card-image--adjust"
            src="https://media.timeout.com/images/100523993/image.jpg"
            alt=""
          />
        </span>
      </div>
      <div className="team__card-image--badge">
        <span className="team__card-image--badge---container">
          <img
            className="team__card-image--badge---adjust"
            src="https://cdn.nba.com/logos/nba/1610612748/global/L/logo.svg"
            alt=""
          />
        </span>
      </div>
      <div className="team__card-info--box">
        <div className="team__card-info--box---adjust">
          <h4 className="team__card-info--box---clubname">Miami Heat</h4>
          <div className="team__card-info--box---stadiumname">
            Barclays Center
          </div>
        </div>
        <div className="team__card-info--box---button">
          <span className="team__card-info--box---button----text">
            Club Profile
          </span>
        </div>
      </div>
    </a>
  );
};

export default TeamCard;
