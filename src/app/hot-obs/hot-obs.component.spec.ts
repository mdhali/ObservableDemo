import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HotObsComponent } from './hot-obs.component';

describe('HotObsComponent', () => {
  let component: HotObsComponent;
  let fixture: ComponentFixture<HotObsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HotObsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HotObsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
