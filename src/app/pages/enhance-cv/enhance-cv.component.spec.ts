import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnhanceCvComponent } from './enhance-cv.component';

describe('EnhanceCvComponent', () => {
  let component: EnhanceCvComponent;
  let fixture: ComponentFixture<EnhanceCvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EnhanceCvComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EnhanceCvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
