import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirsrProjComponent } from './firsr-proj.component';

describe('FirsrProjComponent', () => {
  let component: FirsrProjComponent;
  let fixture: ComponentFixture<FirsrProjComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FirsrProjComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FirsrProjComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
