import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AchievementSite } from './achievement-site';

describe('AchievementSite', () => {
  let component: AchievementSite;
  let fixture: ComponentFixture<AchievementSite>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AchievementSite]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AchievementSite);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
