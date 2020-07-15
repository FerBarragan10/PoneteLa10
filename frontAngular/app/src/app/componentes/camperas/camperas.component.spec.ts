import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CamperasComponent } from './camperas.component';

describe('CamperasComponent', () => {
  let component: CamperasComponent;
  let fixture: ComponentFixture<CamperasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CamperasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CamperasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
