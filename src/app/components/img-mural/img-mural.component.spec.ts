import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImgMuralComponent } from './img-mural.component';

describe('ImgMuralComponent', () => {
  let component: ImgMuralComponent;
  let fixture: ComponentFixture<ImgMuralComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImgMuralComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImgMuralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
