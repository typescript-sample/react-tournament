import React from "react";
import "./style.css";
import { ReactComponent as StadiumLogo } from "../../../../assets/images/stadium.svg";

type UpcommingMatchesLongProps = {
  team1Name: string;
  team1Image: string;
  time: string;
  team2Name: string;
  team2Image: string;
  stadium: string;
};

export const UpcommingMatchesLong = (props: UpcommingMatchesLongProps) => {
  return (
    <>
      <li className="upcommingMatchesLong_wrapper">
        <a className="upcommingMatchesLong_block">
          <span className="upcommingMatchesLong_block-matchdetails">
            <span className="upcommingMatchesLong_block-team1Name">
              <abbr title="Miami Heat">{props.team1Name}</abbr>
            </span>
            <span className="upcommingMatchesLong_block-team1Image">
              <img
                className="upcommingMatchesLong_block-team1Image--adjust"
                src={props.team1Image}
                alt=""
              />
            </span>
            <time>{props.time}</time>
            <span className="upcommingMatchesLong_block-team2Image">
              <img
                className="upcommingMatchesLong_block-team2Image--adjust"
                src={props.team2Image}
                alt=""
              />
            </span>
            <span className="upcommingMatchesLong_block-team2Name">
              <abbr title="Miami Heat">{props.team2Name}</abbr>
            </span>
          </span>

          <span className="upcommingMatchesLong_block-stadium">
            <span className="upcommingMatchesLong_block-stadium--icon">
              <StadiumLogo></StadiumLogo>
            </span>
            {props.stadium}
          </span>

          <span className="upcommingMatchesLong_block-icon">
            <img
              className="upcommingMatchesLong_block-icon--adjust"
              src="https://www.freeiconspng.com/uploads/right-arrow-icon-12.png"
              alt=""
            />
          </span>
        </a>
      </li>
    </>
  );
};
