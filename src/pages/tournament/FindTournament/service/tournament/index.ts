import { HttpRequest } from 'axios-core';
import { Client } from 'web-clients';
import { Tournament, TournamentFilter, TournamentModel, TournamentService } from './tournament';

export * from './tournament';

export class TournamentClient extends Client<Tournament, string, TournamentFilter> implements TournamentService {
  constructor(http: HttpRequest, private url: string) {
    super(http, url, TournamentModel);
    this.getTournament = this.getTournament.bind(this);
  }

  getTournament(id: string | undefined): Promise<Tournament | null> {
    const url = this.url + '/' + id;
    return this.http.get<Tournament>(url).catch(err => {
      const data = (err && err.response) ? err.response : err;
      if (data && (data.status === 404 || data.status === 410)) {
        return null;
      }
      throw err;
    });
  }
  postOnly(s: TournamentFilter): boolean {
    return true;
  }
}
