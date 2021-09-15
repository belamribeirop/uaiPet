import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimalControlComponent } from './animal-control.component';

describe('AnimalControlComponent', () => {
  let component: AnimalControlComponent;
  let fixture: ComponentFixture<AnimalControlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnimalControlComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimalControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
