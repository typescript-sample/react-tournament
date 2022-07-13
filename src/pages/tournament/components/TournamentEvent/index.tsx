import React from "react";
import clsx from "clsx";
import classNames from "classnames/bind";
import styles from "./style.module.scss";
import { ReactComponent as SoccerLogo } from "../../../../assets/images/soccer-com.svg";
import { ButtonTest } from "../ButtonTest";

const cx = classNames.bind(styles);

export const TournamentEvent = () => {
  return (
    <div className={cx("tournamentEvent__timeLine")}>
      <ButtonTest></ButtonTest>
      <div className={cx("tournamentEvent__block")}>
        <span>
          <SoccerLogo
            className={clsx(
              cx("tournamentEvent__icon", "tournamentEvent__icon--adjust")
            )}
          ></SoccerLogo>
        </span>
        27
        <span></span>
        <div className={cx("tournamentEvent__inforContainer")}>
          <div>
            <header className={cx("tournamentEvent__inforContainer__header")}>
              <SoccerLogo
                className={clsx(
                  cx(
                    "tournamentEvent__inforContainer__icon",
                    "tournamentEvent__inforContainer__icon--adjust"
                  )
                )}
              ></SoccerLogo>
              <time className={cx("tournamentEvent__inforContainer__time")}>
                '27'
              </time>
              Goal
              <div className={cx("tournamentEvent__inforContainer__teamScore")}>
                <a className={cx("tournamentEvent__inforContainer__team")}>
                  <span
                    className={clsx(
                      cx(
                        "tournamentEvent__inforContainer__teamBadge",
                        "tournamentEvent__inforContainer__homeTeamBadge"
                      )
                    )}
                  >
                    <span
                      className={cx(
                        "tournamentEvent__inforContainer__teamBadge__icon"
                      )}
                    >
                      <img
                        src="https://logos-world.net/wp-content/uploads/2020/05/Miami-Heat-Logo-2000-Present.png"
                        className={cx(
                          "tournamentEvent__inforContainer__teamBadge__icon--adjust"
                        )}
                      ></img>
                    </span>
                  </span>
                  <span
                    className={cx(
                      "tournamentEvent__inforContainer__homeTeamName"
                    )}
                  >
                    MIA
                  </span>
                </a>
                <span className={cx("tournamentEvent__inforContainer__team")}>
                  1
                </span>
                {"-"}
                <span className={cx("tournamentEvent__inforContainer__team")}>
                  0
                </span>

                <a className={cx("tournamentEvent__inforContainer__team")}>
                  <span
                    className={cx(
                      "tournamentEvent__inforContainer__awayTeamName"
                    )}
                  >
                    BOS
                  </span>
                  <span
                    className={clsx(
                      cx(
                        "tournamentEvent__inforContainer__teamBadge",
                        "tournamentEvent__inforContainer__awayTeamBadge"
                      )
                    )}
                  >
                    <span
                      className={cx(
                        "tournamentEvent__inforContainer__teamBadge__icon"
                      )}
                    >
                      <img
                        src="https://logos-world.net/wp-content/uploads/2020/05/Miami-Heat-Logo-2000-Present.png"
                        className={cx(
                          "tournamentEvent__inforContainer__teamBadge__icon--adjust"
                        )}
                      ></img>
                    </span>
                  </span>
                </a>
              </div>
            </header>
            <div className={cx("tournamentEvent__inforContent")}>
              <img
                src="https://cdn.nba.com/headshots/nba/latest/1040x760/202710.png"
                className={cx("tournamentEvent__inforContent__playerImage")}
              ></img>
              <div className={cx("tournamentEvent__inforContent__playerInfor")}>
                <a
                  className={cx(
                    "tournamentEvent__inforContent__playerInfor__name"
                  )}
                >
                  22 {"."} Jimmy Butler
                </a>
                <div
                  className={cx("tournamentEvent__inforContent__playerInfor")}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
