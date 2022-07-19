import axios from "axios";
import { HttpRequest } from "axios-core";
import { TournamentServices } from ".";
import { TournamentServicesRoot } from "./servicesroot";

const httpRequest = new HttpRequest(axios);
class TournamentContext {
  public tournamentServices?: TournamentServicesRoot;
  getTournamentServices(): TournamentServicesRoot {
    if (!this.tournamentServices) {
      this.tournamentServices = new TournamentServices(
        "http://localhost:8080/tournaments",
        httpRequest
      );
    }
    return this.tournamentServices;
  }
}
export const tournamentcontext = new TournamentContext();
