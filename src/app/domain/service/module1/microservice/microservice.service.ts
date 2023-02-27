import { Injectable } from '@angular/core';
import { State } from 'src/app/core/store/State';

export interface StateGlobal {
  rowData: Array<any>
}
const initialState: StateGlobal = {
  rowData: []
};

@Injectable({
  providedIn: 'root'
})
export class MicroserviceService extends State<StateGlobal> {

  constructor() {
    super(initialState);
  }

  //  getStateMenu() {
  //   this.menuService.getStateMenu().subscribe((resp) => {
  //    //transformacion de datos
  //     this.setState({ rowData: resp.result });
  //   });
  // }

  setStateMenu(data: any) {
    this.setState({ rowData: data });
  }


}
