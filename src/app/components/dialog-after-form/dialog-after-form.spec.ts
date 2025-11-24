import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogAfterForm } from './dialog-after-form';

describe('DialogAfterForm', () => {
  let component: DialogAfterForm;
  let fixture: ComponentFixture<DialogAfterForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DialogAfterForm]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogAfterForm);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
