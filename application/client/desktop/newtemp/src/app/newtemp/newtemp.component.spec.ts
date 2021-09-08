import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewtempComponent } from './newtemp.component';

describe('NewtempComponent', () => {
  let component: NewtempComponent;
  let fixture: ComponentFixture<NewtempComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewtempComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewtempComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});