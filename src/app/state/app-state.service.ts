import { Injectable } from '@angular/core';
import { BehaviorSubject, map, take } from 'rxjs';
import { faker } from "@faker-js/faker";
import { uniqueId } from 'lodash';

export interface ICar {
  model: string;
  name: string;
  price: number;
  id: string;
}

@Injectable({
  providedIn: 'root'
})
export class AppStateService {
  public productList$: BehaviorSubject<ReadonlyArray<ICar>> = new BehaviorSubject<ReadonlyArray<ICar>>([]);
  constructor() {
    this.productList$.next(this.generateRandomProductGroup());
  }

  public deleteCarById($indexToDelete: string): void {
    this.productList$.pipe(
      take(1),
      map((productList) => {
        const indexToDelete = productList.findIndex((product) => product.id === $indexToDelete);
        const newCarList = [...productList];
        ~indexToDelete && newCarList.splice(indexToDelete, 1);
        return newCarList;
      })
    ).subscribe({
      next: (newListState: ReadonlyArray<ICar>) => {
        this.productList$.next(newListState);
      }
    });
  }



  // ! @ data generators
  private generateRandomProductGroup(): Array<ICar> {
    const productsArray: Array<ICar> = [];
    for (let k = 0; k < 20; k++) {
      productsArray.push(this.generateRandomProduct());
    }
    return productsArray;
  }

  private generateRandomProduct(): ICar {
    return {
      name: faker.vehicle.vehicle(),
      price: parseFloat(faker.commerce.price()),
      model: faker.vehicle.model(),
      id: uniqueId(),
    }
  }
}
