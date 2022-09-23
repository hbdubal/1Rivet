import { Component, OnInit } from '@angular/core';
import { DesignutilityService } from '../services/designutility.service';


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  constructor(private _msgService:DesignutilityService) { }
  product="test";

  ngOnInit(): void {
    this.product=this._msgService.product;
  }
  btnClick()
  {
    this._msgService.messageAlert();
  }
}
