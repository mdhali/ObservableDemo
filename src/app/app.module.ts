import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HotObsComponent } from './hot-obs/hot-obs.component';
import { ColdObsComponent } from './cold-obs/cold-obs.component';

@NgModule({
  declarations: [
    AppComponent,
    HotObsComponent,
    ColdObsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
