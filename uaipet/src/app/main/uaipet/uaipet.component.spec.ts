import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UaipetComponent } from './uaipet.component';

describe('UaipetComponent', () => {
  let component: UaipetComponent;
  let fixture: ComponentFixture<UaipetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UaipetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UaipetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
