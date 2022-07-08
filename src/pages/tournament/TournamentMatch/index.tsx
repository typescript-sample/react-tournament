import React from "react";
import "./style.css";

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

            <div></div>
            <div></div>
            <div></div>
          </section>
        </div>
      </section>
    </>
  );
};
