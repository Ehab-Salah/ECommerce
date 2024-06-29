import { Routes } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { AllProductsComponent } from './Components/all-products/all-products.component';
import { BrandsComponent } from './Components/brands/brands.component';
import { CategoryComponent } from './Components/category/category.component';
import { ProductItemComponent } from './Components/product-item/product-item.component';
import { LoginComponent } from './Components/login/login.component';
import { authGuard } from './Guards/auth.guard';

export const routes: Routes = [
    {path:"", redirectTo:"Login", pathMatch:'full'},
    {path:"Home",component:HomeComponent, canActivate:[authGuard] 
       },
    {path:"Products",component:AllProductsComponent , canActivate:[authGuard]

    },
    {path:"Brands",component:BrandsComponent, canActivate:[authGuard]    },
    {path:"Category",component:CategoryComponent, canActivate:[authGuard]    },
    {path:"ProductDetails/:pId",component:ProductItemComponent, canActivate:[authGuard]    },
    {path:"Login",component:LoginComponent},
];
