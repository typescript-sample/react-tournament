export interface Teams {
  id: string;
  teamname: string;
  teamlogo: string;
  stadiumname: string;
  stadiumpic: string;
  description: string;
  status: string;
  tournamentId: string;
}
export interface MatchEventInterface {
  type: "Score" | "Substitution" | "Red Card" | "Yellow Card";
  mins: number;
  homeBadge: string;
  homeName: string;
  homeResult: number;
  awayBadge: string;
  awayName: string;
  awayResult: number;
  playerName?: string;
  playerImg?: string;
  playerNumber?: number;
  assistance?: string;
  subOn?: string;
  subOnImg?: string;
  subOnNumber?: number;
  subOff?: string;
  subOffImg?: string;
  subOffNumber?: number;
  side: "home" | "away";
}

// export type { Teams, MatchEventInterface };
