import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DemoLoginRoutingModule } from './demo-login-routing.module';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';

@NgModule({
  declarations: [
    LoginComponent,
    LogoutComponent
  ],
  imports: [
    CommonModule,
    DemoLoginRoutingModule
  ]
})
export class DemoLoginModule { }
