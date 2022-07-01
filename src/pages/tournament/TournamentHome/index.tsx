import React from "react";
import { TournamentNav } from "../components/TournamentNav";
import { UpcommingMatches } from "../components/UpcommingMatches";
import "./style.css";

export const TournamentHome = () => {
  return (
    <>
      <div className="tournamentHome_banner-block">
        <div className="container">
          <div className="tournamentHome_banner-heading--box">
            <div className="tournamentHome_banner-heading--block">
              <div className="tournamentHome_banner-heading--pic">
                <img
                  src="https://w7.pngwing.com/pngs/698/663/png-transparent-2018-19-premier-league-2017-18-premier-league-english-football-league-leicester-city-f-c-manchester-city-f-c-premier-league-darts-purple-violet-team.png"
                  className="tournamentHome_banner-heading--pic---adjust"
                ></img>
              </div>
              <div className="tournamentHome_banner-heading--text">
                <div className="tournamentHome_banner-heading--text---adjust">
                  Premier League
                </div>
                <div className="tournamentHome_banner-heading--kind">
                  <div className="tournamentHome_banner-heading--kind---adjust">
                    Round Robin
                  </div>
                </div>
              </div>
            </div>
          </div>
          <TournamentNav></TournamentNav>
        </div>
      </div>
      <main>
        <div className="tournamentHome_main-wrapper">
          <div className="tournamentHome_main-content">
            <nav className="tournamentHome_main-sidebar">
              <div className="tournamentHome_main-sidebar--fixturesHeader">
                <header>
                  <div className="tournamentHome_main-sidebar--fixturesHeader---week">
                    MatchWeek 1
                  </div>
                  <div className="tournamentHome_main-sidebar--fixturesHeader---competition">
                    <img
                      className="tournamentHome_main-sidebar--fixturesHeader---competition----image"
                      src="https://upload.wikimedia.org/wikipedia/vi/thumb/f/f2/Premier_League_Logo.svg/1200px-Premier_League_Logo.svg.png"
                      alt=""
                    />
                  </div>
                  <div className="tournamentHome_main-sidebar--fixturesHeader---localtime">
                    All times shown are your <strong>local time</strong>
                  </div>
                </header>
                <div className="tournamentHome_main-sidebar--matchListContainer">
                  <div className="tournamentHome-main-sidebar--matchListContainer---time">
                    <time>Saturday 6 August</time>
                    <UpcommingMatches></UpcommingMatches>
                    <UpcommingMatches></UpcommingMatches>
                    <UpcommingMatches></UpcommingMatches>
                  </div>
                </div>
              </div>
            </nav>
            <div className="tournamentHome_main-sidebarPush">
              <div className="col-12">
                <section className="tournamentHome_main-hero">
                  <div className="tournamentHome_main-hero--thumbnail">
                    <figure className="tournamentHome_main-hero--thumbnail---figure">
                      <a className="tournamentHome_main-hero--thumbnail---image">
                        <img
                          className="tournamentHome_main-hero--thumbnail---image----adjust"
                          src="https://static01.nyt.com/images/2019/11/24/sports/24nba-heatsixers/merlin_164932677_4d0f6dc8-113c-452b-bcf2-b6b19399f5d3-superJumbo.jpg"
                        ></img>
                      </a>
                      <figcaption className="tournamentHome_main-hero--figcaption">
                        <span className="tournamentHome_main-hero--figcaption---span">
                          Transfer
                        </span>
                        <h4>
                          <a className="tournamentHome_main-hero--figcaption---title">
                            Summer 2022 Transfer and News
                          </a>
                        </h4>
                        <p className="tournamentHome_main-hero--figcaption---desc">
                          See the latest signings and exits from Premier League
                          clubs as Jimmy Butler joins Celtics form Miami Heat
                        </p>
                      </figcaption>
                    </figure>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};
