import React from "react";

import "./style.scss";

type CreateTournamentContainerProps = {
  children: any;
};

export const CreateTournamentContainer = (
  props: CreateTournamentContainerProps
) => {
  return (
    <>
      <div className="createtournamentcontainer">{props.children}</div>
    </>
  );
};
