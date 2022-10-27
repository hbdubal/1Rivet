import { Component, ComponentRef, OnInit, Type, ViewChild, ViewContainerRef } from '@angular/core';
import { BurgerComponent } from '../burger/burger.component';
import { LaptopComponent } from '../laptop/laptop.component';
import { MobileComponent } from '../mobile/mobile.component';
import { OvanComponent } from '../ovan/ovan.component';
import { WatchComponent } from '../watch/watch.component';

@Component({
  selector: 'app-dynamic-container',
  templateUrl: './dynamic-container.component.html',
  styleUrls: ['./dynamic-container.component.scss']
})
export class DynamicContainerComponent implements OnInit {
  @ViewChild('container', { read: ViewContainerRef, static: true })
  container!: ViewContainerRef;

  components = new Map<string, ComponentRef<any>>();
  // Map:-One type of array with 2 element
  index: number = 0;

  productsName: any =
    {
      mobile: 'mobile',
      laptop: 'laptop',
      watch: 'watch',
      burger: 'burger',
      ovan: 'ovan'
    };

  constructor() { }

  ngOnInit(): void {
  }

  /**
   * create component dynamically
   * @param componentName:create component
   */
  createComponent(componentName: string) {
    const componentType = this.getComponentType(componentName);
    let uniqueName = componentName + '-' + this.index.toString();
    const component = this.container.createComponent(componentType);
    component.instance.name = uniqueName;
    component.instance.closed.subscribe((res:any)=> {
      this.deleteComponent(res.name);
    });
    this.components.set(uniqueName, component);
    this.index++;
  }

  /**
   * 
   * @param componentName: deleteComponent
   */
  deleteComponent(componentName: string) {
    if (this.components.has(componentName)) {
      this.components.get(componentName)?.destroy();
      this.components.delete(componentName);
    }
  }

  /**
   * get component
   * @param name 
   * @returns type of component
   */
  getComponentType(name: string): Type<any> {
    let type: Type<any> = MobileComponent;
    switch (name) {
      case this.productsName.mobile:
        {
          type = MobileComponent;
          break;
        }
      case this.productsName.laptop:
        {
          type = LaptopComponent;
          break;
        }
      case this.productsName.watch:
        {
          type = WatchComponent;
          break;
        }
      case this.productsName.burger:
        {
          type = BurgerComponent;
          break;
        }
      case this.productsName.ovan:
        {
          type = OvanComponent;
          break;
        }
    }
    return type;
  }
}
