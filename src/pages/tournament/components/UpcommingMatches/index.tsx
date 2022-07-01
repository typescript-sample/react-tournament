import React from "react";
import "./style.css";

export const UpcommingMatches = () => {
  return (
    <>
      <span className="upcommingMatches_wrapper">
        <a className="upcommingMatches_block">
          <span className="upcommingMatches_block-team1Name">
            <abbr title="Miami Heat">MIA</abbr>
          </span>
          <span className="upcommingMatches_block-team1Image">
            <img
              className="upcommingMatches_block-team1Image--adjust"
              src="https://cdn.nba.com/logos/nba/1610612748/global/L/logo.svg"
              alt=""
            />
          </span>
          <time>2:00</time>
          <span className="upcommingMatches_block-team2Image">
            <img
              className="upcommingMatches_block-team2Image--adjust"
              src="https://cdn.nba.com/logos/nba/1610612748/global/L/logo.svg"
              alt=""
            />
          </span>
          <span className="upcommingMatches_block-team2Name">
            <abbr title="Miami Heat">MIA</abbr>
          </span>

          <span className="upcommingMatches_block-icon">
            <img
              className="upcommingMatches_block-icon--adjust"
              src="https://www.freeiconspng.com/uploads/right-arrow-icon-12.png"
              alt=""
            />
          </span>
        </a>
      </span>
    </>
  );
};
