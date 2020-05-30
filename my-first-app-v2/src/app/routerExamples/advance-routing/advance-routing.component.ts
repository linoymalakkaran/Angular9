import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription, from } from 'rxjs';

import { AccountService } from '../../services/account.service';

@Component({
  selector: 'app-advance-routing',
  templateUrl: './advance-routing.component.html',
  styleUrls: ['./advance-routing.component.css'],
  providers: [AccountService]
})
export class AdvanceRoutingComponent implements OnInit, OnDestroy {
  user: { id: number, name: string };
  paramsSubScription: Subscription;
  accounts: { id: number, name: string }[] = [];

  constructor(private route: ActivatedRoute, private accountService: AccountService) { }

  ngOnInit(): void {

    this.accounts = this.accountService.accounts;
    this.user = {
      id: this.route.snapshot.params['id'],
      name: this.route.snapshot.params['name']
    };

    //this is observable
    this.route.params.subscribe(
      (params: Params) => {
        this.user = {
          id: params['id'],
          name: params['name']
        };
      }
    );
  }

  ngOnDestroy() {
    //not mandatory as angular handle router unsubscription automatically
    if (this.paramsSubScription) {
      this.paramsSubScription.unsubscribe();
    }
  }
}
