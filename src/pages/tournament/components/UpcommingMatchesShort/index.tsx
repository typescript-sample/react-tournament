import React from "react";
import "./style.css";

type UpcommingMatchesShortProps = {
  team1Name: string;
  team1Image: string;
  time: string;
  team2Name: string;
  team2Image: string;
};
export const UpcommingMatchesShort = (props: UpcommingMatchesShortProps) => {
  return (
    <>
      <span className="upcommingMatches_wrapper">
        <a className="upcommingMatches_block">
          <span className="upcommingMatches_block-team1Name">
            <abbr title="Miami Heat">{props.team1Name}</abbr>
          </span>
          <span className="upcommingMatches_block-team1Image">
            <img
              className="upcommingMatches_block-team1Image--adjust"
              src={props.team1Image}
              alt=""
            />
          </span>
          <time>{props.time}</time>
          <span className="upcommingMatches_block-team2Image">
            <img
              className="upcommingMatches_block-team2Image--adjust"
              src={props.team2Image}
              alt=""
            />
          </span>
          <span className="upcommingMatches_block-team2Name">
            <abbr title="Miami Heat">{props.team2Name}</abbr>
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
