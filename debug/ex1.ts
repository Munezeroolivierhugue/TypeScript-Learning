class Logger {
  static logs: {timestamp: number, message:string}[] = [];

  addLog(message: string) : void{
    Logger.logs.push({ timestamp: Date.now(), message });
  }

  static clearLogs(): void{
    this.logs = [];
  }
}
