import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SlideFooterComponent } from './slide-footer.component';

describe('SlideFooterComponent', () => {
  let component: SlideFooterComponent;
  let fixture: ComponentFixture<SlideFooterComponent>;

  beforeEach(async(() => {
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
