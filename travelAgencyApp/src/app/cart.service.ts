import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
	items =[];
	sum;

  	constructor() { }

  	addToCart(item){
		this.items.push(item);
		console.table(this.items);
	}

	getItems(){
		return this.items;
	}
}