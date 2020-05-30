import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { exampleDirectivesComponent } from './directive/exampleDirectives.component';
import { RouterExampleComponent } from './routerExamples/routerExample.component';
import { AdvanceRoutingComponent } from './routerExamples/advance-routing/advance-routing.component';
import { InnerRoutingComponent } from './routerExamples/inner-routing/inner-routing.component';
import { ServerComponent } from './routerExamples/inner-routing/servers/server/server.component';
import { ServerEditComponent } from './routerExamples/inner-routing/servers/server-edit/server-edit.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'recipe', component: HomeComponent },
  { path: 'directives', component: exampleDirectivesComponent },
  { path: 'routers', component: RouterExampleComponent },
  { path: 'advanceRouting/:id/:name', component: AdvanceRoutingComponent },
  {
    path: 'servers',
    component: InnerRoutingComponent,
    children: [
      { path: ':id/:name', component: ServerComponent },
      { path: ':id/edit/:name', component: ServerEditComponent }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
