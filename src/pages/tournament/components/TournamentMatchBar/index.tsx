import React from "react";

import { ReactComponent as RefereeLogo } from "../../../../assets/images/referee-com.svg";
import { ReactComponent as StadiumLogo } from "../../../../assets/images/stadium-com.svg";
import { ReactComponent as EyesLogo } from "../../../../assets/images/eyes-com.svg";
import styles from "./tournamentMatchBar.module.scss";
import classNames from "classnames/bind";
import clsx from "clsx";

const cx = classNames.bind(styles);
export const TournamentMatchBar = () => {
  return (
    <>
      <div className={cx("__matchBar")}>
        <div className={cx("__matchBar__text", "__matchBar__position")}>
          Sun 22 May 2022
        </div>
        <div className={cx("__matchBar__text", "__matchBar__position")}>
          <RefereeLogo className={cx("__matchBar__referee")}></RefereeLogo>
          Martin Atkinson
        </div>
        <div className={cx("__matchBar__text", "__matchBar__position")}>
          <StadiumLogo className={cx("__matchBar__stadium")}></StadiumLogo>
          Old Trafford
        </div>
        <div className={cx("__matchBar__text", "__matchBar__position")}>
          <EyesLogo className={cx("__matchBar__attendance")}></EyesLogo>
          3000
        </div>
      </div>
      <div></div>
    </>
  );
};
