import { CreateTournamentContainer } from "../components/CreateTournamentContainer";
import { CreateTournamentHeading } from "../components/CreateTournamentHeading";
import "./style.scss";
import React, { useState } from "react";
import UploadAndDisplayImage from "../components/UploadandDisplayImage";

import { validate } from "./validate";
import { createTournamentApi } from "../Apis/createTournamentApi.api";

export const CreateTournament = () => {
  const [kindState, setKindState] = useState("round robin");
  const [statusState, setStatusState] = useState("active");

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
      <CreateTournamentContainer>
        <div className="panel">
          <CreateTournamentHeading></CreateTournamentHeading>
          <div className="createtournament-body">
            <form onSubmit={createTournament}>
              <div className="row createtourament-body-adjust ">
                <div className="col s6">
                  <UploadAndDisplayImage></UploadAndDisplayImage>
                </div>
                <div className="col s6">
                  <div>
                    <p>ID</p>
                    <input type="text" name="id" />
                  </div>
                  <div>
                    <p>Name</p>
                    <input type="text" name="name" />
                  </div>
                </div>
              </div>

              <div className="row position-adjust">
                <p className="col s6">Description</p>
                <textarea name="description" rows={5} cols={50}>
                  Hello there, this is some text in a text area
                </textarea>
              </div>

              <div className="row">
                <div className="col s6 ">
                  <label>Start Date</label>
                  <input type="date" name="start" />
                </div>
                <div className="col s6">
                  <label>End Date</label>
                  <input type="date" name="end" />
                </div>
              </div>

              <div className="row">
                <label>Choose your Kind</label>
                <select
                  className="jimmy"
                  value={kindState}
                  onChange={(e: any) => {
                    setKindState(e.target.value);
                  }}
                >
                  <option value="round robin">Rounds (Round robin)</option>
                  <option value="elimination">Knockout(Elimination)</option>
                  <option value="swiss system">Swiss System</option>
                </select>
              </div>

              <div className="row">
                <label>Status</label>
                <select
                  className="jimmy"
                  value={statusState}
                  onChange={(e: any) => setStatusState(e.target.value)}
                >
                  <option value="active">Active </option>
                  <option value="inactive">Inactive</option>
                  <option value="draft">Draft</option>
                </select>
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
