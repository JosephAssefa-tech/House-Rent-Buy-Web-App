import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, ValidatorFn, Validators} from '@angular/forms';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.scss']
})
export class UserRegisterComponent implements OnInit {
  registerationForm: FormGroup={} as FormGroup;


  constructor() { }

  ngOnInit(): void {
    this.registerationForm=new FormGroup({
      userName: new FormControl('jo', Validators.required),
      email:new FormControl('',[Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(8)]),
      confirmPassword:new FormControl('',[Validators.required]),
      mobile: new FormControl('', [Validators.required, Validators.maxLength(10)])

    }); //,this.passwordMatchingValidator);
  }
  // passwordMatchingValidator(fg:FormGroup): Validators {
  //   return fg.get('password').value === fg.get('confirmPassword').value ? null:
  //  {notmatched:true};
  // }
  get userName()
  {
    return this.registerationForm.get('userName') as FormControl;
  }
  get email()
  {
    return this.registerationForm.get('email') as FormControl;

  }
  get password()
  {
    return this.registerationForm.get('password') as FormControl;
  }
  get confirmPassword()
  {
    return this.registerationForm.get('confirmPassword') as FormControl;
  }
  get mobile()
  {
    return this.registerationForm.get('mobile') as FormControl;


  }

  onSubmit()
  {
    console.log(this.registerationForm);

  }
  onReset()
  {

  }

}
