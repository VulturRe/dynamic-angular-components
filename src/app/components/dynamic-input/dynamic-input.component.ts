import { Component, Input } from '@angular/core';
import { DynamicComponentData } from '../../models/dynamic-component-data.interface';
import { DynamicComponent } from '../../models/dynamic-component.interface';

@Component({
  selector: 'app-dynamic-input',
  templateUrl: './dynamic-input.component.html',
  styleUrls: ['./dynamic-input.component.scss']
})
export class DynamicInputComponent implements DynamicComponent {
  public label = 'label';

  @Input() data: DynamicComponentData = { label: 'Default label' };

  constructor() { }
}
