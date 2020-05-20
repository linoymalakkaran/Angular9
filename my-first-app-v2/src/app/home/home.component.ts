import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  title = 'Recipes';
  loadedFeature = 'recipe';

  onNavigate(feature: string) {
    this.loadedFeature = feature
  }

}
