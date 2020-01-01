import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ManageuserComponent } from './manageuser/manageuser.component';
import { ManageleaveComponent } from './manageleave/manageleave.component';
import { MyleaveComponent } from './myleave/myleave.component';
import { ChanepsComponent } from './chaneps/chaneps.component';
import { ApplyleaveComponent } from './applyleave/applyleave.component';
import { Navbar1Component } from './navbar1/navbar1.component';
import { StatusComponent } from './status/status.component';

const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:'navbar',component:NavbarComponent,
  children:[
    {path:'home',component:HomeComponent},
    {path:'manageuser',component:ManageuserComponent},
    {path:'manageleave',component:ManageleaveComponent},
    {path:'applyleave',component:ApplyleaveComponent},
    {path:'myleave',component:MyleaveComponent},
    {path:'chaneps',component:ChanepsComponent},
    
  ]},
  {path:'navbar1',component:Navbar1Component,
children:[
  {path:'home',component:HomeComponent},
  {path:'manageleave',component:ManageleaveComponent},
  {path:'chaneps',component:ChanepsComponent},
  {path:'status',component:StatusComponent},
]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
