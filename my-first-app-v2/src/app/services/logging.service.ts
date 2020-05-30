import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggingService {

  constructor() { }

  LogData(data: object) {
    let msg = `Console Data: ${JSON.stringify(data)}`;
    console.log(msg);
  }
}
