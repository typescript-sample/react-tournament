import React from "react";
import styles from "./tournamentSidebarFixtures.module.scss";
import classNames from "classnames/bind";
import { UpcommingMatchesShort } from "../UpcommingMatchesShort";

const cx = classNames.bind(styles);
export const TournamentSidebarFixture = () => {
  return (
    <div className={cx("wrapper")}>
      <header>
        <div className={cx("__week")}>Match Week 1</div>
        <div className={cx("__logoWrapper")}>
          <img
            className={cx("__logoWrapper--adjust")}
            src="https://www.tma.vn/Themes/TMAVN.Theme/Images/TMA-logo2.png"
            alt=""
          />
        </div>
        <div className={cx("__localTime")}>
          All times shown are your <strong>local time</strong>
        </div>
      </header>
      <div className={cx("__matchList")}>
        <time>Saturday 6 August</time>
        <div className={cx("__matchList--adjust")}>
          <UpcommingMatchesShort
            homeName="MIA"
            homeBadge="https://cdn.nba.com/logos/nba/1610612748/global/L/logo.svg"
            awayName="MIA"
            awayBadge="https://cdn.nba.com/logos/nba/1610612748/global/L/logo.svg"
            time="2:00"
          ></UpcommingMatchesShort>
          <UpcommingMatchesShort
            homeName="MIA"
            homeBadge="https://cdn.nba.com/logos/nba/1610612748/global/L/logo.svg"
            awayName="MIA"
            awayBadge="https://cdn.nba.com/logos/nba/1610612748/global/L/logo.svg"
            time="2:00"
          ></UpcommingMatchesShort>
        </div>
      </div>
    </div>
  );
};
