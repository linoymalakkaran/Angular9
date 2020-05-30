import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inner-routing',
  templateUrl: './inner-routing.component.html',
  styleUrls: ['./inner-routing.component.css']
})
export class InnerRoutingComponent implements OnInit {

  servers: { id: number, name: string }[] = [
    { id: 1, name: 'server1' },
    { id: 2, name: 'server2' },
    { id: 3, name: 'server3' }];

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onReload() {

  }

  loadSpecificServer(id: number, name: string) {
    this.router.navigate(
      ['/servers', id, 'edit',name],
      {
        queryParams: { allowEdit: '1' },
        fragment: 'loading'
      });
  }

}
