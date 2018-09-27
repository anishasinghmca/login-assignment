import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';
  loggedInUser = false;
  username = '';
  password = '';
  error = false;
  constructor(
    private router: Router,
  ) { }

  login() {
    if (this.username !== '' && this.password !== '') {
      this.loggedInUser = true;
      this.router.navigate(['home']);
    } else {
      // show error
      this.error = true;
    }
  }
}
