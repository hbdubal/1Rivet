import { Component, OnInit } from '@angular/core';
import { DesignutilityService } from '../services/designutility.service';


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  constructor(private _msgService:DesignutilityService) { }
  products:any='';

  ngOnInit(): void {
    // this.products=this._msgService.product;
    this._msgService.product()
    .subscribe(productData =>this.products=productData)
  }
  btnClick()
  {
    this._msgService.messageAlert();
  }
}
