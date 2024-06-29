import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrandsCaroselComponent } from './brands-carosel.component';

describe('BrandsCaroselComponent', () => {
  let component: BrandsCaroselComponent;
  let fixture: ComponentFixture<BrandsCaroselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BrandsCaroselComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BrandsCaroselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
