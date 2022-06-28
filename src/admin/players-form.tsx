import { Item } from 'onecore';
import * as React from 'react';
import { checked, OnClick, Search, SearchComponentState, useSearch, value } from 'react-hook-core';
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';
import { Pagination } from 'reactx-pagination';
import { inputSearch } from 'uione';
import femaleIcon from '../assets/images/female.png';
import maleIcon from '../assets/images/male.png';
import { getPlayerService, Player, PlayerFilter } from './service';
import moment from 'moment'

interface PlayerSearch extends SearchComponentState<Player, PlayerFilter> {
  statusList: Item[];
}
const playerFilter: PlayerFilter = {
  id: '',
  name: '',

};
const initialState: PlayerSearch = {
  statusList: [],
  // list: [],
  filter: playerFilter
};
export const PlayersForm = () => {
  const navigate = useNavigate();
  const refForm = React.useRef();
  const { state, resource, component, updateState, search, sort, toggleFilter, clearQ, changeView, pageChanged, pageSizeChanged } = useSearch<Player, PlayerFilter, PlayerSearch>(refForm, initialState, getPlayerService(), inputSearch());
  component.viewable = true;
  component.editable = true;
  const edit = (e: OnClick, id: string) => {
    e.preventDefault();
    navigate(`edit/${id}`);
  };
  const { list } = state;
  const filter = value(state.filter);
  return (
    <div className='view-container'>
      <header>
        <h2>{resource.players}</h2>
        <div className='btn-group'>
          {component.view !== 'table' && <button type='button' id='btnTable' name='btnTable' className='btn-table' data-view='table' onClick={changeView} />}
          {component.view === 'table' && <button type='button' id='btnListView' name='btnListView' className='btn-list-view' data-view='listview' onClick={changeView} />}
          {/* {component.addable && <Link id='btnNew' className='btn-new' to='add'/>} */}
        </div>
      </header>
      <div>
        <form id='playersForm' name='playersForm' noValidate={true} ref={refForm as any}>
          <section className='row search-group'>
            <Search className='col s12 m6 search-input' size={component.pageSize} sizes={component.pageSizes} pageSizeChanged={pageSizeChanged}
              onChange={updateState} placeholder={resource.keyword}
              toggle={toggleFilter} value={filter.q || ''}
              search={search} clear={clearQ} />
            <Pagination className='col s12 m6' total={component.total} size={component.pageSize} max={component.pageMaxSize} page={component.pageIndex} onChange={pageChanged} />
          </section>
          <section className='row search-group inline' hidden={component.hideFilter}>
            <label className='col s12 m4 l4'>
              {resource.player_name}
              <input type='text'
                id='playerName' name='playerName'
                value={filter.name || ''}
                onChange={updateState}
                maxLength={255}
                placeholder={resource.player_name} />
            </label>
            <label className='col s12 m4 l4'>
              {resource.dateOfBirth}
              <input type='text'
                id='dateOfBirth' name='dateOfBirth'
                value={moment(filter.dateOfBirth).format('DD/MM/YYYY')}
                onChange={updateState}
                maxLength={255}
                placeholder={resource.dateOfBirth} />
            </label>
          </section>
        </form>
        <form className='list-result'>
          {component.view === 'table' && <div className='table-responsive'>
            <table>
              <thead>
                <tr>
                  <th>{resource.sequence}</th>
                  <th data-field='player_id'><button type='button' id='sortplayerId' onClick={sort}>{resource.player_id}</button></th>
                  <th data-field='player_name'><button type='button' id='sortplayerName' onClick={sort}>{resource.player_name}</button></th>
                  <th data-field='dateOfBirth'><button type='button' id='dateOfBirth' onClick={sort}>{resource.dateOfBirth}</button></th>
                </tr>
              </thead>
              <tbody>
                {list && list.length > 0 && list.map((player, i) => {
                  console.log('data:::', player);

                  return (
                    <tr key={i} onClick={e => edit(e, player.id)}>
                      <td className='text-right'>{(player as any).sequenceNo}</td>
                      <td>{player.id}</td>
                      <td><Link to={`edit/${player.id}`}>{player.name}</Link></td>
                      <td>{moment(player.dateOfBirth).format('DD/MM/YYYY')}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>}
          {component.view !== 'table' && <ul className='row list-view'>
            {list && list.length > 0 && list.map((player, i) => {
              return (
                <li key={i} className='col s12 m6 l4 xl3' onClick={e => edit(e, player.id)}>
                  <section>
                    {/* <img src={player.imageURL && player.imageURL.length > 0 ? player.imageURL : (player.gender === 'F' ? femaleIcon : maleIcon)} alt='player' className='round-border' /> */}
                    <div>
                      <h3 ><Link to={`edit/${player.id}`}>{player.name}</Link></h3>
                      <p>{moment(player.dateOfBirth).format('DD/MM/YYYY')}</p>
                    </div>
                    <button className='btn-detail' />
                  </section>
                </li>
              );
            })}
          </ul>}
        </form>
      </div>
    </div>
  );
};
