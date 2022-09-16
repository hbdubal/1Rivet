import { Component, OnInit,Input,Output,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {
  @Input () nameData:any;
  @Input() markdata:any;
  @Input() objData:any;



  constructor() { }

  ngOnInit(): void {
  }

}
