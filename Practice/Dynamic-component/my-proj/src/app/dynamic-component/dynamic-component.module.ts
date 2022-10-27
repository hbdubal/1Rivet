import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DynamicContainerComponent } from './dynamic-container/dynamic-container.component';
import { MobileComponent } from './mobile/mobile.component';
import { LaptopComponent } from './laptop/laptop.component';
import { WatchComponent } from './watch/watch.component';
import { BurgerComponent } from './burger/burger.component';
import { OvanComponent } from './ovan/ovan.component';

@NgModule({
  declarations: [
    DynamicContainerComponent,
    MobileComponent,
    LaptopComponent,
    WatchComponent,
    BurgerComponent,
    OvanComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    DynamicContainerComponent
  ]
})
export class DynamicComponentModule { }
