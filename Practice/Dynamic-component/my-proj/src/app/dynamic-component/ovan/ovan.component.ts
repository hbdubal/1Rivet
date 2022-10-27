import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-ovan',
  templateUrl: './ovan.component.html',
  styleUrls: ['./ovan.component.scss']
})
export class OvanComponent implements OnInit {
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

