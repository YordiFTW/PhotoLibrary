import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarkupcombinedComponent } from './markupcombined.component';

describe('MarkupcombinedComponent', () => {
  let component: MarkupcombinedComponent;
  let fixture: ComponentFixture<MarkupcombinedComponent>;
  

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MarkupcombinedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MarkupcombinedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
