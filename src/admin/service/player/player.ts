import { Attributes, Filter, Service, Tracking } from 'onecore';

export interface PlayerFilter extends Filter {
  id: string;
  name: string;
  dateOfBirth?: Date;
}
export interface Player extends Tracking {
  id: string;
  name: string;
  dateOfBirth: Date;
}
export interface PlayerService extends Service<Player, string, PlayerFilter> {
  getPlayersByRole(id: string): Promise<Player[]>;
}

export const PlayerModel: Attributes = {
  PlayerId: {
    length: 40,
    key: true,
    q: true
  },
  PlayerName: {
    type: 'string',
    length: 120,
    q: true
  },
  dateOfBirth: {
    length: 40
  },
  createdAt: {
    type: 'datetime'
  },
  updatedBy: {
    length: 40
  },
  updatedAt: {
    type: 'datetime'
  }
};
