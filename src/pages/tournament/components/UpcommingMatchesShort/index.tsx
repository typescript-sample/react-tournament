import React from "react";

import classNames from "classnames/bind";
import styles from "./upCommingMatchesShort.module.scss";
import clsx from "clsx";
const cx = classNames.bind(styles);
type UpcommingMatchesShortProps = {
  homeName: string;
  homeBadge: string;
  time: string;
  awayName: string;
  awayBadge: string;
};
export const UpcommingMatchesShort = (props: UpcommingMatchesShortProps) => {
  return (
    <>
      {/* <span className={cx("__wrapper")}> */}
      <a className={cx("__block")}>
        <span className={cx("__block__homeName")}>
          <abbr title="Miami Heat">{props.homeName}</abbr>
        </span>
        <span className={cx("__block__homeBadge")}>
          <img
            className={cx("__block__homeBadge--adjust")}
            src={props.homeBadge}
            alt=""
          />
        </span>
        <time>{props.time}</time>
        <span className={cx("__block__awayBadge")}>
          <img
            className={cx("__block__awayBadge--adjust")}
            src={props.awayBadge}
            alt=""
          />
        </span>
        <span className={cx("__block__awayName")}>
          <abbr title="Miami Heat">{props.awayName}</abbr>
        </span>

        <span className={cx("__block__icon")}>
          <img
            className={cx("__block__icon--adjust")}
            src="https://www.freeiconspng.com/uploads/right-arrow-icon-12.png"
            alt=""
          />
        </span>
      </a>
      {/* </span> */}
    </>
  );
};
