import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.scss']
})
export class DirectivesComponent implements OnInit {
  title="Attribute Directives in Angular !!!!!!";

  className='special';
  isspecial=true;
  inputValue='test';

  style={
    'font-style':'italic',
    'color':'green'
  }

  constructor() { }
  dataChange(){
    console.log(this.inputValue);
  }

  ngOnInit(): void {
  }

}
