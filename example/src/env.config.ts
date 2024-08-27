import * as dotenv from 'dotenv';
import * as dotenvExpand from 'dotenv-expand';
const config = dotenv.config();
dotenvExpand.expand(config);

export enum ENVIRONMENT {
  DEVELOPMENT = 'development',
  PRODUCTION = 'production',
  LOCAL = 'local',
}
export class EnvConfig {
  private int(value: string | undefined, number: number): number {
    return value
      ? Number.isNaN(Number.parseInt(value))
        ? number
        : Number.parseInt(value)
      : number;
  }

  private bool(value: string | undefined, boolean: boolean): boolean {
    return value === null || value === undefined ? boolean : value === 'true';
  }

  get env(): string {
    return process.env.NODE_ENV || 'local';
  }

  get apiKey(): string {
    return process.env.API_KEY || "";
  }

  get developerId(): string {
    return process.env.DEVELOPER_ID || "";
  }

  get leaderboardUrl(): string {
    return process.env.LEADERBOARD_URL || "";
  }

}

