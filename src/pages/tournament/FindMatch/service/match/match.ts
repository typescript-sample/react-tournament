import { Attributes, Filter, Service } from 'onecore';

export interface Match {
  id: string;
  tournamentid?: string;
  round: string;
  status?: string;
  team1?: string;
  team2?: string;
  bio?: string;
  score1?: string;
  score2?: string;
  time?: string;
}

export interface MatchFilter extends Filter {
  id: string;
  tournamentid?: string;
  round? :string;
  status?: string;
  team1?: string;
  team2?: string;
  time?: string;
}

export interface Achievement {
  subject: string;
  description: string;
  highlight?: boolean;
}

export const MatchModel: Attributes = {
  id: {
    key: true,
    length: 40,
    required: true,
    q: true
  },
  tournament: {
    length: 100,
    required: true,
    q: true
  },
  status: {
    length: 100,
    required: true,
    q: true
  },
  round: {
    length: 100,
    required: true,
    q: true
  },
  team1: {
    length: 100,
    required: true,
    q: true
  },
  team2: {
    length: 100,
    required: true,
    q: true
  }
};

export interface MatchService extends Service<Match, string, MatchFilter> {
  getMatch(id: string | undefined): Promise<Match | null>;
}
