import { Injectable } from '@angular/core';

export class AuthConfig {
  url: string;
  client_id: string;
  response_type: string;
  redirect_uri: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  token = "";

  constructor() { }

  authorize(){

  }

  getToken(){
    if(!this.token){
      this.authorize()
    }
    return this.token;
  }

}
