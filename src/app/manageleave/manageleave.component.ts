import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import {User} from "../user";
import { FormGroup, FormControl,Validators } from '@angular/forms';
@Component({
  selector: 'app-manageleave',
  templateUrl: './manageleave.component.html',
  styleUrls: ['./manageleave.component.css']
})
export class ManageleaveComponent implements OnInit {
a;
users:User[];
edit1:FormGroup;
  constructor(private fb:DataService,private user:User) { }

  ngOnInit() {
    this.edit1= new FormGroup({
      id: new FormControl('',Validators.required),
      name: new FormControl('',[Validators.required]),
      date:new FormControl('',[Validators.required]),
      todate: new FormControl('',Validators.required),
      nodays: new FormControl('',Validators.required),
      leave: new FormControl('',Validators.required),
      reason: new FormControl('',Validators.required),
      manage:new FormControl('',Validators.required)
    })
    this.fb.getUser().subscribe(data=>{
      this.users=data;
    })
  }
  dele(e){
  this.fb.deleteUser1(e.id).subscribe(data=>{
    //this.users = this.users.filter(u => u !== e);
    let ab=this.users.indexOf(e);
    this.users.splice(ab,1); 
  })
  }
  edit(e){
    this.edit1.setValue({
      id:e.id,
      name:e.name,
      date:e.date,
      todate:e.todate,
      nodays:e.nodays,
      leave:e.leave,
      reason:e.reason,
      manage:e.manage
    })
  }

  update(){
   this.fb.updateUser1(this.edit1.value).subscribe(data=>{
     window.location.reload();
   })
  }

}
