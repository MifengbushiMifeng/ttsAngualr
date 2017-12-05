import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms'
import {HttpModule} from '@angular/http'


import {AppComponent} from './app.component';
import {HelloWorldComponent} from './hello-world/hello-world.component';
import {LoginComponent} from './login/login.component';
import {AuthService} from "./core/auth.service";


@NgModule({
  declarations: [
    AppComponent,
    HelloWorldComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [

    {provide: 'authService', useClass: AuthService}

  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
