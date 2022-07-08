import { Teams } from "./models";

export interface TournamentServicesRoot {
  getRounds(globalHost?: string): Promise<Teams[]>;
}
