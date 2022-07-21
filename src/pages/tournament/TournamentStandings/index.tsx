import React from "react";
import "./style.scss";

const TournamentStandings = () => {
  return (
    <>
      <div className="container">
        <section className="standings-header">Ranking Rules</section>
        <div className="standings-box">
          <div className="standings-rules">
            <span className="standings-rules--won">W</span>
            <span className="standings-rules--drawn">D</span>
            <span className="standings-rules--lost">L</span>
          </div>
          <table>
            <thead>
              <tr>
                <th scope="col" className="standings-text-centre">
                  <div>Position</div>
                </th>
                <th scope="col" className="standings-text-team">
                  Team
                </th>
                <th>
                  <div>Played</div>
                </th>
                <th>
                  <div>Won</div>
                </th>
                <th>
                  <div>Drawn</div>
                </th>
                <th>
                  <div>Lost</div>
                </th>
                <th>
                  <div>GF</div>
                </th>
                <th>
                  <div>GA</div>
                </th>
                <th>
                  <div>GD</div>
                </th>
                <th>
                  <div>Points</div>
                </th>
                <th>
                  <div>Form</div>
                </th>
              </tr>
            </thead>
            <tbody className="standings-box--body">
              <tr>
                <td className="standings-button__tooltip">
                  <span className="standings-position__value text-adjust">
                    1
                  </span>
                  <span className="standings-position__before"></span>
                </td>
                <td scope="row" className="">
                  <a>
                    <span>
                      <img
                        src="https://cdn.nba.com/logos/nba/1610612748/global/L/logo.svg"
                        className="standings-team__pic"
                      ></img>
                    </span>
                    <span className="standings-team__name">Miami Heat</span>
                  </a>
                </td>
                <td className="text-adjust">10</td>
                <td className="text-adjust">10</td>
                <td className="text-adjust">10</td>
                <td className="text-adjust">10</td>
                <td className="text-adjust">10</td>
                <td className="text-adjust">10</td>
                <td className="text-adjust">10</td>
                <td className="text-adjust__bold">10</td>

                <td className="standings-form">
                  <ul>
                    <li className="standings-form__won">W</li>
                    <li className="standings-form__won">W</li>
                    <li className="standings-form__won">W</li>
                    <li className="standings-form__won">W</li>
                    <li className="standings-form__won">W</li>
                  </ul>
                </td>
              </tr>
              <tr>
                <td className="standings-button__tooltip">
                  <span className="standings-position__value">2</span>
                  <span className="standings-position__before"></span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default TournamentStandings;
