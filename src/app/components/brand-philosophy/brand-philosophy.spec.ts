import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrandPhilosophy } from './brand-philosophy';

describe('BrandPhilosophy', () => {
  let component: BrandPhilosophy;
  let fixture: ComponentFixture<BrandPhilosophy>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BrandPhilosophy]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BrandPhilosophy);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
