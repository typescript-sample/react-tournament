import React, { useEffect, useState } from "react";
import { context } from "../../../authentication/service";
import { dateFormat } from "../../utils/dateFormat";
import { getRoundApi } from "../Apis/getRoundApi.api";
import { TournamentHeading } from "../components/TournamentHeading";
import { UpcommingMatchesLong } from "../components/UpcommingMatchesLong";
import { Matches, Teams, Tournaments } from "../Services/models";
import { tournamentcontext } from "../Services/services";

import "./style.css";

export const TournamentFixtures = () => {
  // const tournamentService = tournamentcontext.getTournamentServices();
  // const [rounds, setRounds] = useState<Teams[]>([]);
  // useEffect(() => {
  //   (async () => {
  //     const res = await tournamentService.getRounds();
  //     console.log(res);
  //     setRounds(res);
  //   })();
  // }, []);
  const tournamentService = tournamentcontext.getTournamentServices();

  const [tournaments, setTournaments] = useState<Tournaments>();
  useEffect(() => {
    (async () => {
      const res = await tournamentService.getTournamentById("1");
      console.log(res);
      setTournaments(res);
    })();
  }, []);
  return (
    <>
      <TournamentHeading header="Fixtures"></TournamentHeading>
      <div className="tournamentFixtures_main-wrapper">
        <div className="tournamentFixtures_main-fixturesHeader">
          {tournaments?.rounds.map((x: any) => {
            return (
              <>
                <header>
                  <div className="tournamentFixtures_main-fixturesHeader--week">
                    MatchWeek {x.roundname}
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
                      {dateFormat(x.createdAt)}
                    </h3>
                    <ul className="tournamentFixtures_main-matchListContainer--list">
                      {x.matches.map((y: any) => {
                        return (
                          <UpcommingMatchesLong
                            team1Name={y.team1.teamname}
                            team1Image={y.team1.teamlogo}
                            team2Image={y.team2.teamlogo}
                            team2Name={y.team2.teamname}
                            time="2:00"
                            stadium={y.stadiumname}
                          ></UpcommingMatchesLong>
                        );
                      })}
                    </ul>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};
