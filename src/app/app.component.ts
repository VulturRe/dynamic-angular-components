import { Component, OnInit } from '@angular/core';
import { DynamicItem } from './models/dynamic-item';
import { BehaviorSubject } from 'rxjs';
import { FormControl } from '@angular/forms';
import { DynamicInputComponent } from './components/dynamic-input/dynamic-input.component';
import { DEFAULT_JSON } from './constants/default-json';
import { DynamicComponentDesc } from './models/dynamic-component-data.interface';
import { DynamicTextComponent } from './components/dynamic-text/dynamic-text.component';
import { DynamicDefaultComponent } from './components/dynamic-default/dynamic-default.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public componentsJson = new FormControl('');
  public components = new BehaviorSubject<DynamicItem[]>([]);

  public ngOnInit(): void {
    this.componentsJson.setValue(DEFAULT_JSON);
    this.getComponents();
  }

  public getComponents(): void {
    try {
      const rawComponents: DynamicComponentDesc[] = JSON.parse(this.componentsJson.value);
      const components: DynamicItem[] = [];
      rawComponents.forEach(component => components.push(this.mapComponent(component)));
      this.components.next(components);
    } catch (e) {}
  }

  private mapComponent(component: DynamicComponentDesc): DynamicItem {
    switch (component.type) {
      case 'INPUT':
        return new DynamicItem(DynamicInputComponent, { label: component.label });
      case 'TEXT':
        return new DynamicItem(DynamicTextComponent, { value: component.value });
      default:
        return new DynamicItem(DynamicDefaultComponent);
    }
  }
}
