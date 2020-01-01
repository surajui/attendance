import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.css']
})
export class StatusComponent implements OnInit {
  result: import("c:/Users/ssuraj/Desktop/angular/basic/src/app/user").User[];
  user2: string;
  managerData:any;
  array:any=[];
  //status:Observable<User[]>
 
  constructor(private s:DataService,private http:HttpClient) { 
    this.user2=localStorage.getItem('data1')
  }
  ngOnInit() {
  //this.s.getUser().subscribe(res=>{this.result=res})
 // this.status=this.s.getUser();
 
 this.s.getUser().subscribe((Success:any)=>{
   Success.forEach(result=>{
     if(result.manage == this.user2){
      this.managerData=result
      this.array.push(this.managerData)
     }
 
   })
 })

  }
  accept(d){
    console.log("you are accepted leave")
  }
  reject(d){
    console.log("you are Rejected leave")
  }
}
