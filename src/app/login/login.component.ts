import {Component, OnInit, Inject} from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  // template: `
  //   <div>
  //     <p>
  //       Login component!
  //     </p>
  //   </div>
  //   <div>
  //
  //     <input required type="text" [(ngModel)]="username"
  //            #usernameRef="ngModel" minlength="3"/>
  //     {{usernameRef.valid}} {{usernameRef.errors | json}}
  //     <div *ngIf="usernameRef.errors?.required">Username is required!</div>
  //     <div *ngIf="usernameRef.errors?.minlength">Username should be at least 3 characters !</div>
  //
  //
  //     <input required type="password" [(ngModel)]="password"
  //            #passwordRef="ngModel"/>
  //     {{passwordRef.valid}} {{passwordRef.errors | json}}
  //     <div *ngIf="passwordRef.errors?.required">Password is required!</div>
  //
  //     <button (click)="onClick()">Login</button>
  //
  //   </div>
  // `,
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username = '';
  password = '';

  constructor(@Inject('authService') private authService) {
  }

  ngOnInit() {
  }

  // onClick() {
  //   console.log('button was clicked!');
  //   console.log(this.username);
  //   console.log(this.password);
  //   console.log('login status: ' + this.authService.loginWithCredentials(this.username, this.password));
  // }

  onSubmit(formValue) {
    console.log(formValue);
    console.log('submit was clicked!');
    console.log('login status: ' +
      this.authService.loginWithCredentials(formValue.login.username, formValue.login.password));
  }

}
