import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-advance-routing',
  templateUrl: './advance-routing.component.html',
  styleUrls: ['./advance-routing.component.css']
})
export class AdvanceRoutingComponent implements OnInit, OnDestroy {
  user: { id: number, name: string };
  paramsSubScription: Subscription;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
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
