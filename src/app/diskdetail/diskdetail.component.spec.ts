import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiskdetailComponent } from './diskdetail.component';

describe('DiskdetailComponent', () => {
  let component: DiskdetailComponent;
  let fixture: ComponentFixture<DiskdetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiskdetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiskdetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
