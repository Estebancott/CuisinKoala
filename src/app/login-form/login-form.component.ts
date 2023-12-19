import { Component, OnInit } from '@angular/core';
import { Auth, createUserWithEmailAndPassword, getAuth, sendEmailVerification, signInWithEmailAndPassword } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
})
export class LoginFormComponent  implements OnInit {

  loginForm!: FormGroup;

  email: string = '';
  password: string = '';

  constructor(private auth: Auth, private router: Router) { }

  ngOnInit(): void {
    // initialize loginForm with email and password controllers
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)])
    });
  }

  signUp() {
    // get email and password values from loginForm
    const email = this.loginForm.get('email')?.value;
    const password = this.loginForm.get('password')?.value;
    createUserWithEmailAndPassword(getAuth(), email, password)
      .then(user => {
        // send verification email
        sendEmailVerification(user.user);
        // show success message
        alert('Un email de vérification vous a été envoyé. Veuillez le consulter et confirmer votre inscription.');
      })
      .catch(error => {
        // show error message
        alert(error.message);
      });
  }

  signIn() {
    // get email and password values from loginForm
    const email = this.loginForm.get('email')?.value;
    const password = this.loginForm.get('password')?.value;
    signInWithEmailAndPassword(getAuth(), email, password)
      .then(user => {
        // check if email is verified
        if (user.user.emailVerified) {
          // redirect to home page
          this.router.navigate(['/home']);
        } else {
          // show error message
          alert('Veuillez vérifier votre email avant de vous connecter.');
        }
      })
      .catch(error => {
        // show error message
        alert(error.message);
      });
  }

}
