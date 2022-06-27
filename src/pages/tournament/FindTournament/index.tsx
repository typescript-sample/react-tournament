import React from "react";
import { FindTournamentBody } from "../components/FindTournamentBody";
import { FindTournamentHeading } from "../components/FindTournamentHeading";
import "./style.scss";

export const FindTournament = () => {
  return (
    <>
      <FindTournamentHeading></FindTournamentHeading> 
      <FindTournamentBody></FindTournamentBody>
    </>
  );
};
