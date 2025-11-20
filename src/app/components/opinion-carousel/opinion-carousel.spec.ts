import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpinionCarousel } from './opinion-carousel';

describe('OpinionCarousel', () => {
  let component: OpinionCarousel;
  let fixture: ComponentFixture<OpinionCarousel>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OpinionCarousel]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OpinionCarousel);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
