import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TdataComponent } from './tdata.component';

describe('TdataComponent', () => {
  let component: TdataComponent;
  let fixture: ComponentFixture<TdataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TdataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TdataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
