import { Item } from 'onecore';
import * as React from 'react';
import { checked, OnClick, Search, SearchComponentState, useSearch, value } from 'react-hook-core';
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';
import { Pagination } from 'reactx-pagination';
import { inputSearch } from 'uione';
import femaleIcon from '../assets/images/female.png';
import maleIcon from '../assets/images/male.png';
import { getTeamService, Team, TeamFilter } from './service';

interface TeamSearch extends SearchComponentState<Team, TeamFilter> {
  statusList: Item[];
}
const teamFilter: TeamFilter = {
  id: '',
  name: '',
  description: '',
  logo: '',
  status: '',

};
const initialState: TeamSearch = {
  statusList: [],
  list: [],
  filter: teamFilter
};
export const TeamsForm = () => {
  const navigate = useNavigate();
  const refForm = React.useRef();
  const { state, resource, component, updateState, search, sort, toggleFilter, clearQ, changeView, pageChanged, pageSizeChanged } = useSearch<Team, TeamFilter, TeamSearch>(refForm, initialState, getTeamService(), inputSearch());
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
        <h2>{resource.teams}</h2>
        <div className='btn-group'>
          {component.view !== 'table' && <button type='button' id='btnTable' name='btnTable' className='btn-table' data-view='table' onClick={changeView} />}
          {component.view === 'table' && <button type='button' id='btnListView' name='btnListView' className='btn-list-view' data-view='listview' onClick={changeView} />}
          {component.addable && <Link id='btnNew' className='btn-new' to='add' />}
        </div>
      </header>
      <div>
        <form id='teamsForm' name='teamsForm' noValidate={true} ref={refForm as any}>
          <section className='row search-group'>
            <Search className='col s12 m6 search-input' size={component.pageSize} sizes={component.pageSizes} pageSizeChanged={pageSizeChanged}
              onChange={updateState} placeholder={resource.keyword}
              toggle={toggleFilter} value={filter.q || ''}
              search={search} clear={clearQ} />
            <Pagination className='col s12 m6' total={component.total} size={component.pageSize} max={component.pageMaxSize} page={component.pageIndex} onChange={pageChanged} />
          </section>
          <section className='row search-group inline' hidden={component.hideFilter}>
            <label className='col s12 m4 l4'>
              {resource.team_name}
              <input type='text'
                id='name' name='name'
                value={filter.name || ''}
                onChange={updateState}
                maxLength={255}
                placeholder={resource.team_name} />
            </label>
            <label className='col s12 m4 l4'>
              {resource.description}
              <input type='text'
                id='description' name='description'
                value={filter.description || ''}
                onChange={updateState}
                maxLength={255}
                placeholder={resource.description} />
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
            <label className='col s12 m4 l4 '>
              {resource.logo}
              <input type='text'
                id='logo' name='logo'
                value={filter.logo || ''}
                onChange={updateState}
                maxLength={255}
                placeholder={resource.logo} />

            </label>
          </section>
        </form>
        <form className='list-result'>
          {component.view === 'table' && <div className='table-responsive'>
            <table>
              <thead>
                <tr>
                  <th>{resource.sequence}</th>
                  <th data-field='teamId'><button type='button' id='sortteamId' onClick={sort}>{resource.team_id}</button></th>
                  <th data-field='teamname'><button type='button' id='sortteamName' onClick={sort}>{resource.team_name}</button></th>
                  <th data-field='logo'><button type='button' id='sortLogo' onClick={sort}>{resource.logo}</button></th>
                  <th data-field='description'><button type='button' id='sortDescriptionName' onClick={sort}>{resource.description}</button></th>
                  <th data-field='status'><button type='button' id='sortStatus' onClick={sort}>{resource.status}</button></th>
                </tr>
              </thead>
              <tbody>
                {list && list.length > 0 && list.map((team, i) => {
                  return (
                    <tr key={i} onClick={e => edit(e, team.id)}>
                      <td className='text-right'>{(team as any).sequenceNo}</td>
                      <td>{team.id}</td>
                      <td><Link to={`edit/${team.id}`}>{team.name}</Link></td>
                      <td>{team.logo}</td>
                      <td>{team.description}</td>
                      <td>{team.status}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>}
          {component.view !== 'table' && <ul className='row list-view'>
            {list && list.length > 0 && list.map((team, i) => {
              return (
                <li key={i} className='col s12 m6 l4 xl3' onClick={e => edit(e, team.id)}>
                  <section>
                    {/* <img src={team.imageURL && team.imageURL.length > 0 ? team.imageURL : (team.gender === 'F' ? femaleIcon : maleIcon)} alt='team' className='round-border' /> */}
                    <div>
                      <h3 ><Link to={`edit/${team.id}`}>{team.name}</Link></h3>
                      {/* <p>{team.logo}</p> */}
                      <p>{team.description}</p>
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
