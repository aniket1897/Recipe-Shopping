import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
   nameToBeAdded:string;

   evaluate(name:string){
      this.nameToBeAdded = name;
      console.log(this.nameToBeAdded);
   }
}
