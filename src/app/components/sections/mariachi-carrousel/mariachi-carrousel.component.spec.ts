import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MariachiCarrouselComponent } from './mariachi-carrousel.component';

describe('MariachiCarrouselComponent', () => {
  let component: MariachiCarrouselComponent;
  let fixture: ComponentFixture<MariachiCarrouselComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MariachiCarrouselComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MariachiCarrouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
