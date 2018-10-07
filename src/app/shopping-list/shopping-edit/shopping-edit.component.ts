import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  @Output() onIgredientsSubmit = new EventEmitter<{name:string,amount:string}>();
  
  constructor() { }

  ngOnInit() {
  }

  addIngredients(nameInput:HTMLInputElement,amountInput:HTMLInputElement){
      this.onIgredientsSubmit.emit({
        name:nameInput.value,
        amount:amountInput.value
      });
  }

}
