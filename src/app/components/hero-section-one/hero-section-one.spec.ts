import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroSectionOne } from './hero-section-one';

describe('HeroSectionOne', () => {
  let component: HeroSectionOne;
  let fixture: ComponentFixture<HeroSectionOne>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeroSectionOne]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeroSectionOne);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
