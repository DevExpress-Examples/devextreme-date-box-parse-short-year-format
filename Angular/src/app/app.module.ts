import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DxDateBoxModule, DxDataGridModule, DxSelectBoxModule } from 'devextreme-angular';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DxDateBoxModule,
    DxDataGridModule,
    DxSelectBoxModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
