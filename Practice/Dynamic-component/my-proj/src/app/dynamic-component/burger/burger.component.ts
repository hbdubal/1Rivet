import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-burger',
  templateUrl: './burger.component.html',
  styleUrls: ['./burger.component.scss']
})
export class BurgerComponent implements OnInit {
  @Input() name: string = '';
  @Output() closed = new EventEmitter<any>();
  
  constructor() { }

  ngOnInit(): void {
  }

  close() {
    this.closed.emit(
      {
        name: this.name,
      }
    );
  }
}
