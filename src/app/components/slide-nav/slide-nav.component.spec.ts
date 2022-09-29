import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SlideNavComponent } from './slide-nav.component';

describe('SlideNavComponent', () => {
  let component: SlideNavComponent;
  let fixture: ComponentFixture<SlideNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SlideNavComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SlideNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
