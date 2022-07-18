import React from "react";
import { TournamentMatchBar } from "../components/TournamentMatchBar";
import styles from "./tournamentMatch.module.scss";
import { ReactComponent as SoccerLogo } from "../../../assets/images/soccer-com.svg";
import { TournamentEvent } from "../components/TournamentEvent";
import { MatchEvent } from "../components/MatchEvent";
import { MatchEventAssistant } from "../components/MatchEventAssistant";
import { MatchEventInterface } from "../Services/models";
import classNames from "classnames/bind";
import { context } from "../../../admin/service";
import { MatchResult } from "../components/MatchResult";
import { MatchResultDetailBar } from "../components/MatchResult/MatchResultDetailBar";
import clsx from "clsx";

const cx = classNames.bind(styles);
const test: MatchEventInterface[] = [
  {
    type: "Score",
    mins: 35,
    homeBadge:
      "https://logos-world.net/wp-content/uploads/2020/05/Miami-Heat-Logo-2000-Present.png ",
    homeName: "MIA",
    homeResult: 1,
    awayBadge:
      "https://1000logos.net/wp-content/uploads/2016/10/Boston-Celtics-Logo-500x313.png",
    awayName: "BOS",
    awayResult: 0,
    playerName: "Jimmy Butler",
    playerImg: "https://cdn.nba.com/headshots/nba/latest/1040x760/202710.png",
    playerNumber: 22,
    assistance: "Kevin Durant",
    side: "home",
  },
  {
    type: "Score",
    mins: 24,
    homeBadge:
      "https://logos-world.net/wp-content/uploads/2020/05/Miami-Heat-Logo-2000-Present.png ",
    homeName: "MIA",
    homeResult: 1,
    awayBadge:
      "https://1000logos.net/wp-content/uploads/2016/10/Boston-Celtics-Logo-500x313.png",
    awayName: "BOS",
    awayResult: 0,
    playerName: "Jimmy Butler",
    playerImg: "https://cdn.nba.com/headshots/nba/latest/1040x760/202710.png",
    playerNumber: 22,
    assistance: "Kevin Durant",
    side: "home",
  },

  {
    type: "Score",
    mins: 60,
    homeBadge:
      "https://logos-world.net/wp-content/uploads/2020/05/Miami-Heat-Logo-2000-Present.png ",
    homeName: "MIA",
    homeResult: 1,
    awayBadge:
      "https://1000logos.net/wp-content/uploads/2016/10/Boston-Celtics-Logo-500x313.png",
    awayName: "BOS",
    awayResult: 1,
    playerName: "Lê Hiếu Thành",
    playerImg:
      "https://sport5.mediacdn.vn/2019/11/26/photo-1574780315715-1574780315724959665461.jpeg",
    playerNumber: 0,
    assistance: "Jaylen Brown",
    side: "away",
  },
  {
    type: "Substitution",
    mins: 40,
    homeBadge:
      "https://logos-world.net/wp-content/uploads/2020/05/Miami-Heat-Logo-2000-Present.png ",
    homeName: "MIA",
    homeResult: 1,
    awayBadge:
      "https://1000logos.net/wp-content/uploads/2016/10/Boston-Celtics-Logo-500x313.png",
    awayName: "BOS",
    awayResult: 0,
    subOn: "Kyrie Irving",
    subOnNumber: 11,
    subOnImg: "https://cdn.nba.com/headshots/nba/latest/1040x760/202681.png",
    subOff: "Kevin Durant",
    subOffNumber: 7,
    subOffImg: "https://c.neh.tw/thumb/f/720/comdlpng6955114.jpg",

    side: "away",
  },
];

