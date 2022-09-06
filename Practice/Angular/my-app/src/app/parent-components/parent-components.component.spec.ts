import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentComponentsComponent } from './parent-components.component';

describe('ParentComponentsComponent', () => {
  let component: ParentComponentsComponent;
  let fixture: ComponentFixture<ParentComponentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParentComponentsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParentComponentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
