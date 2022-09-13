import { Component, OnInit } from '@angular/core';
import {Product} from "../../products";
import { NgForm } from "@angular/forms";

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})

export class ProductFormComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  // name: string = "ddd";
  // price: number = 0;
  // description: string = "efrefrew";

  products: Product[] = [];
  newProduct = {
    id: Date.now(),
    image: "",
    name: "",
    description: "",
    price: 0,
  }

  addProduct(form: NgForm) {
    console.log(form);
    this.products.push({id: Date.now(), price: this.newProduct.price, description: this.newProduct.description, name: this.newProduct.name, image: this.newProduct.image});
  }

  onChange() {
    // this.name = e.target.value;
    console.log(this.newProduct.name);
  }
}
