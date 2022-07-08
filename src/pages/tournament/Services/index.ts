import { HttpRequest } from "axios-core";
import { Teams } from "./models";
import { TournamentServicesRoot } from "./servicesroot";

export class TournamentServices implements TournamentServicesRoot {
  constructor(private url: string, private httpRequest: HttpRequest) {
    this.getRounds = this.getRounds.bind(this);
  }

  getRounds(globalHost?: string): Promise<Teams[]> {
    const url = `${this.url}`;
    return this.httpRequest.get<Teams[]>(url);
  }
}
