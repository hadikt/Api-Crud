import { Component, OnInit, inject } from '@angular/core';
import { ApiLoginService } from '../services/api-login.service';
import { Login, Register } from 'dataType';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {Router} from '@angular/router'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    route=inject(Router)
  signupForm!: FormGroup;
  loginForm!: FormGroup;
  showlogin=false
  constructor(private apiservice:ApiLoginService,private fb: FormBuilder,private router:Router){
    this.signupForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });

    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }
  ngOnInit() {
    this.apiservice.relod()
  }

  openLogin(){
    this.showlogin=true
  }
  opensignup(){
    this.showlogin=false
  }
//......................................................... signup
protected onSignup() {
  if (this.signupForm.invalid) {
    // Form validation failed, do something (e.g., display error message)
    return;
  }

  this.apiservice.userSignup(this.signupForm.value).subscribe((res) => {
    // Handle response from the signup API
    console.log('Signup response:', res);

    // Assuming res contains a token after successful signup
    if (res && res.token) {

      // Navigate to the login page
      this.showlogin=true

    }
  });
}


  // ..........................................................Login
  onLogin(): void {
    this.apiservice.userlogin(this.loginForm.value).subscribe((res:any)=>{
      console.log(res);

      if (res && res.token) {
        localStorage.setItem('token', JSON.stringify(res.token));

        // Navigate to the login page

        this.route.navigate(['/home'])
      }
      })
  }
}
