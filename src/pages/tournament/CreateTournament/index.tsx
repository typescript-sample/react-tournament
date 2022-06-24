import React from "react";
import { CreateTouramentBody } from "../components/CreateTouramentBody";
import { CreateTournamentContainer } from "../components/CreateTournamentContainer";
import { CreateTournamentHeading } from "../components/CreateTournamentHeading";
import "./style.scss";

export const CreateTournament = () => {
  return (
    <>
      <CreateTournamentContainer>
        <div className="panel">
          <CreateTournamentHeading></CreateTournamentHeading>
          <CreateTouramentBody></CreateTouramentBody>
        </div>
      </CreateTournamentContainer>
    </>
  );
};
