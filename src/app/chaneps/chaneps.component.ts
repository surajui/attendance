import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-chaneps',
  templateUrl: './chaneps.component.html',
  styleUrls: ['./chaneps.component.css']
})
export class ChanepsComponent implements OnInit {
  suraj: FormGroup;
  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.suraj = this.fb.group({
      cpassword: ['', [Validators.required,Validators.minLength(5)]],
     
  });
  }

}
