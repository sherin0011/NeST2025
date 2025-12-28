import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Exinterpolation1 } from './exinterpolation1';

describe('Exinterpolation1', () => {
  let component: Exinterpolation1;
  let fixture: ComponentFixture<Exinterpolation1>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Exinterpolation1]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Exinterpolation1);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
