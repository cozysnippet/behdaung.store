import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstagramFeed } from './instagram-feed';

describe('InstagramFeed', () => {
  let component: InstagramFeed;
  let fixture: ComponentFixture<InstagramFeed>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InstagramFeed]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InstagramFeed);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
