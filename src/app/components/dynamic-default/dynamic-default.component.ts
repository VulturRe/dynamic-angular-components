import { Component, Input } from '@angular/core';
import { DynamicComponent } from '../../models/dynamic-component.interface';
import { DynamicComponentData } from '../../models/dynamic-component-data.interface';

@Component({
  selector: 'app-dynamic-default',
  templateUrl: './dynamic-default.component.html',
  styleUrls: ['./dynamic-default.component.scss']
})
export class DynamicDefaultComponent implements DynamicComponent{

  @Input() data: DynamicComponentData = {};
  constructor() { }
}
