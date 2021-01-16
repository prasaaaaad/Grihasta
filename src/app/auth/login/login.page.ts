import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  login(form) {
    console.log(form.value);
    if (form.value.id == 'admin' && form.value.password == 'ashish123') {
      this.router.navigateByUrl('tabs');
    } else {
      console.log('failed');
    }
  }

}
