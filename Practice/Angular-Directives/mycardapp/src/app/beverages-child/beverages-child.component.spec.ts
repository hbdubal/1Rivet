import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeveragesChildComponent } from './beverages-child.component';

describe('BeveragesChildComponent', () => {
  let component: BeveragesChildComponent;
  let fixture: ComponentFixture<BeveragesChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BeveragesChildComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BeveragesChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
