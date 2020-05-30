import { Injectable, EventEmitter } from '@angular/core';

import { LoggingService } from '../services/logging.service'

// {providedIn: 'root'}
@Injectable()
export class AccountService {
  accounts = [{
    id: 1,
    name: "John"
  },
  {
    id: 2,
    name: "Arum"
  },
  {
    id: 3,
    name: "Soba"
  }, {
    id: 4,
    name: "Sreethy"
  }
  ];

  userAdded = new EventEmitter<string>();

  constructor(private loggingService: LoggingService) { }

  addAccount(newAccount: { id: number, name: string }) {
    this.accounts.push(newAccount);
    this.loggingService.LogData(newAccount);
  }

  updateAccount(updateAccount: { id: number, name: string }) {
    this.accounts[updateAccount.id].name = updateAccount.name;
    this.loggingService.LogData(updateAccount);
  }

}
