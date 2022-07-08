import React, { useState } from "react";
import "./style.css";

type TournamentTypeProps = {
  type: any;
};

export const TournamentType = (props: TournamentTypeProps) => {
  const [clickedId, setClickedId] = useState(-1);
  return (
    <>
      {props.type.map((x: any, i: any) => {
        return (
          <div className="tournament_type-adjust">
            <label
              key={i}
              onClick={() => setClickedId(i)}
              className={
                i === clickedId
                  ? "tournament_type-label tournament_type-label--active"
                  : "tournament_type-label"
              }
            >
              <img className="tournament_type-image" src={x.image}></img>
              <div className="tournament_type-text">{x.name}</div>
            </label>
          </div>
        );
      })}
    </>
  );
};
