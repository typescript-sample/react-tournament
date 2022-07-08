//import { TournamentContainer } from "../components/TournamentContainer";
import { CreateTournamentContainer } from "../components/CreateTournamentContainer";
import { CreateTournamentHeading } from "../components/CreateTournamentHeading";
import "./style.css";
import React, { useState } from "react";
import UploadAndDisplayImage from "../components/UploadandDisplayImage";

import { validate } from "./validate";
import { createTournamentApi } from "../Apis/createTournamentApi.api";
import { TournamentHeading } from "../components/TournamentHeading";
import { TournamentButtonGroup } from "../components/TournamentButtonGroup";
import { TournamentType } from "../components/TournamentType";

export const CreateTournament = () => {
  const [kindState, setKindState] = useState("round robin");
  const [statusState, setStatusState] = useState("active");
  const test = [
    {
      name: "eliminate",
      image:
        "https://www.interbasket.net/wp-content/uploads/14-team-bracket-single-elimination.jpg",
    },
    {
      name: "eliminate",
      image:
        "https://www.interbasket.net/wp-content/uploads/14-team-bracket-single-elimination.jpg",
    },
    {
      name: "eliminate",
      image:
        "https://www.interbasket.net/wp-content/uploads/14-team-bracket-single-elimination.jpg",
    },
  ];

  const createTournament = async (e: any) => {
    e.preventDefault();
    const id = e.target.id.value;
    const name = e.target.name.value;
    const description = e.target.description.value;
    const startDate = e.target.start.value;
    const endDate = e.target.end.value;
    const kind = kindState;
    const status = statusState;
    console.log(id, name, description, startDate, endDate, kind, status);
    const validdata = validate(id, name, description, startDate, endDate);
    if (validdata) {
      const res = await createTournamentApi({
        id,
        name,
        description,
        startDate,
        endDate,
        kind,
        status,
      });
      if (res.status === 1) {
        alert("Your request has been transfered to the Administrator");
      } else {
        alert("Try better next time.");
      }
      console.log(res, "39");
    }
  };
  return (
    <>
      {/* <TournamentContainer>
        <h1>Create Tournament</h1>
      </TournamentContainer> */}
      <CreateTournamentContainer>
        <div className="panel">
          <TournamentHeading header="Create Tournament"></TournamentHeading>
          <div className="createtournament-body">
            <form onSubmit={createTournament}>
              <div className="row createtourament-body-adjust createtournament_row-wrapper ">
                <div className="col s6">
                  <div>
                    <p className="createtournament_text-adjust">ID</p>
                    <input
                      className="createtournament_input"
                      type="text"
                      name="id"
                    />
                  </div>
                </div>
                <div className="col s6">
                  <div>
                    <p className="createtournament_text-adjust">Name</p>
                    <input
                      className="createtournament_input"
                      type="text"
                      name="name"
                    />
                  </div>
                </div>
              </div>
              <div className="row createtournament_row-wrapper">
                <div className="col s6 ">
                  <p className="createtournament_text-adjust">Start Date</p>
                  <input
                    className="createtournament_input-date"
                    type="date"
                    name="start"
                  />
                  <p className="createtournament_text-adjust">End Date</p>
                  <input
                    className="createtournament_input-date"
                    type="date"
                    name="end"
                  />
                </div>
                <div className="col s6">
                  <p className="createtournament_text-adjust">
                    Competitors type
                  </p>
                  <div className="createtournament_competitortype-block">
                    <TournamentButtonGroup
                      buttons={["One", "Two"]}
                    ></TournamentButtonGroup>
                    <p className="createtournament_text-adjust">
                      Number of Teams
                    </p>
                    <input
                      className="createtournament_input"
                      type="text"
                      name="name"
                    />
                  </div>
                </div>
              </div>

              <div className="row position-adjust">
                <h1 className=" createtournament_text-desc">Description</h1>
                <textarea
                  className="createtournament_textarea"
                  name="description"
                  rows={6}
                  cols={50}
                  placeholder="Write something ... "
                ></textarea>
              </div>

              <div className="row">
                <label className="createtournament_type-header">
                  Choose your type
                </label>
                <div className="createtournament_type-block">
                  <TournamentType type={test}></TournamentType>
                </div>
              </div>

              <div className="createTournamentButton-block">
                <button
                  type="submit"
                  className="position-adjust createTournamentButton-adjust"
                >
                  <span>Submit!</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </CreateTournamentContainer>
    </>
  );
};
