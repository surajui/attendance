import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DataService } from '../data.service';
@Component({
  selector: 'app-applyleave',
  templateUrl: './applyleave.component.html',
  styleUrls: ['./applyleave.component.css']
})
export class ApplyleaveComponent implements OnInit {

  suraj: FormGroup;
  today: string;
  constructor(private fb: FormBuilder,private s:DataService) {}

  ngOnInit() {
    this.suraj = this.fb.group({
      name:['',Validators.required],
      nodays:['',Validators.required],
      date: ['', Validators.required],
      todate: ['', Validators.required],
      leave: ['', [Validators.required]],
      reason: ['', [Validators.required]],
      manage:['',Validators.required]
     
  });
  this.today=new Date().toISOString().split('T')[0]
  }
  add(e){
    console.log('this.suraj.value',this.suraj.value);
    this.s.createUser1(e).subscribe(data1=>console.log(data1))
    this.suraj.reset();
  }  
}
