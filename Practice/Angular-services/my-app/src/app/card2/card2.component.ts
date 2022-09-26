import { Component, OnInit } from '@angular/core';
import { DesignutilityService } from '../services/designutility.service';
import { MasterService } from '../services/master.service';

@Component({
  selector: 'app-card2',
  templateUrl: './card2.component.html',
  styleUrls: ['./card2.component.scss'],
  // providers:[msgs]
})
export class Card2Component implements OnInit {

  constructor(private _msgService:DesignutilityService) { }
  product="test";

  ngOnInit(): void {
    // this.product=this._msgService.product.name;
  }
  btnClick()
  {
    this._msgService.messageAlert()
  }
}
