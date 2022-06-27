import axios from 'axios';
import { HttpRequest } from 'axios-core';
import { useEffect, useState } from 'react';
import { options, storage } from 'uione';
import { TournamentClient, TournamentService } from './tournament';
export * from './tournament';
// axios.defaults.withCredentials = true;

const httpRequest = new HttpRequest(axios, options);
export interface Config {
  tournament_url: string;
}
class ApplicationContext {
  TournamentService?: TournamentService;
  constructor() {
    this.getConfig = this.getConfig.bind(this); 
    this.getTournamentService = this.getTournamentService.bind(this); 
  }
  getConfig(): Config {
    return storage.config();
  }

  getTournamentService(): TournamentService {
    if (!this.TournamentService) {
      const c = this.getConfig();
      this.TournamentService = new TournamentClient(httpRequest, c.tournament_url);
    }
    return this.TournamentService;
  }
}

export const appContext = new ApplicationContext();

export function getTournamentService(): TournamentService {
  return appContext.getTournamentService();
}


