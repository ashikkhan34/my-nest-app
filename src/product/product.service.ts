/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';

@Injectable()
export class ProductService {
    private products = [
        {id:1,name:'mobile',price:10000},
        {id:2,name:'laptop',price:100000},
        {id:3,name:'tablet',price:1002100},
    ];
    getAllProducts(){
        return this.products;
    }

    getProductById(id:number){
        return this.products.find((product)=> product.id === id)
    }
}
