import { HttpRequest } from 'axios-core';
import { Client } from 'web-clients';
import { Team, TeamFilter, TeamModel, TeamService } from './team';

export * from './team';

export class TeamClient extends Client<Team, string, TeamFilter> implements TeamService {
  constructor(http: HttpRequest, url: string) {
    super(http, url, TeamModel);
    this.searchGet = true;
    this.getTeamsByRole = this.getTeamsByRole.bind(this);
  }
  getTeamsByRole(id: string): Promise<Team[]> {
    const url = `${this.serviceUrl}?roleId=${id}`;
    return this.http.get<Team[]>(url);
  }
}
