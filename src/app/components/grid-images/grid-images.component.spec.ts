import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GridImagesComponent } from './grid-images.component';

describe('GridImagesComponent', () => {
  let component: GridImagesComponent;
  let fixture: ComponentFixture<GridImagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GridImagesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GridImagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
