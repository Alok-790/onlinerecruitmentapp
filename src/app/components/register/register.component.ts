import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent implements OnInit {

  registerForm = this.fb.group({
    fullName: ['',[Validators.required]],
    email: ['',[Validators.required, Validators.email]],
    password: ['',Validators.required],
    // confirmPassword: ['',Validators.required],
    address: ['',Validators.required],
    phoneno: ['',Validators.required,Validators.pattern(/^\+?\d{10,15}$/)],
    dob: ['',Validators.required],
    gender: ['',Validators.required],
    // nationality: ['',Validators.required],

  })
  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    
  }

  get fullName(){
    return this.registerForm.controls['fullName'];
  }

  get address(){
    return this.registerForm.controls['address'];
  }

  get email(){
    return this.registerForm.controls['email'];
  }

  get phoneno(){
    return this.registerForm.controls['phoneno'];
  }

  get password(){
    return this.registerForm.controls['password'];
  }

  // get confirmPassword(){
  //   return this.registerForm.controls['confirmPassword'];
  // }

  get dob(){
    return this.registerForm.controls['dob'];
  }

  get gender(){
    return this.registerForm.controls['gender'];
  }

  // get nationality(){
  //   return this.registerForm.controls['nationality'];
  // }



}
