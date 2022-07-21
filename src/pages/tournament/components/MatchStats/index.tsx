import React from "react";
import styles from "./matchStats.module.scss";
import classNames from "classnames/bind";
const cx = classNames.bind(styles);

const text = [
  { home: "49", field: "Possesion %", away: "51" },
  { home: "76", field: "Possesion %", away: "42" },
  { home: "49", field: "Possesion %", away: "51" },
  { home: "75", field: "Possesion %", away: "51" },
  { home: "49", field: "Possesion %", away: "51" },
];
export const MatchStats = () => {
  const BetterNow = (home: string, away: string) => {
    if (parseInt(home) > parseInt(away)) {
      return "home";
    } else if (parseInt(home) === parseInt(away)) {
      return "";
    } else {
      return "away";
    }
  };
  return (
    <>
      <section className={cx("__container", "__active")}>
        <div className={cx("__tab")}>
          <div className={cx("__statsSection", "__active", "__wrapper")}>
            <h3 className={cx("__header")}>Match Stats</h3>
            <table className={cx("__statsTable")}>
              <thead>
                <tr className={cx("__statsTeamBlock")}>
                  <th>
                    <a className={cx("__statsTeamText")}>
                      <div className={cx("__statsTeamBadge__block", "__home")}>
                        <img
                          src="https://cdn.nba.com/logos/nba/1610612741/primary/L/logo.svg"
                          className={cx("__statsTeamBadge__block--adjust")}
                        ></img>
                      </div>
                      Chicago Bulls
                    </a>
                  </th>
                  <th>&nbsp;</th>
                  <th>
                    <a className={cx("__statsTeamText")}>
                      <div className={cx("__statsTeamBadge__block", "__away")}>
                        <img
                          src="https://cdn.nba.com/logos/nba/1610612750/primary/L/logo.svg"
                          className={cx("__statsTeamBadge__block--adjust")}
                        ></img>
                      </div>
                      Minesota TimberWolves
                    </a>
                  </th>
                </tr>
              </thead>
              <tbody>
                {text.map((x: any) => {
                  return (
                    <tr className={cx("__statsTeamContent")}>
                      <td>
                        <p
                          className={
                            BetterNow(x.home, x.away) === "home"
                              ? cx("betterNow")
                              : ""
                          }
                        >
                          {x.home}
                        </p>
                      </td>
                      <td>
                        <p>{x.field}</p>
                      </td>
                      <td>
                        <p
                          className={
                            BetterNow(x.home, x.away) === "away"
                              ? cx("betterNow")
                              : ""
                          }
                        >
                          {x.away}
                        </p>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </>
  );
};
