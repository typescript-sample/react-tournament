import React, { useEffect, useState } from "react";
import { getTeamApi } from "../Apis/getTeamApi.api";
import TeamCard from "../components/TeamCard";
import "./style.css";

const TournamentTeams = () => {
  const [isActive, setIsActive] = useState(false);
  const [selected, setSelected] = useState("2022/2023");
  const options = ["2022/23", "2021/22", "2020/21", "2019/20"];
  const [teamInfo, setTeamInfo] = useState([]);

  useEffect(() => {
    (async () => {
      const res = await getTeamApi();
      setTeamInfo(res.list);
      console.log(res);
    })();
  }, []);
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
          {teamInfo.length !== 0 ? (
            <ul className="tournament_teams-body--list">
              {teamInfo.map((x: any) => {
                return (
                  <li className="">
                    <TeamCard
                      teamName={x.teamname}
                      stadiumName={x.stadiumname}
                      teamPic={x.teamlogo}
                      stadiumPic={x.stadiumpic}
                    ></TeamCard>
                  </li>
                );
              })}
            </ul>
          ) : (
            <ul></ul>
          )}
        </div>
      </div>
    </>
  );
};

export default TournamentTeams;
