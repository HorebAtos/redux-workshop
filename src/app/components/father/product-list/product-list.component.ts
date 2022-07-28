import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IProduct } from '../father.component';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.less']
})
export class ProductListComponent {
  @Input() carList:Array<IProduct> = [];
  @Output() deleteCarWithId:EventEmitter<string> = new EventEmitter<string>();
  public deleteWithId($id:string):void {
    this.deleteCarWithId.emit($id);
  }
}
