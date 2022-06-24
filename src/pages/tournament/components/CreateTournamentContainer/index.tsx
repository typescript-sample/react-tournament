import React from "react";
import "./style.scss";

type TournamentContainerProps = {
  children: any;
};

export const TournamentContainer = (props: TournamentContainerProps) => {
  return (
    <>
      <div className="tournamentcontainer">{props.children}</div>
    </>
  );
};
