import { Component} from '@angular/core';
import {AuthorizationService} from '../../../services/authorization/authorization.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {AuthenticationService} from '../../../services/authentication/authentication.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {
  public signUpForm: FormGroup = new FormGroup({});
  public errorMessage = '';

  constructor(private authorizationService: AuthorizationService, private authenticationService: AuthenticationService,
              private router: Router) {
    this.signUpForm.addControl('login', new FormControl('', Validators.required));
    this.signUpForm.addControl('password', new FormControl('', Validators.required));
    this.signUpForm.addControl('firstName', new FormControl('', Validators.required));
    this.signUpForm.addControl('lastName', new FormControl('', Validators.required));
    this.signUpForm.addControl('rePassword', new FormControl('', [Validators.required, this.rePasswordValidator.bind(this)]));
  }

  public sendSignUpRequest(): void{
    this.authorizationService.sendSignUpRequest(this.signUpForm.value)
      .catch((error) => {
        if (error.status === 200) {
          this.authenticationService.setToken(error.error.text);
          this.router.navigate(['/chat']);
        }
        if (error.status === 401){
          this.errorMessage = `User with login ${this.signUpForm.controls.login.value} has already been registered`;
        }
      });
  }

  public checkInput(inputName: string): boolean{
    return this.signUpForm.controls[inputName].invalid && this.signUpForm.controls[inputName].touched;
  }

  private rePasswordValidator(control: FormControl): {[s: string]: boolean}{
    return control.value === this.signUpForm.get('password').value ? null : {
      NotEqual: true
    };
  }


}
