import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingpageComponent } from './landingpage/landingpage.component'
import { ListflowersComponent } from './listflowers/listflowers.component'

const routes: Routes = [
  {path:'landing', component:LandingpageComponent},
  {path:'list', component:ListflowersComponent},
  {path:'**', component:LandingpageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
