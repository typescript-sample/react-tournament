import { Item } from 'onecore';
import * as React from 'react';
import { createModel, DispatchWithCallback, EditComponentParam, useEdit } from 'react-hook-core';
import { formatPhone } from 'ui-plus';
import { emailOnBlur, Gender, handleError, handleSelect, inputEdit, phoneOnBlur, requiredOnBlur, Status } from 'uione';
import { getTournamentService, Tournament } from './service';

interface InternalState {
  tournament: Tournament;
}

const createTournament = (): Tournament => {
  const tournament = createModel<Tournament>();
  return tournament;
};
const initialize = (id: string | null, load: (id: string | null) => void, set: DispatchWithCallback<Partial<InternalState>>) => {
  load(id);
};

const initialState: InternalState = {
  tournament: {} as Tournament,
};

const param: EditComponentParam<Tournament, string, InternalState> = {
  createModel: createTournament,
  initialize
};
export const TournamentForm = () => {
  const refForm = React.useRef();
  const { resource, state, setState, updateState, flag, save, updatePhoneState, back } = useEdit<Tournament, string, InternalState>(refForm, initialState, getTournamentService(), inputEdit(), param);
  const tournament = state.tournament;
  return (
    <div className='view-container'>
      <form id='tournamentForm' name='tournamentForm' model-name='tournament' ref={refForm as any}>
        <header>
          <button type='button' id='btnBack' name='btnBack' className='btn-back' onClick={back} />
          <h2>{flag.newMode ? resource.create : resource.edit} {resource.tournament}</h2>
        </header>
        <div className='row'>
          <label className='col s12 m6 flying'>
            {resource.id}
            <input
              type='text'
              id='id'
              name='id'
              value={tournament.id || ''}
              readOnly={!flag.newMode}
              onChange={updateState}
              maxLength={20} required={true}
              placeholder={resource.id} />
          </label>
          <label className='col s12 m6 flying'>
            {resource.tournamentid}
            <input
              type='text'
              id='name'
              name='name'
              value={tournament.tournamentid || ''}
              onChange={updateState}
              readOnly={!flag.newMode}
              maxLength={40} required={true}
              placeholder={resource.tournamentid} />
          </label>
          <label className='col s12 m6 flying'>
            {resource.team1}
            <input
              type='text'
              id='team1'
              name='team1'
              value={tournament.team1 || ''}
              onChange={updateState}
              readOnly={!flag.newMode}
              maxLength={40} required={true}
              placeholder={resource.team1} />
          </label>
          <label className='col s12 m6 flying'>
            {resource.team2}
            <input
              type='text'
              id='team2'
              name='team2'
              value={tournament.team2 || ''}
              onChange={updateState}
              readOnly={!flag.newMode}
              maxLength={40} required={true}
              placeholder={resource.team2} />
          </label>
          <label className='col s12 m6 flying'>
            {resource.status}
            <input
              type='text'
              id='name'
              name='name'
              value={tournament.status || ''}
              onChange={updateState}
              readOnly={!flag.newMode}
              maxLength={40} required={true}
              placeholder={resource.status} />
          </label>
          <label className='col s12 m6 flying'>
            {resource.time}
            <input
              type='text'
              id='time'
              name='time'
              value={tournament.time || ''}
              onChange={updateState}
              readOnly={!flag.newMode}
              maxLength={40} required={true}
              placeholder={resource.time} />
          </label>
        </div>
        <footer>
          {!flag.readOnly}
        </footer>
      </form>
    </div>
  );
};
