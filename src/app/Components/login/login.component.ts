import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../Services/auth.service';
import { FormGroup, FormControl, Validators, ReactiveFormsModule, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginForm } from '../../Interfaces/login-form';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule ,CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent  implements OnInit{
  form:FormGroup;
  formLogin:FormGroup
  toggle:string;
  passwordMatch:boolean;
  constructor(private fb:FormBuilder, private autService:AuthService, private router:Router){

    this.form=this.fb.group({
      name:['',[Validators.required,]],
      email:['',[Validators.required,Validators.email]],
      mobile:['',[Validators.required,Validators.pattern('[0-9]{10}')]],
      password:['',[Validators.required,]],
      confirmPassword:['',[Validators.required]],
    });


    this.formLogin=fb.group({
      emailLogin:['',[Validators.required,Validators.email]],
      passwordLogin:['',[Validators.required]]
    });

this.toggle="register";
this.passwordMatch=false;
  }
  ngOnInit(): void {
    
  }
  submitForm(): void {
    if (this.form.valid) {
      if(this.password?.value==this.confirmPassword?.value){
        this.passwordMatch=true;
        console.log("this.form.value ",this.form.value);
        this.autService.register( );
        

        /*this.autService.register(this.form.value).subscribe({
          next: res=> {
            //if (res.message == 'success') {
              localStorage.setItem('userToken' , this.form.value.name );
              localStorage.setItem( 'userEmail' , this.form.value.email );
              this.router.navigate(['Home']); 
            //}
          },
          error: err=> {
            console.log(err);
          }
        });*/
        this.router.navigate(['/Home']); 


        
      }else{
        this.confirmPassword?.setErrors({invalid:true});
        this.passwordMatch=false;
      }
      
    }
  }
  submitLogin(): void {
    if (this.formLogin.valid) {
        console.log(this.formLogin.value);
        this.autService.logIn();
        this.router.navigate(['/Home']); 
        /*this.autService.logIn(this.formLogin.value).subscribe({
          next:res=>{
            console.log(res);
            localStorage.setItem('userToken' , res.token );
            this.router.navigate(['Home']);
          },
          error:err=>{
            console.log(err);  
          }
        })*/
      }
      
    }
  
  
  get name() {
    return this.form.get('name');
  }

  get email() {
    return this.form.get('email');
  }
  get mobile() {
    return this.form.get('mobile');
  }

  get password() {
    return this.form.get('password');
  }

  get confirmPassword() {
    return this.form.get('confirmPassword');
  }

  get emailLogin() {
    return this.formLogin.get('emailLogin');
  }
  get passwordLogin() {
    return this.formLogin.get('passwordLogin');
  }

log(){
  this.toggle="login";

}
reg(){
  this.toggle="register";
}
}