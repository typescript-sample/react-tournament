import React from "react";
import classNames from "classnames/bind";
import style from "./style.module.scss";

type MatchEventAssistantProps = {
  type: "Score" | "Red Card" | "Yellow Card" | "Substitution";
  side: "home" | "away";
  playerName: string;
  mins: number;
};

const cx = classNames.bind(style);

export const MatchEventAssistant = (props: MatchEventAssistantProps) => {
  const checkMatchEventSide = cx(
    props.side === "home"
      ? "matchEventAssistant__home"
      : "matchEventAssistant__away"
  );

  return (
    <>
      <div className={checkMatchEventSide}>
        <div className={cx("matchEventAssistant__event")}>
          <a href="">Kyle Lowry </a>
          30'
        </div>
      </div>
    </>
  );
};
