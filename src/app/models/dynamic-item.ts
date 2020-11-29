import { Type } from '@angular/core';
import { DynamicComponentData } from './dynamic-component-data.interface';

export class DynamicItem {
  constructor(public component: Type<any>, public data?: DynamicComponentData) {}
}
