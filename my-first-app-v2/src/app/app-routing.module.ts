import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { exampleDirectivesComponent } from './directive/exampleDirectives.component';
import { RouterExampleComponent } from './routerExamples/routerExample.component';
import { AdvanceRoutingComponent } from './routerExamples/advance-routing/advance-routing.component';



const routes: Routes = [
  { path: '', component:  HomeComponent },
  { path: 'recipe', component:  HomeComponent },
  { path: 'directives', component:  exampleDirectivesComponent },
  { path: 'routers', component:  RouterExampleComponent },
  { path: 'advanceRouting/:id/:name', component:  AdvanceRoutingComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
