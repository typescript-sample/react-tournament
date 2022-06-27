import { Attributes, Filter, Service } from 'onecore';

export interface Tournament {
  id: string;
  tournamentid?: string;
  status?: string;
  team1?: string;
  team2?: string;
  bio?: string;
  score1?: string;
  score2?: string;
  time?: string;
}

export interface TournamentFilter extends Filter {
  id: string;
  tournamentid?: string;
  status?: string;
  team1?: string;
  team2?: string;
  time?: string;
}

// export interface Achievement {
//   subject: string;
//   description: string;
//   highlight?: boolean;
// }

export const TournamentModel: Attributes = {
  id: {
    key: true,
    length: 40,
    required: true,
  },
  tournamentid: {
    length: 100,
    required: true,
    q: true
  },
  status: {
    length: 100,
    required: true,
    q: true
  }
};

export interface TournamentService extends Service<Tournament, string, TournamentFilter> {
  getTournament(id: string | undefined): Promise<Tournament | null>;
}
