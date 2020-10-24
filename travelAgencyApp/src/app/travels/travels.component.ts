import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { CartService } from '../cart.service';

import { travels } from '../travels';

@Component({
  selector: 'app-travels',
  templateUrl: './travels.component.html',
  styleUrls: ['./travels.component.css']
})
export class TravelsComponent implements OnInit {
	travels;
	addTravelForm;
	
  constructor(private formBuilder: FormBuilder, private cart: CartService) {
  	this.travels = travels;
  	this.addTravelForm = this.formBuilder.group({
  		destination: '',
  		description: '',
  		startDate: '',
  		duration: '',
  		price: '',
  		img: ''
  	});
  }

  ngOnInit(): void {
  }

  onSubmit(travelData){
  	this.travels.push(travelData);
  }

  addToCart(item){
  	this.cart.addToCart(item);
  }

}
