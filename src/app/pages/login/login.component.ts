import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  isLoginView: boolean = true;

  userRegistrationObj: any = {
    userName: '',
    emailId: '',
    password: '',
  }

  userLoginObj: any = {
    userName: '',
    password: '',
  }

  router = inject(Router);


  onRegister() {
    const isLocalData = localStorage.getItem('angularlocalstorage');
    if (isLocalData != null) {
      const localArray = JSON.parse(isLocalData);
      localArray.push(this.userRegistrationObj);
      localStorage.setItem("angularlocalstorage", JSON.stringify(localArray));
    } else {
      const localArray = [];
      localArray.push(this.userRegistrationObj);
      localStorage.setItem("angularlocalstorage", JSON.stringify(localArray));
    }
    alert("Registration Success");
  }

  onLogin() {
    const isLocalData = localStorage.getItem('angularlocalstorage');
    if (isLocalData != null) {
      const users = JSON.parse(isLocalData);
      const isUsersFound = users.find((m:any) => m.userName == this.userLoginObj.userName && m.password == this.userLoginObj.password);
      if(isUsersFound != undefined) {
        this.router.navigateByUrl('dashboard');
      } else {
        alert("Invalid credentials");
      }
    } else {
      alert("Users not available");
    }
  }

}
