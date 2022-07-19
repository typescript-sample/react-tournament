import { StringLiteral } from "typescript";

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
export interface Matches {
  id: string;
  mins?: number;
  homeBadge: string;
  homeName: string;
  homeResult?: number;
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
}
export interface Rounds {
  id: string;
  matches: Matches[];
  createdAt?: Date;
  roundname?: string;
  tournamentId?: string;
}
export interface Tournaments {
  id: string;
  name: string;
  rounds: Rounds[];
  description: string;
  createdAt: Date;
  endDate: Date;
  competitor: string;
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
