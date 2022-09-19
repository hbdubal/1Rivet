import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ParentCommunicationComponent } from './parent-communication/parent-communication.component';
import { ChildCommunicationComponent } from './parent-communication/child-communication/child-communication.component';



@NgModule({
  declarations: [
    ParentCommunicationComponent,
    ChildCommunicationComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    ParentCommunicationComponent,
    ChildCommunicationComponent
  ],
})
export class CommunicationModule { }
