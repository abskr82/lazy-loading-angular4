import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { routing } from './app.routing';
import { EagerComponent } from './eager/eager.component';

@NgModule({
  declarations: [
    AppComponent,
    EagerComponent
  ],
  imports: [
    BrowserModule,
    routing
  ],
  providers: [ ],
  bootstrap: [AppComponent]
})
export class AppModule { }
