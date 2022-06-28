import { Item } from 'onecore';
import * as React from 'react';
import { createModel, DispatchWithCallback, EditComponentParam, useEdit } from 'react-hook-core';
import { formatPhone } from 'ui-plus';
import { emailOnBlur, Gender, handleError, handleSelect, inputEdit, phoneOnBlur, requiredOnBlur, Status } from 'uione';
import { getMasterData, getPlayerService, Player } from './service';
import moment from 'moment';

interface InternalState {
  player: Player;

}

const createPlayer = (): Player => {
  const player = createModel<Player>();
  //player.status = Status.Active;
  return player;
};
const initialize = (id: string | null, load: (id: string | null) => void, set: DispatchWithCallback<Partial<InternalState>>) => {
  load(id);
};

const initialState: InternalState = {
  player: {} as Player,

};

const param: EditComponentParam<Player, string, InternalState> = {
  createModel: createPlayer,
  initialize
};
export const PlayerForm = () => {
  const refForm = React.useRef();
  const { resource, state, updateState, flag, save, back } = useEdit<Player, string, InternalState>(refForm, initialState, getPlayerService(), inputEdit(), param);
  const player = state.player;
  return (
    <div className='view-container'>
      <form id='playerForm' name='playerForm' model-name='player' ref={refForm as any}>
        <header>
          <button type='button' id='btnBack' name='btnBack' className='btn-back' onClick={back} />
          <h2>{flag.newMode ? resource.create : resource.edit} {resource.player}</h2>
        </header>
        <div className='row'>
          <label className='col s12 m6'>
            {resource.player_id}
            <input
              type='text'
              id='playerId'
              name='playerId'
              value={player.id || ''}
              readOnly={!flag.newMode}
              onChange={updateState}
              maxLength={20} required={true}
              placeholder={resource.player_id} />
          </label>
          <label className='col s12 m6'>
            {resource.player_name}
            <input
              type='text'
              id='playerName'
              name='playerName'
              value={player.name || ''}
              onChange={updateState}
              onBlur={requiredOnBlur}
              maxLength={40} required={true}
              placeholder={resource.player_name} />
          </label>
          <label className='col s12 m6 flying'>
            {resource.dateOfBirth}
            <input
              type='text'
              id='dateOfBirth'
              name='dateOfBirth'
              value={moment(player.dateOfBirth).format('DD/MM/YYYY')}
              onChange={updateState}
              onBlur={requiredOnBlur}
              maxLength={40} required={true}
              placeholder={resource.dateOfBirth} />
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
