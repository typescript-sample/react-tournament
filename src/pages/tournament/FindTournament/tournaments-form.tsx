import { Item } from 'onecore';
import * as React from 'react';
import { checked, OnClick, Search, SearchComponentState, useSearch, value } from 'react-hook-core';
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';
import { Pagination } from 'reactx-pagination';
import { inputSearch } from 'uione';
import { getTournamentService, Tournament, TournamentFilter } from './service';

interface TournamentSearch extends SearchComponentState<Tournament, TournamentFilter> {
  statusList: Item[];
}
const tournamentFilter: TournamentFilter = {
  id: "",
  tournamentid: "",
  status: "",
  team1: "",
  team2: "",
  time: "",

};
const initialState: TournamentSearch = {
  statusList: [],
  list: [],
  filter: tournamentFilter
};
export const TournamentsForm = () => {
  const navigate = useNavigate();
  const refForm = React.useRef();
  const { state, resource, component, updateState, search, sort, toggleFilter, clearQ, changeView, pageChanged, pageSizeChanged } = useSearch<Tournament, TournamentFilter, TournamentSearch>(refForm, initialState, getTournamentService(), inputSearch());
  component.viewable = true;
  component.editable = true;
  const edit = (e: OnClick, id: string) => {
    e.preventDefault();
    navigate(`${id}`);
  };
  const { list } = state;
  const filter = value(state.filter);
  return (
    <div className='view-container'>
      <header>
        <h2>{resource.tournament}</h2>
        <div className='btn-group'>
          {component.view !== 'table' && <button type='button' id='btnTable' name='btnTable' className='btn-table' data-view='table' onClick={changeView} />}
          {component.view === 'table' && <button type='button' id='btnListView' name='btnListView' className='btn-list-view' data-view='listview' onClick={changeView} />}
          {component.addable && <Link id='btnNew' className='btn-new' to='add' />}
        </div>
      </header>
      <div>
        <form id='tournamentsForm' name='tournamentsForm' noValidate={true} ref={refForm as any}>
          <section className='row search-group'>
            <Search className='col s12 m6 search-input' size={component.pageSize} sizes={component.pageSizes} pageSizeChanged={pageSizeChanged}
              onChange={updateState} placeholder={resource.keyword}
              toggle={toggleFilter} value={filter.q || ''}
              search={search} clear={clearQ} />
            <Pagination className='col s12 m6' total={component.total} size={component.pageSize} max={component.pageMaxSize} page={component.pageIndex} onChange={pageChanged} />
          </section>
          <section className='row search-group inline' hidden={component.hideFilter}>
            <label className='col s12 m4 l4'>
              {resource.id}
              <input type='text'
                id='id' name='id'
                value={filter.id || ''}
                onChange={updateState}
                maxLength={255}
                placeholder={resource.id} />
            </label>
            <label className='col s12 m4 l4 '>
              {resource.status}
              <input type='text'
                id='status' name='status'
                value={filter.status || ''}
                onChange={updateState}
                maxLength={255}
                placeholder={resource.status} />

            </label>
          </section>
        </form>
        <form className='list-result'>
          {component.view === 'table' && <div className='table-responsive'>
            <table>
              <thead>
                <tr>
                  <th>{resource.sequence}</th>
                  <th data-field='id'><button type='button' id='sortid' onClick={sort}>{resource.id}</button></th>
                  <th data-field='tournamentid'><button type='button' id='sorttournamentid' onClick={sort}>{resource.tournamentid}</button></th>
                  <th data-field='status'><button type='button' id='sortstatus' onClick={sort}>{resource.status}</button></th>
                  <th data-field='team1'><button type='button' id='sortteam1' onClick={sort}>{resource.team1}</button></th>
                  <th data-field='team2'><button type='button' id='sortteam2' onClick={sort}>{resource.team2}</button></th>
                </tr>
              </thead>
              <tbody>
                {list && list.length > 0 && list.map((tournament, i) => {
                  return (
                    <tr key={i} onClick={e => edit(e, tournament.id)}>
                      <td className='text-right'>{(tournament as any).sequenceNo}</td>
                      <td>{tournament.id}</td>
                      <td><Link to={`edit/${tournament.id}`}>{tournament.tournamentid}</Link></td>
                      <td>{tournament.status}</td>
                      <td>{tournament.team1}</td>
                      <td>{tournament.team2}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>}
          {component.view !== 'table' && <ul className='row list-view'>
            {list && list.length > 0 && list.map((tournament, i) => {
              return (
                <li key={i} className='col s12 m6 l4 xl3' onClick={e => edit(e, tournament.id)}>
                  <section>
                    {/* <img src={tournament.imageURL && tournament.imageURL.length > 0 ? tournament.imageURL : (tournament.gender === 'F' ? femaleIcon : maleIcon)} alt='tournament' className='round-border' /> */}
                    <div>
                      <h3 ><Link to={`edit/${tournament.id}`}>{tournament.tournamentid}</Link></h3>
                      {/* <p>{tournament.logo}</p> */}
                      <p>{tournament.status}</p>
                      {/* <p>{team.status}</p> */}
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
