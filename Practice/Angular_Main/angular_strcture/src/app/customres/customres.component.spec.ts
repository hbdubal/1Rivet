import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomresComponent } from './customres.component';

describe('CustomresComponent', () => {
  let component: CustomresComponent;
  let fixture: ComponentFixture<CustomresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomresComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
