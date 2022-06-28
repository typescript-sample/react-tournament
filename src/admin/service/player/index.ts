import { HttpRequest } from 'axios-core';
import { Client } from 'web-clients';
import { Player, PlayerFilter, PlayerModel, PlayerService } from './player';

export * from './player';

export class PlayerClient extends Client<Player, string, PlayerFilter> implements PlayerService {
  constructor(http: HttpRequest, url: string) {
    super(http, url, PlayerModel);
    this.searchGet = true;
    this.getPlayersByRole = this.getPlayersByRole.bind(this);
  }
  getPlayersByRole(id: string): Promise<Player[]> {
    const url = `${this.serviceUrl}?roleId=${id}`;
    return this.http.get<Player[]>(url);
  }
}
