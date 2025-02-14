import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectSetsComponent } from './select-sets.component';

describe('SelectSetsComponent', () => {
  let component: SelectSetsComponent;
  let fixture: ComponentFixture<SelectSetsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectSetsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectSetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
