import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { SlideFooterComponent } from './slide-footer.component';

describe('SlideFooterComponent', () => {
  let component: SlideFooterComponent;
  let fixture: ComponentFixture<SlideFooterComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SlideFooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SlideFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
