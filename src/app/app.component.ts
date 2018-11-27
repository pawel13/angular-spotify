import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-opi';
  counter = 0;
  hide = false;
  constructor(){
    setInterval( () => {
      this.counter++;
    }, 500);

  }
  data = {
    message: "costam",
    getMessage(greet){
      return greet + " " + this.message;
    }
  }
}
