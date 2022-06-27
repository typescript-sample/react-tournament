import React from "react";
// type CreateTournamentHeadingProps = {};
import "./style.scss";

export const FindTournamentHeading = () =>
  // props: CreateTournamentHeadingProps
  {
    return (
      <>
        <div className="heading-panel">
          <h3 className="heading-title">Find Tournament</h3>
          <form>
            <div className="row container">
              <div className="col s6 heading-input-group">
                <input className="form-control" placeholder="Search for..."></input>
                <span className="input-group-btn"> 
                  <button className="heading-btn" type="submit">
                    <i className="fa fa-search">
                    </i>
                  </button>
                </span>
              </div>
              <div className="col s6 heading-form-control">
                <div className="row container">
                  <div className="col s4 league-filter">
                    <select name="heading-league-filter" id="LeagueCategories" title="Game Type">
                      <option value="type1">Football</option>
                      <option value="type2">Basketball</option>
                      <option value="type3">Badminton</option>
                    </select>
                  </div>
                  <div className="col s4 league-filter">
                    <select name="heading-league-filter" id="Statuses" title="Status">
                      <option value="status1">Enrollment</option>
                      <option value="status2">Live</option>
                      <option value="status3">Complete</option>
                    </select>
                  </div>
                  <div className="col s4 league-filter">
                    <select name="heading-league-filter" id="SortOptions" title="Sort">
                      <option value="update1">Last update</option>
                      <option value="update2">Most view</option>
                      <option value="update3">Most followers</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
          </form>
          </div>
      </>
    );
  };
