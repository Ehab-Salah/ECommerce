import { Brand } from "./brand";
import { Category } from "./category";

export interface Product {
    sold:number;
    images:string[];
    ratingsQuantity:number;
    _id:number;
    title:string;
    slug:string;
    description:string;
    quantity:number;
    price:number;
    imageCover:string;
    category:Category;
    brand:Brand;
    ratingsAverage:number;
    
}

