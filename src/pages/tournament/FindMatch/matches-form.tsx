import { Item } from 'onecore';
import * as React from 'react';
import { Search, SearchComponentState, useSearch, value } from 'react-hook-core';
import { Link } from 'react-router-dom';
import { Pagination } from 'reactx-pagination';
import { inputSearch } from 'uione';
import { getMatchService, Match, MatchFilter } from './service';
import './style.scss';
interface MatchSearch extends SearchComponentState<Match, MatchFilter> {
  statusList: Item[];
}
const matchFilter: MatchFilter = {
  id: "",
  tournamentid: "",
  status: "",
  team1: "",
  team2: "",
  time: "",
};
const initialState: MatchSearch = {
  statusList: [],
  list: [],
  filter: matchFilter
};
export const MatchForm = () => {
  const refForm = React.useRef();
  const { state, resource, component, updateState, search, toggleFilter, clearQ, changeView, pageChanged, pageSizeChanged } = useSearch<Match, MatchFilter, MatchSearch>(refForm, initialState, getMatchService(), inputSearch());
  component.viewable = true;
  component.editable = true;
  const { list } = state;
  const filter = value(state.filter);
  return (
    <div className='view-container'>
      <header>
        <h2>{'Match'}</h2>
        <div className='btn-group'>
          {component.view !== 'table' && <button type='button' id='btnTable' name='btnTable' className='btn-table' data-view='table' onClick={changeView} />}
          {component.view === 'table' && <button type='button' id='btnListView' name='btnListView' className='btn-list-view' data-view='listview' onClick={changeView} />}
          {component.addable && <Link id='btnNew' className='btn-new' to='add' />}
        </div>
      </header>
      <div>
        <form id='matchForm' name='matchForm' noValidate={true} ref={refForm as any}>
        <section className='row search-group'>
            <Search className='col s12 m6 search-input' size={component.pageSize} sizes={component.pageSizes} pageSizeChanged={pageSizeChanged}
              onChange={updateState} placeholder={resource.keyword}
              toggle={toggleFilter} value={filter.q || ''}
              search={search} clear={clearQ} />
            <Pagination className='col s12 m6' total={component.total} size={component.pageSize} max={component.pageMaxSize} page={component.pageIndex} onChange={pageChanged} />
          </section>
        </form>
        <form className='list-result '>
          {component.view === 'table' && <div className='table-responsive'>
            <table>
              <thead>
                <tr>
                  <th>{resource.sequence}</th>
                  <th data-field='id'>{resource.id}</th>
                  <th data-field='tournamentid'>{resource.tournamentid}</th>
                  <th data-field='status'>{resource.status}</th>
                  <th data-field='round'>{resource.round}</th>
                  <th data-field='team1'>{resource.team1}</th>
                  <th data-field='team2'>{resource.team2}</th>
                  <th data-field='score1'>{resource.score1}</th>
                  <th data-field='score2'>{resource.score2}</th>
                  <th data-field='time'>{resource.time}</th>
                </tr>
              </thead>
              <tbody>
                {list && list.length > 0 && list.map((match, i) => {
                  return (
                    <tr key={i} >
                      <td className='text-right'>{(match as any).sequenceNo}</td>
                      <td>{match.id}</td>
                      <td>{match.tournamentid}</td>
                      <td>{match.status}</td>
                      <td>{match.round}</td>
                      <td>{match.team1}</td>
                      <td>{match.team2}</td>
                      <td>{match.score1}</td>
                      <td>{match.score2}</td>
                      <td>{match.time}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>}
          
          <table>
            <tr>
              <div className='match-list'>
                <th className='  text-left match-list match-id'>
                  <h3>ID</h3>
                </th>
                <th className='  text-left match-list match-round'>
                  <h3>ROUND</h3>
                </th>
                <th className=' match-list match-team1'>
                  <h3>TEAM 1</h3>
                </th>
                <th className='  match-list custom match-result'>
                  <h3>SCORE</h3>
                </th> 
                <th className=' match-list custom match-team2'>
                  <h3>TEAM 2</h3>
                </th>
                <th className=' match-list custom match-time'> 
                  <h5>TIME</h5>
                </th>
              </div>
            </tr>
          </table>
          
          {component.view !== 'table' && <table className=' '>
            {list && list.length > 0 && list.map((match, i) => {
              return (
                <tr key={i} className=''>
                  
                    {/* <img src={tournament.imageURL && tournament.imageURL.length > 0 ? tournament.imageURL : (tournament.gender === 'F' ? femaleIcon : maleIcon)} alt='tournament' className='round-border' /> */}
                    {/* <div className='col s12 m6 row'>
                      <h3>{match.tournamentid}</h3>
                      <p>{match.status}</p>
                    </div> */}
                    <div className='match-list'>
                      <th className='  text-left match-list match-id'>
                        <h3>{match.id}</h3>
                      </th>
                      <th className='  text-left match-list match-round'>
                        <h3>{match.round}</h3>
                      </th>
                      <th className=' match-list match-team1'>
                        <h3>{match.team1}</h3>
                      </th>
                      <th className='  match-list custom match-result'>
                        <h3>{match.score1 + '-' + match.score2}</h3>
                      </th> 
                      <th className=' match-list custom match-team2'>
                        <h3>{match.team2}</h3>
                      </th>
                      <th className=' match-list custom match-time'> 
                        <h5>{match.time}</h5>
                      </th>      
                    </div>
                  
                </tr>
              );
            })}
          </table>}
        </form>
      </div>
    </div>
  );
};
