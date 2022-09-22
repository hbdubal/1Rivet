import { Component, OnInit, Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {
  @Input() username:string='';
  // @Input() item = 0;

  // @Output() editDataEvent=new EventEmitter<string>();
  constructor() { }

  ngOnInit(): void {
  }

} 
