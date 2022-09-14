import { Component, OnInit } from '@angular/core';

interface Product {
  sno: string;
  name: string;
  image: string;
  price: number;
  qty: number;
}

@Component({
  selector: 'app-item-cart',
  templateUrl: './item-cart.component.html',
  styleUrls: ['./item-cart.component.scss']
})
export class ItemCartComponent implements OnInit {

  public product: Product = {
    sno: 'SS0011',
    name: 'Mi Watch',
    image: 'https://i5.walmartimages.com/asr/a8c7ce2c-fb1d-4e4b-aec2-796829b12df9.3cf7eae51a3ca533c6749affdee9b59c.jpeg',
    price: 1500,
    qty: 2
  }

  constructor() { }

  ngOnInit(): void {
  }
  public incrementQty():void
  {
    this.product={
      ...this.product,
      qty:this.product.qty + 1
    }
  }
  public decrementQty():void
  {
    this.product={
      ...this.product,
      qty:this.product.qty - 1 > 0 ? this.product.qty-1:0
    }
  }
}
