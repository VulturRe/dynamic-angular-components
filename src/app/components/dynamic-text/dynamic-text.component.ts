import { Component, Input } from '@angular/core';
import { DynamicComponentData } from '../../models/dynamic-component-data.interface';
import { DynamicComponent } from '../../models/dynamic-component.interface';

@Component({
  selector: 'app-second-dynamic',
  templateUrl: './dynamic-text.component.html',
  styleUrls: ['./dynamic-text.component.scss']
})
export class DynamicTextComponent implements DynamicComponent {

  @Input() data: DynamicComponentData = { value: 'Default value' };

  constructor() { }
}
