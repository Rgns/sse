import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Button} from "./models/button.model";

@Component({
  selector: 'app-button',
  templateUrl: 'button.component.html',
  styleUrls: ['button.less']
})
export class ButtonComponent {
  @Input() componentName;

  @Output() buttonClick = new EventEmitter<string>();

  _buttons: Button[] = <Button[]>[
    {
      name: "1"
    },
    {
      name: "2"
    },
    {
      name: "3"
    },
    {
      name: "4"
    }];


}



