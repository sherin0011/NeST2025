import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Carosal } from './carosal';

describe('Carosal', () => {
  let component: Carosal;
  let fixture: ComponentFixture<Carosal>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Carosal]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Carosal);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
