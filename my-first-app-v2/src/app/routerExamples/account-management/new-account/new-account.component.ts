import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { AccountService } from '../../../services/account.service'

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
  providers: []
})
export class NewAccountComponent implements OnInit {
  user: { id: number, name: string };
  constructor(private accountService: AccountService) {
    this.accountService.userAdded.subscribe(
      (name) => alert(`New user added is: ${name}`)
    )
  }

  ngOnInit(): void {
  }

  OnCreateAccount(form: NgForm) {
    if (form.valid) {
      let newUser: { id: number, name: string } = { id: form.value.id, name: form.value.name };
      this.accountService.addAccount(newUser);
      form.resetForm();
    } else {
      alert('Invalid form data');
    }
  }
}
