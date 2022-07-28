import { Component, OnInit } from '@angular/core';
import { faker } from "@faker-js/faker";
import { uniqueId } from 'lodash';
export interface IProduct {
  name: string,
  price: number,
  model: string,
  id: string,
}

@Component({
  selector: 'app-father',
  templateUrl: './father.component.html',
  styleUrls: ['./father.component.less']
})
export class FatherComponent implements OnInit {
  public products!:IProduct[];

  ngOnInit(): void {
    this.products = this.generateRandomProductGroup();
  }


  public deleteCarWithId($indexToDelete:string):void {
    const indexToDelete = this.products.findIndex((product) => product.id === $indexToDelete);
    ~indexToDelete && this.products.splice(indexToDelete, 1);
  }



  // ! @ data generators
  private generateRandomProductGroup(): Array<IProduct> {
    const productsArray: Array<IProduct> = [];
    for (let k = 0; k < 20; k++) {
      productsArray.push(this.generateRandomProduct());
    }
    return productsArray;
  }

  private generateRandomProduct(): IProduct {
    return {
      name: faker.vehicle.vehicle(),
      price: parseFloat(faker.commerce.price()),
      model: faker.vehicle.model(),
      id: uniqueId(),
    }
  }


}
