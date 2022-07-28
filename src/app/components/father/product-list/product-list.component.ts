import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { ICar } from 'src/app/models/car.entity';
import { removeCarById } from 'src/app/state/app-actions';
import { productListSelector } from 'src/app/state/app-selectors';
import { IAPP_STATE } from 'src/app/state/app-state';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.less']
})
export class ProductListComponent implements OnInit {
  public carList$!: Observable<ICar[]>;
  constructor(
    private readonly ngrxStore: Store<IAPP_STATE>,
  ) { }

  ngOnInit(): void {
    this.carList$ = this.ngrxStore.select(productListSelector);
  }

  public deleteCar($id: string): void {
    this.ngrxStore.dispatch(removeCarById({ id: $id }));
  }

}
