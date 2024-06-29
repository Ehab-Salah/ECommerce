import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CarouselModule } from 'primeng/carousel';
import { CategoryCaroselComponent } from "../category-carosel/category-carosel.component";
import { AllProductsComponent } from "../all-products/all-products.component";
import { BrandsCaroselComponent } from "../brands-carosel/brands-carosel.component";
import { ProductCaroselComponent } from "../product-carosel/product-carosel.component";

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.scss',
    imports: [RouterModule, CarouselModule, CategoryCaroselComponent, AllProductsComponent, BrandsCaroselComponent, ProductCaroselComponent]
})
export class HomeComponent {
}
