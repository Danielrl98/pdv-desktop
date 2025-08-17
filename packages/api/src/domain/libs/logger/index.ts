import { appendFileSync } from 'fs';

export class Logger {
  protected logginService: string;
  private nodeEnv: string;

  constructor() {}

  register(logginService: string, nodeEnv: string = 'LOCAL') {
    this.logginService = logginService;
    this.nodeEnv = nodeEnv;
  }
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  log(log: any): void {
    if (this.nodeEnv === 'PROD') return;
    console.log(`[${this.logginService}] [${new Date().toISOString()}]`, log);
    appendFileSync(
      'log.txt',
      `[${this.logginService}] [${new Date().toISOString()}] ${log}`,
    );
  }
  // eslint-disable-next-line @typescript-eslint/no-unused-vars, @typescript-eslint/no-explicit-any
  error(error: any): void {
    console.error(`[${this.logginService}]`, error);
    appendFileSync(
      'log-error.txt',
      `[${this.logginService}] [${new Date().toISOString()}] ${error}`,
    );
  }
}

export const logger = new Logger();
