import { Attributes, Filter, Service, Tracking } from 'onecore';

export interface TeamFilter extends Filter {
  id: string;
  name: string;
  status: string;
  logo: string;
  description?: string;
}
export interface Team extends Tracking {
  id: string;
  name: string;
  status: string;
  logo: string;
  description?: string;
}
export interface TeamService extends Service<Team, string, TeamFilter> {
  getTeamsByRole(id: string): Promise<Team[]>;
}

export const TeamModel: Attributes = {
  TeamId: {
    length: 40,
    key: true,
    q: true
  },
  TeamName: {
    type: 'string',
    length: 120,
    q: true
  },
  logo: {
    length: 255,
    q: true
  },
  status: {
    length: 1
  },
  decription: {},
  createdBy: {
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
