import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-b-cards',
  templateUrl: './b-cards.component.html',
  styleUrls: ['./b-cards.component.scss']
})
export class BCardsComponent implements OnInit {

  public tourName: string = 'Thailand';
  public tourImage: string = 'https://th.bing.com/th/id/R.33d02c67b4a6e90abe2d7a58f764edd8?rik=JYmQaMVSULpYQg&riu=http%3a%2f%2fthewowstyle.com%2fwp-content%2fuploads%2f2015%2f01%2fnature-images.jpg&ehk=BNPsuSOUR7ATZ3EpRwxx1xFl7LUbO3tYlu1wFLCBrCE%3d&risl=&pid=ImgRaw&r=0';
  public time: string = new Date().toLocaleTimeString();

  public count: number = 30;

  public message:string='Hello';
  constructor() {
  }

  ngOnInit(): void {
  }
  public getDate(): string {
    return new Date().toLocaleDateString();
  }
  public getTime(): string {
    return new Date().toLocaleTimeString();
  }
  public increment(): void {
    this.count = this.count + 1;
  }
  public decrement(): void {
    this.count = this.count - 1 > 0 ? this.count -1: 0;
  }
  public updateMsg(msg:string):void
  {
    this.message=msg;
  }
  // public sayGoodafternoon():void
  // {
  //   this.message='Good Afternoon';
  // }
  // public sayGoodevning():void
  // {
  //   this.message='Good Evening';
  // }
}
