import React, { useState } from "react";
import TeamCard from "../components/TeamCard";
import "./style.css";

const TournamentTeams = () => {
  const [isActive, setIsActive] = useState(false);
  const [selected, setSelected] = useState("2022/2023");
  const options = ["2022/23", "2021/22", "2020/21", "2019/20"];
  return (
    <>
      <div className="container tournament_teams-container">
        <section className="tournament_teams-block ">
          <div
            className="tournament_teams-dropDown"
            onClick={(e) => setIsActive(!isActive)}
          >
            <div className="tournament_teams-label">Filter by Season</div>
            <div className="tournament_teams-current">{selected}</div>
            {isActive && (
              <ul className="tournament_teams-dropDown--list">
                {options.map((x) => (
                  <li
                    onClick={(e) => {
                      setSelected(x);
                      setIsActive(false);
                    }}
                  >
                    {x}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </section>

        <div className="tournament_teams-body">
          <ul className="tournament_teams-body--list">
            <li className="">
              <TeamCard></TeamCard>
            </li>
            <li className="">
              <TeamCard></TeamCard>
            </li>
            <li className="">
              <TeamCard></TeamCard>
            </li>
            <li className="">
              <TeamCard></TeamCard>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default TournamentTeams;
