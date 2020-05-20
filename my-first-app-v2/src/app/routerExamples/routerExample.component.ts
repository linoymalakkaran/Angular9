import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-routerExample',
  templateUrl: './routerExample.component.html',
  styleUrls: ['./routerExample.component.css']
})
export class RouterExampleComponent implements OnInit {

  constructor(private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
  }

  onNavigate(routePath: string) {
    let fullUrl = `/${routePath}`;
    let url: string[] = [fullUrl];
    this.router.navigate(url);
    //this.router.navigate(url, { relativeTo: this.route });
  }

}
