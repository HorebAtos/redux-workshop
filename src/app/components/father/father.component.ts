import { Component, OnInit } from '@angular/core';
import { faker } from "@faker-js/faker";
import * as _ from "lodash";
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
      id: _.uniqueId(),
    }
  }


}
