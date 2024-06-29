import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryCaroselComponent } from './category-carosel.component';

describe('CategoryCaroselComponent', () => {
  let component: CategoryCaroselComponent;
  let fixture: ComponentFixture<CategoryCaroselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CategoryCaroselComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CategoryCaroselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
