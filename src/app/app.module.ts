import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ServerComponent } from '../app/server/server.component';
import { ServersComponent } from './servers/servers.component';
import { TugasComponent } from './tugas/tugas.component';
import { Tugas3Component } from './tugas3/tugas3.component';
import { TestComponent } from './test/test.component';
import { PegawaiComponent } from './pegawai/pegawai.component';
import { KuisRidoComponent } from './kuis-rido/kuis-rido.component';
import { KuisHeaderComponent } from './kuis-header/kuis-header.component';

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    ServersComponent,
    TugasComponent,
    Tugas3Component,
    TestComponent,
    PegawaiComponent,
    KuisRidoComponent,
    KuisHeaderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