export const TournamentMatch = () => {
  return (
    <>
      <section className={cx("__wrapper")}>
        <div className={cx("__nav")}>
          <nav className={cx("__nav__block")}>1</nav>
        </div>
        <div className={cx("__centralContent")}>
          <section className={cx("__centralContent__box")}>
            <picture className={cx("__centralContent__box__background")}>
              <source
                media="min-width: 1024px"
                srcSet="https://resources.premierleague.com/premierleague/photo/2016/07/21/ccade424-00e6-4310-a183-48f7101b1f5e/Arsenal_Stadium_Emirates.jpeg"
              ></source>
              <img
                className={cx("__centralContent__box__image")}
                src="https://resources.premierleague.com/premierleague/photo/2016/07/21/ccade424-00e6-4310-a183-48f7101b1f5e/Arsenal_Stadium_Emirates.jpeg"
              ></img>
            </picture>
            <div className={cx("__container")}>
              <div className={cx("__bar")}>
                <TournamentMatchBar></TournamentMatchBar>
              </div>
            </div>

            <div className={cx("__scoreboxContainer")}>
              <div className={cx("__container")}>
                <div className={cx("__scoreboxContainer")}>
                  <MatchResultDetailBar
                    homeBadge="https://upload.wikimedia.org/wikipedia/en/thumb/6/67/Chicago_Bulls_logo.svg/1200px-Chicago_Bulls_logo.svg.png"
                    homeName="Chicago Bulls"
                    homeResult="1"
                    awayBadge="https://upload.wikimedia.org/wikipedia/en/thumb/c/c2/Minnesota_Timberwolves_logo.svg/1200px-Minnesota_Timberwolves_logo.svg.png"
                    awayName="Minesota TimberWolves"
                    awayResult="0"
                  ></MatchResultDetailBar>

                  <div className={cx("__matchStats")}>
                    <div className={cx("__matchStats__halfTime")}>
                      <span>Half Time</span>
                      1-0
                    </div>
                  </div>
                  <div className={cx("__matchStats__kickOff")}>
                    KickOff:
                    <strong> time</strong>
                  </div>
                  <div className={cx("__matchEvents")}>
                    <div className={cx("__matchEvents__home")}>
                      {test.map((x: any) => {
                        return x.side === "home" ? (
                          <MatchEvent
                            playerName={x.playerName}
                            mins={x.mins}
                            side={x.side}
                            type={x.type}
                          ></MatchEvent>
                        ) : (
                          <></>
                        );
                      })}
                    </div>

                    <div className={cx("__matchEvents__away")}>
                      {test.map((x: any) => {
                        return x.side === "away" ? (
                          <MatchEvent
                            playerName={x.playerName}
                            mins={x.mins}
                            side={x.side}
                            type={x.type}
                          ></MatchEvent>
                        ) : (
                          <></>
                        );
                      })}
                    </div>
                  </div>

                  <div className={cx("__assists")}>
                    <div className={cx("__assists__title")}>Assists</div>
                    <div>
                      {test.map((x: any) => {
                        return x.assistance != null ? (
                          <MatchEventAssistant
                            assistance={x.assistance}
                            side={x.side}
                            mins={x.mins}
                          ></MatchEventAssistant>
                        ) : (
                          <></>
                        );
                      })}
                    </div>
                  </div>

                  <div className={cx("__timeLine")}>
                    <a className={cx("__timeLine__team")}>
                      <span className={cx("__timeLine__badge")}>
                        <span className={cx("__timeLine__badge__block")}>
                          <img
                            src="https://logos-world.net/wp-content/uploads/2020/05/Miami-Heat-Logo-2000-Present.png"
                            className={cx("__timeLine__badge--adjust")}
                          ></img>
                        </span>
                      </span>
                      MIA
                    </a>
                    <div className={cx("__timeLine__crossbar")}>
                      <div className={cx("__timeLine__crossbar--adjust")}>
                        HT
                      </div>
                      {test.map((x: any) => {
                        return (
                          <TournamentEvent
                            type={x.type}
                            mins={x.mins}
                            homeBadge={x.homeBadge}
                            homeName={x.homeName}
                            homeResult={x.homeResult}
                            awayBadge={x.awayBadge}
                            awayName={x.awayName}
                            awayResult={x.awayResult}
                            playerName={x.playerName}
                            playerImg={x.playerImg}
                            playerNumber={x.playerNumber}
                            assistance={x.assistance}
                            subOn={x.subOn}
                            subOnImg={x.subOnImg}
                            subOnNumber={x.subOnNumber}
                            subOff={x.subOff}
                            subOffImg={x.subOffImg}
                            subOffNumber={x.subOffNumber}
                            side={x.side}
                          ></TournamentEvent>
                        );
                      })}
                    </div>

                    <a className={cx("__timeLine__team")}>
                      <span className={cx("__timeLine__badge")}>
                        <span className={cx("__timeLine__badge__block")}>
                          <img
                            src="https://logos-world.net/wp-content/uploads/2020/05/Miami-Heat-Logo-2000-Present.png"
                            className={cx("__timeLine__badge--adjust")}
                          ></img>
                        </span>
                      </span>
                      MIA
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div></div>
            <div></div>
          </section>
        </div>
      </section>
    </>
  );
};
