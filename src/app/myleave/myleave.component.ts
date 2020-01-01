import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-myleave',
  templateUrl: './myleave.component.html',
  styleUrls: ['./myleave.component.css']
})
export class MyleaveComponent implements OnInit {

  constructor(private s:DataService) { }
  ngOnInit() {
    // this.s.createUser1(user).subscribe(data1=>console.log(data1))
  }

}
