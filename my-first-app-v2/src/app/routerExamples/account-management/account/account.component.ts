import { Component, OnInit, Input } from '@angular/core';

import { AccountService } from '../../../services/account.service'

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
  providers: []
})
export class AccountComponent implements OnInit {
  @Input() userObj: { id: number, name: string };
  constructor(private accountService: AccountService) { }

  ngOnInit(): void {
  }

  addAccount(){
    this.accountService.addAccount(this.userObj);
  }

  updateAccount() {
    this.accountService.updateAccount(this.userObj);
    this.accountService.userAdded.emit(this.userObj.name);
  }

}
