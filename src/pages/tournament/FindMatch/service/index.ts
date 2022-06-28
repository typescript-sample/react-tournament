import axios from 'axios';
import { HttpRequest } from 'axios-core';
import { useEffect, useState } from 'react';
import { options, storage } from 'uione';
import { MatchClient, MatchService } from './match';
export * from './match';
// axios.defaults.withCredentials = true;

const httpRequest = new HttpRequest(axios, options);
export interface Config {
  match_url: string;
}
class ApplicationContext {
  MatchService?: MatchService;
  constructor() {
    this.getConfig = this.getConfig.bind(this); 
    this.getMatchService = this.getMatchService.bind(this); 
  }
  getConfig(): Config {
    return storage.config();
  }

  getMatchService(): MatchService {
    if (!this.MatchService) {
      const c = this.getConfig();
      this.MatchService = new MatchClient(httpRequest, c.match_url);
    }
    return this.MatchService;
  }
}

export const appContext = new ApplicationContext();

export function getMatchService(): MatchService {
  return appContext.getMatchService();
}


