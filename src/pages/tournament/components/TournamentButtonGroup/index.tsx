import React, { useState } from "react";
import "./style.css";

type TournamentButtonGroupProps = {
  buttons: any;
};

export const TournamentButtonGroup = (props: TournamentButtonGroupProps) => {
  const [clickedId, setClickedId] = useState(-1);
  return (
    <>
      {props.buttons.map((x: any, i: any) => (
        <button
          key={i}
          name={x}
          onClick={() => setClickedId(i)}
          className={i === clickedId ? "customButton active" : "customButton"}
        >
          {x}
        </button>
      ))}
    </>
  );
};
