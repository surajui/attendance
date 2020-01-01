import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import {User} from "../user";
import { FormBuilder,FormGroup,FormControl,Validators } from '@angular/forms';
@Component({
  selector: 'app-manageuser',
  templateUrl: './manageuser.component.html',
  styleUrls: ['./manageuser.component.css']
})
export class ManageuserComponent implements OnInit {
  v;
  edit:FormGroup;
  users;
  // data: User[];
  constructor(private fb:DataService,private user:User, private fbil:FormBuilder) { }
  ngOnInit() {
    this.edit= new FormGroup({
      id: new FormControl('',Validators.required),
      email: new FormControl('',[Validators.required,Validators.email]),
      firstn:new FormControl('',[Validators.required]),
      role: new FormControl('',Validators.required)
    })
    this.fb.getUsers()
    .subscribe( data => {
      this.users = data;
    });
}
editUser(d){
  this.edit.setValue({
    id:d.id,
    firstn:d.firstn,
    email:d.email,
    role:d.role
  })  
};
updat(){
  this.fb.updateUser(this.edit.value).subscribe(data=>{
  })
  window.location.reload();
}
delete(d){
  this.fb.deleteUser(d.id)
  .subscribe( data => {
    console.log(data)
  this.users = this.users.filter(u => u !== d);  
})
}

}
