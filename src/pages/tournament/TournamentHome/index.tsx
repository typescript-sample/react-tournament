import React from "react";
import { TournamentNav } from "../components/TournamentNav";
import { TournamentSidebarFixture } from "../components/TournamentSidebarFixture";
import { UpcommingMatchesShort } from "../components/UpcommingMatchesShort";

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
              <TournamentSidebarFixture></TournamentSidebarFixture>
              <div className="tournamentHome_main-sidebar--standingHeader"></div>
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
                  <div className="tournamentHome_secondary-wrapper">
                    <div className="tournamentHome_secondary-wrapper--news">
                      <figure className="tournamentHome_secondary-wrapper--news---figure">
                        <a className="tournamentHome_secondary-pics">
                          <img
                            className="tournamentHome_secondary-pics--adjust"
                            src="https://images.complex.com/complex/images/c_fill,dpr_auto,f_auto,q_auto,w_1400/fl_lossy,pg_1/uykqqdm348n5mlrlt3vh/kevin-durant?fimg-ssr-default"
                          ></img>
                        </a>

                        <figcaption className="tournamentHome_secondary-wrapper--news---figcaption">
                          <div className="tournamentHome_secondary-wrapper--news---figcaption----caption">
                            Hello
                          </div>
                          <h4>
                            <a className="tournamentHome_secondary-wrapper--news---figcaption----title">
                              Hello
                            </a>
                          </h4>
                        </figcaption>
                      </figure>
                    </div>
                    <div className="tournamentHome_secondary-wrapper--news">
                      2
                    </div>
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
