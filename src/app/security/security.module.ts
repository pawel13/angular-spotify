import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService, AuthConfig } from './auth.service';
import { environment } from 'src/environments/environment';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers:[
    {
      provide: AuthConfig,
      useValue: environment.authConfig
    }
  ]
})
export class SecurityModule {

  constructor(private auth: AuthService){
    this.auth.getToken();
  }
 }
