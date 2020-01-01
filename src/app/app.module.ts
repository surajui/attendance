import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import {HttpClientModule} from'@angular/common/http';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './login/login.component';
import { FormsModule,ReactiveFormsModule} from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { ManageuserComponent } from './manageuser/manageuser.component';
import { ManageleaveComponent } from './manageleave/manageleave.component';
import { ApplyleaveComponent } from './applyleave/applyleave.component';
import { MyleaveComponent } from './myleave/myleave.component';
import { ChanepsComponent } from './chaneps/chaneps.component';
import { DataService } from './data.service';
import { User } from './user';
import {ScheduleModule, AgendaService, DayService, DragAndDropService, ResizeService, WeekService, WorkWeekService, MonthService } from '@syncfusion/ej2-angular-schedule';
import { MloginComponent } from './mlogin/mlogin.component';
import { Navbar1Component } from './navbar1/navbar1.component';
import { StatusComponent } from './status/status.component';
import { ExistGuard } from './exist.guard';





@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    NavbarComponent,
    LoginComponent,
    HomeComponent,
    ManageuserComponent,
    ManageleaveComponent,
    ApplyleaveComponent,
    MyleaveComponent,
    ChanepsComponent,
    MloginComponent,
    Navbar1Component,
    StatusComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,ScheduleModule,
    FormsModule,ReactiveFormsModule
  ],
  providers: [DataService,User,AgendaService, DayService, WeekService, WorkWeekService, MonthService, DragAndDropService, ResizeService,ExistGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
