import { Component } from '@angular/core';

@Component({
  selector: 'app-exampleDirectives',
  templateUrl: './exampleDirectives.component.html',
  styleUrls: ['./exampleDirectives.component.css']
})
export class exampleDirectivesComponent {
  color: string;
  onlyOdd: boolean = false;
  numbersToggle: boolean =false;
  numbers: number[] = [10,21,30,41,50];
  oddNumbers: number[] = [1,3,5,7,9];
  evenNumbers: number[] = [2,4,6,8,10];
  switchValue = 1;
}
