import { Item } from 'onecore';
import * as React from 'react';
import { createModel, DispatchWithCallback, EditComponentParam, useEdit } from 'react-hook-core';
import { formatPhone } from 'ui-plus';
import { emailOnBlur, Gender, handleError, handleSelect, inputEdit, phoneOnBlur, requiredOnBlur, Status } from 'uione';
import { getMasterData, getTeamService, Team } from './service';

interface InternalState {
  team: Team;
}

const createTeam = (): Team => {
  const team = createModel<Team>();
  team.status = Status.Active;
  return team;
};
const initialize = (id: string | null, load: (id: string | null) => void, set: DispatchWithCallback<Partial<InternalState>>) => {
  load(id);
};

const initialState: InternalState = {
  team: {} as Team,
};

const param: EditComponentParam<Team, string, InternalState> = {
  createModel: createTeam,
  initialize
};
export const TeamForm = () => {
  const refForm = React.useRef();
  const { resource, state, setState, updateState, flag, save, updatePhoneState, back } = useEdit<Team, string, InternalState>(refForm, initialState, getTeamService(), inputEdit(), param);
  const team = state.team;
  return (
    <div className='view-container'>
      <form id='teamForm' name='teamForm' model-name='team' ref={refForm as any}>
        <header>
          <button type='button' id='btnBack' name='btnBack' className='btn-back' onClick={back} />
          <h2>{flag.newMode ? resource.create : resource.edit} {resource.team}</h2>
        </header>
        <div className='row'>
          <label className='col s12 m6'>
            {resource.team_id}
            <input
              type='text'
              id='id'
              name='teamId'
              value={team.id || ''}
              readOnly={!flag.newMode}
              onChange={updateState}
              maxLength={20} required={true}
              placeholder={resource.team_id} />
          </label>
          <label className='col s12 m6'>
            {resource.team_name}
            <input
              type='text'
              id='name'
              name='name'
              value={team.name || ''}
              onChange={updateState}
              onBlur={requiredOnBlur}
              maxLength={40} required={true}
              placeholder={resource.team_name} />
          </label>
          <label className='col s12 m6 flying'>
            {resource.logo}
            <input
              id='logo'
              name='logo'
              value={team.logo || ''}
              onChange={updateState}
              onBlur={requiredOnBlur}
              maxLength={40} required={true}
              placeholder={resource.logo}
            ></input>
          </label>
          <label className='col s12 m6 flying'>
            {resource.description}
            <input
              type='text'
              id='description'
              name='description'
              value={team.description || ''}
              onChange={updateState}
              onBlur={requiredOnBlur}
              maxLength={40} required={true}
              placeholder={resource.description} />
          </label>
          <label className='col s12 m6 radio-section'>
            {resource.status}
            <input
              type='text'
              id='status'
              name='status'
              value={team.status || ''}
              onChange={updateState}
              onBlur={requiredOnBlur}
              maxLength={40} required={true}
              placeholder={resource.status} />
          </label>
        </div>
        <footer>
          {!flag.readOnly &&
            <button type='submit' id='btnSave' name='btnSave' onClick={save}>
              {resource.save}
            </button>}
        </footer>
      </form>
    </div>
  );
};
