import React from "react";
import "./style.scss";

type FindTournamentContainerProps = {
  children: any;
};

export const FindTournamentContainer = (
  props: FindTournamentContainerProps
) => {
  return (
    <>
      <div className="findtournamentcontainer">{props.children}</div>
    </>
  );
};