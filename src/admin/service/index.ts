import axios from 'axios';
import { HttpRequest } from 'axios-core';
import { options, storage } from 'uione';
import { AuditClient } from './audit-log';
import { AuditLogService } from './audit-log/audit-log';
import { MasterDataClient, MasterDataService } from './master-data';
import { RoleClient, RoleService } from './role';
import { UserClient, UserService } from './user';
import { PlayerClient, PlayerService } from './player';
import { TeamClient, TeamService } from './team';

export * from './role';
export * from './user';
export * from './audit-log';
export * from './player';
export * from './team';
// axios.defaults.withCredentials = true;

const httpRequest = new HttpRequest(axios, options);
export interface Config {
  user_url: string;
  role_url: string;
  player_url: string;
  team_url: string;
  privilege_url: string;
  audit_log_url: string;
}
class ApplicationContext {
  roleService?: RoleClient;
  userService?: UserService;
  playerService?: PlayerService;
  teamService?: TeamService;
  masterDataService?: MasterDataService;
  private auditService?: AuditClient;
  constructor() {
    this.getConfig = this.getConfig.bind(this);
    this.getRoleService = this.getRoleService.bind(this);
    this.getUserService = this.getUserService.bind(this);
    this.getPlayerService = this.getPlayerService.bind(this);
    this.getTeamService = this.getTeamService.bind(this);
    this.getMasterDataService = this.getMasterDataService.bind(this);
  }
  getConfig(): Config {
    return storage.config();
  }
  getRoleService(): RoleService {
    if (!this.roleService) {
      const c = this.getConfig();
      this.roleService = new RoleClient(httpRequest, c.role_url, c.privilege_url);
    }
    return this.roleService;
  }
  getUserService(): UserService {
    if (!this.userService) {
      const c = this.getConfig();
      this.userService = new UserClient(httpRequest, c.user_url);
    }
    return this.userService;
  }
  getPlayerService(): PlayerService {
    if (!this.playerService) {
      const c = this.getConfig();
      this.playerService = new PlayerClient(httpRequest, c.player_url);
    }
    return this.playerService;
  }
  getTeamService(): TeamService {
    if (!this.teamService) {
      const c = this.getConfig();
      this.teamService = new TeamClient(httpRequest, c.team_url);
    }
    return this.teamService;
  }
  getMasterDataService(): MasterDataService {
    if (!this.masterDataService) {
      this.masterDataService = new MasterDataClient();
    }
    return this.masterDataService;
  }
  getAuditService(): AuditClient {
    if (!this.auditService) {
      const c = this.getConfig();
      this.auditService = new AuditClient(httpRequest, c.audit_log_url);
    }
    return this.auditService;
  }
}

export const context = new ApplicationContext();
export function getRoleService(): RoleService {
  return context.getRoleService();
}
export function getUserService(): UserService {
  return context.getUserService();
}
export function getPlayerService(): PlayerService {
  return context.getPlayerService();
}
export function getTeamService(): TeamService {
  return context.getTeamService();
}
export function getMasterData(): MasterDataService {
  return context.getMasterDataService();
}
export function useAuditLog(): AuditLogService {
  return context.getAuditService();
}
