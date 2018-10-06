import { Component, EventEmitter, Output,Input } from "@angular/core";
@Component({
  selector:'app-header',
  templateUrl:'./header.component.html',
  styleUrls:['./header.component.css']
})
export class HeaderComponent{
  @Output()
  urlClicked = new EventEmitter<string>();

  recipesLinkClicked(){
    this.urlClicked.emit('Recipe');
  }
  
  shoppingLinkClicked(){
    console.log('clicked shopping');
    this.urlClicked.emit('Shopping');
  }
}