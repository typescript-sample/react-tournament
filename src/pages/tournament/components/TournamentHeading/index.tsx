import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./style.css";
type TournamentHeadingProps = {
  header: string;
};

export const TournamentHeading = (props: TournamentHeadingProps) => {
  return (
    <header className="tournament_heading-block">
      <div className="container">
        <h1 className="tournament_heading-title">{props.header}</h1>
      </div>
    </header>
  );
};
