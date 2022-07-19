import { HttpRequest } from "axios-core";
import { Teams, Matches, Tournaments } from "./models";
import { TournamentServicesRoot } from "./servicesroot";

export class TournamentServices implements TournamentServicesRoot {
  constructor(private url: string, private httpRequest: HttpRequest) {
    this.getRounds = this.getRounds.bind(this);
    this.getTournamentById = this.getTournamentById.bind(this);
  }

  getRounds(globalHost?: string): Promise<Teams[]> {
    const url = `${this.url}`;
    return this.httpRequest.get<Teams[]>(url);
  }

  getTournamentById(id: string): Promise<Tournaments> {
    const url = `${this.url}/${id}`;
    return this.httpRequest.get<Tournaments>(url);
  }
}
