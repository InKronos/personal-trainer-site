import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainingMap } from './training-map';

describe('TrainingMap', () => {
  let component: TrainingMap;
  let fixture: ComponentFixture<TrainingMap>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TrainingMap]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrainingMap);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
