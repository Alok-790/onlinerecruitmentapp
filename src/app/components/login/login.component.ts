import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent implements OnInit{
  loginForm = this.fb.group({
    email: ['',[Validators.required, Validators.email]],
    password: ['',Validators.required]

  })
  constructor(private fb: FormBuilder) {}
ngOnInit(): void {
    
}

get email(){
  return this.loginForm.controls['email'];
}
get password(){
  return this.loginForm.controls['password'];
}


}



// @Component({
//   selector: 'app-login',
//   templateUrl: './login.component.html',
//   styleUrls: ['./login.component.css']
// })
// export class LoginComponent implements OnInit {
//    loginForm: FormGroup; // Declare private property

//   constructor(private fb: FormBuilder) {} // Inject FormBuilder

//   ngOnInit() {
//     this.loginForm = this.fb.group({
//       username: ['', Validators.required],
//       password: ['', Validators.required] // Add more fields as needed
//     });
//   }
// }


