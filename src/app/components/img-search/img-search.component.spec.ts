import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImgSearchComponent } from './img-search.component';

describe('ImgSearchComponent', () => {
  let component: ImgSearchComponent;
  let fixture: ComponentFixture<ImgSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImgSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImgSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
