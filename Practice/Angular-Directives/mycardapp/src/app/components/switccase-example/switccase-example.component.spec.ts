import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SwitccaseExampleComponent } from './switccase-example.component';

describe('SwitccaseExampleComponent', () => {
  let component: SwitccaseExampleComponent;
  let fixture: ComponentFixture<SwitccaseExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SwitccaseExampleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SwitccaseExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
