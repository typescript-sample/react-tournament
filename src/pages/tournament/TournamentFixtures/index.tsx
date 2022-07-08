import React, { useEffect, useState } from "react";
import { context } from "../../../authentication/service";
import { getRoundApi } from "../Apis/getRoundApi.api";
import { TournamentHeading } from "../components/TournamentHeading";
import { UpcommingMatchesLong } from "../components/UpcommingMatchesLong";
import { Teams } from "../Services/models";
import { tournamentcontext } from "../Services/services";

import "./style.css";

export const TournamentFixtures = () => {
  const tournamentService = tournamentcontext.getTournamentServices();
  const [rounds, setRounds] = useState<Teams[]>([]);
  useEffect(() => {
    (async () => {
      const res = await tournamentService.getRounds();
      console.log(res);
      setRounds(res);
    })();
  }, []);
  return (
    <>
      <TournamentHeading header="Fixtures"></TournamentHeading>
      <div className="tournamentFixtures_main-wrapper">
        <div className="tournamentFixtures_main-fixturesHeader">
          <header>
            <div className="tournamentFixtures_main-fixturesHeader--week">
              MatchWeek 1
            </div>
            <div className="tournamentFixtures_main-fixturesHeader--competition">
              <img
                className="tournamentFixtures_main-fixturesHeader--competition---image"
                src="https://upload.wikimedia.org/wikipedia/vi/thumb/f/f2/Premier_League_Logo.svg/1200px-Premier_League_Logo.svg.png"
                alt=""
              />
            </div>
            <div className="tournamentFixtures_main-fixturesHeader--localtime">
              All times shown are your <strong>local time</strong>
            </div>
          </header>
          <div className="tournamentFixtures_main-matchListContainer">
            <div className="tournamentFixtures-main-matchListContainer--time">
              <h3 className="tournamentFixtures_main-matchListContainer--time---text">
                Saturday 6 August 2022
              </h3>
              <ul className="tournamentFixtures_main-matchListContainer--list">
                {rounds.map((x: any) => {
                  return (
                    <UpcommingMatchesLong
                      team1Name={x.teamname}
                      team1Image={x.teamlogo}
                      team2Image=""
                      team2Name={x.teamname}
                      time="2:00"
                      stadium="Old Trafford"
                    ></UpcommingMatchesLong>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
