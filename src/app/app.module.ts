import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TdataComponent } from './tdata/tdata.component';
import { MtestComponent } from './mtest/mtest.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import {TableModule} from 'primeng/table';
import { TabledataComponent } from './tabledata/tabledata.component';
import { CalendarModule } from "primeng/calendar";


@NgModule({
  declarations: [
    AppComponent,
    TdataComponent,
    MtestComponent,
    TabledataComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    TableModule,
    HttpClientModule,
    FormsModule,
    CalendarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
