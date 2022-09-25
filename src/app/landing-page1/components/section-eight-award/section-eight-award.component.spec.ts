import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionEightAwardComponent } from './section-eight-award.component';

describe('SectionEightAwardComponent', () => {
  let component: SectionEightAwardComponent;
  let fixture: ComponentFixture<SectionEightAwardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SectionEightAwardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionEightAwardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
