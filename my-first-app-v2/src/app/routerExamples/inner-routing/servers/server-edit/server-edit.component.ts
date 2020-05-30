import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-server-edit',
  templateUrl: './server-edit.component.html',
  styleUrls: ['./server-edit.component.css']
})
export class ServerEditComponent implements OnInit {
  server: { id: number, name: string };
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.server = {
        id: params['id'],
        name: params['name']
      };
    })
  }

  updateServer(){
    alert('server updated successfully...');
  }

}
