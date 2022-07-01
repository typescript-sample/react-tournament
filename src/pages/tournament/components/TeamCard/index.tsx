import React, { useEffect, useState } from "react";
import { getTeamApi } from "../../Apis/getTeamApi.api";
import "./style.css";

type TeamCardProps = {
  teamName: string;
  stadiumName: string;
  teamPic: string;
  stadiumPic: string;
};

const TeamCard = (props: TeamCardProps) => {
  return (
    <a className="team__card-box">
      <div className="team__card-image">
        <span>
          <img
            className="team__card-image--adjust"
            src={`${props.stadiumPic}`}
            alt=""
          />
        </span>
      </div>
      <div className="team__card-image--badge">
        <span className="team__card-image--badge---container">
          <img
            className="team__card-image--badge---adjust"
            src={`${props.teamPic}`}
            alt=""
          />
        </span>
      </div>
      <div className="team__card-info--box">
        <div className="team__card-info--box---adjust">
          <h4 className="team__card-info--box---clubname">{props.teamName}</h4>
          <div className="team__card-info--box---stadiumname">
            {props.stadiumName}
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
