import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Webdevelopment } from './webdevelopment';

describe('Webdevelopment', () => {
  let component: Webdevelopment;
  let fixture: ComponentFixture<Webdevelopment>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Webdevelopment]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Webdevelopment);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
