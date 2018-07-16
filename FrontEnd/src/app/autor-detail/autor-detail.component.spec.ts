import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AutorDetailComponent } from './autor-detail.component';

describe('AutorDetailComponent', () => {
  let component: AutorDetailComponent;
  let fixture: ComponentFixture<AutorDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AutorDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AutorDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
