import React, { useState } from "react";
import UploadAndDisplayImage from "../UploadandDisplayImage";
import "./style.scss";

export const CreateTouramentBody = () => {
  const [optionsState, useOptionsState] = useState();
  return (
    <>
      <div className="createtournament-body">
        <form>
          <div className="row createtourament-body-adjust ">
            <div className="col s4">
              <UploadAndDisplayImage></UploadAndDisplayImage>
            </div>
            <div className="col s8">
              <div>
                <p>ID</p>
                <input type="text" name="name" />
              </div>
              <div>
                <p>Name</p>
                <input type="text" name="name" />
              </div>
            </div>
          </div>

          <div className="row">
            <p>Description</p>
            <textarea rows={5} cols={50}>
              Hello there, this is some text in a text area
            </textarea>
          </div>

          <div className="row">
            <div className="col s6">
              <label>Start Date</label>
              <input type="date" name="date" />
            </div>
            <div className="col s6">
              <label>End Date</label>
              <input type="date" name="date" />
            </div>
          </div>

          <div className="row">
            <label>Kind</label>
            <select className="jimmy" value={optionsState}>
              <option value="A">Rounds (Round robin)</option>
              <option value="B">Knockout(Elimination)</option>
              <option value="C">Swiss System</option>
            </select>
          </div>

          <div className="row">
            <label>Status</label>
            <select className="jimmy" value={optionsState}>
              <option value="A">Active </option>
              <option value="B">Inactive</option>
              <option value="C">Draft</option>
            </select>
          </div>
          <button type="submit">Submit!</button>
        </form>
      </div>
    </>
  );
};
