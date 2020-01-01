import { Component, OnInit } from '@angular/core';
import { EventSettingsModel, View } from '@syncfusion/ej2-angular-schedule';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
 
})
export class HomeComponent implements OnInit {

  constructor() { }
  public currentDate: Date = new Date(2018, 10, 30);
  public newViewMode: View = 'Day';
  public eventData: EventSettingsModel = {
    dataSource: [{
        Id: 1,
        Subject: 'Board Meeting',
        StartTime: new Date(2018, 10, 30, 9, 0),
        EndTime: new Date(2018, 10, 30, 11, 0)
    },
    {
        Id: 2,
        Subject: 'Training session on JSP',
        StartTime: new Date(2018, 10, 30, 15, 0),
        EndTime: new Date(2018, 10, 30, 17, 0)
    },
    {
        Id: 3,
        Subject: 'Sprint Planning with Team members',
        StartTime: new Date(2018, 10, 30, 9, 30),
        EndTime: new Date(2018, 10, 30, 11, 0)
    }]
  }

  ngOnInit() {
  }

}
