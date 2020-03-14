import {Component} from '@angular/core';
import {ComponentData} from "./models/component-data.model";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {


  _groups: ComponentData[] = [
    {
      id: "1",
      name: "C1",
      show: true
    },
    {
      id: "2",
      name: "C2",
      show: true
    },
    {
      id: "3",
      name: "C3",
      show: true
    },
    {
      id: "4",
      name: "C4",
      show: true
    }];


  _onButtonClick(buttonNumber: string): void {

    this._groups = this._groups.map((item: ComponentData) => {
      if (item.id === buttonNumber) {
        item.show = !item.show;
      } else {
        item.show = true;
      }
      return item;
    });

  }

}
