import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { addNewCar, loadCars } from 'src/app/state/app-actions';
import { generateRandomProduct } from 'src/app/state/app-reducers';
import { IAPP_STATE } from 'src/app/state/app-state';

@Component({
  selector: 'app-father',
  templateUrl: './father.component.html',
  styleUrls: ['./father.component.less']
})
export class FatherComponent implements OnInit {

  constructor(
    private readonly ngrxStore: Store<IAPP_STATE>
  ) { }

  ngOnInit(): void {
    this.ngrxStore.dispatch(loadCars());
  }

  public createNewCar():void {
    this.ngrxStore.dispatch(addNewCar(generateRandomProduct()))
  }

}
