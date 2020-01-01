import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators,FormControl} from "@angular/forms";
import {Router} from "@angular/router";
import * as $ from 'jquery';
import { DataService } from '../data.service';
import { invalid } from '@angular/compiler/src/render3/view/util';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: any;
  submitted: boolean = false;
  invalidLogin: boolean = false;
  mlogin: any;
  constructor(private fb:FormBuilder,private router:Router,private s:DataService) { }

  ngOnInit() {
    this.loginForm= this.fb.group({
      email: ['',[Validators.required,Validators.email]],
      password:['',[Validators.required,Validators.maxLength(10)]], 
    }),
    this.mlogin= this.fb.group({
      user:['',[Validators.required]],
      password:['',[Validators.required,Validators.maxLength(10)]],
    })
    $(".login-form").hide();
    $(".login").css("background", "none");
    
    $(".login").click(function(){
      $(".signup-form").hide();
      $(".login-form").show();
      $(".signup").css("background", "none");
      $(".login").css("background", "#fff");
    });
    
    $(".signup").click(function(){
      $(".signup-form").show();
      $(".login-form").hide();
      $(".login").css("background", "none");
      $(".signup").css("background", "#fff");
    });
    
    $(".btn").click(function(){
      $(".input").val("");
    });
  }
  onSubmit(){
    console.log(this.loginForm.value);
    var email=this.loginForm.value.email;
    var password=this.loginForm.value.password;

    if(email=='surajsable@gmail.com' && password=='1234'){
    this.router.navigate(['navbar']);
    }
  }
  onSubmit1(){
    console.log(this.mlogin.value);
    this.s.getlogin().subscribe((success:any)=>{
      success.forEach(data1=>{
        if(data1.user==this.mlogin.value.user && data1.password == this.mlogin.value.password){
          this.router.navigate(['navbar1']);
         localStorage.setItem('data1',this.mlogin.value.user)
        }
        else{
          this.invalidLogin=true;
        }
      })
    })
  }

}
