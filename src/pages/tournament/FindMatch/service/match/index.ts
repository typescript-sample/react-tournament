import { HttpRequest } from 'axios-core';
import { Client } from 'web-clients';
import { Match, MatchFilter, MatchModel, MatchService } from './match';

export * from './match';

export class MatchClient extends Client<Match, string, MatchFilter> implements MatchService {
  constructor(http: HttpRequest, url: string) {
    super(http, url, MatchModel);
    this.searchGet = true;
    this.getMatchsByRole = this.getMatchsByRole.bind(this);
  }
  getMatch(id: string | undefined): Promise<Match | null> {
    throw new Error('Method not implemented.');
  }
  getMatchsByRole(id: string): Promise<Match[]> {
    const url = `${this.serviceUrl}?roleId=${id}`;
    return this.http.get<Match[]>(url);
  }
}
