import { AfterViewInit, ChangeDetectionStrategy, Component, ComponentFactoryResolver, Input, QueryList, ViewChildren } from '@angular/core';
import { DynamicItem } from '../../models/dynamic-item';
import { DynamicComponentHostDirective } from '../../directives/dynamic-component-host/dynamic-component-host.directive';
import { DynamicComponent } from '../../models/dynamic-component.interface';

@Component({
  selector: 'app-dynamic-component',
  templateUrl: './dynamic-wrapper.component.html',
  styleUrls: ['./dynamic-wrapper.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DynamicWrapperComponent implements AfterViewInit {

  @Input() public components: DynamicItem[] | null = [];
  @ViewChildren(DynamicComponentHostDirective) hosts: QueryList<DynamicComponentHostDirective> = new QueryList<DynamicComponentHostDirective>();

  constructor(private cfr: ComponentFactoryResolver) {}

  ngAfterViewInit(): void {
    this.loadComponents();
  }

  private loadComponents(): void {
    if (!this.components) {
      return;
    }

    let index = 0;
    this.hosts.forEach(host => {
      if (!!this.components) {
        const componentFactory = this.cfr.resolveComponentFactory(this.components[index].component);
        const viewContainerRef = host.viewContainerRef;
        viewContainerRef.clear();
        const componentRef = viewContainerRef.createComponent<DynamicComponent>(componentFactory);
        componentRef.instance.data = this.components[index].data || {};
        index++;
      }
    });
  }
}
