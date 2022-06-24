import React from "react";
// type CreateTournamentHeadingProps = {};
import "./style.scss";

export const CreateTournamentHeading = () =>
  // props: CreateTournamentHeadingProps
  {
    return (
      <>
        <div className="heading-panel">
          <h3 className="heading-title">Create Tournament</h3>
          <p className="heading-helpblock">Step 1: General Information</p>
          <span className="heading-warning">
            Please fullfill properly data for all required field (*)
          </span>
        </div>
      </>
    );
  };
