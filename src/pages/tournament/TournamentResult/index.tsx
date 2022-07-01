import React from "react";
import { MatchResult } from "../components/MatchResult";
import "./style.css";
export const TournamentResult = () => {
  return (
    <>
      <div className="tournament_result-block">
        HI
        <div className="container">
          <div className="tournament_result-fixtures">
            <div className="tournament_result-round">
              <strong>Round 1</strong>
            </div>
            <div className="tournament_result-banner">
              <span>
                <img
                  className="tournament_result-banner--adjust"
                  src="https://cloudfront-us-east-1.images.arcpublishing.com/gray/YFH26NSNKVOHHCOY2T4YPIQVRA.png"
                  alt=""
                />
              </span>
            </div>
            <ul className="tournament_result-matchlist">
              <li className="tournament_result-matchlist--container">
                <MatchResult></MatchResult>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};
