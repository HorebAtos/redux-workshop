import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AppStateService, ICar } from 'src/app/state/app-state.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.less']
})
export class ProductListComponent implements OnInit {
  public productList$!: Observable<ReadonlyArray<ICar>>;
  constructor(
    private readonly appState: AppStateService,
  ) { }

  public removeCarById($carId:string):void {
    this.appState.deleteCarById($carId)
  }

  ngOnInit(): void {
    this.productList$ = this.appState.productList$;
  }
}
