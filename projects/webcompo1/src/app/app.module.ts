import {ApplicationRef, DoBootstrap, Injector, NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HelloboxComponent } from './hellobox/hellobox.component';
import {createCustomElement} from '@angular/elements';

@NgModule({
  declarations: [
    HelloboxComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  //bootstrap: [AppComponent]
})
export class AppModule implements DoBootstrap{
  constructor(private injector: Injector) {
    const webCompo = createCustomElement(HelloboxComponent, {injector})
    customElements.define('hello-box', webCompo)
  }

  ngDoBootstrap(appRef: ApplicationRef): void {
  }
}
