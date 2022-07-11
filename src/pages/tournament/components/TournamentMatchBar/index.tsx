import React from "react";
import "./style.css";
import { ReactComponent as RefereeLogo } from "../../../../assets/images/referee-com.svg";
import { ReactComponent as StadiumLogo } from "../../../../assets/images/stadium-com.svg";
import { ReactComponent as EyesLogo } from "../../../../assets/images/eyes-com.svg";

export const TournamentMatchBar = () => {
  return (
    <>
      <div className="tournament_matchBar">
        <div className="tournament_matchBar-position tournament_matchBar-text">
          Sun 22 May 2022
        </div>
        <div className="tournament_matchBar-position tournament_matchBar-text">
          <RefereeLogo className="tournament_matchBar-referee"></RefereeLogo>
          Martin Atkinson
        </div>
        <div className="tournament_matchBar-position tournament_matchBar-text">
          <StadiumLogo className="tournament_matchBar-stadium"></StadiumLogo>
          Old Trafford
        </div>
        <div className="tournament_matchBar-position tournament_matchBar-text">
          <EyesLogo className="tournament_matchBar-attendance"></EyesLogo>
          3000
        </div>
      </div>
      <div></div>
    </>
  );
};
