import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroSectionTwo } from './hero-section-two';

describe('HeroSectionTwo', () => {
  let component: HeroSectionTwo;
  let fixture: ComponentFixture<HeroSectionTwo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeroSectionTwo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeroSectionTwo);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
