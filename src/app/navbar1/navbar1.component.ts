import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar1',
  templateUrl: './navbar1.component.html',
  styleUrls: ['./navbar1.component.css']
})
export class Navbar1Component implements OnInit {
  user2: string;

  constructor() { 
    this.user2=localStorage.getItem('data1')
  }

  ngOnInit() {
  }

}
