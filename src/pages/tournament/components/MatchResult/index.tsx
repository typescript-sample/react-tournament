import React from "react";
import "./style.css";

export const MatchResult = () => {
  return (
    <div className="matchresult_block">
      <span className="matchresult_content-block">
        <span className="matchresult_content-teams">
          <span className="matchresult_content-team1">
            <span className="matchresult_content-team1--name">
              <span className="matchresult_content-team1--name---adjust">
                Miami Heat
              </span>
            </span>
            <span className="matchresult_content-team1--logo">
              <img
                className="matchresult_content-team1--logo---adjust"
                src="https://cdn.nba.com/logos/nba/1610612748/global/L/logo.svg"
                alt=""
              />
            </span>
          </span>
          <span className="matchresult_content-team1--score">1</span>
          <span className="matchresult_content-team2--score">5</span>
          <span className="matchresult_content-team2">
            <span className="matchresult_content-team2--logo">
              <img
                className="matchresult_content-team2--logo---adjust"
                src="https://a.espncdn.com/i/teamlogos/nba/500/bkn.png"
                alt=""
              />
            </span>
            <span className="matchresult_content-team2--name">
              <span className="matchresult_content-team2--name---adjust">
                Brooklyn Nets
              </span>
            </span>
          </span>
        </span>
        <span className="matchresult_content-stadium">
          <span className="matchresult_content-stadium--icon">
            <img
              className="matchresult_content-stadium--icon---adjust"
              src="https://cdn-icons-png.flaticon.com/512/88/88961.png"
              alt=""
            />
          </span>
          <span className="matchresult_content-stadium--text">
            Barclay Centers
          </span>
        </span>
        <span className="matchresult_content-button">
          <img
            className="matchresult_content-button--adjust"
            src="https://www.freeiconspng.com/uploads/right-arrow-icon-12.png"
            alt=""
          />
        </span>
      </span>
    </div>
  );
};
