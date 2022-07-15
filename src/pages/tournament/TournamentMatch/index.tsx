import React from "react";
import { TournamentMatchBar } from "../components/TournamentMatchBar";
import "./style.css";
import { ReactComponent as SoccerLogo } from "../../../assets/images/soccer-com.svg";
import { TournamentEvent } from "../components/TournamentEvent";
import { MatchEvent } from "../components/MatchEvent";

const test = [
  {
    type: "Score",
    mins: 27,
    homeBadge:
      "https://logos-world.net/wp-content/uploads/2020/05/Miami-Heat-Logo-2000-Present.png ",
    homeName: "MIA",
    homeResult: 1,
    awayBadge:
      "https://1000logos.net/wp-content/uploads/2016/10/Boston-Celtics-Logo-500x313.png",
    awayName: "BOS",
    awayResult: 0,
    playerName: "Jimmy Butler",
    playerImg: "https://cdn.nba.com/headshots/nba/latest/1040x760/202710.png",
    playerNumber: 22,
    assistance: "Kevin Durant",
    side: "home",
  },
  {
    type: "Score",
    mins: 60,
    homeBadge:
      "https://logos-world.net/wp-content/uploads/2020/05/Miami-Heat-Logo-2000-Present.png ",
    homeName: "MIA",
    homeResult: 1,
    awayBadge:
      "https://1000logos.net/wp-content/uploads/2016/10/Boston-Celtics-Logo-500x313.png",
    awayName: "BOS",
    awayResult: 1,
    playerName: "Jason Tatum",
    playerImg:
      "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/4065648.png",
    playerNumber: 0,
    assistance: "Jaylen Brown",
    side: "away",
  },
  {
    type: "Substitution",
    mins: 40,
    homeBadge:
      "https://logos-world.net/wp-content/uploads/2020/05/Miami-Heat-Logo-2000-Present.png ",
    homeName: "MIA",
    homeResult: 1,
    awayBadge:
      "https://1000logos.net/wp-content/uploads/2016/10/Boston-Celtics-Logo-500x313.png",
    awayName: "BOS",
    awayResult: 0,
    subOn: "Kyrie Irving",
    subOnNumber: 11,
    subOnImg: "https://cdn.nba.com/headshots/nba/latest/1040x760/202681.png",
    subOff: "Kevin Durant",
    subOffNumber: 7,
    subOffImg: "https://c.neh.tw/thumb/f/720/comdlpng6955114.jpg",

    side: "away",
  },
];
export const TournamentMatch = () => {
  return (
    <>
      <section className="tournament_match-block">
        <div className="tournament_match-nav">
          <nav className="tournament_match-nav--block">1</nav>
        </div>
        <div className="tournament_match-centralcontent">
          <section className="tournament_match-centralcontent--box">
            <picture className="tournament_match-centralcontent--box---background">
              <source
                media="min-width: 1024px"
                srcSet="https://resources.premierleague.com/premierleague/photo/2016/07/21/ccade424-00e6-4310-a183-48f7101b1f5e/Arsenal_Stadium_Emirates.jpeg"
              ></source>
              <img
                className="tournament_match-centralcontent--box---image"
                src="https://resources.premierleague.com/premierleague/photo/2016/07/21/ccade424-00e6-4310-a183-48f7101b1f5e/Arsenal_Stadium_Emirates.jpeg"
              ></img>
            </picture>
            <div className="container">
              <div className="tournament_match-bar">
                <TournamentMatchBar></TournamentMatchBar>
              </div>
            </div>

            <div className="tournament_match-centralcontent--scoreboxContainer">
              <div className="container">
                <div className="tournament_match-centralcontent--detail">
                  <div className="tournament_match-teamscontainer">
                    <div className="tournament_match-team tournament_match-home">
                      <a
                        className="tournament_match-home--badgeContainer"
                        href=""
                      >
                        <span className="tournament_match-home--badgeContainer---image">
                          <img
                            className="tournament_match-home--badgeContainer---image----adjust"
                            src="https://upload.wikimedia.org/wikipedia/en/thumb/c/c2/Minnesota_Timberwolves_logo.svg/1200px-Minnesota_Timberwolves_logo.svg.png"
                          ></img>
                        </span>
                      </a>
                      <a
                        href=""
                        className="tournament_match-teamName tournament_match-teamName--home"
                      >
                        <span className="tournament_match-teamName--adjust">
                          Minesota Timberwolves
                        </span>
                      </a>
                    </div>
                    <div className="tournament_match-scoreContainer">
                      <div className="tournament_match-scoreContainer--score">
                        1 - 0
                      </div>
                    </div>
                    <div className="tournament_match-team tournament_match-away">
                      <a
                        href=""
                        className="tournament_match-teamName tournament_match-teamName--away"
                      >
                        <span className="tournament_match-teamName--adjust">
                          Boston Celtics
                        </span>
                      </a>
                      <a
                        className="tournament_match-away--badgeContainer"
                        href=""
                      >
                        <span className="tournament_match-away--badgeContainer---image">
                          <img
                            className="tournament_match-away--badgeContainer---image----adjust"
                            src="https://1000logos.net/wp-content/uploads/2016/10/Boston-Celtics-Logo-500x313.png"
                          ></img>
                        </span>
                      </a>
                    </div>
                  </div>

                  <div className="tournament_match-matchStats">
                    <div className="tournament_match-matchStats--halfTime">
                      <span>Half Time</span>
                      1-0
                    </div>
                  </div>
                  <div className="tournament_match-kickOff">
                    KickOff:
                    <strong> time</strong>
                  </div>
                  <div className="tournament_match-matchEvents">
                    {test.map((x: any) => {
                      return x.side === "home" ? (
                        <div className="tournament_match-matchEvents--home">
                          <MatchEvent
                            playerName={x.playerName}
                            mins={x.mins}
                            side={x.side}
                            type={x.type}
                          ></MatchEvent>
                        </div>
                      ) : (
                        <div className="tournament_match-matchEvents--away">
                          <MatchEvent
                            playerName={x.playerName}
                            mins={x.mins}
                            side={x.side}
                            type={x.type}
                          ></MatchEvent>
                        </div>
                      );
                    })}
                  </div>

                  <div className="tournament_match-assists">
                    <div className="tournament_match-assists--title">
                      Assists
                    </div>
                    <div>
                      <div className="tournament_match-assists--home">
                        <div className="tournament_match-assists--home---event">
                          <a href="">Kyle Lowry </a>
                          30'
                        </div>
                      </div>
                      <div className="tournament_match-assists--away">
                        <div className="tournament_match-assists--away---event">
                          <a href="">Kyle Lowry </a>
                          30'
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="tournament_match-timeLine">
                    <a className="tournament_match-timeLine--team">
                      <span className="tournament_match-timeLine--team---badge">
                        <span className="tournament_match-timeLine--team---badge_block">
                          <img
                            src="https://logos-world.net/wp-content/uploads/2020/05/Miami-Heat-Logo-2000-Present.png"
                            className="tournament_match-timeLine--team---badge_adjust"
                          ></img>
                        </span>
                      </span>
                      MIA
                    </a>
                    <div className="tournamentEvent__timeLine">
                      <div className="tournamentEvent__timeLine__element">
                        HT
                      </div>
                      {test.map((x: any) => {
                        return (
                          <TournamentEvent
                            type={x.type}
                            mins={x.mins}
                            homeBadge={x.homeBadge}
                            homeName={x.homeName}
                            homeResult={x.homeResult}
                            awayBadge={x.awayBadge}
                            awayName={x.awayName}
                            awayResult={x.awayResult}
                            playerName={x.playerName}
                            playerImg={x.playerImg}
                            playerNumber={x.playerNumber}
                            assistance={x.assistance}
                            subOn={x.subOn}
                            subOnImg={x.subOnImg}
                            subOnNumber={x.subOnNumber}
                            subOff={x.subOff}
                            subOffImg={x.subOffImg}
                            subOffNumber={x.subOffNumber}
                            side={x.side}
                          ></TournamentEvent>
                        );
                      })}
                    </div>

                    <a className="tournament_match-timeLine--team">
                      <span className="tournament_match-timeLine--team---badge">
                        <span className="tournament_match-timeLine--team---badge_block">
                          <img
                            src="https://1000logos.net/wp-content/uploads/2016/10/Boston-Celtics-Logo-500x313.png"
                            className="tournament_match-timeLine--team---badge_adjust"
                          ></img>
                        </span>
                      </span>
                      BOS
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div></div>
            <div></div>
          </section>
        </div>
      </section>
    </>
  );
};
