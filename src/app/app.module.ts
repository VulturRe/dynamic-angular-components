import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DynamicWrapperComponent } from './components/dynamic-wrapper/dynamic-wrapper.component';
import { DynamicComponentHostDirective } from './directives/dynamic-component-host/dynamic-component-host.directive';
import { ReactiveFormsModule } from '@angular/forms';
import { DynamicInputComponent } from './components/dynamic-input/dynamic-input.component';
import { DynamicTextComponent } from './components/dynamic-text/dynamic-text.component';
import { DynamicDefaultComponent } from './components/dynamic-default/dynamic-default.component';

@NgModule({
  declarations: [
    AppComponent,
    DynamicWrapperComponent,
    DynamicComponentHostDirective,
    DynamicInputComponent,
    DynamicTextComponent,
    DynamicDefaultComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  entryComponents: [DynamicDefaultComponent, DynamicTextComponent, DynamicInputComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
