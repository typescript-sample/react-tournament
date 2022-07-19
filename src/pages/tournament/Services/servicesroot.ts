import { Matches, Teams, Tournaments } from "./models";

export interface TournamentServicesRoot {
  getRounds(globalHost?: string): Promise<Teams[]>;
  getTournamentById(id: string): Promise<Tournaments>;
}
