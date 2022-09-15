import { Component, OnInit } from '@angular/core';

interface Product {
  sno: string;
  name: string;
  image: string;
  price: number;
  qty: number;
}


@Component({
  selector: 'app-shoppingcart',
  templateUrl: './shoppingcart.component.html',
  styleUrls: ['./shoppingcart.component.scss']
})
export class ShoppingcartComponent implements OnInit {
  public products: Product[] = [
    {
      sno: 'SS0011',
      name: 'Mi Watch',
      image: 'https://i5.walmartimages.com/asr/a8c7ce2c-fb1d-4e4b-aec2-796829b12df9.3cf7eae51a3ca533c6749affdee9b59c.jpeg',
      price: 1500,
      qty: 2
    },
    {
      sno: 'SS0012',
      name: 'Apple Watch',
      image: 'https://mistertech.co.za/wp-content/uploads/2020/08/938f9329963a09283c881d093b859f5c.png',
      price: 3000,
      qty: 2
    },
    {
      sno: 'SS0013',
      name: 'Samsung Watch',
      image: 'https://i5.walmartimages.com/asr/32ccd74f-e2af-4e65-afa2-df08beaa620a_1.487940f73fb2161bbb8fd2dc1e13927e.png',
      price: 1900,
      qty: 2
    },
    {
      sno: 'SS0014',
      name: 'Mi Watch',
      image: 'https://i5.walmartimages.com/asr/ceff9ddc-b7c6-4ff3-ae71-d2de03fb8ae8_1.6c8e68c1636045ff1a63082b899699d1.jpeg',
      price: 1900,
      qty: 2
    },
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
