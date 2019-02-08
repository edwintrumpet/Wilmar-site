import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ObsequiosCarrouselComponent } from './obsequios-carrousel.component';

describe('ObsequiosCarrouselComponent', () => {
  let component: ObsequiosCarrouselComponent;
  let fixture: ComponentFixture<ObsequiosCarrouselComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ObsequiosCarrouselComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ObsequiosCarrouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
