import { Component, OnInit } from '@angular/core';
import { TravelsComponent } from '../travels/travels.component';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
	items = [];
	subtotal;
	total = 0;
	discount = 0;

  constructor(private cart: CartService) {
  	this.items = cart.items;
  }

  ngOnInit(): void {
  	for (var i = 0; i < this.items.length; ++i) {
  		this.total += this.items[i].price;
  	}
  	this.subtotal = this.total;
  	if (this.total > 500) {
  		this.discount = 20;
  		this.total = this.total * 0.8;
  	} else if (this.total > 200) {
  		this.discount = 10;
  		this.total = this.total * 0.9;
  	}else{
  		this.discount = 0;
  	}
  }

}
